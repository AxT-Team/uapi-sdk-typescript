# DefaultApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSearchEngines**](#getsearchengines) | **GET** /search/engines | 搜索引擎配置|
|[**getSensitiveWordAnalyzeQuery**](#getsensitivewordanalyzequery) | **GET** /sensitive-word/analyze-query | 敏感词分析 (GET)|
|[**postSearchAggregate**](#postsearchaggregate) | **POST** /search/aggregate | 智能搜索|
|[**postSensitiveWordAnalyze**](#postsensitivewordanalyze) | **POST** /sensitive-word/analyze | 分析敏感词|
|[**postSensitiveWordQuickCheck**](#postsensitivewordquickcheck) | **POST** /text/profanitycheck | 敏感词检测（快速）|

# **getSearchEngines**
> GetSearchEngines200Response getSearchEngines()

获取搜索功能的详细信息，包括支持的能力、参数限制和使用说明。  ## 功能概述  此接口返回搜索功能的完整配置信息，你可以用它来： - 了解当前可用的搜索能力（如站内搜索、文件类型过滤等） - 获取参数的默认值和限制范围 - 查看当前配置版本和可用状态  适合在应用初始化时调用，或用于动态配置搜索界面。       

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getSearchEngines();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSearchEngines200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功返回搜索引擎的详细信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSensitiveWordAnalyzeQuery**
> PostSensitiveWordAnalyze200Response getSensitiveWordAnalyzeQuery()

通过URL查询参数分析单个关键词，便于GET请求调用。

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let keyword: string; //要分析的关键词，最长1,000字符。 (default to undefined)

const { status, data } = await apiInstance.getSensitiveWordAnalyzeQuery(
    keyword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyword** | [**string**] | 要分析的关键词，最长1,000字符。 | defaults to undefined|


### Return type

**PostSensitiveWordAnalyze200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 分析成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 未授权访问 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSearchAggregate**
> PostSearchAggregate200Response postSearchAggregate(postSearchAggregateRequest)

想在你的应用中集成搜索功能？这个接口可以帮你轻松实现实时网页搜索。  ## 功能概述  UAPI Pro Search 可以根据查询内容返回更相关的搜索结果。你可以用它搜索任何关键词，也可以限定在特定网站或特定文件类型中搜索。  - **实时网页搜索**: 毫秒级响应，快速返回搜索结果 - **智能排序**: 根据查询内容返回更相关的结果 - **时间排序**: 支持按发布时间排序，获取最新内容 - **时间范围过滤**: 支持按天/周/月/年过滤结果 - **站内搜索**: 支持 `site:` 操作符，在指定网站内搜索 - **文件类型过滤**: 支持 `filetype:` 操作符，快速找到 PDF、Word 等特定格式文件       

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PostSearchAggregateRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let postSearchAggregateRequest: PostSearchAggregateRequest; //

const { status, data } = await apiInstance.postSearchAggregate(
    postSearchAggregateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSearchAggregateRequest** | **PostSearchAggregateRequest**|  | |


### Return type

**PostSearchAggregate200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 搜索成功，返回经过智能排序的搜索结果、本次命中的搜索源信息和请求元数据 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 未授权 |  -  |
|**429** | 请求过于频繁 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSensitiveWordAnalyze**
> PostSensitiveWordAnalyze200Response postSensitiveWordAnalyze(postSensitiveWordAnalyzeRequest)

分析单个或多个关键词的敏感程度，返回标准化风险标签与置信度结果。  ## 功能概述  - **风险分析**: 结合文本内容给出语义层面的风险判断。 - **响应稳定**: 兼顾高频调用场景下的处理效率和响应速度。 - **并发支持**: 支持批量并发处理，单次最多可分析100个关键词。 - **输入限制**: 单条关键词最多 1,000 字符，总字符数最多 20,000。 - **标准标签**: 返回 `label` 字段，明确区分 `sensitive` 与 `normal`。 - **分类清晰**: 返回 `category` 字段，用于标识具体风险类别。 - **置信度输出**: 返回 `confidence` 字段，范围为0.0到1.0。  ## 响应字段说明  | 字段 | 类型 | 说明 | |------|------|------| | `results` | array | 分析结果对象的数组。 | | `results[].k` | string | 您在请求中提供的原始关键词。 | | `results[].label` | string | 核心判断字段：`sensitive`(敏感)、`normal`(正常)。 | | `results[].category` | string | 风险分类：`safe`(安全)、`threat`(威胁)、`porn`(色情)、`fraud`(欺诈)、`insult`(辱骂)。 | | `results[].confidence` | number | 当前分类的置信度，范围0.0到1.0。 | | `total` | integer | 本次请求成功分析的关键词总数。 |       

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PostSensitiveWordAnalyzeRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let postSensitiveWordAnalyzeRequest: PostSensitiveWordAnalyzeRequest; //包含待检测关键词列表 `keywords` 的 JSON 对象。单条关键词最多 1,000 字符，总字符数最多 20,000。

const { status, data } = await apiInstance.postSensitiveWordAnalyze(
    postSensitiveWordAnalyzeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSensitiveWordAnalyzeRequest** | **PostSensitiveWordAnalyzeRequest**| 包含待检测关键词列表 &#x60;keywords&#x60; 的 JSON 对象。单条关键词最多 1,000 字符，总字符数最多 20,000。 | |


### Return type

**PostSensitiveWordAnalyze200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 分析成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 未授权访问 |  -  |
|**429** | 请求频率超限 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSensitiveWordQuickCheck**
> PostSensitiveWordQuickCheck200Response postSensitiveWordQuickCheck(postSensitiveWordQuickCheckRequest)

在你的社区或应用中，需要过滤不适合展示的内容时，这个接口可以帮你快速完成检测。  ## 功能概述  这个接口可以识别文本中的敏感词，并返回是否命中、命中词列表等结果，适合用于评论区、社区、论坛和内容发布场景。  ### 主要特性  - **快速检测**：能够一次处理整段文本中的多个命中内容 - **简繁体支持**：支持简体中文、繁体中文和混合文本检测 - **结果直观**：返回清晰的检测结果，方便直接接入审核流程 - **响应稳定**：适合日常内容审核和批量检查场景  无论是论坛、社交平台还是评论系统，这个接口都能帮你快速构建内容审核功能。

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PostSensitiveWordQuickCheckRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let postSensitiveWordQuickCheckRequest: PostSensitiveWordQuickCheckRequest; //包含待检测文本 \'text\' 的JSON对象

const { status, data } = await apiInstance.postSensitiveWordQuickCheck(
    postSensitiveWordQuickCheckRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSensitiveWordQuickCheckRequest** | **PostSensitiveWordQuickCheckRequest**| 包含待检测文本 \&#39;text\&#39; 的JSON对象 | |


### Return type

**PostSensitiveWordQuickCheck200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 请求体无效或文本为空 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

