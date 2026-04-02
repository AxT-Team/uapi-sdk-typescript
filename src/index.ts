import axios, { AxiosInstance } from 'axios'
import type * as Internal from '../internal/index.js'
import { UapiError, type ResponseMeta, extractMetaFromHeaders, mapError } from './errors.js'
export { UapiError, mapError, extractMetaFromHeaders } from './errors.js'
export type { RateLimitPolicyEntry, RateLimitStateEntry, ResponseMeta } from './errors.js'

type Config = { baseURL: string; token?: string; timeout?: number }

class HTTP {
  private cli: AxiosInstance
  private lastMeta?: ResponseMeta

  constructor(cfg: Config) {
    this.cli = axios.create({ baseURL: cfg.baseURL, timeout: cfg.timeout ?? 15000 })
    if (cfg.token) this.cli.defaults.headers.common['Authorization'] = `Bearer ${cfg.token}`
  }

  getLastResponseMeta(): ResponseMeta | undefined {
    return this.lastMeta
  }

  async request(
    method: string,
    path: string,
    params?: Record<string, unknown>,
    body?: Record<string, unknown>,
    headers?: Record<string, string>,
    responseKind: 'json' | 'text' | 'arrayBuffer' = 'json',
    ) {
    try {
      const res = await this.cli.request({
        method,
        url: path,
        params,
        data: body,
        headers,
        responseType: responseKind === 'arrayBuffer' ? 'arraybuffer' : responseKind,
      })
      this.lastMeta = extractMetaFromHeaders(res.headers)
      if (responseKind === 'arrayBuffer' && ArrayBuffer.isView(res.data)) {
        return res.data.buffer.slice(res.data.byteOffset, res.data.byteOffset + res.data.byteLength)
      }
      return res.data
    } catch (e: any) {
      if (e.response) {
        const mapped = mapError(e.response, e.response.data)
        this.lastMeta = mapped.meta
        throw mapped
      }
      throw new UapiError('API_ERROR', 500, e.message)
    }
  }
}
export type GetClipzyGetResponse =
  Internal.GetClipzyGet200Response
export interface GetClipzyGetArgs {
  /** 片段的唯一 ID。 */
  id: string;
}
export type GetClipzyRawResponse =
  string
export interface GetClipzyRawArgs {
  /** 片段的唯一 ID。 */
  id: string;
  /** 用于解密的 Base64 编码的 AES 密钥。 */
  key: string;
}
export type PostClipzyStoreResponse =
  Internal.PostClipzyStore200Response
export interface PostClipzyStoreArgs {
  /** 必需：经过加密和 LZString 压缩后的 Base64 字符串。请参考文档首页的JS代码示例。 */
  compressedData: string;
  /** 可选：片段的留存时间（秒）。正数表示秒数（最大约30天），-1 表示永久存储。默认为 3600。 */
  ttl?: number;
}
export type GetConvertUnixtimeResponse =
  Internal.GetConvertUnixtime200Response
export interface GetConvertUnixtimeArgs {
  /** 一个智能时间参数，可传入Unix时间戳（10位或13位）或标准日期字符串（如 '2023-10-27 10:30:00'），系统将自动识别并转换。 */
  time: string;
}
export type PostConvertJsonResponse =
  Internal.PostConvertJson200Response
export interface PostConvertJsonArgs {
  /** 需要被格式化的原始JSON字符串。 */
  content: string;
}
export type GetDailyNewsImageResponse =
  ArrayBuffer
export type GetGameEpicFreeResponse =
  Internal.GetGameEpicFree200Response
export type GetGameMinecraftHistoryidResponse =
  Internal.GetGameMinecraftHistoryid200Response
export interface GetGameMinecraftHistoryidArgs {
  /** 玩家的 Minecraft 用户名。使用此参数查询时，会返回所有匹配用户的列表（包括当前用户名或曾用名匹配的玩家）。 */
  name?: string;
  /** 玩家的 Minecraft UUID，支持带连字符或不带连字符格式。 */
  uuid?: string;
}
export type GetGameMinecraftServerstatusResponse =
  Internal.GetGameMinecraftServerstatus200Response
export interface GetGameMinecraftServerstatusArgs {
  /** Minecraft服务器的地址，可以是域名（如 `hypixel.net`）或 `IP:端口` 的形式（如 `mc.example.com:25565`）。如果省略端口，将默认使用 `25565`。 */
  server: string;
}
export type GetGameMinecraftUserinfoResponse =
  Internal.GetGameMinecraftUserinfo200Response
export interface GetGameMinecraftUserinfoArgs {
  /** 玩家的 Minecraft 游戏内名称（正版ID）。 */
  username: string;
}
export type GetGameSteamSummaryResponse =
  Internal.GetGameSteamSummary200Response
export interface GetGameSteamSummaryArgs {
  /** 用户的 Steam 标识。可以是以下任意一种格式：
- 纯数字的 **SteamID64**
- 用户的 **自定义 URL 名称** (Vanity URL)
- 完整的 **个人资料链接** (包含 SteamID64 或自定义名称)
- 好友代码 (如 `22202`) */
  steamid?: string;
  /** 用户的 Steam 自定义URL名称（Vanity URL）。例如个人资料链接中 `/id/` 后面的部分。 */
  id?: string;
  /** 用户的 Steam ID3 格式标识符。传统的 Steam ID 格式，形如 STEAM_X:Y:Z。 */
  id3?: string;
  /** 你的 Steam Web API Key。这是一个可选参数，如果提供，它将覆盖我们在后端配置的全局Key。这为你提供了更大的灵活性，但请务必注意Key的保密，不要在前端暴露。 */
  key?: string;
}
export type GetAvatarGravatarResponse =
  ArrayBuffer
export interface GetAvatarGravatarArgs {
  /** 用户的 Email 地址。如果未提供 `hash` 参数，则此参数为必需。 */
  email?: string;
  /** 用户 Email 地址的小写 MD5 哈希值。如果提供此参数，将忽略 `email` 参数。 */
  hash?: string;
  /** 头像的尺寸，单位为像素。有效范围是 1 到 2048。 */
  s?: number;
  /** 当用户没有自己的 Gravatar 头像时，显示的默认头像类型。可选值包括 `mp`, `identicon`, `monsterid`, `wavatar`, `retro`, `robohash`, `blank`, `404`。 */
  d?: string;
  /** 头像分级。可选值：`g`, `pg`, `r`, `x`。 */
  r?: string;
}
export type GetImageBingDailyResponse =
  ArrayBuffer
export type GetImageMotouResponse =
  ArrayBuffer
export interface GetImageMotouArgs {
  /** 你想要摸头的对象的QQ号码。 */
  qq: string;
  /** GIF的背景颜色。留空则由后端服务决定默认值。 */
  bgColor?: string;
  /** Same as `bgColor`. Kept for compatibility. */
  "bg_color"?: string;
}
export type GetImageQrcodeResponse =
  Internal.GetImageQrcode200Response
export interface GetImageQrcodeArgs {
  /** 你希望编码到二维码中的任何文本内容，比如一个URL、一段话或者一个JSON字符串。 */
  text: string;
  /** 二维码图片的边长（正方形），单位是像素。有效范围是 256 到 2048 之间。 */
  size?: number;
  /** 指定响应内容的格式。可选值为 `image`, `json`, `json_url`。 */
  format?: string;
  /** 是否使用透明背景。启用后生成的 PNG 图片将具有 alpha 通道，背景透明。 */
  transparent?: boolean;
  /** 二维码前景色（即二维码本身的颜色），使用十六进制格式。URL 中需要将 `#` 编码为 `%23`。 */
  fgcolor?: string;
  /** 二维码背景色，使用十六进制格式。当 `transparent=true` 时此参数会被忽略。URL 中需要将 `#` 编码为 `%23`。 */
  bgcolor?: string;
}
export type GetImageTobase64Response =
  Internal.GetImageTobase64200Response
export interface GetImageTobase64Args {
  /** 需要转换为Base64的、可公开访问的图片URL地址。 */
  url: string;
}
export type PostImageCompressResponse =
  ArrayBuffer
export interface PostImageCompressArgs {
  /** 压缩强度 (1-5)，默认为 3。数字越小，压缩率越高。 */
  level?: number;
  /** 输出图片格式，可以是 'png' 或 'jpeg'。 */
  format?: string;
  /** 支持PNG, JPG, JPEG等常见图片格式。文件大小不超过15MB。 */
  file: string;
}
export type PostImageFrombase64Response =
  Internal.PostImageFrombase64200Response
export interface PostImageFrombase64Args {
  /** 图片的Base64 Data URI，必须包含MIME类型头。例如：`data:image/png;base64,...` */
  imageData: string;
}
export type PostImageMotouResponse =
  ArrayBuffer
export interface PostImageMotouArgs {
  /** GIF的背景颜色。可选值为 'white', 'black', 'transparent'。 */
  bgColor?: string;
  /** Same as `bgColor`. Kept for compatibility. */
  "bg_color"?: string;
  /** 上传的图片文件。支持JPG、PNG、GIF等常见格式。 */
  file?: string;
  /** 图片的URL地址。如果提供此项，将优先使用该URL的图片。 */
  imageUrl?: string;
  /** Same as `imageUrl`. Kept for compatibility. */
  "image_url"?: string;
}
export type PostImageNsfwResponse =
  Internal.PostImageNsfw200Response
export interface PostImageNsfwArgs {
  /** 要检测的图片文件。支持 JPG、JPEG、PNG、GIF、WebP 格式，最大 20MB。 */
  file?: string;
  /** 图片的 URL 地址。如果同时提供 file 和 url，将优先使用 file。 */
  url?: string;
}
export type PostImageSpeechlessResponse =
  ArrayBuffer
export interface PostImageSpeechlessArgs {
  /** 表情包下方的文字内容。求求你_______ */
  bottomText?: string;
  /** Same as `bottomText`. Kept for compatibility. */
  "bottom_text"?: string;
  /** 表情包上方的文字内容。你们怎么不说话了，是不是都在偷偷 _______ */
  topText?: string;
  /** Same as `topText`. Kept for compatibility. */
  "top_text"?: string;
}
export type PostImageSvgResponse =
  ArrayBuffer
