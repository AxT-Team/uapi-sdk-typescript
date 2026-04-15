# TextApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTextMd5**](#gettextmd5) | **GET** /text/md5 | MD5 哈希|
|[**postTextAesDecrypt**](#posttextaesdecrypt) | **POST** /text/aes/decrypt | AES 解密|
|[**postTextAesDecryptAdvanced**](#posttextaesdecryptadvanced) | **POST** /text/aes/decrypt-advanced | AES高级解密|
|[**postTextAesEncrypt**](#posttextaesencrypt) | **POST** /text/aes/encrypt | AES 加密|
|[**postTextAesEncryptAdvanced**](#posttextaesencryptadvanced) | **POST** /text/aes/encrypt-advanced | AES高级加密|
|[**postTextAnalyze**](#posttextanalyze) | **POST** /text/analyze | 文本分析|
|[**postTextBase64Decode**](#posttextbase64decode) | **POST** /text/base64/decode | Base64 解码|
|[**postTextBase64Encode**](#posttextbase64encode) | **POST** /text/base64/encode | Base64 编码|
|[**postTextConvert**](#posttextconvert) | **POST** /text/convert | 格式转换|
|[**postTextMarkdownToHtml**](#posttextmarkdowntohtml) | **POST** /text/markdown-to-html | Markdown 转 HTML|
|[**postTextMarkdownToPdf**](#posttextmarkdowntopdf) | **POST** /text/markdown-to-pdf | Markdown 转 PDF|
|[**postTextMd5**](#posttextmd5) | **POST** /text/md5 | MD5 哈希 (POST)|
|[**postTextMd5Verify**](#posttextmd5verify) | **POST** /text/md5/verify | MD5 校验|

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

let postTextAesDecryptRequest: PostTextAesDecryptRequest; //

const { status, data } = await apiInstance.postTextAesDecrypt(
    postTextAesDecryptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAesDecryptRequest** | **PostTextAesDecryptRequest**|  | |


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

# **postTextAesDecryptAdvanced**
> PostTextAesDecryptAdvanced200Response postTextAesDecryptAdvanced(postTextAesDecryptAdvancedRequest)

需要解密通过高级加密接口加密的数据？这个接口提供与加密接口完全配对的解密功能，支持相同的6种加密模式和3种填充方式。  > [!IMPORTANT] > **解密参数必须与加密时一致** > 解密时，必须提供与加密时相同的密钥、模式和填充方式。对于非GCM模式，还需要提供加密时返回的IV。  ## 功能概述 这是一个功能完整的AES解密接口，能够解密通过高级加密接口加密的所有密文。支持所有6种加密模式和3种填充方式，与加密接口完全配对。  ### 解密流程 1. 获取加密时返回的密文和配置参数 2. 使用相同的密钥、模式、填充方式和IV（如需要） 3. 调用本接口进行解密 4. 获取原始明文  ### 支持的解密模式 - **GCM模式**（推荐）：自动验证数据完整性，如果密文被篡改会解密失败 - **CBC模式**：经典块解密模式，需要提供加密时的IV - **CTR/OFB/CFB模式**：流密码解密，需要提供加密时的IV - **ECB模式**：不需要IV，但安全性较低  ### 填充方式处理 - **PKCS7填充**：解密后自动移除填充 - **Zero填充**：解密后自动移除0x00填充 - **None填充**：无填充处理  ## 参数说明 - **`text`**: 待解密的密文（Base64编码，来自加密接口返回的ciphertext字段） - **`key`**: 解密密钥（必须与加密时相同） - **`mode`**: 加密模式（必须与加密时相同） - **`padding`**: 填充方式（可选，默认PKCS7，必须与加密时相同） - **`iv`**: 初始化向量（非GCM模式必须提供，Base64编码）  ## 常见错误处理 如果解密失败，请检查以下几点： - 密钥是否与加密时完全相同 - 模式和填充方式是否匹配 - 非GCM模式下是否提供了正确的IV - 密文是否完整且未被修改 - GCM模式下密文是否被篡改

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextAesDecryptAdvancedRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextAesDecryptAdvancedRequest: PostTextAesDecryptAdvancedRequest; //

const { status, data } = await apiInstance.postTextAesDecryptAdvanced(
    postTextAesDecryptAdvancedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAesDecryptAdvancedRequest** | **PostTextAesDecryptAdvancedRequest**|  | |


### Return type

**PostTextAesDecryptAdvanced200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 解密成功，返回原始明文 |  -  |
|**400** | 无效的请求参数或解密失败 |  -  |

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

let postTextAesEncryptRequest: PostTextAesEncryptRequest; //

const { status, data } = await apiInstance.postTextAesEncrypt(
    postTextAesEncryptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAesEncryptRequest** | **PostTextAesEncryptRequest**|  | |


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

# **postTextAesEncryptAdvanced**
> PostTextAesEncryptAdvanced200Response postTextAesEncryptAdvanced(postTextAesEncryptAdvancedRequest)

需要更灵活的AES加密方案？这个高级接口支持6种加密模式和3种填充方式，让你根据具体场景选择最合适的加密配置。  > [!IMPORTANT] > **推荐使用GCM模式** > GCM模式提供认证加密(AEAD)，不仅能加密数据，还能验证数据完整性，防止密文被篡改。这是目前最推荐的加密模式。  ## 功能概述 这是一个功能全面的AES加密接口，支持多种加密模式和填充方式。你可以根据不同的安全需求和性能要求，灵活选择合适的加密配置。  ### 支持的加密模式 - **GCM模式**（推荐）：认证加密模式，提供完整性保护 - **CBC模式**：经典块加密模式，需要IV和填充，适用于文件加密 - **CTR模式**：流密码模式，无需填充，适用于实时数据加密 - **OFB/CFB模式**：流密码模式，无需填充，适用于流数据加密 - **ECB模式**（不推荐）：仅用于兼容性需求  ### 支持的填充方式 - **PKCS7填充**（推荐）：标准填充方式 - **Zero填充**：使用0x00字节填充 - **None填充**：无填充，用于流密码模式  ### 输出格式支持 - **base64**（默认）：标准Base64编码输出，适合传输和存储 - **hex**：十六进制编码输出，方便进行结果核对  通过 `output_format` 参数可以直接获取HEX格式的密文，无需额外调用转换接口。  ## 参数说明 - **`text`**: 待加密的明文文本 - **`key`**: 加密密钥（支持任意长度） - **`mode`**: 加密模式（可选，默认GCM） - **`padding`**: 填充方式（可选，默认PKCS7） - **`iv`**: 自定义IV（可选，Base64编码，16字节） - **`output_format`**: 输出格式（可选，默认base64）  ## 使用示例  **示例1：HEX格式输出** ```json {   \"text\": \"测试文本123\",   \"key\": \"1234567890123456\",   \"mode\": \"ECB\",   \"padding\": \"PKCS7\",   \"output_format\": \"hex\" } ``` 返回示例： ```json {   \"ciphertext\": \"aaaca6027da10918bb5d23d81939552c\",   \"mode\": \"ECB\",   \"padding\": \"PKCS7\" } ```  **示例2：Base64格式输出（默认）** ```json {   \"text\": \"测试文本123\",   \"key\": \"1234567890123456\",   \"mode\": \"ECB\",   \"padding\": \"PKCS7\" } ``` 返回示例： ```json {   \"ciphertext\": \"qqymAn2hCRi7XSPYGTlVLA==\",   \"mode\": \"ECB\",   \"padding\": \"PKCS7\" } ```  ## 技术规格 - **加密算法**: AES-256 - **编码格式**: Base64/HEX（输入/输出） - **IV长度**: 16字节（128位）  > [!NOTE] > **关于IV（初始化向量）** > - GCM模式无需提供IV > - CBC/CTR/OFB/CFB模式可选提供IV > - ECB模式不使用IV > - 建议每次加密使用不同的IV以确保安全性  > [!TIP] > **关于输出格式** > - 如需核对输出结果，建议使用 `output_format: \"hex\"` > - Base64格式更适合网络传输和API调用 > - 两种格式可以相互转换，数据完全一致

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextAesEncryptAdvancedRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextAesEncryptAdvancedRequest: PostTextAesEncryptAdvancedRequest; //

const { status, data } = await apiInstance.postTextAesEncryptAdvanced(
    postTextAesEncryptAdvancedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAesEncryptAdvancedRequest** | **PostTextAesEncryptAdvancedRequest**|  | |


### Return type

**PostTextAesEncryptAdvanced200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 加密成功，返回密文和加密配置 |  -  |
|**400** | 无效的请求参数 |  -  |

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

let postTextAnalyzeRequest: PostTextAnalyzeRequest; //

const { status, data } = await apiInstance.postTextAnalyze(
    postTextAnalyzeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextAnalyzeRequest** | **PostTextAnalyzeRequest**|  | |


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

let postTextBase64DecodeRequest: PostTextBase64DecodeRequest; //

const { status, data } = await apiInstance.postTextBase64Decode(
    postTextBase64DecodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextBase64DecodeRequest** | **PostTextBase64DecodeRequest**|  | |


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

let postTextBase64EncodeRequest: PostTextBase64EncodeRequest; //

const { status, data } = await apiInstance.postTextBase64Encode(
    postTextBase64EncodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextBase64EncodeRequest** | **PostTextBase64EncodeRequest**|  | |


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

# **postTextConvert**
> PostTextConvert200Response postTextConvert(postTextConvertRequest)

需要在不同文本格式之间转换？这个接口支持Base64、Hex、URL、HTML、Unicode等多种格式互转，还能生成MD5、SHA256等哈希值。  ## 功能概述 你提供待转换的文本、源格式和目标格式，接口会自动完成转换。支持7种双向格式（plain、base64、hex、url、html、unicode、binary）和4种单向哈希（md5、sha1、sha256、sha512）。  ## 格式说明 **双向转换格式**：plain（纯文本）、base64、hex（十六进制）、url、html（HTML实体）、unicode（\\uXXXX转义）、binary（二进制字符串）  **单向哈希格式**：md5、sha1、sha256、sha512（仅可作为目标格式，不可逆）  ## 链式转换 支持多次调用实现复杂转换，如先将文本转为base64，再将base64转为hex。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextConvertRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextConvertRequest: PostTextConvertRequest; //

const { status, data } = await apiInstance.postTextConvert(
    postTextConvertRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextConvertRequest** | **PostTextConvertRequest**|  | |


### Return type

**PostTextConvert200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 转换成功 |  -  |
|**400** | 转换失败或参数错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextMarkdownToHtml**
> PostTextMarkdownToHtml200Response postTextMarkdownToHtml(postTextMarkdownToHtmlRequest)

直接调用这个接口，就可以把 Markdown 文本转换成带样式的 HTML，而且它不只适合程序里动态注入，也适合在开发阶段直接预览。  ## 如何使用与预览 - **默认模式：返回 JSON 里的 HTML 片段**：不传 `format` 时，接口会返回 JSON。您只需要读取响应里的 `data.html`，再赋值给前端容器，例如 `element.innerHTML = data.html`、Vue 的 `v-html`，或者 React 里配合 `dangerouslySetInnerHTML` 使用。 - **预览模式：直接返回完整 HTML 网页**：如果您想在浏览器里直接打开结果，或者想把响应保存成一个独立的 `.html` 文件，请传 `format=\"html\"`。这个模式下，接口会直接返回带 `<!DOCTYPE html><html>...` 的完整网页源码。  ## 功能概述 - **自带精美排版，无需手写 CSS**：返回结果已经内置样式，标题、引用、表格、任务列表和代码块都可以直接显示。 - **支持丰富的排版元素**：除了标准 Markdown，这个接口也可以正确处理 GFM 常见语法，例如表格、任务列表和带语言标记的代码块。 - **安全处理用户内容**：默认开启安全模式，会自动过滤原始 HTML 里的风险脚本。如果内容来源绝对可信，并且您确实需要保留原始 HTML，可以把 `sanitize` 设为 `false`。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextMarkdownToHtmlRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextMarkdownToHtmlRequest: PostTextMarkdownToHtmlRequest; //请求体使用 `application/json`。`text` 必填；`format` 和 `sanitize` 可选。

const { status, data } = await apiInstance.postTextMarkdownToHtml(
    postTextMarkdownToHtmlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextMarkdownToHtmlRequest** | **PostTextMarkdownToHtmlRequest**| 请求体使用 &#x60;application/json&#x60;。&#x60;text&#x60; 必填；&#x60;format&#x60; 和 &#x60;sanitize&#x60; 可选。 | |


### Return type

**PostTextMarkdownToHtml200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 转换成功。具体返回 JSON 还是纯 HTML，由 &#x60;format&#x60; 参数决定。 |  -  |
|**400** | 请求参数错误。可能是请求体格式错误、&#x60;text&#x60; 为空，或者 &#x60;format&#x60; 取值不合法。 |  -  |
|**413** | Markdown 文本超过当前大小限制。 |  -  |
|**500** | 转换过程中发生错误，请稍后再试。 |  -  |
|**503** | 服务暂时不可用。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTextMarkdownToPdf**
> File postTextMarkdownToPdf(postTextMarkdownToPdfRequest)

当您的业务系统需要提供“导出为 PDF”的功能时，无需在后端部署复杂的排版引擎，只需将 Markdown 文本发给这个接口，即可直接获取打印级的 PDF 文件。  ## 功能概述 - **服务端直接生成**：接口直接返回 PDF 文件二进制流，前端无需任何处理即可触发下载，后端也能轻松存盘归档。 - **多种精美主题与纸张**：内置了 GitHub、暗黑等多种专业排版主题，并支持 A4、Letter 等标准纸张。只需简单配置，就能生成符合业务场景的专业文档。 - **公网图片也可以直接带入 PDF**：除了纯文本和标准 Markdown 语法，这个接口也可以处理 `data URI` 图片，或者公网可访问的 `http`、`https` 图片链接。服务端会先通过代理抓取图片，并在渲染前内联到文档里，同时带有超时控制。

### Example

```typescript
import {
    TextApi,
    Configuration,
    PostTextMarkdownToPdfRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TextApi(configuration);

let postTextMarkdownToPdfRequest: PostTextMarkdownToPdfRequest; //请求体使用 `application/json`。`text` 必填，`theme` 和 `paper_size` 可选。

const { status, data } = await apiInstance.postTextMarkdownToPdf(
    postTextMarkdownToPdfRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextMarkdownToPdfRequest** | **PostTextMarkdownToPdfRequest**| 请求体使用 &#x60;application/json&#x60;。&#x60;text&#x60; 必填，&#x60;theme&#x60; 和 &#x60;paper_size&#x60; 可选。 | |


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 转换成功。响应体是 PDF 二进制文件流。 |  * Content-Disposition - 提示客户端按 PDF 文件处理，默认文件名为 &#x60;markdown.pdf&#x60;。 <br>  * Cache-Control - 禁止缓存本次导出的 PDF 响应。 <br>  |
|**400** | 请求参数不合法，或者 Markdown 内容包含当前不允许的内容。 |  -  |
|**413** | Markdown 文本，或 Markdown 中引用的图片资源超过当前大小限制。 |  -  |
|**500** | PDF 生成失败，请稍后再试。 |  -  |
|**502** | Markdown 中引用的图片下载失败，或远端返回的不是可识别的图片内容。 |  -  |
|**503** | PDF 渲染服务暂时不可用。 |  -  |
|**504** | Markdown 中引用的图片下载超时。 |  -  |

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

let postTextMd5VerifyRequest: PostTextMd5VerifyRequest; //

const { status, data } = await apiInstance.postTextMd5Verify(
    postTextMd5VerifyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTextMd5VerifyRequest** | **PostTextMd5VerifyRequest**|  | |


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

