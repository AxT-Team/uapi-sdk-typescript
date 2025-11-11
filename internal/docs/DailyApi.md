# DailyApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDailyNewsImage**](#getdailynewsimage) | **GET** /daily/news-image | 生成每日新闻摘要图片|

# **getDailyNewsImage**
> File getDailyNewsImage()

想用一张图快速了解天下大事？这个接口为你一键生成今日新闻摘要，非常适合用在早报、数字看板或应用首页等场景。  ## 功能概述 此接口会实时抓取各大平台的热点新闻，并动态地将它们渲染成一张清晰、美观的摘要图片。你调用接口，直接就能得到一张可以展示的图片。  ## 使用须知 调用此接口时，请务必注意以下两点：  1.  **响应格式是图片**：接口成功时直接返回 `image/jpeg` 格式的二进制数据，而非 JSON。请确保你的客户端能正确处理二进制流，例如直接在 `<img>` 标签中显示，或保存为 `.jpg` 文件。  2.  **设置合理超时**：由于涉及实时新闻抓取和图片渲染，处理过程可能耗时数秒。建议将客户端请求超时时间设置为至少10秒，以防止因等待过久而失败。  > [!IMPORTANT] > 未能正确处理图片响应或超时设置过短，是导致调用失败的最常见原因。

### Example

```typescript
import {
    DailyApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DailyApi(configuration);

const { status, data } = await apiInstance.getDailyNewsImage();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 请求成功！响应体是JPEG格式的图片二进制数据。你可以直接将其显示或保存为图片文件。 |  -  |
|**500** | 服务器内部错误。这可能是我们的图片渲染服务遇到了临时故障。我们已经被自动通知，请稍后重试。 |  -  |
|**502** | 上游服务错误。我们在尝试从新闻源（如微博、知乎等）获取数据时失败了。这可能是因为上游服务暂时不可用或更改了接口。这个问题通常很快会解决，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