export interface PostImageSvgArgs {
  /** 输出图像的目标格式。支持的值：`png`, `jpeg`, `jpg`, `gif`, `tiff`, `bmp`。 */
  format?: string;
  /** 输出图像的宽度（像素）。如果省略，将根据 `height` 保持宽高比，或者使用 SVG 的原始宽度。 */
  width?: number;
  /** 输出图像的高度（像素）。如果省略，将根据 `width` 保持宽高比，或者使用 SVG 的原始高度。 */
  height?: number;
  /** JPEG 图像的压缩质量（1-100）。仅当 `format` 为 `jpeg` 或 `jpg` 时有效。 */
  quality?: number;
  /** 支持SVG文件 */
  file?: string;
}
export type GetHistoryProgrammerResponse =
  Internal.GetHistoryProgrammer200Response
export interface GetHistoryProgrammerArgs {
  /** 月份，1-12之间的整数。 */
  month: number;
  /** 日期，1-31之间的整数。 */
  day: number;
}
export type GetHistoryProgrammerTodayResponse =
  Internal.GetHistoryProgrammerToday200Response
export type GetMiscDistrictResponse =
  Internal.GetMiscDistrict200Response
export interface GetMiscDistrictArgs {
  /** 关键词搜索（城市名、区县名，支持中英文）。 */
  keywords?: string;
  /** 中国行政区划代码精确查询（如 `110000`），同时返回下级行政区。 */
  adcode?: string;
  /** 纬度，与 `lng` 配合使用，坐标反查附近地点。 */
  lat?: number;
  /** 经度，与 `lat` 配合使用。 */
  lng?: number;
  /** 过滤行政级别。 */
  level?: string;
  /** 过滤国家代码（ISO 3166-1 alpha-2），如 `CN`、`JP`、`US`、`GB`。 */
  country?: string;
  /** 返回数量上限，默认 `20`，最大 `100`。 */
  limit?: number;
}
export type GetMiscHolidayCalendarResponse =
  Internal.GetMiscHolidayCalendar200Response
export interface GetMiscHolidayCalendarArgs {
  /** 按天查询时填写这个参数，例如查某一天。格式：`YYYY-MM-DD`。和 `month`、`year` 三选一。 */
  date?: string;
  /** 按月查询时填写这个参数，例如查某个月。格式：`YYYY-MM`。和 `date`、`year` 三选一。 */
  month?: string;
  /** 按年查询时填写这个参数，例如查某一年。格式：`YYYY`。和 `date`、`month` 三选一。 */
  year?: string;
  /** 时区名称，默认 Asia/Shanghai。 */
  timezone?: string;
  /** 节日筛选类型，默认 all。 */
  holidayType?: string;
  /** Same as `holidayType`. Kept for compatibility. */
  "holiday_type"?: string;
  /** 是否返回前后最近节日，仅 date 模式生效，默认 false。month/year 模式会忽略此参数。 */
  includeNearby?: boolean;
  /** Same as `includeNearby`. Kept for compatibility. */
  "include_nearby"?: boolean;
  /** 返回最近节日数量限制，默认 7，最大 30。仅 date 模式 + include_nearby=true 生效。 */
  nearbyLimit?: number;
  /** Same as `nearbyLimit`. Kept for compatibility. */
  "nearby_limit"?: number;
}
export type GetMiscHotboardResponse =
  Internal.GetMiscHotboard200Response
export interface GetMiscHotboardArgs {
  /** 你想要查询的热榜平台。请从[支持的平台列表](#enum-list)中选择。 */
  type: string;
  /** 时光机模式：毫秒时间戳，返回最接近该时间的热榜快照。不传则返回当前实时热榜。 */
  time?: number;
  /** 搜索模式：搜索关键词，在历史热榜中搜索包含该关键词的条目。需配合 time_start 和 time_end 使用。 */
  keyword?: string;
  /** 搜索模式必填：搜索起始时间戳（毫秒）。 */
  timeStart?: number;
  /** Same as `timeStart`. Kept for compatibility. */
  "time_start"?: number;
  /** 搜索模式必填：搜索结束时间戳（毫秒）。 */
  timeEnd?: number;
  /** Same as `timeEnd`. Kept for compatibility. */
  "time_end"?: number;
  /** 搜索模式下最大返回条数，默认 50，最大 200。 */
  limit?: number;
  /** 设为 true 时列出所有可用的历史数据源，忽略其他参数。 */
  sources?: boolean;
}
export type GetMiscLunartimeResponse =
  Internal.GetMiscLunartime200Response
export interface GetMiscLunartimeArgs {
  /** Unix 时间戳，支持 10 位秒级或 13 位毫秒级。不传则默认当前时间。 */
  ts?: string;
  /** 时区名称。支持 IANA 时区（如 Asia/Shanghai）和别名（Shanghai、Beijing）。默认 Asia/Shanghai。 */
  timezone?: string;
}
export type GetMiscPhoneinfoResponse =
  Internal.GetMiscPhoneinfo200Response
export interface GetMiscPhoneinfoArgs {
  /** 需要查询的11位中国大陆手机号码。 */
  phone: string;
}
export type GetMiscRandomnumberResponse =
  Internal.GetMiscRandomnumber200Response
export interface GetMiscRandomnumberArgs {
  /** 生成随机数的最小值（包含）。 */
  min?: number;
  /** 生成随机数的最大值（包含）。 */
  max?: number;
  /** 需要生成的随机数的数量。 */
  count?: number;
  /** 是否允许生成的多个数字中出现重复值。 */
  allowRepeat?: boolean;
  /** Same as `allowRepeat`. Kept for compatibility. */
  "allow_repeat"?: boolean;
  /** 是否生成小（浮点）数。如果为 false，则只生成整数。 */
  allowDecimal?: boolean;
  /** Same as `allowDecimal`. Kept for compatibility. */
  "allow_decimal"?: boolean;
  /** 如果 `allow_decimal=true`，这里可以指定小数的位数。 */
  decimalPlaces?: number;
  /** Same as `decimalPlaces`. Kept for compatibility. */
  "decimal_places"?: number;
}
export type GetMiscTimestampResponse =
  Internal.GetMiscTimestamp200Response
export interface GetMiscTimestampArgs {
  /** 需要转换的Unix时间戳，支持10位（秒）或13位（毫秒）。 */
  ts: string;
}
export type GetMiscTrackingCarriersResponse =
  Internal.GetMiscTrackingCarriers200Response
export type GetMiscTrackingDetectResponse =
  Internal.GetMiscTrackingDetect200Response
export interface GetMiscTrackingDetectArgs {
  /** 需要识别的快递单号。 */
  trackingNumber: string;
  /** Same as `trackingNumber`. Kept for compatibility. */
  "tracking_number"?: string;
}
export type GetMiscTrackingQueryResponse =
  Internal.GetMiscTrackingQuery200Response
export interface GetMiscTrackingQueryArgs {
  /** 快递单号，通常是一串10-20位的数字或字母数字组合。 */
  trackingNumber: string;
  /** Same as `trackingNumber`. Kept for compatibility. */
  "tracking_number"?: string;
  /** 快递公司编码（可选）。不填写时系统会自动识别，填写后可加快查询速度。 */
  carrierCode?: string;
  /** Same as `carrierCode`. Kept for compatibility. */
  "carrier_code"?: string;
  /** 收件人手机尾号，4位数字（可选）。部分快递公司需要验证手机尾号才能查询详细物流信息。 */
  phone?: string;
}
export type GetMiscWeatherResponse =
  Internal.GetMiscWeather200Response
export interface GetMiscWeatherArgs {
  /** 城市名称，支持中文（`北京`）和英文（`Tokyo`）。可选参数，不传时会尝试 IP 自动定位。 */
  city?: string;
  /** 城市行政区划代码（如 `110000`），优先级高于 city。可选参数，不传时会尝试 IP 自动定位。 */
  adcode?: string;
  /** 返回扩展气象字段（体感温度、能见度、气压、紫外线、降水量、云量、空气质量指数及污染物分项数据）。 */
  extended?: boolean;
  /** 返回多天预报数据（最多7天），含每天的最高温度、最低温度、白天夜间天气、风向风力、日出日落等。 */
  forecast?: boolean;
  /** 返回逐小时预报（24小时），含温度、天气、风向风速、湿度、降水概率等。 */
  hourly?: boolean;
  /** 返回分钟级降水预报（仅国内城市），精确到2分钟。 */
  minutely?: boolean;
  /** 返回18项生活指数（穿衣、紫外线、洗车、晾晒、空调、感冒、运动、舒适度、出行、钓鱼、过敏、防晒、心情、啤酒、雨伞、交通、空气净化器、花粉）。 */
  indices?: boolean;
  /** 返回语言。`zh` 返回中文（默认），`en` 返回英文。城市名翻译覆盖 7000+ 城市。生活指数（`indices`）目前仅支持中文。 */
  lang?: string;
}
export type GetMiscWorldtimeResponse =
  Internal.GetMiscWorldtime200Response
export interface GetMiscWorldtimeArgs {
  /** 你需要查询的城市或地区，请使用标准的 IANA 时区数据库名称，例如 'Shanghai', 'Asia/Tokyo', 'America/New_York'。 */
  city: string;
}
export type PostMiscDateDiffResponse =
  Internal.PostMiscDateDiff200Response
export interface PostMiscDateDiffArgs {
  /** 结束日期，支持多种格式自动识别 */
  endDate: string;
  /** Same as `endDate`. Kept for compatibility. */
  "end_date"?: string;
  /** 日期格式（可选），如DD-MM-YYYY。不指定则自动识别 */
  format?: string;
  /** 开始日期，支持多种格式自动识别 */
  startDate: string;
  /** Same as `startDate`. Kept for compatibility. */
  "start_date"?: string;
}
export type GetNetworkDnsResponse =
  Internal.GetNetworkDns200Response
