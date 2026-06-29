# AIGCApi

All URIs are relative to *https://uapis.cn*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postWatermarkDecode**](#postwatermarkdecode) | **POST** /watermark/decode | 提取图片隐水印|
|[**postWatermarkEmbed**](#postwatermarkembed) | **POST** /watermark/embed | 添加图片隐水印|
|[**postWatermarkLabel**](#postwatermarklabel) | **POST** /watermark/label | 添加 AI 生成内容标识|
|[**postWatermarkProducerCode**](#postwatermarkproducercode) | **POST** /watermark/producer-code | 生成 AIGC 服务提供者编码|

# **postWatermarkDecode**
> PostWatermarkDecode200Response postWatermarkDecode()

遇到一张疑似被盗用或 AI 生成的图片，想查查它有没有被打过“思想钢印”？直接把图片扔给这个接口，它能把藏在里面的标识完完整整地提取出来。  ## 功能概述 此接口用于检测图片中是否包含隐形水印，若存在则还原出写入的原始标识内容。即使图片经历过压缩、截取或多次网络转发，也具备较高的成功提取率。接口具备防误判机制，若图片确实未经过处理，会明确返回未检测到结果，而不会强制拼接无效内容。  ## 使用须知 如果您在嵌入水印时修改过进阶参数（如 `ecc` 或 `model_type`），在提取时必须传入相同的参数值。若嵌入时使用的是默认配置，此处直接留空即可。

### Example

```typescript
import {
    AIGCApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new AIGCApi(configuration);

let ecc: string; //纠错强度，必须和嵌入时填的一致，否则无法正确提取。[查看各档位](#enum-list) (optional) (default to 'BCH_4')
let file: File; //要提取水印的图片文件，支持 PNG、JPEG、WebP。 (optional) (default to undefined)
let imageBase64: string; //图片的 Base64 编码，可携带或省略 data: 前缀。 (optional) (default to undefined)
let modelType: string; //水印档位，必须和嵌入时用的一致，否则无法正确提取。[查看各档位](#enum-list) (optional) (default to 'B')
let url: string; //图片链接，需确保公网可直接访问。 (optional) (default to undefined)

const { status, data } = await apiInstance.postWatermarkDecode(
    ecc,
    file,
    imageBase64,
    modelType,
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ecc** | [**string**]**Array<&#39;BCH_SUPER&#39; &#124; &#39;BCH_5&#39; &#124; &#39;BCH_4&#39; &#124; &#39;BCH_3&#39;>** | 纠错强度，必须和嵌入时填的一致，否则无法正确提取。[查看各档位](#enum-list) | (optional) defaults to 'BCH_4'|
| **file** | [**File**] | 要提取水印的图片文件，支持 PNG、JPEG、WebP。 | (optional) defaults to undefined|
| **imageBase64** | [**string**] | 图片的 Base64 编码，可携带或省略 data: 前缀。 | (optional) defaults to undefined|
| **modelType** | [**string**]**Array<&#39;B&#39; &#124; &#39;Q&#39;>** | 水印档位，必须和嵌入时用的一致，否则无法正确提取。[查看各档位](#enum-list) | (optional) defaults to 'B'|
| **url** | [**string**] | 图片链接，需确保公网可直接访问。 | (optional) defaults to undefined|


### Return type

**PostWatermarkDecode200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 读取完成，返回分析与提取结果。 |  -  |
|**400** | 参数无效，请检查是否正确提供了图片来源。 |  -  |
|**503** | 服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWatermarkEmbed**
> PostWatermarkEmbed200Response postWatermarkEmbed()

想给自己的原创图片打上专属烙印，又不想破坏画面美感？或者是为了 AIGC 生成的图片做后续溯源追踪？这个接口能帮您把自定义标识悄悄藏进图片里。  ## 功能概述 您可以上传图片并指定一段标识文本，接口会利用算法将这段文本隐形嵌入到图片的像素之中。嵌入后的图片在肉眼看来毫无变化，但能够有效抵抗常见的缩放、裁剪、社交平台压缩与二次转发。适合用于标记图片来源、追踪分发渠道或进行隐蔽的版权确权。  ## 使用须知 **容量限制**：受限于隐形水印的算法特性，图片能嵌入的字符长度有限（通常为短码）。建议只放入简短的溯源 ID 或特征码，将完整的映射信息存储在您自己的数据库中。  **参数说明**：提供图片的方式（`file` / `url` / `image_base64`）三选一即可；其他进阶参数如无特殊需求，建议保持留空使用默认最佳配置。

### Example

```typescript
import {
    AIGCApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new AIGCApi(configuration);

let payload: string; //需要嵌入图片的隐形标识内容。 (default to undefined)
let ecc: string; //纠错强度，决定水印能抗多少损坏、最多能嵌入多少字符：纠错越强，图片被压缩、裁剪后越容易读回，但能嵌入的字符越少。不填默认 `BCH_4`。[查看各档位](#enum-list) (optional) (default to 'BCH_4')
let file: File; //要加水印的图片文件，支持 PNG、JPEG、WebP。 (optional) (default to undefined)
let imageBase64: string; //图片的 Base64 编码，可携带或省略 data: 前缀。 (optional) (default to undefined)
let jpegQuality: number; //输出 JPEG 时的图像质量，范围 1 到 100。 (optional) (default to undefined)
let modelType: string; //水印档位，在稳健性和画质之间取舍。不填默认 `B`。[查看各档位](#enum-list) (optional) (default to 'B')
let outFormat: string; //输出的图片格式。不填则默认保持与原图一致。 (optional) (default to undefined)
let strength: number; //水印写入强度，默认 `1.0`。调高更不容易被压缩、转发破坏，但更可能被肉眼看出；调低更隐蔽，但抗损坏能力下降。 (optional) (default to 1)
let url: string; //图片链接，需确保公网可直接访问。 (optional) (default to undefined)

const { status, data } = await apiInstance.postWatermarkEmbed(
    payload,
    ecc,
    file,
    imageBase64,
    jpegQuality,
    modelType,
    outFormat,
    strength,
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payload** | [**string**] | 需要嵌入图片的隐形标识内容。 | defaults to undefined|
| **ecc** | [**string**]**Array<&#39;BCH_SUPER&#39; &#124; &#39;BCH_5&#39; &#124; &#39;BCH_4&#39; &#124; &#39;BCH_3&#39;>** | 纠错强度，决定水印能抗多少损坏、最多能嵌入多少字符：纠错越强，图片被压缩、裁剪后越容易读回，但能嵌入的字符越少。不填默认 &#x60;BCH_4&#x60;。[查看各档位](#enum-list) | (optional) defaults to 'BCH_4'|
| **file** | [**File**] | 要加水印的图片文件，支持 PNG、JPEG、WebP。 | (optional) defaults to undefined|
| **imageBase64** | [**string**] | 图片的 Base64 编码，可携带或省略 data: 前缀。 | (optional) defaults to undefined|
| **jpegQuality** | [**number**] | 输出 JPEG 时的图像质量，范围 1 到 100。 | (optional) defaults to undefined|
| **modelType** | [**string**]**Array<&#39;B&#39; &#124; &#39;Q&#39;>** | 水印档位，在稳健性和画质之间取舍。不填默认 &#x60;B&#x60;。[查看各档位](#enum-list) | (optional) defaults to 'B'|
| **outFormat** | [**string**]**Array<&#39;png&#39; &#124; &#39;jpeg&#39;>** | 输出的图片格式。不填则默认保持与原图一致。 | (optional) defaults to undefined|
| **strength** | [**number**] | 水印写入强度，默认 &#x60;1.0&#x60;。调高更不容易被压缩、转发破坏，但更可能被肉眼看出；调低更隐蔽，但抗损坏能力下降。 | (optional) defaults to 1|
| **url** | [**string**] | 图片链接，需确保公网可直接访问。 | (optional) defaults to undefined|


### Return type

**PostWatermarkEmbed200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 嵌入成功，返回带有隐形水印的图片数据。 |  -  |
|**400** | 参数无效，请检查是否正确提供了图片及水印内容。 |  -  |
|**413** | 上传的图片过大，请压缩后再试。 |  -  |
|**503** | 服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWatermarkLabel**
> PostWatermarkLabel200Response postWatermarkLabel()

AI 生成的图片上线前需要满足国标合规要求？别头疼，调用一次这个接口，就能自动给图片打上符合《GB 45438-2025》标准的三层标识。  ## 三层标识说明 此接口一次性支持注入以下三种符合国标规范的标识： - **元数据隐式标识**（默认开启）：在图片文件的 EXIF/XMP 元数据中记录此内容的“AI 生成”属性及服务提供者信息，不影响视觉呈现。 - **可见角标标识**（可选）：在图片指定角落叠加醒目的“AI 生成”文字，字号会自动计算以符合国标关于“字符高度不小于画面短边 5%”的规定。 - **隐形水印标识**（可选）：在图像像素深层嵌入抗压缩溯源信息。  ## 使用须知 **必填说明**：根据规范，`content_producer`（服务提供者编码）为必填项。推荐使用本平台配套的 `/watermark/producer-code` 接口快速生成规范的 27 位服务提供者编码。  **标识组合**：若您需要关闭默认的元数据标识（`skip_metadata=true`），则必须至少开启可见角标或隐形水印中的一项，以保证图片拥有合规标识。

### Example

```typescript
import {
    AIGCApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new AIGCApi(configuration);

let contentProducer: string; //必需：生成此图片的服务提供者编码（27 位）。 (default to undefined)
let contentPropagator: string; //负责内容传播的服务提供者编码（27 位，可选）。 (optional) (default to undefined)
let embedWatermark: boolean; //是否额外注入抗压缩的隐形水印。默认不开启。 (optional) (default to false)
let explicitHeightRatio: number; //角标文字高度占画面短边的比例。低于 0.05 会自动补偿至国标下限要求。 (optional) (default to undefined)
let explicitLabel: boolean; //是否叠加可见的角标文字标识。默认不开启。 (optional) (default to false)
let explicitPosition: string; //角标所处的相对位置，默认为右下角。 (optional) (default to undefined)
let explicitText: string; //角标显示的具体文案，默认为“AI 生成”。 (optional) (default to undefined)
let file: File; //待处理的图片文件，支持 PNG、JPEG、WebP。 (optional) (default to undefined)
let imageBase64: string; //图片的 Base64 编码，可携带或省略 data: 前缀。 (optional) (default to undefined)
let jpegQuality: number; //输出 JPEG 时的图像质量，范围 1 到 100。 (optional) (default to undefined)
let label: string; //生成场景分类：1 代表 AI 生成合成，2 代表人机协同，3 代表其他情况。默认取值为 1。 (optional) (default to undefined)
let outFormat: string; //输出的图片格式。不填则默认保持与原图一致。 (optional) (default to undefined)
let produceId: string; //服务侧内部生成的内容编号（可选）。 (optional) (default to undefined)
let propagateId: string; //传播方侧的内容编号（可选）。 (optional) (default to undefined)
let skipMetadata: boolean; //是否跳过写入元数据标识。若设置为 true，则必须开启另外两项中的至少一项。 (optional) (default to false)
let url: string; //图片链接，需确保公网可直接访问。 (optional) (default to undefined)
let watermarkPayload: string; //隐形水印中所记载的标识内容。 (optional) (default to undefined)

const { status, data } = await apiInstance.postWatermarkLabel(
    contentProducer,
    contentPropagator,
    embedWatermark,
    explicitHeightRatio,
    explicitLabel,
    explicitPosition,
    explicitText,
    file,
    imageBase64,
    jpegQuality,
    label,
    outFormat,
    produceId,
    propagateId,
    skipMetadata,
    url,
    watermarkPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentProducer** | [**string**] | 必需：生成此图片的服务提供者编码（27 位）。 | defaults to undefined|
| **contentPropagator** | [**string**] | 负责内容传播的服务提供者编码（27 位，可选）。 | (optional) defaults to undefined|
| **embedWatermark** | [**boolean**] | 是否额外注入抗压缩的隐形水印。默认不开启。 | (optional) defaults to false|
| **explicitHeightRatio** | [**number**] | 角标文字高度占画面短边的比例。低于 0.05 会自动补偿至国标下限要求。 | (optional) defaults to undefined|
| **explicitLabel** | [**boolean**] | 是否叠加可见的角标文字标识。默认不开启。 | (optional) defaults to false|
| **explicitPosition** | [**string**]**Array<&#39;top-left&#39; &#124; &#39;top-right&#39; &#124; &#39;bottom-left&#39; &#124; &#39;bottom-right&#39;>** | 角标所处的相对位置，默认为右下角。 | (optional) defaults to undefined|
| **explicitText** | [**string**] | 角标显示的具体文案，默认为“AI 生成”。 | (optional) defaults to undefined|
| **file** | [**File**] | 待处理的图片文件，支持 PNG、JPEG、WebP。 | (optional) defaults to undefined|
| **imageBase64** | [**string**] | 图片的 Base64 编码，可携带或省略 data: 前缀。 | (optional) defaults to undefined|
| **jpegQuality** | [**number**] | 输出 JPEG 时的图像质量，范围 1 到 100。 | (optional) defaults to undefined|
| **label** | [**string**]**Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>** | 生成场景分类：1 代表 AI 生成合成，2 代表人机协同，3 代表其他情况。默认取值为 1。 | (optional) defaults to undefined|
| **outFormat** | [**string**]**Array<&#39;png&#39; &#124; &#39;jpeg&#39;>** | 输出的图片格式。不填则默认保持与原图一致。 | (optional) defaults to undefined|
| **produceId** | [**string**] | 服务侧内部生成的内容编号（可选）。 | (optional) defaults to undefined|
| **propagateId** | [**string**] | 传播方侧的内容编号（可选）。 | (optional) defaults to undefined|
| **skipMetadata** | [**boolean**] | 是否跳过写入元数据标识。若设置为 true，则必须开启另外两项中的至少一项。 | (optional) defaults to false|
| **url** | [**string**] | 图片链接，需确保公网可直接访问。 | (optional) defaults to undefined|
| **watermarkPayload** | [**string**] | 隐形水印中所记载的标识内容。 | (optional) defaults to undefined|


### Return type

**PostWatermarkLabel200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 打标成功，返回符合合规要求的多层标识图片。 |  -  |
|**400** | 参数无效，请检查服务提供者编码格式，或确保至少开启了一种标识策略。 |  -  |
|**413** | 上传的图片过大，请压缩后再试。 |  -  |
|**503** | 服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWatermarkProducerCode**
> PostWatermarkProducerCode200Response postWatermarkProducerCode(postWatermarkProducerCodeRequest)

还在发愁怎么拼出符合《GB 45438-2025》要求的 27 位 AIGC 服务提供者编码？无论是想一键生成自己的专属合规编码，还是想校验已有编码对不对，这个接口都能帮您轻松搞定。  ## 功能概述 此接口具备“生成”与“校验”双重能力： - **生成模式**：填入组织或个人的主体身份信息与证件号，接口会自动处理复杂的拼位规则，输出标准的 27 位编码。 - **校验模式**：仅需填入现成的 `code`，接口将逐段拆解、验证其合法性，并解析出各个组成部分的实际含义。  ## 使用须知 **模式互斥**：当您在请求体中填入了 `code` 参数时，接口会自动进入“校验模式”，其余的生成参数将被忽略；反之则进入“生成模式”。  **独立生成**：该编码不依赖向外部机构注册申请，而是基于您的法定身份标识（如企业统一社会信用代码、个人身份证等）根据标准算法独立生成即可。

### Example

```typescript
import {
    AIGCApi,
    Configuration,
    PostWatermarkProducerCodeRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new AIGCApi(configuration);

let postWatermarkProducerCodeRequest: PostWatermarkProducerCodeRequest; //生成所需的身份信息，或用于校验的 27 位现成编码。支持 application/json。

const { status, data } = await apiInstance.postWatermarkProducerCode(
    postWatermarkProducerCodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postWatermarkProducerCodeRequest** | **PostWatermarkProducerCodeRequest**| 生成所需的身份信息，或用于校验的 27 位现成编码。支持 application/json。 | |


### Return type

**PostWatermarkProducerCode200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 操作成功，返回生成的编码或校验的解析报告。 |  -  |
|**400** | 参数无效，主体信息不完整或编码校验失败。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

