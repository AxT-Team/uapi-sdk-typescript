# RandomApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAnswerbookAsk**](#getanswerbookask) | **GET** /answerbook/ask | 获取答案之书的神秘答案 (GET)|
|[**getRandomImage**](#getrandomimage) | **GET** /random/image | 随机二次元、风景、动漫图片壁纸|
|[**getRandomString**](#getrandomstring) | **GET** /random/string | 生成高度可定制的随机字符串|
|[**postAnswerbookAsk**](#postanswerbookask) | **POST** /answerbook/ask | 获取答案之书的神秘答案 (POST)|

# **getAnswerbookAsk**
> GetAnswerbookAsk200Response getAnswerbookAsk()

想要获得人生问题的神秘答案吗？答案之书API提供了一个神奇8球风格的问答服务，你可以提问并获得随机的神秘答案。  ## 功能概述 通过向答案之书提问，你将获得一个充满智慧（或许）的随机答案。这个API支持通过查询参数或POST请求体两种方式提问。  ## 使用须知  > [!TIP] > **提问技巧** > - 提出明确的问题会获得更好的体验 > - 问题不能为空 > - 支持中文问题 > - 答案具有随机性，仅供娱乐参考

### Example

```typescript
import {
    RandomApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RandomApi(configuration);

let question: string; //你想要提问的问题。问题不能为空。 (default to undefined)

const { status, data } = await apiInstance.getAnswerbookAsk(
    question
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **question** | [**string**] | 你想要提问的问题。问题不能为空。 | defaults to undefined|


### Return type

**GetAnswerbookAsk200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功获取答案。 |  -  |
|**400** | 请求参数无效。 |  -  |
|**500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRandomImage**
> File getRandomImage()

需要一张随机图片作为占位符或者背景吗？这个接口是你的不二之选。  ## 功能概述 这是一个非常简单的接口，它会从我们庞大的图库和精选外部图床中随机挑选一张图片，然后通过 302 重定向让你直接访问到它。这使得它可以非常方便地直接用在 HTML 的 `<img>` 标签中。  你可以通过 `/api/v1/random/image?category=acg&type=4k` 这样的请求获取由UapiPro服务器提供的图片，也可以通过 `/api/v1/random/image?category=ai_drawing` 获取由外部图床精选的图片。  如果你不提供任何 category 参数，程序会从所有图片（包括本地的和URL的）中随机抽取一张（**全局随机图片不包含ikun和AI绘画**）。  > [!TIP] > 如果你需要更精确地控制图片类型，请使用 `/image/random/{category}/{type}` 接口。  ### 支持的主类别与子类别 - **UapiPro服务器图片**   - **furry**（福瑞）     - z4k     - szs8k     - s4k     - 4k   - **bq**（表情包/趣图）     - youshou     - xiongmao     - waiguoren     - maomao     - ikun     - eciyuan   - **acg**（二次元动漫）     - pc     - mb - **外部图床精选图片**   - **ai_drawing**: AI绘画。   - **general_anime**: 动漫图。   - **landscape**: 风景图。   - **mobile_wallpaper**: 手机壁纸。   - **pc_wallpaper**: 电脑壁纸。 - **混合动漫**   - **anime**: 混合了UapiPro服务器的acg和外部图床的general_anime分类下的图片。  > [!NOTE] > 默认全局随机（未指定category参数）时，不会包含ikun和AI绘画（ai_drawing）类别的图片。 

### Example

```typescript
import {
    RandomApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RandomApi(configuration);

let category: 'furry' | 'bq' | 'acg' | 'ai_drawing' | 'general_anime' | 'landscape' | 'mobile_wallpaper' | 'pc_wallpaper' | 'anime'; //（可选）指定图片主类别。  **支持的主类别：** - `furry`（福瑞，UapiPro服务器） - `bq`（表情包/趣图，UapiPro服务器） - `acg`（二次元动漫，UapiPro服务器） - `ai_drawing`（AI绘画，外部图床） - `general_anime`（动漫图，外部图床） - `landscape`（风景图，外部图床） - `mobile_wallpaper`（手机壁纸，外部图床） - `pc_wallpaper`（电脑壁纸，外部图床） - `anime`（混合动漫，UapiPro服务器acg + 外部图床general_anime）  > [!TIP] > 如果不指定，将从所有图片中随机抽取（不包含 `ikun` 和 `ai_drawing`）。  (optional) (default to undefined)
let type: 'z4k' | 'szs8k' | 's4k' | '4k' | 'youshou' | 'xiongmao' | 'waiguoren' | 'maomao' | 'ikun' | 'eciyuan' | 'pc' | 'mb'; //（可选，仅UapiPro服务器图片支持）指定图片子类别。  - **furry**: `z4k`, `szs8k`, `s4k`, `4k` - **bq**: `youshou`, `xiongmao`, `waiguoren`, `maomao`, `ikun`, `eciyuan` - **acg**: `pc`, `mb`  > [!TIP] > 外部图床类别和 `anime` 混合类别不支持 `type` 参数。  (optional) (default to undefined)

const { status, data } = await apiInstance.getRandomImage(
    category,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **category** | [**&#39;furry&#39; | &#39;bq&#39; | &#39;acg&#39; | &#39;ai_drawing&#39; | &#39;general_anime&#39; | &#39;landscape&#39; | &#39;mobile_wallpaper&#39; | &#39;pc_wallpaper&#39; | &#39;anime&#39;**]**Array<&#39;furry&#39; &#124; &#39;bq&#39; &#124; &#39;acg&#39; &#124; &#39;ai_drawing&#39; &#124; &#39;general_anime&#39; &#124; &#39;landscape&#39; &#124; &#39;mobile_wallpaper&#39; &#124; &#39;pc_wallpaper&#39; &#124; &#39;anime&#39;>** | （可选）指定图片主类别。  **支持的主类别：** - &#x60;furry&#x60;（福瑞，UapiPro服务器） - &#x60;bq&#x60;（表情包/趣图，UapiPro服务器） - &#x60;acg&#x60;（二次元动漫，UapiPro服务器） - &#x60;ai_drawing&#x60;（AI绘画，外部图床） - &#x60;general_anime&#x60;（动漫图，外部图床） - &#x60;landscape&#x60;（风景图，外部图床） - &#x60;mobile_wallpaper&#x60;（手机壁纸，外部图床） - &#x60;pc_wallpaper&#x60;（电脑壁纸，外部图床） - &#x60;anime&#x60;（混合动漫，UapiPro服务器acg + 外部图床general_anime）  &gt; [!TIP] &gt; 如果不指定，将从所有图片中随机抽取（不包含 &#x60;ikun&#x60; 和 &#x60;ai_drawing&#x60;）。  | (optional) defaults to undefined|
| **type** | [**&#39;z4k&#39; | &#39;szs8k&#39; | &#39;s4k&#39; | &#39;4k&#39; | &#39;youshou&#39; | &#39;xiongmao&#39; | &#39;waiguoren&#39; | &#39;maomao&#39; | &#39;ikun&#39; | &#39;eciyuan&#39; | &#39;pc&#39; | &#39;mb&#39;**]**Array<&#39;z4k&#39; &#124; &#39;szs8k&#39; &#124; &#39;s4k&#39; &#124; &#39;4k&#39; &#124; &#39;youshou&#39; &#124; &#39;xiongmao&#39; &#124; &#39;waiguoren&#39; &#124; &#39;maomao&#39; &#124; &#39;ikun&#39; &#124; &#39;eciyuan&#39; &#124; &#39;pc&#39; &#124; &#39;mb&#39;>** | （可选，仅UapiPro服务器图片支持）指定图片子类别。  - **furry**: &#x60;z4k&#x60;, &#x60;szs8k&#x60;, &#x60;s4k&#x60;, &#x60;4k&#x60; - **bq**: &#x60;youshou&#x60;, &#x60;xiongmao&#x60;, &#x60;waiguoren&#x60;, &#x60;maomao&#x60;, &#x60;ikun&#x60;, &#x60;eciyuan&#x60; - **acg**: &#x60;pc&#x60;, &#x60;mb&#x60;  &gt; [!TIP] &gt; 外部图床类别和 &#x60;anime&#x60; 混合类别不支持 &#x60;type&#x60; 参数。  | (optional) defaults to undefined|


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
|**200** | �ɹ����ʣ�ֱ�ӷ��� JPEG ��ʽ��ͼƬ���������ݣ�Ĭ�� Content-Type Ϊ image/jpeg�� |  -  |
|**302** | 成功！你的客户端将会被重定向到一张随机图片的URL。 |  -  |
|**404** | 未找到指定类别的图片。 |  -  |
|**500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRandomString**
> GetRandomString200Response getRandomString()

无论是需要生成一个安全的随机密码、一个唯一的Token，还是一个简单的随机ID，这个接口都能满足你。  ## 功能概述 你可以精确地控制生成字符串的长度和字符集类型，非常灵活。  ## 使用须知  > [!TIP] > **字符集类型 `type` 详解** > 你可以通过 `type` 参数精确控制生成的字符集： > - **`numeric`**: 纯数字 (0-9) > - **`lower`**: 纯小写字母 (a-z) > - **`upper`**: 纯大写字母 (A-Z) > - **`alpha`**: 大小写字母 (a-zA-Z) > - **`alphanumeric`** (默认): 数字和大小写字母 (0-9a-zA-Z) > - **`hex`**: 十六进制字符 (0-9a-f)

### Example

```typescript
import {
    RandomApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RandomApi(configuration);

let length: number; //你希望生成的字符串的长度。有效范围是 1 到 1024。 (optional) (default to 16)
let type: 'numeric' | 'lower' | 'upper' | 'alpha' | 'alphanumeric' | 'hex'; //指定构成字符串的字符类型。 (optional) (default to 'alphanumeric')

const { status, data } = await apiInstance.getRandomString(
    length,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **length** | [**number**] | 你希望生成的字符串的长度。有效范围是 1 到 1024。 | (optional) defaults to 16|
| **type** | [**&#39;numeric&#39; | &#39;lower&#39; | &#39;upper&#39; | &#39;alpha&#39; | &#39;alphanumeric&#39; | &#39;hex&#39;**]**Array<&#39;numeric&#39; &#124; &#39;lower&#39; &#124; &#39;upper&#39; &#124; &#39;alpha&#39; &#124; &#39;alphanumeric&#39; &#124; &#39;hex&#39;>** | 指定构成字符串的字符类型。 | (optional) defaults to 'alphanumeric'|


### Return type

**GetRandomString200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 生成成功！ |  -  |
|**400** | 无效的请求参数。 |  -  |
|**500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAnswerbookAsk**
> PostAnswerbookAsk200Response postAnswerbookAsk(postAnswerbookAskRequest)

通过POST请求向答案之书提问并获得神秘答案。  ## 功能概述 与GET方式相同，但通过JSON请求体发送问题，适合在需要发送较长问题或希望避免URL编码问题的场景中使用。  ## 请求体格式 请求体必须是有效的JSON格式，包含question字段。

### Example

```typescript
import {
    RandomApi,
    Configuration,
    PostAnswerbookAskRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RandomApi(configuration);

let postAnswerbookAskRequest: PostAnswerbookAskRequest; //包含问题的JSON对象

const { status, data } = await apiInstance.postAnswerbookAsk(
    postAnswerbookAskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAnswerbookAskRequest** | **PostAnswerbookAskRequest**| 包含问题的JSON对象 | |


### Return type

**PostAnswerbookAsk200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功获取答案。 |  -  |
|**400** | 请求参数无效。 |  -  |
|**500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