export interface GetNetworkDnsArgs {
  /** 你需要查询的域名，例如 'cn.bing.com'。 */
  domain: string;
  /** 你想要查询的DNS记录类型。 */
  type?: string;
}
export type GetNetworkIcpResponse =
  Internal.GetNetworkIcp200Response
export interface GetNetworkIcpArgs {
  /** 需要查询的域名或URL */
  domain: string;
}
export type GetNetworkIpinfoResponse =
  Internal.GetNetworkIpinfo200Response
export interface GetNetworkIpinfoArgs {
  /** 你需要查询的公网IP地址或域名（支持IPv4和IPv6）。 */
  ip: string;
  /** 查询的数据源。如果留空，将使用默认的数据库。如果设置为 `commercial`，将调用商业级API，返回更详细的地理位置信息，但响应时间可能会稍长。 */
  source?: string;
}
export type GetNetworkMyipResponse =
  Internal.GetNetworkMyip200Response
export interface GetNetworkMyipArgs {
  /** 查询的数据源。如果留空，将使用默认的数据库。如果设置为 `commercial`，将调用商业级API，返回更详细的地理位置信息，但响应时间可能会稍长。 */
  source?: string;
}
export type GetNetworkPingResponse =
  Internal.GetNetworkPing200Response
export interface GetNetworkPingArgs {
  /** 你需要 Ping 的目标主机，可以是域名或IP地址。 */
  host: string;
}
export type GetNetworkPingmyipResponse =
  Internal.GetNetworkPingmyip200Response
export type GetNetworkPortscanResponse =
  Internal.GetNetworkPortscan200Response
export interface GetNetworkPortscanArgs {
  /** 需要扫描的目标主机，可以是域名或IP地址。 */
  host: string;
  /** 需要扫描的端口号，范围是 1 到 65535。 */
  port: number;
  /** 扫描使用的协议，可以是 'tcp' 或 'udp'。 */
  protocol?: string;
}
export type GetNetworkUrlstatusResponse =
  Internal.GetNetworkUrlstatus200Response
export interface GetNetworkUrlstatusArgs {
  /** 你需要检查其可访问性状态的完整URL。 */
  url: string;
}
export type GetNetworkWhoisResponse =
  Internal.GetNetworkWhois200Response
export interface GetNetworkWhoisArgs {
  /** 你需要查询WHOIS信息的域名。 */
  domain: string;
  /** 返回格式。留空或为 'text' 时返回原始WHOIS文本，设为 'json' 时返回结构化JSON。 */
  format?: string;
}
export type GetNetworkWxdomainResponse =
  Internal.GetNetworkWxdomain200Response
export interface GetNetworkWxdomainArgs {
  /** 需要查询的域名。 */
  domain: string;
}
export type GetSayingResponse =
  Internal.GetSaying200Response
export type GetAnswerbookAskResponse =
  Internal.GetAnswerbookAsk200Response
export interface GetAnswerbookAskArgs {
  /** 你想要提问的问题。问题不能为空。 */
  question: string;
}
export type GetRandomImageResponse =
  ArrayBuffer
export interface GetRandomImageArgs {
  /** （可选）指定图片主类别。

**支持的主类别：**
- `acg`（二次元动漫，UapiPro服务器）
- `landscape`（风景图，外部图床）
- `anime`（混合动漫）
- `pc_wallpaper`（电脑壁纸，外部图床）
- `mobile_wallpaper`（手机壁纸，外部图床）
- `general_anime`（动漫图，外部图床）
- `ai_drawing`（AI绘画，外部图床）
- `bq`（表情包/趣图，UapiPro服务器）
- `furry`（福瑞，UapiPro服务器）

> [!TIP]
> 如果不指定，将从所有图片中随机抽取（不包含 `ikun` 和 `ai_drawing`）。
 */
  category?: string;
  /** （可选，仅UapiPro服务器图片支持）指定图片子类别。

- **bq**: `xiongmao`, `waiguoren`, `maomao`, `ikun`, `eciyuan`
- **acg**: `pc`, `mb`
- **furry**: `z4k`, `szs8k`, `s4k`, `4k`

> [!TIP]
> 外部图床类别和 `anime` 混合类别不支持 `type` 参数。
 */
  type?: string;
}
export type GetRandomStringResponse =
  Internal.GetRandomString200Response
export interface GetRandomStringArgs {
  /** 你希望生成的字符串的长度。有效范围是 1 到 1024。 */
  length?: number;
  /** 指定构成字符串的字符类型。 */
  type?: string;
}
export type PostAnswerbookAskResponse =
  Internal.PostAnswerbookAsk200Response
export interface PostAnswerbookAskArgs {
  /** 你想要提问的问题 */
  question: string;
}
export type GetGithubRepoResponse =
  Internal.GetGithubRepo200Response
export interface GetGithubRepoArgs {
  /** 目标仓库的标识，格式为 `owner/repo`。 */
  repo: string;
}
export type GetSocialBilibiliArchivesResponse =
  Internal.GetSocialBilibiliArchives200Response
export interface GetSocialBilibiliArchivesArgs {
  /** B站用户的mid（用户ID） */
  mid: string;
  /** 搜索关键词，可为空 */
  keywords?: string;
  /** 排序方式。`pubdate`=最新发布，`views`=最多播放 */
  orderby?: string;
  /** 每页条数，默认20 */
  ps?: string;
  /** 页码，默认1 */
  pn?: string;
}
export type GetSocialBilibiliLiveroomResponse =
  Internal.GetSocialBilibiliLiveroom200Response
export interface GetSocialBilibiliLiveroomArgs {
  /** 主播的用户ID (`mid`)。与 `room_id` 任选其一。 */
  mid?: string;
  /** 直播间ID，可以是长号（真实ID）或短号（靓号）。与 `mid` 任选其一。 */
  roomId?: string;
  /** Same as `roomId`. Kept for compatibility. */
  "room_id"?: string;
}
export type GetSocialBilibiliRepliesResponse =
  Internal.GetSocialBilibiliReplies200Response
export interface GetSocialBilibiliRepliesArgs {
  /** 目标评论区的ID。对于视频，这通常就是它的 `aid`。 */
  oid: string;
  /** 排序方式。支持 `0/time`（按时间）、`1/like`（按点赞）、`2/reply`（按回复数）、`3/hot/hottest/最热`（按最热）。默认为 `0/time`。 */
  sort?: string;
  /** 每页获取的评论数量，范围是1到20。默认为 `20`。 */
  ps?: string;
  /** 要获取的页码，从1开始。默认为 `1`。 */
  pn?: string;
}
export type GetSocialBilibiliUserinfoResponse =
  Internal.GetSocialBilibiliUserinfo200Response
export interface GetSocialBilibiliUserinfoArgs {
  /** Bilibili用户的UID */
  uid: string;
}
export type GetSocialBilibiliVideoinfoResponse =
  Internal.GetSocialBilibiliVideoinfo200Response
export interface GetSocialBilibiliVideoinfoArgs {
  /** 视频的AV号 (aid)，纯数字格式。`aid`和`bvid`任选其一即可。 */
  aid?: string;
  /** 视频的BV号 (bvid)，例如 `BV117411r7R1`。`aid`和`bvid`任选其一即可。 */
  bvid?: string;
}
export type GetSocialQqGroupinfoResponse =
  Internal.GetSocialQqGroupinfo200Response
export interface GetSocialQqGroupinfoArgs {
  /** QQ群号，长度5-12位 */
  groupId: string;
  /** Same as `groupId`. Kept for compatibility. */
  "group_id"?: string;
}
export type GetSocialQqUserinfoResponse =
  Internal.GetSocialQqUserinfo200Response
export interface GetSocialQqUserinfoArgs {
  /** 需要查询的QQ号 */
  qq: string;
}
export type GetStatusRatelimitResponse =
  Internal.GetStatusRatelimit200Response
export interface GetStatusRatelimitArgs {
  /** Bearer类型的API密钥认证头。例如：`Bearer sk-xxx` */
  authorization: string;
  /** Same as `authorization`. Kept for compatibility. */
  "Authorization"?: string;
}
export type GetStatusUsageResponse =
  Internal.GetStatusUsage200Response
export interface GetStatusUsageArgs {
  /** （可选）如果你想查询某个特定的端点，请提供它的路径，例如 '/api/v1/image/motou'。如果留空，则返回所有端点的统计列表。 */
  path?: string;
}
export type GetTextMd5Response =
  Internal.GetTextMd5200Response
export interface GetTextMd5Args {
  /** 需要计算哈希值的文本 */
  text: string;
}
export type PostTextAesDecryptResponse =
  Internal.PostTextAesDecrypt200Response
export interface PostTextAesDecryptArgs {
  /** 密钥，长度必须为16、24或32字节，对应AES-128/192/256。 */
  key: string;
  /** 16字节的IV/Nonce，必须为16个字符 */
  nonce: string;
  /** Base64编码的密文。 */
  text: string;
}
export type PostTextAesDecryptAdvancedResponse =
  Internal.PostTextAesDecryptAdvanced200Response
export interface PostTextAesDecryptAdvancedArgs {
  /** 初始化向量（非GCM模式必须提供，Base64编码）。此值来自加密接口返回的iv字段 */
  iv?: string;
  /** 解密密钥（必须与加密时相同） */
  key: string;
  /** 加密模式（必须与加密时相同）：GCM/CBC/ECB/CTR/OFB/CFB */
  mode: string;
  /** 填充方式（可选，必须与加密时相同）：PKCS7/ZERO/NONE。GCM模式默认为NONE */
  padding?: string;
  /** 待解密的密文（Base64编码）。此值来自加密接口返回的ciphertext字段 */
  text: string;
}
export type PostTextAesEncryptResponse =
  Internal.PostTextAesEncrypt200Response
export interface PostTextAesEncryptArgs {
  /** 密钥长度必须为 16、24 或 32 字节，分别对应 AES-128、AES-192、AES-256。 */
  key: string;
  /** 待加密的明文文本。 */
  text: string;
}
export type PostTextAesEncryptAdvancedResponse =
  Internal.PostTextAesEncryptAdvanced200Response
