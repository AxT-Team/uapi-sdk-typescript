# DictionaryApi

All URIs are relative to *https://uapis.cn*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDictionaryAudio**](#getdictionaryaudio) | **GET** /dictionary/audio | 单词发音|
|[**getDictionaryLookup**](#getdictionarylookup) | **GET** /dictionary/lookup | 单词查询|

# **getDictionaryAudio**
> File getDictionaryAudio()

光看音标不知道怎么读？用这个接口为单词配上纯正的真人发音，并且支持英式与美式两种口音自由切换。  ## 功能概述 只需传入单词文本和所需的口音类型，接口就会直接响应 `.mp3` 格式的二进制音频流。你可以直接把接口地址塞进前端的 `<audio>` 标签里播放，或者将其下载保存为本地音频文件。另外，“单词查询”接口中返回的 `audio` 字段，实际上也就是直接拼装好的本接口地址。  ## 使用须知 > [!NOTE] > 本接口成功调用时返回的是 `audio/mpeg` 格式的二进制音频流，而不是常规的 JSON。如果在代码里使用 Fetch 或 Axios 调用并处理返回数据，请务必以 `blob` 或 `arraybuffer` 的形式接收响应内容。

### Example

```typescript
import {
    DictionaryApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DictionaryApi(configuration);

let word: string; //要发音的英文单词，长度不超过 64 个字符。 (default to undefined)
let accent: 'uk' | 'us'; //口音偏好：uk（英式）或 us（美式），默认 uk。 (optional) (default to 'uk')

const { status, data } = await apiInstance.getDictionaryAudio(
    word,
    accent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **word** | [**string**] | 要发音的英文单词，长度不超过 64 个字符。 | defaults to undefined|
| **accent** | [**&#39;uk&#39; | &#39;us&#39;**]**Array<&#39;uk&#39; &#124; &#39;us&#39;>** | 口音偏好：uk（英式）或 us（美式），默认 uk。 | (optional) defaults to 'uk'|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: audio/mpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 请求成功，响应体为 MP3 格式的二进制音频数据。 |  -  |
|**400** | 参数错误。例如 word 参数为空或 accent 指定了不支持的口音。 |  -  |
|**404** | 未找到该单词的音频文件。 |  -  |
|**502** | 发音服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDictionaryLookup**
> GetDictionaryLookup200Response getDictionaryLookup()

想在自己的背单词应用、阅读插件或聊天机器人里加个查词功能？输入一个英文单词，就能立刻拿到一本详尽的“微型词典”。  ## 功能概述 传入你要查询的英文单词，接口会返回一整份全方位的词条数据。数据结构是高度动态的——如果某个单词没有常见词组或近义词，对应的字段会自动省略，方便前端精简渲染。  ## 返回内容涵盖 - **音标与发音** (`phonetics`)：包含英式（UK）与美式（US）音标，以及可直接在前端播放的发音音频链接。 - **中文释义** (`definitions`)：按词性归类的中文翻译。 - **英英释义** (`english_definitions`)：英文原汁原味的解释及附带的短例句。 - **词形变化** (`word_forms`)：复数、过去式、比较级等形态转换。 - **词组与近义词** (`phrases` / `synonyms`)：常见的搭配词组，以及按词性归类的近义词。 - **双语例句** (`examples`)：真实语境下的中英双语例句。

### Example

```typescript
import {
    DictionaryApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DictionaryApi(configuration);

let word: string; //要查询的英文单词，长度不超过 64 个字符。 (default to undefined)
let lang: 'en'; //目标语种。目前仅支持 en（默认）。 (optional) (default to 'en')

const { status, data } = await apiInstance.getDictionaryLookup(
    word,
    lang
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **word** | [**string**] | 要查询的英文单词，长度不超过 64 个字符。 | defaults to undefined|
| **lang** | [**&#39;en&#39;**]**Array<&#39;en&#39;>** | 目标语种。目前仅支持 en（默认）。 | (optional) defaults to 'en'|


### Return type

**GetDictionaryLookup200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功，返回该单词的完整词条数据。 |  -  |
|**400** | 参数错误。例如 word 参数为空或超过了最大长度限制。 |  -  |
|**404** | 未找到该单词的释义，可能是由于拼写错误或词库暂未收录。 |  -  |
|**502** | 查词服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

