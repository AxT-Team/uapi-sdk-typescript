export interface RateLimitPolicyEntry {
  name: string
  quota?: number
  unit?: string
  windowSeconds?: number
}

export interface RateLimitStateEntry {
  name: string
  remaining?: number
  unit?: string
  resetAfterSeconds?: number
}

export interface ResponseMeta {
  requestId?: string
  retryAfterSeconds?: number
  debitStatus?: string
  creditsRequested?: number
  creditsCharged?: number
  creditsPricing?: string
  activeQuotaBuckets?: number
  stopOnEmpty?: boolean
  rateLimitPolicyRaw?: string
  rateLimitRaw?: string
  rateLimitPolicies: Record<string, RateLimitPolicyEntry>
  rateLimits: Record<string, RateLimitStateEntry>
  balanceLimitCents?: number
  balanceRemainingCents?: number
  quotaLimitCredits?: number
  quotaRemainingCredits?: number
  visitorQuotaLimitCredits?: number
  visitorQuotaRemainingCredits?: number
  rawHeaders: Record<string, string>
}

export class UapiError extends Error {
  code: string
  status: number
  details?: any
  payload?: any
  meta?: ResponseMeta

  constructor(code: string, status: number, message: string, details?: any, payload?: any, meta?: ResponseMeta) {
    super(`[${status}] ${code}: ${message}`)
    this.code = code
    this.status = status
    this.details = details
    this.payload = payload
    this.meta = meta
  }
}
export class ApiErrorError extends UapiError {}
export class AvatarNotFoundError extends UapiError {}
export class ConversionFailedError extends UapiError {}
export class FileOpenErrorError extends UapiError {}
export class FileRequiredError extends UapiError {}
export class InsufficientCreditsError extends UapiError {}
export class InternalServerErrorError extends UapiError {}
export class InvalidParameterError extends UapiError {}
export class InvalidParamsError extends UapiError {}
export class NotFoundError extends UapiError {}
export class NoMatchError extends UapiError {}
export class NoTrackingDataError extends UapiError {}
export class PhoneInfoFailedError extends UapiError {}
export class RecognitionFailedError extends UapiError {}
export class RequestEntityTooLargeError extends UapiError {}
export class ServiceBusyError extends UapiError {}
export class TimezoneNotFoundError extends UapiError {}
export class UnauthorizedError extends UapiError {}
export class UnsupportedCarrierError extends UapiError {}
export class UnsupportedFormatError extends UapiError {}
export class VisitorMonthlyQuotaExhaustedError extends UapiError {}


function defaultCode(status: number): string {
  switch (status) {
    case 400:
      return 'INVALID_PARAMETER'
    case 401:
      return 'UNAUTHORIZED'
    case 402:
      return 'INSUFFICIENT_CREDITS'
    case 404:
      return 'NOT_FOUND'
    case 413:
      return 'REQUEST_ENTITY_TOO_LARGE'
    case 429:
      return 'SERVICE_BUSY'
    case 500:
      return 'INTERNAL_SERVER_ERROR'
    default:
      return 'API_ERROR'
  }
}

function toHeaderMap(headers: any): Record<string, string> {
  const out: Record<string, string> = {}
  if (!headers) {
    return out
  }
  if (typeof headers.forEach === 'function') {
    headers.forEach((value: string, key: string) => {
      out[String(key).toLowerCase()] = String(value)
    })
    return out
  }
  for (const [rawKey, rawValue] of Object.entries(headers)) {
    const key = String(rawKey).toLowerCase()
    if (Array.isArray(rawValue)) {
      out[key] = rawValue.map((item) => String(item)).join(', ')
      continue
    }
    if (rawValue === undefined || rawValue === null) {
      continue
    }
    out[key] = String(rawValue)
  }
  return out
}

function parseNumber(value?: string): number | undefined {
  if (value === undefined) {
    return undefined
  }
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : undefined
}

function parseBoolean(value?: string): boolean | undefined {
  if (value === undefined) {
    return undefined
  }
  const normalized = value.trim().toLowerCase()
  if (normalized === 'true') {
    return true
  }
  if (normalized === 'false') {
    return false
  }
  return undefined
}

function unquote(value: string): string {
  const trimmed = value.trim()
  if (trimmed.length >= 2 && trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

function parseStructuredItems(raw?: string): Array<{ name: string; params: Record<string, string> }> {
  if (!raw) {
    return []
  }
  return raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const segments = item.split(';').map((segment) => segment.trim()).filter(Boolean)
      const [head, ...rest] = segments
      const params: Record<string, string> = {}
      for (const segment of rest) {
        const eq = segment.indexOf('=')
        if (eq <= 0) {
          continue
        }
        const key = segment.slice(0, eq).trim()
        const value = unquote(segment.slice(eq + 1))
        params[key] = value
      }
      return { name: unquote(head), params }
    })
}