export interface PostTextAesEncryptAdvancedArgs {
  /** 自定义IV（可选，Base64编码，16字节）。GCM模式无需此参数 */
  iv?: string;
  /** 加密密钥（支持任意长度） */
  key: string;
  /** 加密模式：GCM/CBC/ECB/CTR/OFB/CFB（可选，默认GCM） */
  mode?: string;
  /** 输出格式：base64（默认）或hex */
  outputFormat?: string;
  /** Same as `outputFormat`. Kept for compatibility. */
  "output_format"?: string;
  /** 填充方式：PKCS7/ZERO/NONE（可选，默认PKCS7） */
  padding?: string;
  /** 待加密的明文文本 */
  text: string;
}
export type PostTextAnalyzeResponse =
  Internal.PostTextAnalyze200Response
export interface PostTextAnalyzeArgs {
  /**  */
  text: string;
}
export type PostTextBase64DecodeResponse =
  Internal.PostTextBase64Decode200Response
export interface PostTextBase64DecodeArgs {
  /**  */
  text: string;
}
export type PostTextBase64EncodeResponse =
  Internal.PostTextBase64Encode200Response
export interface PostTextBase64EncodeArgs {
  /**  */
  text: string;
}
export type PostTextConvertResponse =
  Internal.PostTextConvert200Response
export interface PostTextConvertArgs {
  /** 源格式类型 */
  from: string;
  /** 可选参数（预留，当前未使用） */
  options?: Record<string, unknown>;
  /** 待转换的文本内容 */
  text: string;
  /** 目标格式类型 */
  to: string;
}
export type PostTextMd5Response =
  Internal.GetTextMd5200Response
export interface PostTextMd5Args {
  /** 需要计算哈希值的文本 */
  text: string;
}
export type PostTextMd5VerifyResponse =
  Internal.PostTextMd5Verify200Response
export interface PostTextMd5VerifyArgs {
  /** 用于比对的 MD5 哈希值（32 位小写十六进制字符串）。 */
  hash: string;
  /** 待校验的原始文本，会先计算其 MD5 再与 hash 进行比对。 */
  text: string;
}
export type GetAiTranslateLanguagesResponse =
  Internal.GetAiTranslateLanguages200Response
export type PostAiTranslateResponse =
  Internal.PostAiTranslate200Response
export interface PostAiTranslateArgs {
  /** 目标语言代码。请从[支持的语言列表](#enum-list)中选择一个语言代码。 */
  targetLang: string;
  /** Same as `targetLang`. Kept for compatibility. */
  "target_lang"?: string;
  /** 翻译上下文场景，可选。支持general(通用，默认)、business(商务)、technical(技术)、medical(医疗)、legal(法律)、marketing(市场营销)、entertainment(娱乐)、education(教育)、news(新闻)。 */
  context?: string;
  /** 是否保留原文格式，包括换行、缩进等。 */
  preserveFormat?: boolean;
  /** Same as `preserveFormat`. Kept for compatibility. */
  "preserve_format"?: boolean;
  /** 源语言代码，可选。如果不指定，系统会自动检测源语言。 */
  sourceLang?: string;
  /** Same as `sourceLang`. Kept for compatibility. */
  "source_lang"?: string;
  /** 翻译风格，可选。支持casual(随意口语化)、professional(专业商务，默认)、academic(学术正式)、literary(文学艺术)。 */
  style?: string;
  /** 待翻译的文本内容。最大长度10,000字符。 */
  text: string;
}
export type PostTranslateStreamResponse =
  string
export interface PostTranslateStreamArgs {
  /** 源语言，支持：中文、英文、auto（自动检测）。默认为auto */
  fromLang?: string;
  /** Same as `fromLang`. Kept for compatibility. */
  "from_lang"?: string;
  /** 待翻译的文本内容 */
  query: string;
  /** 目标语言，支持：中文、英文 */
  toLang: string;
  /** Same as `toLang`. Kept for compatibility. */
  "to_lang"?: string;
  /** 语气参数，可选 */
  tone?: string;
}
export type PostTranslateTextResponse =
  Internal.PostTranslateText200Response
export interface PostTranslateTextArgs {
  /** 目标语言代码。请从[支持的语言列表](#enum-list)中选择一个语言代码。 */
  toLang: string;
  /** Same as `toLang`. Kept for compatibility. */
  "to_lang"?: string;
  /** 待翻译的文本内容，最大长度3000字符。 */
  text: string;
}
export type GetWebTomarkdownAsyncStatusResponse =
  Internal.GetWebTomarkdownAsyncStatus200Response
export interface GetWebTomarkdownAsyncStatusArgs {
  /** 任务ID（由提交接口返回） */
  taskId: string;
  /** Same as `taskId`. Kept for compatibility. */
  "task_id"?: string;
}
export type GetWebparseExtractimagesResponse =
  Internal.GetWebparseExtractimages200Response
export interface GetWebparseExtractimagesArgs {
  /** 需要提取图片的网页URL */
  url: string;
}
export type GetWebparseMetadataResponse =
  Internal.GetWebparseMetadata200Response
export interface GetWebparseMetadataArgs {
  /** 需要提取元数据的网页URL */
  url: string;
}
export type PostWebTomarkdownAsyncResponse =
  Internal.PostWebTomarkdownAsync202Response
export interface PostWebTomarkdownAsyncArgs {
  /** 需要转换的网页URL。URL必须经过编码。 */
  url: string;
}
export type GetSensitiveWordAnalyzeQueryResponse =
  Internal.PostSensitiveWordAnalyze200Response
export interface GetSensitiveWordAnalyzeQueryArgs {
  /** 要分析的关键词，最长1,000字符。 */
  keyword: string;
}
export type PostSensitiveWordAnalyzeResponse =
  Internal.PostSensitiveWordAnalyze200Response
export interface PostSensitiveWordAnalyzeArgs {
  /** 要分析的关键词列表，单次最多100个。单条关键词最多1,000字符，总字符数最多20,000。 */
  keywords: unknown[];
}
export type PostSensitiveWordQuickCheckResponse =
  Internal.PostSensitiveWordQuickCheck200Response
export interface PostSensitiveWordQuickCheckArgs {
  /** 需要检测的文本内容。支持简体和繁体中文。 */
  text: string;
}
export type GetSearchEnginesResponse =
  Internal.GetSearchEngines200Response
export type PostSearchAggregateResponse =
  Internal.PostSearchAggregate200Response
export interface PostSearchAggregateArgs {
  /** 是否获取页面完整正文（会影响响应时间） */
  fetchFull?: boolean;
  /** Same as `fetchFull`. Kept for compatibility. */
  "fetch_full"?: boolean;
  /** 限制文件类型，不需要 `filetype:` 前缀。支持 pdf、doc、docx、ppt、pptx、xls、xlsx、txt 等 */
  filetype?: string;
  /** 搜索查询关键词，支持中英文 */
  query: string;
  /** 限制搜索特定网站，不需要 `site:` 前缀 */
  site?: string;
  /** 排序方式 */
  sort?: string;
  /** 时间范围过滤 */
  timeRange?: string;
  /** Same as `timeRange`. Kept for compatibility. */
  "time_range"?: string;
  /** 请求超时时间（毫秒），范围 1000-30000 */
  timeoutMs?: number;
  /** Same as `timeoutMs`. Kept for compatibility. */
  "timeout_ms"?: number;
}

// Facade per tag.
export class UapiClient {
  private http: HTTP
  readonly clipzyZaiXianJianTieBan: ClipzyZaiXianJianTieBanApi
  readonly "Clipzy 在线剪贴板": ClipzyZaiXianJianTieBanApi
  readonly convert: ConvertApi
  readonly "Convert": ConvertApi
  readonly daily: DailyApi
  readonly "Daily": DailyApi
  readonly game: GameApi
  readonly "Game": GameApi
  readonly image: ImageApi
  readonly "Image": ImageApi
  readonly misc: MiscApi
  readonly "Misc": MiscApi
  readonly network: NetworkApi
  readonly "Network": NetworkApi
  readonly poem: PoemApi
  readonly "Poem": PoemApi
  readonly random: RandomApi
  readonly "Random": RandomApi
  readonly social: SocialApi
  readonly "Social": SocialApi
  readonly status: StatusApi
  readonly "Status": StatusApi
  readonly text: TextApi
  readonly "Text": TextApi
  readonly translate: TranslateApi
  readonly "Translate": TranslateApi
  readonly webparse: WebparseApi
  readonly "WebParse": WebparseApi
  readonly minGanCiShiBie: MinGanCiShiBieApi
  readonly "敏感词识别": MinGanCiShiBieApi
  readonly zhiNengSouSuo: ZhiNengSouSuoApi
  readonly "智能搜索": ZhiNengSouSuoApi

  constructor(baseURL: string, token?: string) {
    this.http = new HTTP({ baseURL, token })
    const clipzyZaiXianJianTieBan = new ClipzyZaiXianJianTieBanApi(this.http)
    this.clipzyZaiXianJianTieBan = clipzyZaiXianJianTieBan
    this["Clipzy 在线剪贴板"] = clipzyZaiXianJianTieBan
    const convert = new ConvertApi(this.http)
    this.convert = convert
    this["Convert"] = convert
    const daily = new DailyApi(this.http)
    this.daily = daily
    this["Daily"] = daily
    const game = new GameApi(this.http)
    this.game = game
    this["Game"] = game
    const image = new ImageApi(this.http)
    this.image = image
    this["Image"] = image
    const misc = new MiscApi(this.http)
    this.misc = misc
    this["Misc"] = misc
    const network = new NetworkApi(this.http)
    this.network = network
    this["Network"] = network
    const poem = new PoemApi(this.http)
    this.poem = poem
    this["Poem"] = poem
    const random = new RandomApi(this.http)
    this.random = random
    this["Random"] = random
    const social = new SocialApi(this.http)
    this.social = social
    this["Social"] = social
    const status = new StatusApi(this.http)
    this.status = status
    this["Status"] = status
    const text = new TextApi(this.http)
    this.text = text
    this["Text"] = text
    const translate = new TranslateApi(this.http)
    this.translate = translate
    this["Translate"] = translate
    const webparse = new WebparseApi(this.http)
    this.webparse = webparse
    this["WebParse"] = webparse
    const minGanCiShiBie = new MinGanCiShiBieApi(this.http)
    this.minGanCiShiBie = minGanCiShiBie
    this["敏感词识别"] = minGanCiShiBie
    const zhiNengSouSuo = new ZhiNengSouSuoApi(this.http)
    this.zhiNengSouSuo = zhiNengSouSuo
    this["智能搜索"] = zhiNengSouSuo
  }

