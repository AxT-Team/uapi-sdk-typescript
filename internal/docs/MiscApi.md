# MiscApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getHistoryProgrammer**](#gethistoryprogrammer) | **GET** /history/programmer | 程序员历史事件|
|[**getHistoryProgrammerToday**](#gethistoryprogrammertoday) | **GET** /history/programmer/today | 程序员历史上的今天|
|[**getMiscDistrict**](#getmiscdistrict) | **GET** /misc/district | Adcode 国内外行政区域查询|
|[**getMiscHolidayCalendar**](#getmischolidaycalendar) | **GET** /misc/holiday-calendar | 查询节假日与万年历|
|[**getMiscHotboard**](#getmischotboard) | **GET** /misc/hotboard | 查询热榜|
|[**getMiscLunartime**](#getmisclunartime) | **GET** /misc/lunartime | 查询农历时间|
|[**getMiscPhoneinfo**](#getmiscphoneinfo) | **GET** /misc/phoneinfo | 查询手机归属地|
|[**getMiscRandomnumber**](#getmiscrandomnumber) | **GET** /misc/randomnumber | 随机数生成|
|[**getMiscTimestamp**](#getmisctimestamp) | **GET** /misc/timestamp | 转换时间戳 (旧版，推荐使用/convert/unixtime)|
|[**getMiscTrackingCarriers**](#getmisctrackingcarriers) | **GET** /misc/tracking/carriers | 获取支持的快递公司列表|
|[**getMiscTrackingDetect**](#getmisctrackingdetect) | **GET** /misc/tracking/detect | 识别快递公司|
|[**getMiscTrackingQuery**](#getmisctrackingquery) | **GET** /misc/tracking/query | 查询快递物流信息|
|[**getMiscWeather**](#getmiscweather) | **GET** /misc/weather | 查询天气|
|[**getMiscWorldtime**](#getmiscworldtime) | **GET** /misc/worldtime | 查询世界时间|
|[**postMiscDateDiff**](#postmiscdatediff) | **POST** /misc/date-diff | 计算两个日期之间的时间差值|

# **getHistoryProgrammer**
> GetHistoryProgrammer200Response getHistoryProgrammer()

想查看程序员历史上某个特定日期发生的大事件？指定月份和日期，我们就能告诉你！  ## 功能概述 通过指定月份和日期，获取该日发生的程序员相关历史事件。同样使用AI智能筛选，确保事件的相关性和重要性。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let month: number; //月份，1-12之间的整数。 (default to undefined)
let day: number; //日期，1-31之间的整数。 (default to undefined)

const { status, data } = await apiInstance.getHistoryProgrammer(
    month,
    day
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **month** | [**number**] | 月份，1-12之间的整数。 | defaults to undefined|
| **day** | [**number**] | 日期，1-31之间的整数。 | defaults to undefined|


### Return type

**GetHistoryProgrammer200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 获取成功！返回指定日期的程序员历史事件列表。 |  -  |
|**400** | 请求参数错误。请检查月份和日期参数是否正确。 |  -  |
|**500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHistoryProgrammerToday**
> GetHistoryProgrammerToday200Response getHistoryProgrammerToday()

想知道程序员历史上的今天发生了什么大事吗？这个接口告诉你答案！  ## 功能概述 我们使用AI智能筛选从海量历史事件中挑选出与程序员、计算机科学相关的重要事件。每个事件都经过重要性评分和相关性评分，确保内容质量。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

const { status, data } = await apiInstance.getHistoryProgrammerToday();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetHistoryProgrammerToday200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 获取成功！返回今天的程序员历史事件列表。 |  -  |
|**500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscDistrict**
> GetMiscDistrict200Response getMiscDistrict()

一个接口，覆盖全球 243 个国家、中国省/市/区/街道四级行政区划，支持关键词搜索、行政编码查询、坐标反查三种查询模式（必须至少传入一种查询参数）。  ## 功能概述 根据用户输入的搜索条件快速查找行政区域信息。例如：中国 > 山东省 > 济南市 > 历下区 > 舜华路街道。  无需注册、无需密钥，直接调用即可获取结构化的行政区域数据。支持三种查询方式： - 传 `adcode`，按行政编码精确查询，同时返回下级区划列表 - 传 `lat` + `lng`，坐标反查附近地点 - 传 `keywords`，按关键词搜索，支持中英文  ## 中国与国际数据差异 中国数据包含 `adcode`、`citycode` 等字段，支持省/市/区/街道四级逐级查询；国际城市数据不含这些字段，但额外提供 `population`（人口）和 `timezone`（时区）。  > [!NOTE] > 部分城市（如东莞、文昌）没有区县层级，市级下方直接显示街道。街道级别的 `adcode` 返回的是所属区县的 `adcode`。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let keywords: string; //关键词搜索（城市名、区县名，支持中英文）。 (optional) (default to undefined)
let adcode: string; //中国行政区划代码精确查询（如 `110000`），同时返回下级行政区。 (optional) (default to undefined)
let lat: number; //纬度，与 `lng` 配合使用，坐标反查附近地点。 (optional) (default to undefined)
let lng: number; //经度，与 `lat` 配合使用。 (optional) (default to undefined)
let level: 'province' | 'city' | 'district' | 'street'; //过滤行政级别。 (optional) (default to undefined)
let country: string; //过滤国家代码（ISO 3166-1 alpha-2），如 `CN`、`JP`、`US`、`GB`。 (optional) (default to undefined)
let limit: number; //返回数量上限，默认 `20`，最大 `100`。 (optional) (default to 20)

const { status, data } = await apiInstance.getMiscDistrict(
    keywords,
    adcode,
    lat,
    lng,
    level,
    country,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keywords** | [**string**] | 关键词搜索（城市名、区县名，支持中英文）。 | (optional) defaults to undefined|
| **adcode** | [**string**] | 中国行政区划代码精确查询（如 &#x60;110000&#x60;），同时返回下级行政区。 | (optional) defaults to undefined|
| **lat** | [**number**] | 纬度，与 &#x60;lng&#x60; 配合使用，坐标反查附近地点。 | (optional) defaults to undefined|
| **lng** | [**number**] | 经度，与 &#x60;lat&#x60; 配合使用。 | (optional) defaults to undefined|
| **level** | [**&#39;province&#39; | &#39;city&#39; | &#39;district&#39; | &#39;street&#39;**]**Array<&#39;province&#39; &#124; &#39;city&#39; &#124; &#39;district&#39; &#124; &#39;street&#39;>** | 过滤行政级别。 | (optional) defaults to undefined|
| **country** | [**string**] | 过滤国家代码（ISO 3166-1 alpha-2），如 &#x60;CN&#x60;、&#x60;JP&#x60;、&#x60;US&#x60;、&#x60;GB&#x60;。 | (optional) defaults to undefined|
| **limit** | [**number**] | 返回数量上限，默认 &#x60;20&#x60;，最大 &#x60;100&#x60;。 | (optional) defaults to 20|


### Return type

**GetMiscDistrict200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回匹配的行政区域列表。 |  -  |
|**400** | 请求参数错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscHolidayCalendar**
> GetMiscHolidayCalendar200Response getMiscHolidayCalendar()

查询指定日期、月份或年份的万年历与节假日信息。  ## 功能概述 这个接口支持三种查询方式：按天（`date`）、按月（`month`）和按年（`year`）。调用时三者选一个传入即可。  如果你只关心某一类事件，可以通过 `holiday_type` 进行筛选，例如只看法定休假/调休、公历节日、农历节日或节气。  在 `date` 模式下，传 `include_nearby=true` 可以额外返回该日期前后最近的节日；返回数量由 `nearby_limit` 控制，默认 7，最大 30。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let date: string; //按天查询时填写这个参数，例如查某一天。格式：`YYYY-MM-DD`。和 `month`、`year` 三选一。 (optional) (default to undefined)
let month: string; //按月查询时填写这个参数，例如查某个月。格式：`YYYY-MM`。和 `date`、`year` 三选一。 (optional) (default to undefined)
let year: string; //按年查询时填写这个参数，例如查某一年。格式：`YYYY`。和 `date`、`month` 三选一。 (optional) (default to undefined)
let timezone: string; //时区名称，默认 Asia/Shanghai。 (optional) (default to 'Asia/Shanghai')
let holidayType: 'all' | 'legal' | 'legal_rest' | 'legal_workday' | 'solar' | 'lunar' | 'term'; //节日筛选类型，默认 all。 (optional) (default to 'all')
let includeNearby: boolean; //是否返回前后最近节日，仅 date 模式生效，默认 false。month/year 模式会忽略此参数。 (optional) (default to false)
let nearbyLimit: number; //返回最近节日数量限制，默认 7，最大 30。仅 date 模式 + include_nearby=true 生效。 (optional) (default to 7)

const { status, data } = await apiInstance.getMiscHolidayCalendar(
    date,
    month,
    year,
    timezone,
    holidayType,
    includeNearby,
    nearbyLimit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | 按天查询时填写这个参数，例如查某一天。格式：&#x60;YYYY-MM-DD&#x60;。和 &#x60;month&#x60;、&#x60;year&#x60; 三选一。 | (optional) defaults to undefined|
| **month** | [**string**] | 按月查询时填写这个参数，例如查某个月。格式：&#x60;YYYY-MM&#x60;。和 &#x60;date&#x60;、&#x60;year&#x60; 三选一。 | (optional) defaults to undefined|
| **year** | [**string**] | 按年查询时填写这个参数，例如查某一年。格式：&#x60;YYYY&#x60;。和 &#x60;date&#x60;、&#x60;month&#x60; 三选一。 | (optional) defaults to undefined|
| **timezone** | [**string**] | 时区名称，默认 Asia/Shanghai。 | (optional) defaults to 'Asia/Shanghai'|
| **holidayType** | [**&#39;all&#39; | &#39;legal&#39; | &#39;legal_rest&#39; | &#39;legal_workday&#39; | &#39;solar&#39; | &#39;lunar&#39; | &#39;term&#39;**]**Array<&#39;all&#39; &#124; &#39;legal&#39; &#124; &#39;legal_rest&#39; &#124; &#39;legal_workday&#39; &#124; &#39;solar&#39; &#124; &#39;lunar&#39; &#124; &#39;term&#39;>** | 节日筛选类型，默认 all。 | (optional) defaults to 'all'|
| **includeNearby** | [**boolean**] | 是否返回前后最近节日，仅 date 模式生效，默认 false。month/year 模式会忽略此参数。 | (optional) defaults to false|
| **nearbyLimit** | [**number**] | 返回最近节日数量限制，默认 7，最大 30。仅 date 模式 + include_nearby&#x3D;true 生效。 | (optional) defaults to 7|


### Return type

**GetMiscHolidayCalendar200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功，返回指定范围的万年历与节假日信息。 |  -  |
|**400** | 请求参数错误。常见原因： - &#x60;date&#x60;、&#x60;month&#x60;、&#x60;year&#x60; 未传或同时传入多个 - 日期格式错误：&#x60;date&#x60; 必须为 &#x60;YYYY-MM-DD&#x60;、&#x60;month&#x60; 必须为 &#x60;YYYY-MM&#x60;、&#x60;year&#x60; 必须为 &#x60;YYYY&#x60; - &#x60;holiday_type&#x60; 非法 - &#x60;timezone&#x60; 非法 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscHotboard**
> GetMiscHotboard200Response getMiscHotboard()

想快速跟上网络热点？这个接口让你一网打尽各大主流平台的实时热榜/热搜！  ## 功能概述 你只需要指定一个平台类型，就能获取到该平台当前的热榜数据列表。每个热榜条目都包含标题、热度值和原始链接。非常适合用于制作信息聚合类应用或看板。  ## 三种使用模式  ### 默认模式 只传 `type` 参数，返回该平台当前的实时热榜。  ### 时光机模式 传 `type` + `time` 参数，返回最接近指定时间的热榜快照。如果不可用或无数据，会返回空。  ### 搜索模式 传 `type` + `keyword` + `time_start` + `time_end` 参数，在指定时间范围内搜索包含关键词的热榜条目。可选传 `limit` 限制返回数量。  ### 数据源列表 传 `sources=true`，返回所有支持历史数据的平台列表。  ## 可选值 `type` 参数接受多种不同的值，每种值对应一个不同的热榜来源。以下是目前支持的所有值：  | 分类       | 支持的 type 值 | |------------|-----------------------------------------------------------------------------------------------------------------------------------| | 视频/社区  | bilibili（哔哩哔哩弹幕网）, acfun（A站弹幕视频网站）, weibo（新浪微博热搜）, zhihu（知乎热榜）, zhihu-daily（知乎日报热榜）, douyin（抖音热榜）, kuaishou（快手热榜）, douban-movie（豆瓣电影榜单）, douban-group（豆瓣小组话题）, tieba（百度贴吧热帖）, hupu（虎扑热帖）, ngabbs（NGA游戏论坛热帖）, v2ex（V2EX技术社区热帖）, 52pojie（吾爱破解热帖）, hostloc（全球主机交流论坛）, coolapk（酷安热榜） | | 新闻/资讯  | baidu（百度热搜）, thepaper（澎湃新闻热榜）, toutiao（今日头条热榜）, qq-news（腾讯新闻热榜）, sina（新浪热搜）, sina-news（新浪新闻热榜）, netease-news（网易新闻热榜）, huxiu（虎嗅网热榜）, ifanr（爱范儿热榜） | | 技术/IT    | sspai（少数派热榜）, ithome（IT之家热榜）, ithome-xijiayi（IT之家·喜加一栏目）, juejin（掘金社区热榜）, jianshu（简书热榜）, guokr（果壳热榜）, 36kr（36氪热榜）, 51cto（51CTO热榜）, csdn（CSDN博客热榜）, nodeseek（NodeSeek 技术社区）, hellogithub（HelloGitHub 项目推荐） | | 游戏       | lol（英雄联盟热帖）, genshin（原神热榜）, honkai（崩坏3热榜）, starrail（星穹铁道热榜） | | 音乐       | netease-music（网易云音乐热歌榜）, qq-music（QQ音乐热歌榜） | | 其他       | weread（微信读书热门书籍）, weatheralarm（天气预警信息）, earthquake（地震速报）, history（历史上的今天） | 

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let type: 'bilibili' | 'acfun' | 'weibo' | 'zhihu' | 'zhihu-daily' | 'douyin' | 'kuaishou' | 'douban-movie' | 'douban-group' | 'tieba' | 'hupu' | 'ngabbs' | 'v2ex' | '52pojie' | 'hostloc' | 'coolapk' | 'baidu' | 'thepaper' | 'toutiao' | 'qq-news' | 'sina' | 'sina-news' | 'netease-news' | 'huxiu' | 'ifanr' | 'sspai' | 'ithome' | 'ithome-xijiayi' | 'juejin' | 'jianshu' | 'guokr' | '36kr' | '51cto' | 'csdn' | 'nodeseek' | 'hellogithub' | 'lol' | 'genshin' | 'honkai' | 'starrail' | 'netease-music' | 'qq-music' | 'weread' | 'weatheralarm' | 'earthquake' | 'history'; //你想要查询的热榜平台。支持多种主流平台类型，详见下方[可选值](#可选值)表格。 (default to undefined)
let time: number; //时光机模式：毫秒时间戳，返回最接近该时间的热榜快照。不传则返回当前实时热榜。 (optional) (default to undefined)
let keyword: string; //搜索模式：搜索关键词，在历史热榜中搜索包含该关键词的条目。需配合 time_start 和 time_end 使用。 (optional) (default to undefined)
let timeStart: number; //搜索模式必填：搜索起始时间戳（毫秒）。 (optional) (default to undefined)
let timeEnd: number; //搜索模式必填：搜索结束时间戳（毫秒）。 (optional) (default to undefined)
let limit: number; //搜索模式下最大返回条数，默认 50，最大 200。 (optional) (default to 50)
let sources: boolean; //设为 true 时列出所有可用的历史数据源，忽略其他参数。 (optional) (default to undefined)

const { status, data } = await apiInstance.getMiscHotboard(
    type,
    time,
    keyword,
    timeStart,
    timeEnd,
    limit,
    sources
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;bilibili&#39; | &#39;acfun&#39; | &#39;weibo&#39; | &#39;zhihu&#39; | &#39;zhihu-daily&#39; | &#39;douyin&#39; | &#39;kuaishou&#39; | &#39;douban-movie&#39; | &#39;douban-group&#39; | &#39;tieba&#39; | &#39;hupu&#39; | &#39;ngabbs&#39; | &#39;v2ex&#39; | &#39;52pojie&#39; | &#39;hostloc&#39; | &#39;coolapk&#39; | &#39;baidu&#39; | &#39;thepaper&#39; | &#39;toutiao&#39; | &#39;qq-news&#39; | &#39;sina&#39; | &#39;sina-news&#39; | &#39;netease-news&#39; | &#39;huxiu&#39; | &#39;ifanr&#39; | &#39;sspai&#39; | &#39;ithome&#39; | &#39;ithome-xijiayi&#39; | &#39;juejin&#39; | &#39;jianshu&#39; | &#39;guokr&#39; | &#39;36kr&#39; | &#39;51cto&#39; | &#39;csdn&#39; | &#39;nodeseek&#39; | &#39;hellogithub&#39; | &#39;lol&#39; | &#39;genshin&#39; | &#39;honkai&#39; | &#39;starrail&#39; | &#39;netease-music&#39; | &#39;qq-music&#39; | &#39;weread&#39; | &#39;weatheralarm&#39; | &#39;earthquake&#39; | &#39;history&#39;**]**Array<&#39;bilibili&#39; &#124; &#39;acfun&#39; &#124; &#39;weibo&#39; &#124; &#39;zhihu&#39; &#124; &#39;zhihu-daily&#39; &#124; &#39;douyin&#39; &#124; &#39;kuaishou&#39; &#124; &#39;douban-movie&#39; &#124; &#39;douban-group&#39; &#124; &#39;tieba&#39; &#124; &#39;hupu&#39; &#124; &#39;ngabbs&#39; &#124; &#39;v2ex&#39; &#124; &#39;52pojie&#39; &#124; &#39;hostloc&#39; &#124; &#39;coolapk&#39; &#124; &#39;baidu&#39; &#124; &#39;thepaper&#39; &#124; &#39;toutiao&#39; &#124; &#39;qq-news&#39; &#124; &#39;sina&#39; &#124; &#39;sina-news&#39; &#124; &#39;netease-news&#39; &#124; &#39;huxiu&#39; &#124; &#39;ifanr&#39; &#124; &#39;sspai&#39; &#124; &#39;ithome&#39; &#124; &#39;ithome-xijiayi&#39; &#124; &#39;juejin&#39; &#124; &#39;jianshu&#39; &#124; &#39;guokr&#39; &#124; &#39;36kr&#39; &#124; &#39;51cto&#39; &#124; &#39;csdn&#39; &#124; &#39;nodeseek&#39; &#124; &#39;hellogithub&#39; &#124; &#39;lol&#39; &#124; &#39;genshin&#39; &#124; &#39;honkai&#39; &#124; &#39;starrail&#39; &#124; &#39;netease-music&#39; &#124; &#39;qq-music&#39; &#124; &#39;weread&#39; &#124; &#39;weatheralarm&#39; &#124; &#39;earthquake&#39; &#124; &#39;history&#39;>** | 你想要查询的热榜平台。支持多种主流平台类型，详见下方[可选值](#可选值)表格。 | defaults to undefined|
| **time** | [**number**] | 时光机模式：毫秒时间戳，返回最接近该时间的热榜快照。不传则返回当前实时热榜。 | (optional) defaults to undefined|
| **keyword** | [**string**] | 搜索模式：搜索关键词，在历史热榜中搜索包含该关键词的条目。需配合 time_start 和 time_end 使用。 | (optional) defaults to undefined|
| **timeStart** | [**number**] | 搜索模式必填：搜索起始时间戳（毫秒）。 | (optional) defaults to undefined|
| **timeEnd** | [**number**] | 搜索模式必填：搜索结束时间戳（毫秒）。 | (optional) defaults to undefined|
| **limit** | [**number**] | 搜索模式下最大返回条数，默认 50，最大 200。 | (optional) defaults to 50|
| **sources** | [**boolean**] | 设为 true 时列出所有可用的历史数据源，忽略其他参数。 | (optional) defaults to undefined|


### Return type

**GetMiscHotboard200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回指定平台的热榜列表数据。不同模式返回格式不同：默认模式和时光机模式返回 list 数组；搜索模式返回 results 数组；数据源列表模式返回 sources 数组。 |  -  |
|**400** | 请求参数错误。你提供的 &#x60;type&#x60; 参数不是我们支持的平台类型，请检查拼写。 |  -  |
|**500** | 获取热榜失败。服务器在处理数据时发生内部错误。 |  -  |
|**502** | 上游服务错误。我们从目标平台（如微博）获取数据时失败，可能是对方接口暂时不可用或有反爬策略。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscLunartime**
> GetMiscLunartime200Response getMiscLunartime()

需要在指定时区下查看某个时间点的农历信息？这个接口可以直接返回完整结果。  ## 功能概述 支持传入 Unix 时间戳（秒或毫秒）和 IANA 时区名，返回公历时间、星期、农历年月日、干支、生肖、节气与节日信息。不传 `ts` 时默认使用当前时间，不传 `timezone` 时默认 `Asia/Shanghai`。  ## 时区说明 - 支持标准 IANA 时区，例如 `Asia/Shanghai`、`Asia/Tokyo` - 也支持别名：`Shanghai`、`Beijing` - 时区非法时返回 400 并提示 `invalid timezone: xxx`

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let ts: string; //Unix 时间戳，支持 10 位秒级或 13 位毫秒级。不传则默认当前时间。 (optional) (default to undefined)
let timezone: string; //时区名称。支持 IANA 时区（如 Asia/Shanghai）和别名（Shanghai、Beijing）。默认 Asia/Shanghai。 (optional) (default to undefined)

const { status, data } = await apiInstance.getMiscLunartime(
    ts,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ts** | [**string**] | Unix 时间戳，支持 10 位秒级或 13 位毫秒级。不传则默认当前时间。 | (optional) defaults to undefined|
| **timezone** | [**string**] | 时区名称。支持 IANA 时区（如 Asia/Shanghai）和别名（Shanghai、Beijing）。默认 Asia/Shanghai。 | (optional) defaults to undefined|


### Return type

**GetMiscLunartime200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功，返回指定时间和时区下的农历信息。 |  -  |
|**400** | 请求参数错误。&#x60;timezone&#x60; 非法时返回 &#x60;invalid timezone: xxx&#x60;，&#x60;ts&#x60; 非法时返回 &#x60;invalid timestamp: xxx&#x60;。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscPhoneinfo**
> GetMiscPhoneinfo200Response getMiscPhoneinfo()

想知道一个手机号码来自哪里？是移动、联通还是电信？这个接口可以告诉你答案。  ## 功能概述 提供一个国内的手机号码，我们会查询并返回它的归属地（省份和城市）以及所属的运营商信息。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let phone: string; //需要查询的11位中国大陆手机号码。 (default to undefined)

const { status, data } = await apiInstance.getMiscPhoneinfo(
    phone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **phone** | [**string**] | 需要查询的11位中国大陆手机号码。 | defaults to undefined|


### Return type

**GetMiscPhoneinfo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回号码的归属地和运营商信息。 |  -  |
|**400** | 请求参数错误。请检查你是否提供了 &#x60;phone&#x60; 参数，以及它是否是有效的11位手机号码。 |  -  |
|**500** | 查询失败。我们的号码归属地数据库可能暂时无法访问，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscRandomnumber**
> GetMiscRandomnumber200Response getMiscRandomnumber()

需要一个简单的随机数，还是需要一串不重复的、带小数的随机数？这个接口都能满足你！  ## 功能概述 这是一个强大的随机数生成器。你可以指定生成的范围（最大/最小值）、数量、是否允许重复、以及是否生成小数（并指定小数位数）。  ## 流程图 ```mermaid graph TD     A[开始] --> B{参数校验};     B --> |通过| C{是否允许小数?};     C --> |是| D[生成随机小数];     C --> |否| E[生成随机整数];     D --> F{是否允许重复?};     E --> F;     F --> |是| G[直接生成指定数量];     F --> |否| H[生成不重复的数字];     G --> I[返回结果];     H --> I;     B --> |失败| J[返回 400 错误]; ``` ## 使用须知 > [!WARNING] > **不重复生成的逻辑限制** > 当设置 `allow_repeat=false` 时，请确保取值范围 `(max - min + 1)` 大于或等于你请求的数量 `count`。否则，系统将无法生成足够的不重复数字，请求会失败并返回 400 错误。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let min: number; //生成随机数的最小值（包含）。 (optional) (default to 1)
let max: number; //生成随机数的最大值（包含）。 (optional) (default to 100)
let count: number; //需要生成的随机数的数量。 (optional) (default to 1)
let allowRepeat: boolean; //是否允许生成的多个数字中出现重复值。 (optional) (default to false)
let allowDecimal: boolean; //是否生成小（浮点）数。如果为 false，则只生成整数。 (optional) (default to false)
let decimalPlaces: number; //如果 `allow_decimal=true`，这里可以指定小数的位数。 (optional) (default to 2)

const { status, data } = await apiInstance.getMiscRandomnumber(
    min,
    max,
    count,
    allowRepeat,
    allowDecimal,
    decimalPlaces
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **min** | [**number**] | 生成随机数的最小值（包含）。 | (optional) defaults to 1|
| **max** | [**number**] | 生成随机数的最大值（包含）。 | (optional) defaults to 100|
| **count** | [**number**] | 需要生成的随机数的数量。 | (optional) defaults to 1|
| **allowRepeat** | [**boolean**] | 是否允许生成的多个数字中出现重复值。 | (optional) defaults to false|
| **allowDecimal** | [**boolean**] | 是否生成小（浮点）数。如果为 false，则只生成整数。 | (optional) defaults to false|
| **decimalPlaces** | [**number**] | 如果 &#x60;allow_decimal&#x3D;true&#x60;，这里可以指定小数的位数。 | (optional) defaults to 2|


### Return type

**GetMiscRandomnumber200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 生成成功！返回一个包含随机数的数组。 |  -  |
|**400** | 请求参数无效。例如，&#x60;min&#x60; 大于 &#x60;max&#x60;，或者在不允许重复的情况下，请求的数量大于可能生成的数字总数。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscTimestamp**
> GetMiscTimestamp200Response getMiscTimestamp()

这是一个用于将Unix时间戳转换为人类可读日期时间的旧版接口。  ## 功能概述 输入一个秒级或毫秒级的时间戳，返回其对应的本地时间和UTC时间。  > [!WARNING] > **接口已过时**：这个接口已被新的 `/convert/unixtime` 取代。新接口功能更强大，支持双向转换。我们建议你迁移到新接口。  [➡️ 前往新版接口文档](/docs/api-reference/get-convert-unixtime)

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let ts: string; //需要转换的Unix时间戳，支持10位（秒）或13位（毫秒）。 (default to undefined)

const { status, data } = await apiInstance.getMiscTimestamp(
    ts
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ts** | [**string**] | 需要转换的Unix时间戳，支持10位（秒）或13位（毫秒）。 | defaults to undefined|


### Return type

**GetMiscTimestamp200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 转换成功！ |  -  |
|**400** | 无效的时间戳参数。请检查 &#x60;ts&#x60; 参数是否为纯数字字符串。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscTrackingCarriers**
> GetMiscTrackingCarriers200Response getMiscTrackingCarriers()

不确定系统支持哪些快递公司？这个接口返回完整的支持列表。  > [!VIP] > 本API目前处于**限时免费**阶段，我们鼓励开发者集成和测试。未来，它将转为付费API，为用户提供更稳定和强大的服务。  ## 功能概述 获取系统当前支持的所有快递公司列表，包括每家公司的标准编码（code）和中文名称（name）。  ## 使用建议 - **推荐缓存**：这个列表基本不会频繁变动，建议在应用启动时调用一次并缓存到本地 - **应用场景**：适合用于构建快递公司选择器、下拉菜单等UI组件 - **缓存时长**：建议缓存24小时或更久

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

const { status, data } = await apiInstance.getMiscTrackingCarriers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetMiscTrackingCarriers200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 获取成功！返回所有支持的快递公司列表。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscTrackingDetect**
> GetMiscTrackingDetect200Response getMiscTrackingDetect()

不确定手里的快递单号属于哪家快递公司？这个接口专门做识别，不查物流。  > [!VIP] > 本API目前处于**限时免费**阶段，我们鼓励开发者集成和测试。未来，它将转为付费API，为用户提供更稳定和强大的服务。  ## 功能概述 输入快递单号，系统会根据单号规则快速识别出最可能的快递公司。如果存在多个可能的匹配结果，还会在 `alternatives` 字段中返回备选项，供你参考选择。  ## 使用须知 - **识别速度快**：只做规则匹配，不查询物流信息，响应速度通常在100ms内 - **准确率高**：基于各快递公司的单号规则进行智能识别，准确率超过95% - **备选方案**：当单号规则可能匹配多家快递公司时，会提供所有可能的选项

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let trackingNumber: string; //需要识别的快递单号。 (default to undefined)

const { status, data } = await apiInstance.getMiscTrackingDetect(
    trackingNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trackingNumber** | [**string**] | 需要识别的快递单号。 | defaults to undefined|


### Return type

**GetMiscTrackingDetect200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 识别成功！返回识别结果和可能的备选项。 |  -  |
|**404** | 无法识别该快递单号。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscTrackingQuery**
> GetMiscTrackingQuery200Response getMiscTrackingQuery()

买了东西想知道快递到哪儿了？这个接口帮你实时追踪物流状态。  > [!VIP] > 本API目前处于**限时免费**阶段，我们鼓励开发者集成和测试。未来，它将转为付费API，为用户提供更稳定和强大的服务。  ## 功能概述 提供一个快递单号，系统会自动识别快递公司并返回完整的物流轨迹信息。支持中通、圆通、韵达、申通、极兔、顺丰、京东、EMS、德邦等60+国内外主流快递公司。  ## 使用须知 - **自动识别**：不知道是哪家快递？系统会根据单号规则自动识别快递公司（推荐使用） - **手动指定**：如果已知快递公司，可以传递 `carrier_code` 参数，查询速度会更快 - **手机尾号验证**：部分快递公司需要验证收件人手机尾号才能查询详细物流，如果返回「暂无物流信息」，建议尝试传入 `phone` 参数 - **查询时效**：物流信息实时查询，响应时间通常在1-2秒内

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let trackingNumber: string; //快递单号，通常是一串10-20位的数字或字母数字组合。 (default to undefined)
let carrierCode: string; //快递公司编码（可选）。不填写时系统会自动识别，填写后可加快查询速度。 (optional) (default to undefined)
let phone: string; //收件人手机尾号，4位数字（可选）。部分快递公司需要验证手机尾号才能查询详细物流信息。 (optional) (default to undefined)

const { status, data } = await apiInstance.getMiscTrackingQuery(
    trackingNumber,
    carrierCode,
    phone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trackingNumber** | [**string**] | 快递单号，通常是一串10-20位的数字或字母数字组合。 | defaults to undefined|
| **carrierCode** | [**string**] | 快递公司编码（可选）。不填写时系统会自动识别，填写后可加快查询速度。 | (optional) defaults to undefined|
| **phone** | [**string**] | 收件人手机尾号，4位数字（可选）。部分快递公司需要验证手机尾号才能查询详细物流信息。 | (optional) defaults to undefined|


### Return type

**GetMiscTrackingQuery200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回快递的完整物流轨迹。 |  -  |
|**400** | 参数错误，请检查快递单号是否正确。 |  -  |
|**404** | 当前没有查询到物流轨迹时会返回 404，并附带错误码和提示信息。如果返回此错误，建议尝试传入 &#x60;phone&#x60; 参数（收件人手机尾号）再次查询。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscWeather**
> GetMiscWeather200Response getMiscWeather()

出门前，查一下天气总是个好习惯。这个接口为你提供精准、实时的天气数据，支持国内和国际城市。  ## 功能概述 这个接口支持三种查询方式： - 可以传 `adcode`，按行政区编码查询（优先级最高） - 可以传 `city`，按城市名称查询，支持中文（`北京`）和英文（`Tokyo`） - 两个都不传时，按客户端 IP 自动定位查询  支持 `lang` 参数，可选 `zh`（默认）和 `en`，城市名翻译覆盖 7000+ 城市。  ## 可选功能模块 - `extended=true`：扩展气象字段（体感温度、能见度、气压、紫外线、空气质量及污染物分项数据） - `forecast=true`：多天预报（最多7天，含日出日落、风速等详细数据） - `hourly=true`：逐小时预报（24小时） - `minutely=true`：分钟级降水预报（仅国内城市） - `indices=true`：18项生活指数（穿衣、紫外线、洗车、运动、花粉等）  ## 天气字段说明 `weather` 是天气现象文本，不是固定枚举。  常见值包括：晴、多云、阴、小雨、中雨、大雨、雷阵雨、小雪、中雪、大雪、雨夹雪、雾、霾、沙尘。  如果你的业务需要稳定分类，建议结合 `weather_code` 做自己的映射归类。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let city: string; //城市名称，支持中文（`北京`）和英文（`Tokyo`）。可选参数，不传时会尝试 IP 自动定位。 (optional) (default to undefined)
let adcode: string; //城市行政区划代码（如 `110000`），优先级高于 city。可选参数，不传时会尝试 IP 自动定位。 (optional) (default to undefined)
let extended: boolean; //返回扩展气象字段（体感温度、能见度、气压、紫外线、降水量、云量、空气质量指数及污染物分项数据）。 (optional) (default to undefined)
let forecast: boolean; //返回多天预报数据（最多7天），含白天夜间天气、风向风力、日出日落等。 (optional) (default to undefined)
let hourly: boolean; //返回逐小时预报（24小时），含温度、天气、风向风速、湿度、降水概率等。 (optional) (default to undefined)
let minutely: boolean; //返回分钟级降水预报（仅国内城市），每5分钟一个数据点，共24个。 (optional) (default to undefined)
let indices: boolean; //返回18项生活指数（穿衣、紫外线、洗车、晾晒、空调、感冒、运动、舒适度、出行、钓鱼、过敏、防晒、心情、啤酒、雨伞、交通、空气净化器、花粉）。 (optional) (default to undefined)
let lang: 'zh' | 'en'; //返回语言。`zh` 返回中文（默认），`en` 返回英文。城市名翻译覆盖 7000+ 城市。生活指数（`indices`）目前仅支持中文。 (optional) (default to 'zh')

const { status, data } = await apiInstance.getMiscWeather(
    city,
    adcode,
    extended,
    forecast,
    hourly,
    minutely,
    indices,
    lang
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **city** | [**string**] | 城市名称，支持中文（&#x60;北京&#x60;）和英文（&#x60;Tokyo&#x60;）。可选参数，不传时会尝试 IP 自动定位。 | (optional) defaults to undefined|
| **adcode** | [**string**] | 城市行政区划代码（如 &#x60;110000&#x60;），优先级高于 city。可选参数，不传时会尝试 IP 自动定位。 | (optional) defaults to undefined|
| **extended** | [**boolean**] | 返回扩展气象字段（体感温度、能见度、气压、紫外线、降水量、云量、空气质量指数及污染物分项数据）。 | (optional) defaults to undefined|
| **forecast** | [**boolean**] | 返回多天预报数据（最多7天），含白天夜间天气、风向风力、日出日落等。 | (optional) defaults to undefined|
| **hourly** | [**boolean**] | 返回逐小时预报（24小时），含温度、天气、风向风速、湿度、降水概率等。 | (optional) defaults to undefined|
| **minutely** | [**boolean**] | 返回分钟级降水预报（仅国内城市），每5分钟一个数据点，共24个。 | (optional) defaults to undefined|
| **indices** | [**boolean**] | 返回18项生活指数（穿衣、紫外线、洗车、晾晒、空调、感冒、运动、舒适度、出行、钓鱼、过敏、防晒、心情、啤酒、雨伞、交通、空气净化器、花粉）。 | (optional) defaults to undefined|
| **lang** | [**&#39;zh&#39; | &#39;en&#39;**]**Array<&#39;zh&#39; &#124; &#39;en&#39;>** | 返回语言。&#x60;zh&#x60; 返回中文（默认），&#x60;en&#x60; 返回英文。城市名翻译覆盖 7000+ 城市。生活指数（&#x60;indices&#x60;）目前仅支持中文。 | (optional) defaults to 'zh'|


### Return type

**GetMiscWeather200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回该地区的实时天气信息。 |  -  |
|**400** | 参数无效。常见原因：&#x60;adcode&#x60; 格式非法、&#x60;lang&#x60; 非法（仅支持 zh/en）、参数值类型错误或参数组合无效。 |  -  |
|**404** | 城市未找到。 |  -  |
|**500** | 服务器内部错误。 |  -  |
|**503** | 天气服务暂时不可用。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMiscWorldtime**
> GetMiscWorldtime200Response getMiscWorldtime()

需要和国外的朋友开会，想知道他那边现在几点？用这个接口一查便知。  ## 功能概述 根据标准的时区名称（例如 \'Asia/Shanghai\' 或 \'Europe/London\'），获取该时区的当前准确时间、UTC偏移量、星期等信息。

### Example

```typescript
import {
    MiscApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let city: string; //你需要查询的城市或地区，请使用标准的 IANA 时区数据库名称，例如 \'Shanghai\', \'Asia/Tokyo\', \'America/New_York\'。 (default to undefined)

const { status, data } = await apiInstance.getMiscWorldtime(
    city
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **city** | [**string**] | 你需要查询的城市或地区，请使用标准的 IANA 时区数据库名称，例如 \&#39;Shanghai\&#39;, \&#39;Asia/Tokyo\&#39;, \&#39;America/New_York\&#39;。 | defaults to undefined|


### Return type

**GetMiscWorldtime200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回指定时区的详细时间信息。 |  -  |
|**400** | 请求参数错误。请检查你是否提供了 &#x60;city&#x60; 参数。 |  -  |
|**404** | 时区未找到。根据你提供的名称，未能找到对应的时区。请检查拼写或使用标准的 \&#39;洲/城市\&#39; 格式。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postMiscDateDiff**
> PostMiscDateDiff200Response postMiscDateDiff(postMiscDateDiffRequest)

想知道两个日期之间相差多久？这个接口帮你精确计算时间差值。  ## 功能概述 输入开始日期和结束日期，返回它们之间的时间差，包括总天数、总小时数、总分钟数、总秒数、总周数，以及人性化显示格式（如\"1年2月3天\"）。  ## 日期格式 接口支持自动识别常见日期格式，包括：YYYY-MM-DD、YYYY/MM/DD、DD-MM-YYYY、ISO 8601（带时区）等。也可以通过`format`参数显式指定格式（如DD-MM-YYYY）。  > [!NOTE] > 当结束日期早于开始日期时，返回的数值为负数。

### Example

```typescript
import {
    MiscApi,
    Configuration,
    PostMiscDateDiffRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MiscApi(configuration);

let postMiscDateDiffRequest: PostMiscDateDiffRequest; //包含日期信息的JSON对象

const { status, data } = await apiInstance.postMiscDateDiff(
    postMiscDateDiffRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postMiscDateDiffRequest** | **PostMiscDateDiffRequest**| 包含日期信息的JSON对象 | |


### Return type

**PostMiscDateDiff200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 计算成功，返回多种单位的时间差值 |  -  |
|**400** | 日期解析失败或参数错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