export function extractMetaFromHeaders(headers: any): ResponseMeta {
  const rawHeaders = toHeaderMap(headers)
  const rateLimitPolicies: Record<string, RateLimitPolicyEntry> = {}
  const rateLimits: Record<string, RateLimitStateEntry> = {}

  for (const item of parseStructuredItems(rawHeaders['ratelimit-policy'])) {
    rateLimitPolicies[item.name] = {
      name: item.name,
      quota: parseNumber(item.params.q),
      unit: item.params['uapi-unit'],
      windowSeconds: parseNumber(item.params.w),
    }
  }

  for (const item of parseStructuredItems(rawHeaders['ratelimit'])) {
    rateLimits[item.name] = {
      name: item.name,
      remaining: parseNumber(item.params.r),
      unit: item.params['uapi-unit'],
      resetAfterSeconds: parseNumber(item.params.t),
    }
  }

  return {
    requestId: rawHeaders['x-request-id'],
    retryAfterSeconds: parseNumber(rawHeaders['retry-after']),
    debitStatus: rawHeaders['uapi-debit-status'],
    creditsRequested: parseNumber(rawHeaders['uapi-credits-requested']),
    creditsCharged: parseNumber(rawHeaders['uapi-credits-charged']),
    creditsPricing: rawHeaders['uapi-credits-pricing'],
    activeQuotaBuckets: parseNumber(rawHeaders['uapi-quota-active-buckets']),
    stopOnEmpty: parseBoolean(rawHeaders['uapi-stop-on-empty']),
    rateLimitPolicyRaw: rawHeaders['ratelimit-policy'],
    rateLimitRaw: rawHeaders['ratelimit'],
    rateLimitPolicies,
    rateLimits,
    balanceLimitCents: rateLimitPolicies['billing-balance']?.quota,
    balanceRemainingCents: rateLimits['billing-balance']?.remaining,
    quotaLimitCredits: rateLimitPolicies['billing-quota']?.quota,
    quotaRemainingCredits: rateLimits['billing-quota']?.remaining,
    visitorQuotaLimitCredits: rateLimitPolicies['visitor-quota']?.quota,
    visitorQuotaRemainingCredits: rateLimits['visitor-quota']?.remaining,
    rawHeaders,
  }
}

function pickDetails(body: any): any {
  if (!body || typeof body !== 'object') {
    return undefined
  }
  if (body.details !== undefined) {
    return body.details
  }
  if (body.quota !== undefined) {
    return body.quota
  }
  if (body.docs !== undefined) {
    return body.docs
  }
  return undefined
}

export function mapError(res: any, body: any): UapiError {
  const payload = body && typeof body === 'object' ? body : undefined
  const status = Number(res?.status ?? 500)
  const code = String(payload?.code || payload?.error || defaultCode(status)).toUpperCase()
  const msg = payload?.message || payload?.errMsg || (typeof body === 'string' ? body : '') || res?.statusText || 'Request failed'
  const meta = extractMetaFromHeaders(res?.headers)
  const table: Record<string, new (...args: any[]) => UapiError> = {
    "API_ERROR": ApiErrorError,
    "AVATAR_NOT_FOUND": AvatarNotFoundError,
    "CONVERSION_FAILED": ConversionFailedError,
    "FILE_OPEN_ERROR": FileOpenErrorError,
    "FILE_REQUIRED": FileRequiredError,
    "INSUFFICIENT_CREDITS": InsufficientCreditsError,
    "INTERNAL_SERVER_ERROR": InternalServerErrorError,
    "INVALID_PARAMETER": InvalidParameterError,
    "INVALID_PARAMS": InvalidParamsError,
    "NOT_FOUND": NotFoundError,
    "NO_MATCH": NoMatchError,
    "NO_TRACKING_DATA": NoTrackingDataError,
    "PHONE_INFO_FAILED": PhoneInfoFailedError,
    "RECOGNITION_FAILED": RecognitionFailedError,
    "REQUEST_ENTITY_TOO_LARGE": RequestEntityTooLargeError,
    "SERVICE_BUSY": ServiceBusyError,
    "TIMEZONE_NOT_FOUND": TimezoneNotFoundError,
    "UNAUTHORIZED": UnauthorizedError,
    "UNSUPPORTED_CARRIER": UnsupportedCarrierError,
    "UNSUPPORTED_FORMAT": UnsupportedFormatError,
    "VISITOR_MONTHLY_QUOTA_EXHAUSTED": VisitorMonthlyQuotaExhaustedError,
  }
  const fallback =
    status === 401
      ? UnauthorizedError
      : status === 402
        ? InsufficientCreditsError
        : status === 404
          ? NotFoundError
          : status === 429
            ? ServiceBusyError
            : status >= 500
              ? InternalServerErrorError
              : UapiError
  const Ctor = table[code] || fallback
  return new Ctor(code, status, msg, pickDetails(payload), payload ?? body, meta)
}