  get lastResponseMeta(): ResponseMeta | undefined {
    return this.http.getLastResponseMeta()
  }
}
export class ClipzyZaiXianJianTieBanApi {
  constructor(private http: HTTP) {}

  /** 步骤2 (方法一): 获取加密数据 */
  async getClipzyGet(args: GetClipzyGetArgs
  ): Promise<GetClipzyGetResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argId = args.id
    if (argId !== undefined) query["id"] = argId
    let requestPath = '/api/v1/api/get'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetClipzyGetResponse
  }

  /** 步骤2 (方法二): 获取原始文本 */
  async getClipzyRaw(args: GetClipzyRawArgs
  ): Promise<GetClipzyRawResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argId = args.id
    const argKey = args.key
    if (argKey !== undefined) query["key"] = argKey
    let requestPath = '/api/v1/api/raw/{id}'
    if (argId !== undefined) requestPath = requestPath.replace('{'+ 'id' +'}', String(argId))
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'text',
    ) as GetClipzyRawResponse
  }

  /** 步骤1：上传加密数据 */
  async postClipzyStore(args: PostClipzyStoreArgs
  ): Promise<PostClipzyStoreResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argCompressedData = args.compressedData
    if (argCompressedData !== undefined) body["compressedData"] = argCompressedData
    const argTtl = args.ttl
    if (argTtl !== undefined) body["ttl"] = argTtl
    let requestPath = '/api/v1/api/store'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostClipzyStoreResponse
  }
}
export class ConvertApi {
  constructor(private http: HTTP) {}

  /** 时间戳转换 */
  async getConvertUnixtime(args: GetConvertUnixtimeArgs
  ): Promise<GetConvertUnixtimeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argTime = args.time
    if (argTime !== undefined) query["time"] = argTime
    let requestPath = '/api/v1/convert/unixtime'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetConvertUnixtimeResponse
  }

  /** JSON 格式化 */
  async postConvertJson(args: PostConvertJsonArgs
  ): Promise<PostConvertJsonResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argContent = args.content
    if (argContent !== undefined) body["content"] = argContent
    let requestPath = '/api/v1/convert/json'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostConvertJsonResponse
  }
}
export class DailyApi {
  constructor(private http: HTTP) {}

  /** 每日新闻图 */
  async getDailyNewsImage(
  ): Promise<GetDailyNewsImageResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/daily/news-image'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as GetDailyNewsImageResponse
  }
}
export class GameApi {
  constructor(private http: HTTP) {}

  /** Epic 免费游戏 */
  async getGameEpicFree(
  ): Promise<GetGameEpicFreeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/game/epic-free'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetGameEpicFreeResponse
  }

  /** 查询 MC 曾用名 */
  async getGameMinecraftHistoryid(args: GetGameMinecraftHistoryidArgs = {} as GetGameMinecraftHistoryidArgs
  ): Promise<GetGameMinecraftHistoryidResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argName = args.name
    if (argName !== undefined) query["name"] = argName
    const argUuid = args.uuid
    if (argUuid !== undefined) query["uuid"] = argUuid
    let requestPath = '/api/v1/game/minecraft/historyid'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetGameMinecraftHistoryidResponse
  }

  /** 查询 MC 服务器 */
  async getGameMinecraftServerstatus(args: GetGameMinecraftServerstatusArgs
  ): Promise<GetGameMinecraftServerstatusResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argServer = args.server
    if (argServer !== undefined) query["server"] = argServer
    let requestPath = '/api/v1/game/minecraft/serverstatus'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetGameMinecraftServerstatusResponse
  }

  /** 查询 MC 玩家 */
  async getGameMinecraftUserinfo(args: GetGameMinecraftUserinfoArgs
  ): Promise<GetGameMinecraftUserinfoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argUsername = args.username
    if (argUsername !== undefined) query["username"] = argUsername
    let requestPath = '/api/v1/game/minecraft/userinfo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetGameMinecraftUserinfoResponse
  }

  /** 查询 Steam 用户 */
  async getGameSteamSummary(args: GetGameSteamSummaryArgs = {} as GetGameSteamSummaryArgs
  ): Promise<GetGameSteamSummaryResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argSteamid = args.steamid
    if (argSteamid !== undefined) query["steamid"] = argSteamid
    const argId = args.id
    if (argId !== undefined) query["id"] = argId
    const argId3 = args.id3
    if (argId3 !== undefined) query["id3"] = argId3
    const argKey = args.key
    if (argKey !== undefined) query["key"] = argKey
    let requestPath = '/api/v1/game/steam/summary'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetGameSteamSummaryResponse
  }
}
export class ImageApi {
  constructor(private http: HTTP) {}

  /** 获取Gravatar头像 */
  async getAvatarGravatar(args: GetAvatarGravatarArgs = {} as GetAvatarGravatarArgs
  ): Promise<GetAvatarGravatarResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argEmail = args.email
    if (argEmail !== undefined) query["email"] = argEmail
    const argHash = args.hash
    if (argHash !== undefined) query["hash"] = argHash
    const argS = args.s
    if (argS !== undefined) query["s"] = argS
    const argD = args.d
    if (argD !== undefined) query["d"] = argD
    const argR = args.r
    if (argR !== undefined) query["r"] = argR
    let requestPath = '/api/v1/avatar/gravatar'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as GetAvatarGravatarResponse
  }

  /** 必应壁纸 */
  async getImageBingDaily(
  ): Promise<GetImageBingDailyResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/image/bing-daily'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as GetImageBingDailyResponse
  }

  /** 生成摸摸头GIF (QQ号) */
  async getImageMotou(args: GetImageMotouArgs
  ): Promise<GetImageMotouResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argQq = args.qq
    if (argQq !== undefined) query["qq"] = argQq
    const argBgColor = args.bgColor ?? args["bg_color"]
    if (argBgColor !== undefined) query["bg_color"] = argBgColor
    let requestPath = '/api/v1/image/motou'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as GetImageMotouResponse
  }

  /** 生成二维码 */
  async getImageQrcode(args: GetImageQrcodeArgs
  ): Promise<GetImageQrcodeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argText = args.text
    if (argText !== undefined) query["text"] = argText
    const argSize = args.size
    if (argSize !== undefined) query["size"] = argSize
    const argFormat = args.format
    if (argFormat !== undefined) query["format"] = argFormat
    const argTransparent = args.transparent
    if (argTransparent !== undefined) query["transparent"] = argTransparent
    const argFgcolor = args.fgcolor
    if (argFgcolor !== undefined) query["fgcolor"] = argFgcolor
    const argBgcolor = args.bgcolor
    if (argBgcolor !== undefined) query["bgcolor"] = argBgcolor
    let requestPath = '/api/v1/image/qrcode'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetImageQrcodeResponse
  }

  /** 图片转 Base64 */
  async getImageTobase64(args: GetImageTobase64Args
  ): Promise<GetImageTobase64Response> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argUrl = args.url
    if (argUrl !== undefined) query["url"] = argUrl
    let requestPath = '/api/v1/image/tobase64'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetImageTobase64Response
  }

  /** 无损压缩图片 */
  async postImageCompress(args: PostImageCompressArgs
  ): Promise<PostImageCompressResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argLevel = args.level
    if (argLevel !== undefined) query["level"] = argLevel
    const argFormat = args.format
    if (argFormat !== undefined) query["format"] = argFormat
    const argFile = args.file
    if (argFile !== undefined) body["file"] = argFile
    let requestPath = '/api/v1/image/compress'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as PostImageCompressResponse
  }

  /** 通过Base64编码上传图片 */
  async postImageFrombase64(args: PostImageFrombase64Args
  ): Promise<PostImageFrombase64Response> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argImageData = args.imageData
    if (argImageData !== undefined) body["imageData"] = argImageData
    let requestPath = '/api/v1/image/frombase64'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostImageFrombase64Response
  }

  /** 生成摸摸头GIF */
  async postImageMotou(args: PostImageMotouArgs
  ): Promise<PostImageMotouResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argBgColor = args.bgColor ?? args["bg_color"]
    if (argBgColor !== undefined) body["bg_color"] = argBgColor
    const argFile = args.file
    if (argFile !== undefined) body["file"] = argFile
    const argImageUrl = args.imageUrl ?? args["image_url"]
    if (argImageUrl !== undefined) body["image_url"] = argImageUrl
    let requestPath = '/api/v1/image/motou'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as PostImageMotouResponse
  }

  /** 图片敏感检测 */
  async postImageNsfw(args: PostImageNsfwArgs
  ): Promise<PostImageNsfwResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argFile = args.file
    if (argFile !== undefined) body["file"] = argFile
    const argUrl = args.url
    if (argUrl !== undefined) body["url"] = argUrl
    let requestPath = '/api/v1/image/nsfw'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostImageNsfwResponse
  }

  /** 生成你们怎么不说话了表情包 */
  async postImageSpeechless(args: PostImageSpeechlessArgs
  ): Promise<PostImageSpeechlessResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argBottomText = args.bottomText ?? args["bottom_text"]
    if (argBottomText !== undefined) body["bottom_text"] = argBottomText
    const argTopText = args.topText ?? args["top_text"]
    if (argTopText !== undefined) body["top_text"] = argTopText
    let requestPath = '/api/v1/image/speechless'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as PostImageSpeechlessResponse
  }

  /** SVG转图片 */
  async postImageSvg(args: PostImageSvgArgs = {} as PostImageSvgArgs
  ): Promise<PostImageSvgResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argFormat = args.format
    if (argFormat !== undefined) query["format"] = argFormat
    const argWidth = args.width
    if (argWidth !== undefined) query["width"] = argWidth
    const argHeight = args.height
    if (argHeight !== undefined) query["height"] = argHeight
    const argQuality = args.quality
    if (argQuality !== undefined) query["quality"] = argQuality
    const argFile = args.file
    if (argFile !== undefined) body["file"] = argFile
    let requestPath = '/api/v1/image/svg'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as PostImageSvgResponse
  }
}
export class MiscApi {
  constructor(private http: HTTP) {}

