# WebParseApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWebTomarkdownAsyncStatus**](#getwebtomarkdownasyncstatus) | **GET** /web/tomarkdown/async/{task_id} | 查询网页转换任务状态和结果|
|[**getWebparseExtractimages**](#getwebparseextractimages) | **GET** /webparse/extractimages | 提取网页中的所有图片|
|[**getWebparseMetadata**](#getwebparsemetadata) | **GET** /webparse/metadata | 抓取并解析网页的元数据|
|[**postWebTomarkdownAsync**](#postwebtomarkdownasync) | **POST** /web/tomarkdown/async | 深度抓取网页转Markdown|

# **getWebTomarkdownAsyncStatus**
> GetWebTomarkdownAsyncStatus200Response getWebTomarkdownAsyncStatus()

提交了URL转Markdown任务后，想知道处理进度和结果？这个接口可以帮你实时追踪。  ## 功能概述  通过之前提交任务时获得的任务ID，你可以查询该任务的当前状态、处理进度以及最终结果。任务结果会在缓存中保存30分钟，期间可以重复查询，非常方便。  任务有五种状态：等待处理（pending）时进度为0%；处理中（processing）时进度在10-90%之间；已完成（completed）时进度为100%并返回Markdown内容；失败（failed）时会返回错误信息；超时（timeout）表示任务处理时间超过60秒已被取消。建议采用指数退避策略进行轮询，初始延迟1秒，每次延迟增加20%，最大延迟5秒。当状态为已完成、失败或超时时停止轮询。  系统会自动管理任务生命周期，单个任务最长处理时间为60秒，任务结果保存30分钟后自动清理，每5分钟清理一次过期任务。  ## 任务状态说明  | 状态 | 说明 | 进度 | 轮询建议 | |------|------|------|----------| | `pending` | 等待处理 | 0% | 立即开始轮询 | | `processing` | 处理中 | 10-90% | 每2-5秒轮询一次 | | `completed` | 已完成 | 100% | 停止轮询，获取结果 | | `failed` | 失败 | 100% | 停止轮询，查看错误信息 | | `timeout` | 超时 | 100% | 停止轮询，任务已取消 |

### Example

```typescript
import {
    WebParseApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new WebParseApi(configuration);

let taskId: string; //任务ID（由提交接口返回） (default to undefined)

const { status, data } = await apiInstance.getWebTomarkdownAsyncStatus(
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskId** | [**string**] | 任务ID（由提交接口返回） | defaults to undefined|


### Return type

**GetWebTomarkdownAsyncStatus200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功获取任务状态（包含各种状态的响应） |  -  |
|**404** | 任务不存在或已过期 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebparseExtractimages**
> GetWebparseExtractimages200Response getWebparseExtractimages()

想一次性“打包”一个网页上的所有图片吗？这个接口可以帮你实现。  ## 功能概述 你提供一个网页的URL，我们会访问该页面，解析其HTML内容，并提取出所有 `<img>` 标签中的图片链接，然后将这些链接列表返回给你。非常适合用于制作图片采集器或素材下载工具。

### Example

```typescript
import {
    WebParseApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new WebParseApi(configuration);

let url: string; //需要提取图片的网页URL (default to undefined)

const { status, data } = await apiInstance.getWebparseExtractimages(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | 需要提取图片的网页URL | defaults to undefined|


### Return type

**GetWebparseExtractimages200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | URL参数缺失或无效 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebparseMetadata**
> GetWebparseMetadata200Response getWebparseMetadata()

当你在应用中需要展示一个链接的预览时（就像微信或Telegram里那样），这个接口能帮你轻松获取所需信息。  ## 功能概述 你提供一个网页的URL，我们会抓取并解析它的 `<head>` 部分，提取出关键的元数据（Metadata），如页面标题（Title）、描述（Description）、关键词（Keywords）以及网站图标（Favicon）等。

### Example

```typescript
import {
    WebParseApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new WebParseApi(configuration);

let url: string; //需要提取元数据的网页URL (default to undefined)

const { status, data } = await apiInstance.getWebparseMetadata(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | 需要提取元数据的网页URL | defaults to undefined|


### Return type

**GetWebparseMetadata200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | URL参数缺失或无效 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWebTomarkdownAsync**
> PostWebTomarkdownAsync202Response postWebTomarkdownAsync()

想要将复杂的网页转换为结构清晰的Markdown？这个接口采用异步处理模式，特别适合处理大型网页、复杂网站或需要长时间处理的转换任务。  ## 功能概述  > [!VIP] >本API目前处于**限时免费**阶段，我们鼓励开发者集成和测试。未来，它将转为付费API，为用户提供更稳定和强大的服务。  UAPI Pro平台推出的异步网页转Markdown API能够将任意网页URL转换为结构清晰、格式优美的Markdown文本。提交任务后立即返回任务ID，不会阻塞客户端等待。您可以通过任务ID实时查询转换进度和处理状态，支持长达60秒的处理时间，轻松应对大型网站、需要JS渲染的单页应用等复杂页面。任务结果会缓存30分钟，期间可重复查询，过期任务自动清理无需手动管理。  此API采用先进算法，自动识别并抓取网页主体内容，精准剔除广告、导航栏、页眉页脚等无关元素。完美保留原文的格式，包括标题、列表、代码块、表格、引用、图片等，并输出为兼容性强的GitHub Flavored Markdown (GFM) 格式。同时会自动解析并提取文章标题、作者、发布日期、站点名称等关键元数据，并将其格式化为标准的YAML Front Matter，方便后续处理和CMS集成。  ## 使用流程  调用本接口提交URL转换任务后，会立即获得一个唯一的任务ID。随后使用任务ID调用查询接口，获取任务状态和进度。任务完成后，从查询接口的响应中获取Markdown内容。

### Example

```typescript
import {
    WebParseApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new WebParseApi(configuration);

let url: string; //需要转换的网页URL。URL必须经过编码。 (default to undefined)

const { status, data } = await apiInstance.postWebTomarkdownAsync(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | 需要转换的网页URL。URL必须经过编码。 | defaults to undefined|


### Return type

**PostWebTomarkdownAsync202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | 任务已提交成功，返回任务ID |  -  |
|**400** | 请求参数错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

