# DailyApi

All URIs are relative to *https://uapis.cn*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDailyNewsImage**](#getdailynewsimage) | **GET** /daily/news-image | 每日新闻图|
|[**getDailyWord**](#getdailyword) | **GET** /daily/word | 每日单词|

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
|**500** | 服务器内部错误。暂时无法生成图片，请稍后重试。 |  -  |
|**502** | 暂时无法获取相关内容，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDailyWord**
> GetDailyWord200Response getDailyWord()

想给你的学习打卡、英语小组件或机器人推送加一个『每日单词』？这个接口每天给你一个稳定的单词，同一天多次请求结果一致。  ## 功能概述 默认返回 1 个英文单词，支持按词库范围筛选，可选择是否附带例句和音标。也可以用 `count` 一次返回多个词，用于词汇复习列表。  ## 词库选项 - `all`：全部英文词库，适合通用每日推荐。 - `cet4`：大学英语四级词汇，适合基础复习。 - `cet6`：大学英语六级词汇，适合进阶复习。 - `ielts`：雅思词汇，适合留学考试准备。 - `toefl`：托福词汇，适合北美考试准备。 - `gre`：GRE 词汇，适合高阶词汇训练。  ## 使用须知 > [!IMPORTANT] > `date` 与 `seed` 用于复现某一天或某个固定的取词结果，二者不能同时传入。

### Example

```typescript
import {
    DailyApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DailyApi(configuration);

let lang: 'en'; //语种，目前支持 en，默认 en。 (optional) (default to 'en')
let category: 'all' | 'cet4' | 'cet6' | 'ielts' | 'toefl' | 'gre'; //词库范围：all/cet4/cet6/ielts/toefl/gre，默认 all。 (optional) (default to 'all')
let count: number; //返回数量，1-20，默认 1。 (optional) (default to 1)
let date: string; //日期，格式 YYYY-MM-DD，作为每日单词的种子基准。 (optional) (default to undefined)
let seed: number; //固定种子，结果可复现；不可与 date 同时使用。 (optional) (default to undefined)
let example: boolean; //是否返回例句，默认 true。 (optional) (default to true)
let phonetic: boolean; //是否返回音标，默认 true。 (optional) (default to true)
let define: boolean; //是否为每个单词附带详细释义（音标发音、中英释义、词形、词组、近义词、双语例句），默认 false。 (optional) (default to false)

const { status, data } = await apiInstance.getDailyWord(
    lang,
    category,
    count,
    date,
    seed,
    example,
    phonetic,
    define
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lang** | [**&#39;en&#39;**]**Array<&#39;en&#39;>** | 语种，目前支持 en，默认 en。 | (optional) defaults to 'en'|
| **category** | [**&#39;all&#39; | &#39;cet4&#39; | &#39;cet6&#39; | &#39;ielts&#39; | &#39;toefl&#39; | &#39;gre&#39;**]**Array<&#39;all&#39; &#124; &#39;cet4&#39; &#124; &#39;cet6&#39; &#124; &#39;ielts&#39; &#124; &#39;toefl&#39; &#124; &#39;gre&#39;>** | 词库范围：all/cet4/cet6/ielts/toefl/gre，默认 all。 | (optional) defaults to 'all'|
| **count** | [**number**] | 返回数量，1-20，默认 1。 | (optional) defaults to 1|
| **date** | [**string**] | 日期，格式 YYYY-MM-DD，作为每日单词的种子基准。 | (optional) defaults to undefined|
| **seed** | [**number**] | 固定种子，结果可复现；不可与 date 同时使用。 | (optional) defaults to undefined|
| **example** | [**boolean**] | 是否返回例句，默认 true。 | (optional) defaults to true|
| **phonetic** | [**boolean**] | 是否返回音标，默认 true。 | (optional) defaults to true|
| **define** | [**boolean**] | 是否为每个单词附带详细释义（音标发音、中英释义、词形、词组、近义词、双语例句），默认 false。 | (optional) defaults to false|


### Return type

**GetDailyWord200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 生成成功，返回每日单词列表。 |  -  |
|**400** | 参数错误，例如不支持的词库、count 超出范围，或 date 与 seed 同时传入。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