  /** 程序员历史事件 */
  async getHistoryProgrammer(args: GetHistoryProgrammerArgs
  ): Promise<GetHistoryProgrammerResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argMonth = args.month
    if (argMonth !== undefined) query["month"] = argMonth
    const argDay = args.day
    if (argDay !== undefined) query["day"] = argDay
    let requestPath = '/api/v1/history/programmer'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetHistoryProgrammerResponse
  }

  /** 程序员历史上的今天 */
  async getHistoryProgrammerToday(
  ): Promise<GetHistoryProgrammerTodayResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/history/programmer/today'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetHistoryProgrammerTodayResponse
  }

  /** Adcode 国内外行政区域查询 */
  async getMiscDistrict(args: GetMiscDistrictArgs = {} as GetMiscDistrictArgs
  ): Promise<GetMiscDistrictResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argKeywords = args.keywords
    if (argKeywords !== undefined) query["keywords"] = argKeywords
    const argAdcode = args.adcode
    if (argAdcode !== undefined) query["adcode"] = argAdcode
    const argLat = args.lat
    if (argLat !== undefined) query["lat"] = argLat
    const argLng = args.lng
    if (argLng !== undefined) query["lng"] = argLng
    const argLevel = args.level
    if (argLevel !== undefined) query["level"] = argLevel
    const argCountry = args.country
    if (argCountry !== undefined) query["country"] = argCountry
    const argLimit = args.limit
    if (argLimit !== undefined) query["limit"] = argLimit
    let requestPath = '/api/v1/misc/district'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscDistrictResponse
  }

  /** 查询节假日与万年历 */
  async getMiscHolidayCalendar(args: GetMiscHolidayCalendarArgs = {} as GetMiscHolidayCalendarArgs
  ): Promise<GetMiscHolidayCalendarResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argDate = args.date
    if (argDate !== undefined) query["date"] = argDate
    const argMonth = args.month
    if (argMonth !== undefined) query["month"] = argMonth
    const argYear = args.year
    if (argYear !== undefined) query["year"] = argYear
    const argTimezone = args.timezone
    if (argTimezone !== undefined) query["timezone"] = argTimezone
    const argHolidayType = args.holidayType ?? args["holiday_type"]
    if (argHolidayType !== undefined) query["holiday_type"] = argHolidayType
    const argIncludeNearby = args.includeNearby ?? args["include_nearby"]
    if (argIncludeNearby !== undefined) query["include_nearby"] = argIncludeNearby
    const argNearbyLimit = args.nearbyLimit ?? args["nearby_limit"]
    if (argNearbyLimit !== undefined) query["nearby_limit"] = argNearbyLimit
    let requestPath = '/api/v1/misc/holiday-calendar'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscHolidayCalendarResponse
  }

  /** 查询热榜 */
  async getMiscHotboard(args: GetMiscHotboardArgs
  ): Promise<GetMiscHotboardResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argType = args.type
    if (argType !== undefined) query["type"] = argType
    const argTime = args.time
    if (argTime !== undefined) query["time"] = argTime
    const argKeyword = args.keyword
    if (argKeyword !== undefined) query["keyword"] = argKeyword
    const argTimeStart = args.timeStart ?? args["time_start"]
    if (argTimeStart !== undefined) query["time_start"] = argTimeStart
    const argTimeEnd = args.timeEnd ?? args["time_end"]
    if (argTimeEnd !== undefined) query["time_end"] = argTimeEnd
    const argLimit = args.limit
    if (argLimit !== undefined) query["limit"] = argLimit
    const argSources = args.sources
    if (argSources !== undefined) query["sources"] = argSources
    let requestPath = '/api/v1/misc/hotboard'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscHotboardResponse
  }

  /** 查询农历时间 */
  async getMiscLunartime(args: GetMiscLunartimeArgs = {} as GetMiscLunartimeArgs
  ): Promise<GetMiscLunartimeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argTs = args.ts
    if (argTs !== undefined) query["ts"] = argTs
    const argTimezone = args.timezone
    if (argTimezone !== undefined) query["timezone"] = argTimezone
    let requestPath = '/api/v1/misc/lunartime'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscLunartimeResponse
  }

  /** 查询手机归属地 */
  async getMiscPhoneinfo(args: GetMiscPhoneinfoArgs
  ): Promise<GetMiscPhoneinfoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argPhone = args.phone
    if (argPhone !== undefined) query["phone"] = argPhone
    let requestPath = '/api/v1/misc/phoneinfo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscPhoneinfoResponse
  }

  /** 随机数生成 */
  async getMiscRandomnumber(args: GetMiscRandomnumberArgs = {} as GetMiscRandomnumberArgs
  ): Promise<GetMiscRandomnumberResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argMin = args.min
    if (argMin !== undefined) query["min"] = argMin
    const argMax = args.max
    if (argMax !== undefined) query["max"] = argMax
    const argCount = args.count
    if (argCount !== undefined) query["count"] = argCount
    const argAllowRepeat = args.allowRepeat ?? args["allow_repeat"]
    if (argAllowRepeat !== undefined) query["allow_repeat"] = argAllowRepeat
    const argAllowDecimal = args.allowDecimal ?? args["allow_decimal"]
    if (argAllowDecimal !== undefined) query["allow_decimal"] = argAllowDecimal
    const argDecimalPlaces = args.decimalPlaces ?? args["decimal_places"]
    if (argDecimalPlaces !== undefined) query["decimal_places"] = argDecimalPlaces
    let requestPath = '/api/v1/misc/randomnumber'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscRandomnumberResponse
  }

  /** 转换时间戳 (旧版，推荐使用/convert/unixtime) */
  async getMiscTimestamp(args: GetMiscTimestampArgs
  ): Promise<GetMiscTimestampResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argTs = args.ts
    if (argTs !== undefined) query["ts"] = argTs
    let requestPath = '/api/v1/misc/timestamp'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscTimestampResponse
  }

  /** 获取支持的快递公司列表 */
  async getMiscTrackingCarriers(
  ): Promise<GetMiscTrackingCarriersResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/misc/tracking/carriers'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscTrackingCarriersResponse
  }

  /** 识别快递公司 */
  async getMiscTrackingDetect(args: GetMiscTrackingDetectArgs
  ): Promise<GetMiscTrackingDetectResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argTrackingNumber = args.trackingNumber ?? args["tracking_number"]
    if (argTrackingNumber !== undefined) query["tracking_number"] = argTrackingNumber
    let requestPath = '/api/v1/misc/tracking/detect'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscTrackingDetectResponse
  }

  /** 查询快递物流信息 */
  async getMiscTrackingQuery(args: GetMiscTrackingQueryArgs
  ): Promise<GetMiscTrackingQueryResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argTrackingNumber = args.trackingNumber ?? args["tracking_number"]
    if (argTrackingNumber !== undefined) query["tracking_number"] = argTrackingNumber
    const argCarrierCode = args.carrierCode ?? args["carrier_code"]
    if (argCarrierCode !== undefined) query["carrier_code"] = argCarrierCode
    const argPhone = args.phone
    if (argPhone !== undefined) query["phone"] = argPhone
    let requestPath = '/api/v1/misc/tracking/query'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscTrackingQueryResponse
  }

  /** 查询天气 */
  async getMiscWeather(args: GetMiscWeatherArgs = {} as GetMiscWeatherArgs
  ): Promise<GetMiscWeatherResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argCity = args.city
    if (argCity !== undefined) query["city"] = argCity
    const argAdcode = args.adcode
    if (argAdcode !== undefined) query["adcode"] = argAdcode
    const argExtended = args.extended
    if (argExtended !== undefined) query["extended"] = argExtended
    const argForecast = args.forecast
    if (argForecast !== undefined) query["forecast"] = argForecast
    const argHourly = args.hourly
    if (argHourly !== undefined) query["hourly"] = argHourly
    const argMinutely = args.minutely
    if (argMinutely !== undefined) query["minutely"] = argMinutely
    const argIndices = args.indices
    if (argIndices !== undefined) query["indices"] = argIndices
    const argLang = args.lang
    if (argLang !== undefined) query["lang"] = argLang
    let requestPath = '/api/v1/misc/weather'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscWeatherResponse
  }

  /** 查询世界时间 */
  async getMiscWorldtime(args: GetMiscWorldtimeArgs
  ): Promise<GetMiscWorldtimeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argCity = args.city
    if (argCity !== undefined) query["city"] = argCity
    let requestPath = '/api/v1/misc/worldtime'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetMiscWorldtimeResponse
  }

  /** 计算两个日期之间的时间差值 */
  async postMiscDateDiff(args: PostMiscDateDiffArgs
  ): Promise<PostMiscDateDiffResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argEndDate = args.endDate ?? args["end_date"]
    if (argEndDate !== undefined) body["end_date"] = argEndDate
    const argFormat = args.format
    if (argFormat !== undefined) body["format"] = argFormat
    const argStartDate = args.startDate ?? args["start_date"]
    if (argStartDate !== undefined) body["start_date"] = argStartDate
    let requestPath = '/api/v1/misc/date-diff'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostMiscDateDiffResponse
  }
}
export class NetworkApi {
  constructor(private http: HTTP) {}

