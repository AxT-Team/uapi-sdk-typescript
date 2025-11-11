# TextApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTextMd5**](#gettextmd5) | **GET** /text/md5 | 计算文本的MD5哈希值(GET)|
|[**postTextAesDecrypt**](#posttextaesdecrypt) | **POST** /text/aes/decrypt | 使用AES算法解密文本|
|[**postTextAesEncrypt**](#posttextaesencrypt) | **POST** /text/aes/encrypt | 使用AES算法加密文本|
|[**postTextAnalyze**](#posttextanalyze) | **POST** /text/analyze | 多维度分析文本内容|
|[**postTextBase64Decode**](#posttextbase64decode) | **POST** /text/base64/decode | 解码Base64编码的文本|
|[**postTextBase64Encode**](#posttextbase64encode) | **POST** /text/base64/encode | 将文本进行Base64编码|
|[**postTextMd5**](#posttextmd5) | **POST** /text/md5 | 计算文本的MD5哈希值 (POST)|
|[**postTextMd5Verify**](#posttextmd5verify) | **POST** /text/md5/verify | 校验MD5哈希值|

# **getTextMd5**
> GetTextMd5200Response getTextMd5()

一个快速计算文本 MD5 哈希值的工具，适用于短文本且不关心参数暴露的场景。  ## 功能概述 通过GET请求的查询参数传入文本，返回其32位小写的MD5哈希值。  > [!NOTE] > 对于较长或敏感的文本，我们推荐使用本接口的 POST 版本，以避免URL长度限制和参数暴露问题。

### Example

```typescript
import {
    TextApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let text: string; //需要计算哈希值的文本 (default to undefined)

const { status, data } = await apiInstance.getTextMd5(
    text
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **text** | [**string**] | 需要计算哈希值的文本 | defaults to undefined|


### Return type

**GetTextMd5200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 缺少text参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextAesDecrypt**
> PostTextAesDecrypt200Response postTextAesDecrypt(postTextAesDecryptRequest)

收到了用AES加密的密文？把它、密钥和随机数（nonce）交给我们，就能还原出原始内容。  ## 功能概述 这是一个标准的AES解密接口。你需要提供经过Base64编码的密文、加密时使用的密钥和nonce（随机数，通常为16字节字符串）。  > [!IMPORTANT] > **关于密钥 `key`** > 我们支持 AES-128, AES-192, 和 AES-256。请确保你提供的密钥 `key` 的长度（字节数）正好是 **16**、**24** 或 **32**，以分别对应这三种加密强度。 >  > **关于随机数 `nonce`** > 通常为16字节字符串，需与加密时一致。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextAesDecryptRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextAesDecryptRequest: PostTextAesDecryptRequest; //包含待解密文本 \'text\'、密钥 \'key\' 和随机数 \'nonce\' 的JSON对象

const { status, data } = await apiInstance.postTextAesDecrypt(
    postTextAesDecryptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAesDecryptRequest** | **PostTextAesDecryptRequest**| 包含待解密文本 \&#39;text\&#39;、密钥 \&#39;key\&#39; 和随机数 \&#39;nonce\&#39; 的JSON对象 | |


### Return type

**PostTextAesDecrypt200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 无效的请求参数 |  -  |
|**500** | 解密失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextAesEncrypt**
> PostTextAesEncrypt200Response postTextAesEncrypt(postTextAesEncryptRequest)

需要安全地传输或存储一些文本信息？AES加密是一个可靠的选择。  ## 功能概述 这是一个标准的AES加密接口。你提供需要加密的明文和密钥，我们返回经过Base64编码的密文。  > [!IMPORTANT] > **关于密钥 `key`** > 我们支持 AES-128, AES-192, 和 AES-256。请确保你提供的密钥 `key` 的长度（字节数）正好是 **16**、**24** 或 **32**，以分别对应这三种加密强度。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextAesEncryptRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextAesEncryptRequest: PostTextAesEncryptRequest; //包含待加密文本 \'text\' 和密钥 \'key\' 的JSON对象

const { status, data } = await apiInstance.postTextAesEncrypt(
    postTextAesEncryptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAesEncryptRequest** | **PostTextAesEncryptRequest**| 包含待加密文本 \&#39;text\&#39; 和密钥 \&#39;key\&#39; 的JSON对象 | |


### Return type

**PostTextAesEncrypt200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 无效的请求参数 |  -  |
|**500** | 加密失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextAnalyze**
> PostTextAnalyze200Response postTextAnalyze(postTextAnalyzeRequest)

想知道一篇文章有多少字、多少个词、或者多少行？这个接口可以帮你快速统计。  ## 功能概述 你提供一段文本，我们会从多个维度进行分析，并返回其字符数、词数、句子数、段落数和行数。这对于文本编辑、内容管理等场景非常有用。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextAnalyzeRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextAnalyzeRequest: PostTextAnalyzeRequest; //包含待分析文本 \'text\' 的JSON对象

const { status, data } = await apiInstance.postTextAnalyze(
    postTextAnalyzeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAnalyzeRequest** | **PostTextAnalyzeRequest**| 包含待分析文本 \&#39;text\&#39; 的JSON对象 | |


### Return type

**PostTextAnalyze200Response**

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

# **postTextBase64Decode**
> PostTextBase64Decode200Response postTextBase64Decode(postTextBase64DecodeRequest)

这是一个简单实用的 Base64 解码工具。  ## 功能概述 你提供一个 Base64 编码的字符串，我们帮你解码成原始的 UTF-8 文本。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextBase64DecodeRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextBase64DecodeRequest: PostTextBase64DecodeRequest; //包含待解码文本 \'text\' 的JSON对象

const { status, data } = await apiInstance.postTextBase64Decode(
    postTextBase64DecodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextBase64DecodeRequest** | **PostTextBase64DecodeRequest**| 包含待解码文本 \&#39;text\&#39; 的JSON对象 | |


### Return type

**PostTextBase64Decode200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 无效的请求参数或解码失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextBase64Encode**
> PostTextBase64Encode200Response postTextBase64Encode(postTextBase64EncodeRequest)

这是一个简单实用的 Base64 编码工具。  ## 功能概述 你提供一段原始文本，我们帮你转换成 Base64 编码的字符串。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextBase64EncodeRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextBase64EncodeRequest: PostTextBase64EncodeRequest; //包含待编码文本 \'text\' 的JSON对象

const { status, data } = await apiInstance.postTextBase64Encode(
    postTextBase64EncodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextBase64EncodeRequest** | **PostTextBase64EncodeRequest**| 包含待编码文本 \&#39;text\&#39; 的JSON对象 | |


### Return type

**PostTextBase64Encode200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 无效的请求参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextMd5**
> GetTextMd5200Response postTextMd5(postTextMd5Request)

一个用于计算文本 MD5 哈希值的标准工具，推荐使用此版本。  ## 功能概述 通过POST请求的表单体传入文本，返回其32位小写的MD5哈希值。相比GET版本，此方法更适合处理较长或包含敏感信息的文本。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextMd5Request
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextMd5Request: PostTextMd5Request; //

const { status, data } = await apiInstance.postTextMd5(
    postTextMd5Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextMd5Request** | **PostTextMd5Request**|  | |


### Return type

**GetTextMd5200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 缺少text参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextMd5Verify**
> PostTextMd5Verify200Response postTextMd5Verify(postTextMd5VerifyRequest)

下载了一个文件，想确认它在传输过程中有没有损坏？校验MD5值是最常用的方法。  ## 功能概述 你提供原始文本和一个MD5哈希值，我们帮你计算文本的哈希，并与你提供的哈希进行比对，告诉你它们是否匹配。这在文件完整性校验等场景下非常有用。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextMd5VerifyRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextMd5VerifyRequest: PostTextMd5VerifyRequest; //包含待校验文本 \'text\' 和哈希值 \'hash\' 的JSON对象

const { status, data } = await apiInstance.postTextMd5Verify(
    postTextMd5VerifyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextMd5VerifyRequest** | **PostTextMd5VerifyRequest**| 包含待校验文本 \&#39;text\&#39; 和哈希值 \&#39;hash\&#39; 的JSON对象 | |


### Return type

**PostTextMd5Verify200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应 |  -  |
|**400** | 无效的请求参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

