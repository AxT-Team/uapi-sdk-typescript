import axios, { AxiosInstance } from 'axios'
import { UapiError, mapError } from './errors.js'

type Config = { baseURL: string; token?: string; timeout?: number }

class HTTP {
  private cli: AxiosInstance
  constructor(cfg: Config) {
    this.cli = axios.create({ baseURL: cfg.baseURL, timeout: cfg.timeout ?? 15000 })
    if (cfg.token) this.cli.defaults.headers.common['Authorization'] = `Bearer ${cfg.token}`
  }
  async request(method: string, path: string, params?: any, body?: any) {
    try {
      const res = await this.cli.request({ method, url: path, params, data: body })
      return res.data
    } catch (e:any) {
      if (e.response) throw mapError(e.response, e.response.data)
      throw new UapiError('API_ERROR', 500, e.message)
    }
  }
}

// facade per tag
export class UapiClient {
  private http: HTTP
  constructor(baseURL: string, token?: string) {
    this.http = new HTTP({ baseURL, token })
    { 
      const facade = new ClipzyZaiXianJianTieBanApi(this.http)
      ;(this as any).clipzyZaiXianJianTieBan = facade
      ;(this as any)["Clipzy 在线剪贴板"] = facade
    }
    { 
      const facade = new ConvertApi(this.http)
      ;(this as any).convert = facade
      ;(this as any)["Convert"] = facade
    }
    { 
      const facade = new DailyApi(this.http)
      ;(this as any).daily = facade
      ;(this as any)["Daily"] = facade
    }
    { 
      const facade = new GameApi(this.http)
      ;(this as any).game = facade
      ;(this as any)["Game"] = facade
    }
    { 
      const facade = new ImageApi(this.http)
      ;(this as any).image = facade
      ;(this as any)["Image"] = facade
    }
    { 
      const facade = new MiscApi(this.http)
      ;(this as any).misc = facade
      ;(this as any)["Misc"] = facade
    }
    { 
      const facade = new NetworkApi(this.http)
      ;(this as any).network = facade
      ;(this as any)["Network"] = facade
    }
    { 
      const facade = new PoemApi(this.http)
      ;(this as any).poem = facade
      ;(this as any)["Poem"] = facade
    }
    { 
      const facade = new RandomApi(this.http)
      ;(this as any).random = facade
      ;(this as any)["Random"] = facade
    }
    { 
      const facade = new SocialApi(this.http)
      ;(this as any).social = facade
      ;(this as any)["Social"] = facade
    }
    { 
      const facade = new StatusApi(this.http)
      ;(this as any).status = facade
      ;(this as any)["Status"] = facade
    }
    { 
      const facade = new TextApi(this.http)
      ;(this as any).text = facade
      ;(this as any)["Text"] = facade
    }
    { 
      const facade = new TranslateApi(this.http)
      ;(this as any).translate = facade
      ;(this as any)["Translate"] = facade
    }
    { 
      const facade = new WebparseApi(this.http)
      ;(this as any).webparse = facade
      ;(this as any)["WebParse"] = facade
    }
    { 
      const facade = new MinGanCiShiBieApi(this.http)
      ;(this as any).minGanCiShiBie = facade
      ;(this as any)["敏感词识别"] = facade
    }
    { 
      const facade = new ZhiNengSouSuoApi(this.http)
      ;(this as any).zhiNengSouSuo = facade
      ;(this as any)["智能搜索"] = facade
    }
  }
}
class ClipzyZaiXianJianTieBanApi {
  constructor(private http: HTTP) {}
  /** 步骤2 (方法一): 获取加密数据 */
  async getClipzyGet(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["id"] !== undefined) params["id"] = args["id"]
    let path = '/api/v1/api/get'
    return await this.http.request('GET', path, params)
  }
  /** 步骤2 (方法二): 获取原始文本 */
  async getClipzyRaw(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["key"] !== undefined) params["key"] = args["key"]
    let path = '/api/v1/api/raw/{id}'
    if (args['id'] !== undefined) path = path.replace('{' + 'id' + '}', String(args['id']))
    return await this.http.request('GET', path, params)
  }
  /** 步骤1：上传加密数据 */
  async postClipzyStore(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/api/store'
    return await this.http.request('POST', path, params)
  }
}
class ConvertApi {
  constructor(private http: HTTP) {}
  /** Unix时间戳与日期字符串双向转换 */
  async getConvertUnixtime(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["time"] !== undefined) params["time"] = args["time"]
    let path = '/api/v1/convert/unixtime'
    return await this.http.request('GET', path, params)
  }
  /** 美化并格式化JSON字符串 */
  async postConvertJson(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/convert/json'
    return await this.http.request('POST', path, params)
  }
}
class DailyApi {
  constructor(private http: HTTP) {}
  /** 生成每日新闻摘要图片 */
  async getDailyNewsImage(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/daily/news-image'
    return await this.http.request('GET', path, params)
  }
}
class GameApi {
  constructor(private http: HTTP) {}
  /** 获取Epic Games免费游戏 */
  async getGameEpicFree(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/game/epic-free'
    return await this.http.request('GET', path, params)
  }
  /** 查询Minecraft玩家历史用户名 */
  async getGameMinecraftHistoryid(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["uuid"] !== undefined) params["uuid"] = args["uuid"]
    let path = '/api/v1/game/minecraft/historyid'
    return await this.http.request('GET', path, params)
  }
  /** 查询Minecraft服务器状态 */
  async getGameMinecraftServerstatus(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["server"] !== undefined) params["server"] = args["server"]
    let path = '/api/v1/game/minecraft/serverstatus'
    return await this.http.request('GET', path, params)
  }
  /** 查询Minecraft玩家信息 */
  async getGameMinecraftUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["username"] !== undefined) params["username"] = args["username"]
    let path = '/api/v1/game/minecraft/userinfo'
    return await this.http.request('GET', path, params)
  }
  /** 获取Steam用户公开摘要 */
  async getGameSteamSummary(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["steamid"] !== undefined) params["steamid"] = args["steamid"]
    if (args["id"] !== undefined) params["id"] = args["id"]
    if (args["id3"] !== undefined) params["id3"] = args["id3"]
    if (args["key"] !== undefined) params["key"] = args["key"]
    let path = '/api/v1/game/steam/summary'
    return await this.http.request('GET', path, params)
  }
}
class ImageApi {
  constructor(private http: HTTP) {}
  /** 获取Gravatar头像 */
  async getAvatarGravatar(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["email"] !== undefined) params["email"] = args["email"]
    if (args["hash"] !== undefined) params["hash"] = args["hash"]
    if (args["s"] !== undefined) params["s"] = args["s"]
    if (args["d"] !== undefined) params["d"] = args["d"]
    if (args["r"] !== undefined) params["r"] = args["r"]
    let path = '/api/v1/avatar/gravatar'
    return await this.http.request('GET', path, params)
  }
  /** 获取必应每日壁纸 */
  async getImageBingDaily(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/image/bing-daily'
    return await this.http.request('GET', path, params)
  }
  /** 生成摸摸头GIF (QQ号方式) */
  async getImageMotou(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["qq"] !== undefined) params["qq"] = args["qq"]
    if (args["bg_color"] !== undefined) params["bg_color"] = args["bg_color"]
    let path = '/api/v1/image/motou'
    return await this.http.request('GET', path, params)
  }
  /** 动态生成二维码 */
  async getImageQrcode(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["text"] !== undefined) params["text"] = args["text"]
    if (args["size"] !== undefined) params["size"] = args["size"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    let path = '/api/v1/image/qrcode'
    return await this.http.request('GET', path, params)
  }
  /** 将在线图片转换为Base64 */
  async getImageTobase64(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/image/tobase64'
    return await this.http.request('GET', path, params)
  }
  /** 无损压缩图片 */
  async postImageCompress(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["level"] !== undefined) params["level"] = args["level"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    let path = '/api/v1/image/compress'
    return await this.http.request('POST', path, params)
  }
  /** 通过Base64编码上传图片 */
  async postImageFrombase64(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/image/frombase64'
    return await this.http.request('POST', path, params)
  }
  /** 生成摸摸头GIF (图片上传或URL方式) */
  async postImageMotou(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/image/motou'
    return await this.http.request('POST', path, params)
  }
  /** 生成你们怎么不说话了表情包 */
  async postImageSpeechless(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/image/speechless'
    return await this.http.request('POST', path, params)
  }
  /** SVG转图片 */
  async postImageSvg(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["format"] !== undefined) params["format"] = args["format"]
    if (args["width"] !== undefined) params["width"] = args["width"]
    if (args["height"] !== undefined) params["height"] = args["height"]
    if (args["quality"] !== undefined) params["quality"] = args["quality"]
    let path = '/api/v1/image/svg'
    return await this.http.request('POST', path, params)
  }
}
class MiscApi {
  constructor(private http: HTTP) {}
  /** 获取指定日期的程序员历史事件 */
  async getHistoryProgrammer(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["month"] !== undefined) params["month"] = args["month"]
    if (args["day"] !== undefined) params["day"] = args["day"]
    let path = '/api/v1/history/programmer'
    return await this.http.request('GET', path, params)
  }
  /** 获取今天的程序员历史事件 */
  async getHistoryProgrammerToday(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/history/programmer/today'
    return await this.http.request('GET', path, params)
  }
  /** 获取多平台实时热榜 */
  async getMiscHotboard(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/api/v1/misc/hotboard'
    return await this.http.request('GET', path, params)
  }
  /** 查询手机号码归属地信息 */
  async getMiscPhoneinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["phone"] !== undefined) params["phone"] = args["phone"]
    let path = '/api/v1/misc/phoneinfo'
    return await this.http.request('GET', path, params)
  }
  /** 生成高度可定制的随机数 */
  async getMiscRandomnumber(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["min"] !== undefined) params["min"] = args["min"]
    if (args["max"] !== undefined) params["max"] = args["max"]
    if (args["count"] !== undefined) params["count"] = args["count"]
    if (args["allow_repeat"] !== undefined) params["allow_repeat"] = args["allow_repeat"]
    if (args["allow_decimal"] !== undefined) params["allow_decimal"] = args["allow_decimal"]
    if (args["decimal_places"] !== undefined) params["decimal_places"] = args["decimal_places"]
    let path = '/api/v1/misc/randomnumber'
    return await this.http.request('GET', path, params)
  }
  /** 转换时间戳 (旧版，推荐使用/convert/unixtime) */
  async getMiscTimestamp(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["ts"] !== undefined) params["ts"] = args["ts"]
    let path = '/api/v1/misc/timestamp'
    return await this.http.request('GET', path, params)
  }
  /** 获取支持的快递公司列表 */
  async getMiscTrackingCarriers(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/misc/tracking/carriers'
    return await this.http.request('GET', path, params)
  }
  /** 识别快递公司 */
  async getMiscTrackingDetect(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["tracking_number"] !== undefined) params["tracking_number"] = args["tracking_number"]
    let path = '/api/v1/misc/tracking/detect'
    return await this.http.request('GET', path, params)
  }
  /** 查询快递物流信息 */
  async getMiscTrackingQuery(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["tracking_number"] !== undefined) params["tracking_number"] = args["tracking_number"]
    if (args["carrier_code"] !== undefined) params["carrier_code"] = args["carrier_code"]
    let path = '/api/v1/misc/tracking/query'
    return await this.http.request('GET', path, params)
  }
  /** 查询实时天气信息 */
  async getMiscWeather(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["city"] !== undefined) params["city"] = args["city"]
    if (args["adcode"] !== undefined) params["adcode"] = args["adcode"]
    let path = '/api/v1/misc/weather'
    return await this.http.request('GET', path, params)
  }
  /** 查询全球任意时区的时间 */
  async getMiscWorldtime(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["city"] !== undefined) params["city"] = args["city"]
    let path = '/api/v1/misc/worldtime'
    return await this.http.request('GET', path, params)
  }
}
class NetworkApi {
  constructor(private http: HTTP) {}
  /** 执行DNS解析查询 */
  async getNetworkDns(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/api/v1/network/dns'
    return await this.http.request('GET', path, params)
  }
  /** 查询域名ICP备案信息 */
  async getNetworkIcp(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    let path = '/api/v1/network/icp'
    return await this.http.request('GET', path, params)
  }
  /** 查询指定IP或域名的归属信息 */
  async getNetworkIpinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["ip"] !== undefined) params["ip"] = args["ip"]
    if (args["source"] !== undefined) params["source"] = args["source"]
    let path = '/api/v1/network/ipinfo'
    return await this.http.request('GET', path, params)
  }
  /** 获取你的公网IP及归属信息 */
  async getNetworkMyip(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["source"] !== undefined) params["source"] = args["source"]
    let path = '/api/v1/network/myip'
    return await this.http.request('GET', path, params)
  }
  /** 从服务器Ping指定主机 */
  async getNetworkPing(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["host"] !== undefined) params["host"] = args["host"]
    let path = '/api/v1/network/ping'
    return await this.http.request('GET', path, params)
  }
  /** 从服务器Ping你的客户端IP */
  async getNetworkPingmyip(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/network/pingmyip'
    return await this.http.request('GET', path, params)
  }
  /** 扫描远程主机的指定端口 */
  async getNetworkPortscan(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["host"] !== undefined) params["host"] = args["host"]
    if (args["port"] !== undefined) params["port"] = args["port"]
    if (args["protocol"] !== undefined) params["protocol"] = args["protocol"]
    let path = '/api/v1/network/portscan'
    return await this.http.request('GET', path, params)
  }
  /** 检查URL的可访问性状态 */
  async getNetworkUrlstatus(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/network/urlstatus'
    return await this.http.request('GET', path, params)
  }
  /** 查询域名的WHOIS注册信息 */
  async getNetworkWhois(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    let path = '/api/v1/network/whois'
    return await this.http.request('GET', path, params)
  }
  /** 检查域名在微信中的访问状态 */
  async getNetworkWxdomain(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    let path = '/api/v1/network/wxdomain'
    return await this.http.request('GET', path, params)
  }
}
class PoemApi {
  constructor(private http: HTTP) {}
  /** 随机获取一句诗词或名言 */
  async getSaying(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/saying'
    return await this.http.request('GET', path, params)
  }
}
class RandomApi {
  constructor(private http: HTTP) {}
  /** 获取答案之书的神秘答案 (GET) */
  async getAnswerbookAsk(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["question"] !== undefined) params["question"] = args["question"]
    let path = '/api/v1/answerbook/ask'
    return await this.http.request('GET', path, params)
  }
  /** 随机二次元、风景、动漫图片壁纸 */
  async getRandomImage(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["category"] !== undefined) params["category"] = args["category"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/api/v1/random/image'
    return await this.http.request('GET', path, params)
  }
  /** 生成高度可定制的随机字符串 */
  async getRandomString(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["length"] !== undefined) params["length"] = args["length"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/api/v1/random/string'
    return await this.http.request('GET', path, params)
  }
  /** 获取答案之书的神秘答案 (POST) */
  async postAnswerbookAsk(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/answerbook/ask'
    return await this.http.request('POST', path, params)
  }
}
class SocialApi {
  constructor(private http: HTTP) {}
  /** 获取GitHub仓库信息 */
  async getGithubRepo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["repo"] !== undefined) params["repo"] = args["repo"]
    let path = '/api/v1/github/repo'
    return await this.http.request('GET', path, params)
  }
  /** 获取Bilibili用户投稿列表 */
  async getSocialBilibiliArchives(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["mid"] !== undefined) params["mid"] = args["mid"]
    if (args["keywords"] !== undefined) params["keywords"] = args["keywords"]
    if (args["orderby"] !== undefined) params["orderby"] = args["orderby"]
    if (args["ps"] !== undefined) params["ps"] = args["ps"]
    if (args["pn"] !== undefined) params["pn"] = args["pn"]
    let path = '/api/v1/social/bilibili/archives'
    return await this.http.request('GET', path, params)
  }
  /** 获取Bilibili直播间信息 */
  async getSocialBilibiliLiveroom(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["mid"] !== undefined) params["mid"] = args["mid"]
    if (args["room_id"] !== undefined) params["room_id"] = args["room_id"]
    let path = '/api/v1/social/bilibili/liveroom'
    return await this.http.request('GET', path, params)
  }
  /** 获取Bilibili视频评论 */
  async getSocialBilibiliReplies(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["oid"] !== undefined) params["oid"] = args["oid"]
    if (args["sort"] !== undefined) params["sort"] = args["sort"]
    if (args["ps"] !== undefined) params["ps"] = args["ps"]
    if (args["pn"] !== undefined) params["pn"] = args["pn"]
    let path = '/api/v1/social/bilibili/replies'
    return await this.http.request('GET', path, params)
  }
  /** 查询Bilibili用户信息 */
  async getSocialBilibiliUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["uid"] !== undefined) params["uid"] = args["uid"]
    let path = '/api/v1/social/bilibili/userinfo'
    return await this.http.request('GET', path, params)
  }
  /** 获取Bilibili视频详细信息 */
  async getSocialBilibiliVideoinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["aid"] !== undefined) params["aid"] = args["aid"]
    if (args["bvid"] !== undefined) params["bvid"] = args["bvid"]
    let path = '/api/v1/social/bilibili/videoinfo'
    return await this.http.request('GET', path, params)
  }
  /** 获取QQ群名称、头像、简介 */
  async getSocialQqGroupinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["group_id"] !== undefined) params["group_id"] = args["group_id"]
    let path = '/api/v1/social/qq/groupinfo'
    return await this.http.request('GET', path, params)
  }
  /** 独家获取QQ号头像、昵称 */
  async getSocialQqUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["qq"] !== undefined) params["qq"] = args["qq"]
    let path = '/api/v1/social/qq/userinfo'
    return await this.http.request('GET', path, params)
  }
}
class StatusApi {
  constructor(private http: HTTP) {}
  /** 获取API限流器实时状态 */
  async getStatusRatelimit(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/status/ratelimit'
    return await this.http.request('GET', path, params)
  }
  /** 获取API端点使用统计 */
  async getStatusUsage(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["path"] !== undefined) params["path"] = args["path"]
    let path = '/api/v1/status/usage'
    return await this.http.request('GET', path, params)
  }
}
class TextApi {
  constructor(private http: HTTP) {}
  /** 计算文本的MD5哈希值(GET) */
  async getTextMd5(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["text"] !== undefined) params["text"] = args["text"]
    let path = '/api/v1/text/md5'
    return await this.http.request('GET', path, params)
  }
  /** 使用AES算法解密文本 */
  async postTextAesDecrypt(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/aes/decrypt'
    return await this.http.request('POST', path, params)
  }
  /** 使用AES算法加密文本 */
  async postTextAesEncrypt(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/aes/encrypt'
    return await this.http.request('POST', path, params)
  }
  /** 多维度分析文本内容 */
  async postTextAnalyze(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/analyze'
    return await this.http.request('POST', path, params)
  }
  /** 解码Base64编码的文本 */
  async postTextBase64Decode(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/base64/decode'
    return await this.http.request('POST', path, params)
  }
  /** 将文本进行Base64编码 */
  async postTextBase64Encode(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/base64/encode'
    return await this.http.request('POST', path, params)
  }
  /** 计算文本的MD5哈希值 (POST) */
  async postTextMd5(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/md5'
    return await this.http.request('POST', path, params)
  }
  /** 校验MD5哈希值 */
  async postTextMd5Verify(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/md5/verify'
    return await this.http.request('POST', path, params)
  }
}
class TranslateApi {
  constructor(private http: HTTP) {}
  /** 获取AI翻译支持的语言和配置 */
  async getAiTranslateLanguages(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/ai/translate/languages'
    return await this.http.request('GET', path, params)
  }
  /** AI智能翻译 */
  async postAiTranslate(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["target_lang"] !== undefined) params["target_lang"] = args["target_lang"]
    let path = '/api/v1/ai/translate'
    return await this.http.request('POST', path, params)
  }
  /** 流式翻译（中英互译） */
  async postTranslateStream(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/translate/stream'
    return await this.http.request('POST', path, params)
  }
  /** 多语言文本翻译 */
  async postTranslateText(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["to_lang"] !== undefined) params["to_lang"] = args["to_lang"]
    let path = '/api/v1/translate/text'
    return await this.http.request('POST', path, params)
  }
}
class WebparseApi {
  constructor(private http: HTTP) {}
  /** 查询网页转换任务状态和结果 */
  async getWebTomarkdownAsyncStatus(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/web/tomarkdown/async/{task_id}'
    if (args['task_id'] !== undefined) path = path.replace('{' + 'task_id' + '}', String(args['task_id']))
    return await this.http.request('GET', path, params)
  }
  /** 提取网页中的所有图片 */
  async getWebparseExtractimages(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/webparse/extractimages'
    return await this.http.request('GET', path, params)
  }
  /** 抓取并解析网页的元数据 */
  async getWebparseMetadata(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/webparse/metadata'
    return await this.http.request('GET', path, params)
  }
  /** 深度抓取网页转Markdown */
  async postWebTomarkdownAsync(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/web/tomarkdown/async'
    return await this.http.request('POST', path, params)
  }
}
class MinGanCiShiBieApi {
  constructor(private http: HTTP) {}
  /** 查询参数分析 */
  async getSensitiveWordAnalyzeQuery(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["keyword"] !== undefined) params["keyword"] = args["keyword"]
    let path = '/api/v1/sensitive-word/analyze-query'
    return await this.http.request('GET', path, params)
  }
  /** 分析敏感词 */
  async postSensitiveWordAnalyze(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/sensitive-word/analyze'
    return await this.http.request('POST', path, params)
  }
  /** 敏感词检测（快速） */
  async postSensitiveWordQuickCheck(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/text/profanitycheck'
    return await this.http.request('POST', path, params)
  }
}
class ZhiNengSouSuoApi {
  constructor(private http: HTTP) {}
  /** 获取搜索引擎信息 */
  async getSearchEngines(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/search/engines'
    return await this.http.request('GET', path, params)
  }
  /** 智能搜索 */
  async postSearchAggregate(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/v1/search/aggregate'
    return await this.http.request('POST', path, params)
  }
}