  /** 执行DNS解析查询 */
  async getNetworkDns(args: GetNetworkDnsArgs
  ): Promise<GetNetworkDnsResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argDomain = args.domain
    if (argDomain !== undefined) query["domain"] = argDomain
    const argType = args.type
    if (argType !== undefined) query["type"] = argType
    let requestPath = '/api/v1/network/dns'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkDnsResponse
  }

  /** 查询域名ICP备案信息 */
  async getNetworkIcp(args: GetNetworkIcpArgs
  ): Promise<GetNetworkIcpResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argDomain = args.domain
    if (argDomain !== undefined) query["domain"] = argDomain
    let requestPath = '/api/v1/network/icp'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkIcpResponse
  }

  /** 查询 IP */
  async getNetworkIpinfo(args: GetNetworkIpinfoArgs
  ): Promise<GetNetworkIpinfoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argIp = args.ip
    if (argIp !== undefined) query["ip"] = argIp
    const argSource = args.source
    if (argSource !== undefined) query["source"] = argSource
    let requestPath = '/api/v1/network/ipinfo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkIpinfoResponse
  }

  /** 查询我的 IP */
  async getNetworkMyip(args: GetNetworkMyipArgs = {} as GetNetworkMyipArgs
  ): Promise<GetNetworkMyipResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argSource = args.source
    if (argSource !== undefined) query["source"] = argSource
    let requestPath = '/api/v1/network/myip'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkMyipResponse
  }

  /** Ping 主机 */
  async getNetworkPing(args: GetNetworkPingArgs
  ): Promise<GetNetworkPingResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argHost = args.host
    if (argHost !== undefined) query["host"] = argHost
    let requestPath = '/api/v1/network/ping'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkPingResponse
  }

  /** Ping 我的 IP */
  async getNetworkPingmyip(
  ): Promise<GetNetworkPingmyipResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/network/pingmyip'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkPingmyipResponse
  }

  /** 端口扫描 */
  async getNetworkPortscan(args: GetNetworkPortscanArgs
  ): Promise<GetNetworkPortscanResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argHost = args.host
    if (argHost !== undefined) query["host"] = argHost
    const argPort = args.port
    if (argPort !== undefined) query["port"] = argPort
    const argProtocol = args.protocol
    if (argProtocol !== undefined) query["protocol"] = argProtocol
    let requestPath = '/api/v1/network/portscan'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkPortscanResponse
  }

  /** 检查URL的可访问性状态 */
  async getNetworkUrlstatus(args: GetNetworkUrlstatusArgs
  ): Promise<GetNetworkUrlstatusResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argUrl = args.url
    if (argUrl !== undefined) query["url"] = argUrl
    let requestPath = '/api/v1/network/urlstatus'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkUrlstatusResponse
  }

  /** 查询域名的WHOIS注册信息 */
  async getNetworkWhois(args: GetNetworkWhoisArgs
  ): Promise<GetNetworkWhoisResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argDomain = args.domain
    if (argDomain !== undefined) query["domain"] = argDomain
    const argFormat = args.format
    if (argFormat !== undefined) query["format"] = argFormat
    let requestPath = '/api/v1/network/whois'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkWhoisResponse
  }

  /** 检查域名在微信中的访问状态 */
  async getNetworkWxdomain(args: GetNetworkWxdomainArgs
  ): Promise<GetNetworkWxdomainResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argDomain = args.domain
    if (argDomain !== undefined) query["domain"] = argDomain
    let requestPath = '/api/v1/network/wxdomain'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetNetworkWxdomainResponse
  }
}
export class PoemApi {
  constructor(private http: HTTP) {}

  /** 一言 */
  async getSaying(
  ): Promise<GetSayingResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/saying'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSayingResponse
  }
}
export class RandomApi {
  constructor(private http: HTTP) {}

  /** 答案之书 */
  async getAnswerbookAsk(args: GetAnswerbookAskArgs
  ): Promise<GetAnswerbookAskResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argQuestion = args.question
    if (argQuestion !== undefined) query["question"] = argQuestion
    let requestPath = '/api/v1/answerbook/ask'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetAnswerbookAskResponse
  }

  /** 随机图片 */
  async getRandomImage(args: GetRandomImageArgs = {} as GetRandomImageArgs
  ): Promise<GetRandomImageResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argCategory = args.category
    if (argCategory !== undefined) query["category"] = argCategory
    const argType = args.type
    if (argType !== undefined) query["type"] = argType
    let requestPath = '/api/v1/random/image'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'arrayBuffer',
    ) as GetRandomImageResponse
  }

  /** 随机字符串 */
  async getRandomString(args: GetRandomStringArgs = {} as GetRandomStringArgs
  ): Promise<GetRandomStringResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argLength = args.length
    if (argLength !== undefined) query["length"] = argLength
    const argType = args.type
    if (argType !== undefined) query["type"] = argType
    let requestPath = '/api/v1/random/string'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetRandomStringResponse
  }

  /** 答案之书 (POST) */
  async postAnswerbookAsk(args: PostAnswerbookAskArgs
  ): Promise<PostAnswerbookAskResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argQuestion = args.question
    if (argQuestion !== undefined) body["question"] = argQuestion
    let requestPath = '/api/v1/answerbook/ask'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostAnswerbookAskResponse
  }
}
export class SocialApi {
  constructor(private http: HTTP) {}

  /** 查询 GitHub 仓库 */
  async getGithubRepo(args: GetGithubRepoArgs
  ): Promise<GetGithubRepoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argRepo = args.repo
    if (argRepo !== undefined) query["repo"] = argRepo
    let requestPath = '/api/v1/github/repo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetGithubRepoResponse
  }

  /** 查询 B站投稿 */
  async getSocialBilibiliArchives(args: GetSocialBilibiliArchivesArgs
  ): Promise<GetSocialBilibiliArchivesResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argMid = args.mid
    if (argMid !== undefined) query["mid"] = argMid
    const argKeywords = args.keywords
    if (argKeywords !== undefined) query["keywords"] = argKeywords
    const argOrderby = args.orderby
    if (argOrderby !== undefined) query["orderby"] = argOrderby
    const argPs = args.ps
    if (argPs !== undefined) query["ps"] = argPs
    const argPn = args.pn
    if (argPn !== undefined) query["pn"] = argPn
    let requestPath = '/api/v1/social/bilibili/archives'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSocialBilibiliArchivesResponse
  }

  /** 查询 B站直播间 */
  async getSocialBilibiliLiveroom(args: GetSocialBilibiliLiveroomArgs = {} as GetSocialBilibiliLiveroomArgs
  ): Promise<GetSocialBilibiliLiveroomResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argMid = args.mid
    if (argMid !== undefined) query["mid"] = argMid
    const argRoomId = args.roomId ?? args["room_id"]
    if (argRoomId !== undefined) query["room_id"] = argRoomId
    let requestPath = '/api/v1/social/bilibili/liveroom'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSocialBilibiliLiveroomResponse
  }

  /** 查询 B站评论 */
  async getSocialBilibiliReplies(args: GetSocialBilibiliRepliesArgs
  ): Promise<GetSocialBilibiliRepliesResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argOid = args.oid
    if (argOid !== undefined) query["oid"] = argOid
    const argSort = args.sort
    if (argSort !== undefined) query["sort"] = argSort
    const argPs = args.ps
    if (argPs !== undefined) query["ps"] = argPs
    const argPn = args.pn
    if (argPn !== undefined) query["pn"] = argPn
    let requestPath = '/api/v1/social/bilibili/replies'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSocialBilibiliRepliesResponse
  }

  /** 查询 B站用户 */
  async getSocialBilibiliUserinfo(args: GetSocialBilibiliUserinfoArgs
  ): Promise<GetSocialBilibiliUserinfoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argUid = args.uid
    if (argUid !== undefined) query["uid"] = argUid
    let requestPath = '/api/v1/social/bilibili/userinfo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSocialBilibiliUserinfoResponse
  }

  /** 查询 B站视频 */
  async getSocialBilibiliVideoinfo(args: GetSocialBilibiliVideoinfoArgs = {} as GetSocialBilibiliVideoinfoArgs
  ): Promise<GetSocialBilibiliVideoinfoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argAid = args.aid
    if (argAid !== undefined) query["aid"] = argAid
    const argBvid = args.bvid
    if (argBvid !== undefined) query["bvid"] = argBvid
    let requestPath = '/api/v1/social/bilibili/videoinfo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSocialBilibiliVideoinfoResponse
  }

  /** 查询 QQ 群信息 */
  async getSocialQqGroupinfo(args: GetSocialQqGroupinfoArgs
  ): Promise<GetSocialQqGroupinfoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argGroupId = args.groupId ?? args["group_id"]
    if (argGroupId !== undefined) query["group_id"] = argGroupId
    let requestPath = '/api/v1/social/qq/groupinfo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSocialQqGroupinfoResponse
  }

  /** 查询 QQ 信息 */
  async getSocialQqUserinfo(args: GetSocialQqUserinfoArgs
  ): Promise<GetSocialQqUserinfoResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argQq = args.qq
    if (argQq !== undefined) query["qq"] = argQq
    let requestPath = '/api/v1/social/qq/userinfo'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSocialQqUserinfoResponse
  }
}
export class StatusApi {
  constructor(private http: HTTP) {}

  /** 限流状态 */
  async getStatusRatelimit(args: GetStatusRatelimitArgs
  ): Promise<GetStatusRatelimitResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argAuthorization = args.authorization ?? args["Authorization"]
    if (argAuthorization !== undefined) headers["Authorization"] = String(argAuthorization)
    let requestPath = '/api/v1/status/ratelimit'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetStatusRatelimitResponse
  }

  /** 获取API端点使用统计 */
  async getStatusUsage(args: GetStatusUsageArgs = {} as GetStatusUsageArgs
  ): Promise<GetStatusUsageResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argPath = args.path
    if (argPath !== undefined) query["path"] = argPath
    let requestPath = '/api/v1/status/usage'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetStatusUsageResponse
  }
}
export class TextApi {
  constructor(private http: HTTP) {}

