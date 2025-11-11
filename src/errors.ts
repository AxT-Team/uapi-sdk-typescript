export class UapiError extends Error {
  code: string
  status: number
  details?: any
  constructor(code: string, status: number, message: string, details?: any) {
    super(`[${status}] ${code}: ${message}`)
    this.code = code; this.status = status; this.details = details
  }
}
export class ApiErrorError extends UapiError {}
export class AvatarNotFoundError extends UapiError {}
export class ConversionFailedError extends UapiError {}
export class FileOpenErrorError extends UapiError {}
export class FileRequiredError extends UapiError {}
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


export function mapError(res: Response, body: any): UapiError {
  const code = (body?.code || body?.error || 'API_ERROR').toUpperCase()
  const msg = body?.message || body?.errMsg || res.statusText
  const table: Record<string, new (...args:any[]) => UapiError> = {
    "API_ERROR": ApiErrorError,
    "AVATAR_NOT_FOUND": AvatarNotFoundError,
    "CONVERSION_FAILED": ConversionFailedError,
    "FILE_OPEN_ERROR": FileOpenErrorError,
    "FILE_REQUIRED": FileRequiredError,
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
  }
  const Ctor = table[code] || (res.status === 401 ? UnauthorizedError : res.status === 404 ? NotFoundError : res.status === 429 ? ServiceBusyError : res.status >= 500 ? InternalServerErrorError : UapiError)
  return new Ctor(code, res.status, msg, body?.details)
}
