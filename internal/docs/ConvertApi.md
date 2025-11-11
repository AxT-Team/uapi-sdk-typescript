# ConvertApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getConvertUnixtime**](#getconvertunixtime) | **GET** /convert/unixtime | Unix时间戳与日期字符串双向转换|
|[**postConvertJson**](#postconvertjson) | **POST** /convert/json | 美化并格式化JSON字符串|

# **getConvertUnixtime**
> GetConvertUnixtime200Response getConvertUnixtime()

时间戳和日期字符串，哪个用着更顺手？别纠结了，这个接口让你轻松拥有两种格式！  ## 功能概述 这是一个非常智能的转换器。你给它一个 Unix 时间戳，它还你一个人类可读的日期时间；你给它一个日期时间字符串，它还你一个 Unix 时间戳。它会自动识别你输入的是哪种格式。  ## 使用须知 这个接口非常智能，能够自动识别输入格式：  - **输入时间戳**：支持10位秒级（如 `1672531200`）和13位毫秒级（如 `1672531200000`）。 - **输入日期字符串**：为了确保准确性，推荐使用 `YYYY-MM-DD HH:mm:ss` 标准格式（如 `2023-01-01 08:00:00`）。  > [!TIP] > 无论你输入哪种格式，响应中都会同时包含标准日期字符串和秒级Unix时间戳，方便你按需取用。  ## 错误处理指南 - **400 Bad Request**: 如果你提供的 `time` 参数既不是有效的时间戳，也不是我们支持的日期格式，就会收到这个错误。请检查你的输入值。

### Example

```typescript
import {
    ConvertApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ConvertApi(configuration);

let time: string; //一个智能时间参数，可传入Unix时间戳（10位或13位）或标准日期字符串（如 \'2023-10-27 10:30:00\'），系统将自动识别并转换。 (default to undefined)

const { status, data } = await apiInstance.getConvertUnixtime(
    time
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **time** | [**string**] | 一个智能时间参数，可传入Unix时间戳（10位或13位）或标准日期字符串（如 \&#39;2023-10-27 10:30:00\&#39;），系统将自动识别并转换。 | defaults to undefined|


### Return type

**GetConvertUnixtime200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 转换成功！响应中会同时包含标准日期字符串和秒级Unix时间戳，方便你使用。 |  -  |
|**400** | 请求失败。请检查你提供的 &#x60;time&#x60; 参数是否是有效的时间戳或我们支持的日期格式（YYYY-MM-DD HH:mm:ss）。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postConvertJson**
> PostConvertJson200Response postConvertJson(postConvertJsonRequest)

还在为一团乱麻的 JSON 字符串头疼吗？这个接口能瞬间让它变得井井有条，赏心悦目。  ## 功能概述 你只需要提供一个原始的、可能是压缩过的或者格式混乱的 JSON 字符串，这个 API 就会返回一个经过美化（带标准缩进和换行）的版本。这在调试 API 响应、或者需要在前端界面清晰展示 JSON 数据时非常有用。  ## 使用须知 > [!NOTE] > **请求格式** > 请注意，待格式化的 JSON 字符串需要被包裹在另一个 JSON 对象中，作为 `content` 字段的值提交。具体格式请参考请求体示例。  ## 错误处理指南 - **400 Bad Request**: 最常见的原因是你提供的 `content` 字符串本身不是一个有效的 JSON。请仔细检查括号、引号是否正确闭合，或者有没有多余的逗号等语法错误。

### Example

```typescript
import {
    ConvertApi,
    Configuration,
    PostConvertJsonRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ConvertApi(configuration);

let postConvertJsonRequest: PostConvertJsonRequest; //这是一个JSON对象，里面必须包含一个名为 `content` 的字段。这个字段的值，就是你希望格式化的、原始的JSON字符串。

const { status, data } = await apiInstance.postConvertJson(
    postConvertJsonRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postConvertJsonRequest** | **PostConvertJsonRequest**| 这是一个JSON对象，里面必须包含一个名为 &#x60;content&#x60; 的字段。这个字段的值，就是你希望格式化的、原始的JSON字符串。 | |


### Return type

**PostConvertJson200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 格式化成功！返回一个包含美化后JSON字符串的对象。 |  -  |
|**400** | 请求失败。这通常意味着你提供的 &#x60;content&#x60; 字符串不是一个合法的JSON格式。请检查括号、引号是否匹配，以及末尾是否有多余的逗号等常见错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