  /** MD5 哈希 */
  async getTextMd5(args: GetTextMd5Args
  ): Promise<GetTextMd5Response> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argText = args.text
    if (argText !== undefined) query["text"] = argText
    let requestPath = '/api/v1/text/md5'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetTextMd5Response
  }

  /** AES 解密 */
  async postTextAesDecrypt(args: PostTextAesDecryptArgs
  ): Promise<PostTextAesDecryptResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argKey = args.key
    if (argKey !== undefined) body["key"] = argKey
    const argNonce = args.nonce
    if (argNonce !== undefined) body["nonce"] = argNonce
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/aes/decrypt'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextAesDecryptResponse
  }

  /** AES高级解密 */
  async postTextAesDecryptAdvanced(args: PostTextAesDecryptAdvancedArgs
  ): Promise<PostTextAesDecryptAdvancedResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argIv = args.iv
    if (argIv !== undefined) body["iv"] = argIv
    const argKey = args.key
    if (argKey !== undefined) body["key"] = argKey
    const argMode = args.mode
    if (argMode !== undefined) body["mode"] = argMode
    const argPadding = args.padding
    if (argPadding !== undefined) body["padding"] = argPadding
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/aes/decrypt-advanced'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextAesDecryptAdvancedResponse
  }

  /** AES 加密 */
  async postTextAesEncrypt(args: PostTextAesEncryptArgs
  ): Promise<PostTextAesEncryptResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argKey = args.key
    if (argKey !== undefined) body["key"] = argKey
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/aes/encrypt'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextAesEncryptResponse
  }

  /** AES高级加密 */
  async postTextAesEncryptAdvanced(args: PostTextAesEncryptAdvancedArgs
  ): Promise<PostTextAesEncryptAdvancedResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argIv = args.iv
    if (argIv !== undefined) body["iv"] = argIv
    const argKey = args.key
    if (argKey !== undefined) body["key"] = argKey
    const argMode = args.mode
    if (argMode !== undefined) body["mode"] = argMode
    const argOutputFormat = args.outputFormat ?? args["output_format"]
    if (argOutputFormat !== undefined) body["output_format"] = argOutputFormat
    const argPadding = args.padding
    if (argPadding !== undefined) body["padding"] = argPadding
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/aes/encrypt-advanced'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextAesEncryptAdvancedResponse
  }

  /** 文本分析 */
  async postTextAnalyze(args: PostTextAnalyzeArgs
  ): Promise<PostTextAnalyzeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/analyze'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextAnalyzeResponse
  }

  /** Base64 解码 */
  async postTextBase64Decode(args: PostTextBase64DecodeArgs
  ): Promise<PostTextBase64DecodeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/base64/decode'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextBase64DecodeResponse
  }

  /** Base64 编码 */
  async postTextBase64Encode(args: PostTextBase64EncodeArgs
  ): Promise<PostTextBase64EncodeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/base64/encode'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextBase64EncodeResponse
  }

  /** 格式转换 */
  async postTextConvert(args: PostTextConvertArgs
  ): Promise<PostTextConvertResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argFrom = args.from
    if (argFrom !== undefined) body["from"] = argFrom
    const argOptions = args.options
    if (argOptions !== undefined) body["options"] = argOptions
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    const argTo = args.to
    if (argTo !== undefined) body["to"] = argTo
    let requestPath = '/api/v1/text/convert'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextConvertResponse
  }

  /** MD5 哈希 (POST) */
  async postTextMd5(args: PostTextMd5Args
  ): Promise<PostTextMd5Response> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/md5'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextMd5Response
  }

  /** MD5 校验 */
  async postTextMd5Verify(args: PostTextMd5VerifyArgs
  ): Promise<PostTextMd5VerifyResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argHash = args.hash
    if (argHash !== undefined) body["hash"] = argHash
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/md5/verify'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTextMd5VerifyResponse
  }
}
export class TranslateApi {
  constructor(private http: HTTP) {}

  /** AI翻译配置 */
  async getAiTranslateLanguages(
  ): Promise<GetAiTranslateLanguagesResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/ai/translate/languages'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetAiTranslateLanguagesResponse
  }

  /** AI智能翻译 */
  async postAiTranslate(args: PostAiTranslateArgs
  ): Promise<PostAiTranslateResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argTargetLang = args.targetLang ?? args["target_lang"]
    if (argTargetLang !== undefined) query["target_lang"] = argTargetLang
    const argContext = args.context
    if (argContext !== undefined) body["context"] = argContext
    const argPreserveFormat = args.preserveFormat ?? args["preserve_format"]
    if (argPreserveFormat !== undefined) body["preserve_format"] = argPreserveFormat
    const argSourceLang = args.sourceLang ?? args["source_lang"]
    if (argSourceLang !== undefined) body["source_lang"] = argSourceLang
    const argStyle = args.style
    if (argStyle !== undefined) body["style"] = argStyle
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/ai/translate'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostAiTranslateResponse
  }

  /** 流式翻译（中英互译） */
  async postTranslateStream(args: PostTranslateStreamArgs
  ): Promise<PostTranslateStreamResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argFromLang = args.fromLang ?? args["from_lang"]
    if (argFromLang !== undefined) body["from_lang"] = argFromLang
    const argQuery = args.query
    if (argQuery !== undefined) body["query"] = argQuery
    const argToLang = args.toLang ?? args["to_lang"]
    if (argToLang !== undefined) body["to_lang"] = argToLang
    const argTone = args.tone
    if (argTone !== undefined) body["tone"] = argTone
    let requestPath = '/api/v1/translate/stream'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTranslateStreamResponse
  }

  /** 翻译 */
  async postTranslateText(args: PostTranslateTextArgs
  ): Promise<PostTranslateTextResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argToLang = args.toLang ?? args["to_lang"]
    if (argToLang !== undefined) query["to_lang"] = argToLang
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/translate/text'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostTranslateTextResponse
  }
}
export class WebparseApi {
  constructor(private http: HTTP) {}

  /** 转换任务状态 */
  async getWebTomarkdownAsyncStatus(args: GetWebTomarkdownAsyncStatusArgs
  ): Promise<GetWebTomarkdownAsyncStatusResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argTaskId = args.taskId ?? args["task_id"]
    let requestPath = '/api/v1/web/tomarkdown/async/{task_id}'
    if (argTaskId !== undefined) requestPath = requestPath.replace('{'+ 'task_id' +'}', String(argTaskId))
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetWebTomarkdownAsyncStatusResponse
  }

  /** 提取网页图片 */
  async getWebparseExtractimages(args: GetWebparseExtractimagesArgs
  ): Promise<GetWebparseExtractimagesResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argUrl = args.url
    if (argUrl !== undefined) query["url"] = argUrl
    let requestPath = '/api/v1/webparse/extractimages'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetWebparseExtractimagesResponse
  }

  /** 提取网页元数据 */
  async getWebparseMetadata(args: GetWebparseMetadataArgs
  ): Promise<GetWebparseMetadataResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argUrl = args.url
    if (argUrl !== undefined) query["url"] = argUrl
    let requestPath = '/api/v1/webparse/metadata'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetWebparseMetadataResponse
  }

  /** 网页转 Markdown */
  async postWebTomarkdownAsync(args: PostWebTomarkdownAsyncArgs
  ): Promise<PostWebTomarkdownAsyncResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argUrl = args.url
    if (argUrl !== undefined) query["url"] = argUrl
    let requestPath = '/api/v1/web/tomarkdown/async'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostWebTomarkdownAsyncResponse
  }
}
export class MinGanCiShiBieApi {
  constructor(private http: HTTP) {}

  /** 敏感词分析 (GET) */
  async getSensitiveWordAnalyzeQuery(args: GetSensitiveWordAnalyzeQueryArgs
  ): Promise<GetSensitiveWordAnalyzeQueryResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argKeyword = args.keyword
    if (argKeyword !== undefined) query["keyword"] = argKeyword
    let requestPath = '/api/v1/sensitive-word/analyze-query'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSensitiveWordAnalyzeQueryResponse
  }

  /** 分析敏感词 */
  async postSensitiveWordAnalyze(args: PostSensitiveWordAnalyzeArgs
  ): Promise<PostSensitiveWordAnalyzeResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argKeywords = args.keywords
    if (argKeywords !== undefined) body["keywords"] = argKeywords
    let requestPath = '/api/v1/sensitive-word/analyze'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostSensitiveWordAnalyzeResponse
  }

  /** 敏感词检测（快速） */
  async postSensitiveWordQuickCheck(args: PostSensitiveWordQuickCheckArgs
  ): Promise<PostSensitiveWordQuickCheckResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argText = args.text
    if (argText !== undefined) body["text"] = argText
    let requestPath = '/api/v1/text/profanitycheck'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostSensitiveWordQuickCheckResponse
  }
}
export class ZhiNengSouSuoApi {
  constructor(private http: HTTP) {}

  /** 搜索引擎配置 */
  async getSearchEngines(
  ): Promise<GetSearchEnginesResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    let requestPath = '/api/v1/search/engines'
    return await this.http.request(
      'GET',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as GetSearchEnginesResponse
  }

  /** 智能搜索 */
  async postSearchAggregate(args: PostSearchAggregateArgs
  ): Promise<PostSearchAggregateResponse> {
    const query: Record<string, unknown> = {}
    const headers: Record<string, string> = {}
    const body: Record<string, unknown> = {}
    const argFetchFull = args.fetchFull ?? args["fetch_full"]
    if (argFetchFull !== undefined) body["fetch_full"] = argFetchFull
    const argFiletype = args.filetype
    if (argFiletype !== undefined) body["filetype"] = argFiletype
    const argQuery = args.query
    if (argQuery !== undefined) body["query"] = argQuery
    const argSite = args.site
    if (argSite !== undefined) body["site"] = argSite
    const argSort = args.sort
    if (argSort !== undefined) body["sort"] = argSort
    const argTimeRange = args.timeRange ?? args["time_range"]
    if (argTimeRange !== undefined) body["time_range"] = argTimeRange
    const argTimeoutMs = args.timeoutMs ?? args["timeout_ms"]
    if (argTimeoutMs !== undefined) body["timeout_ms"] = argTimeoutMs
    let requestPath = '/api/v1/search/aggregate'
    return await this.http.request(
      'POST',
      requestPath,
      Object.keys(query).length > 0 ? query : undefined,
      Object.keys(body).length > 0 ? body : undefined,
      Object.keys(headers).length > 0 ? headers : undefined,
      'json',
    ) as PostSearchAggregateResponse
  }
}
