# ImageApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAvatarGravatar**](#getavatargravatar) | **GET** /avatar/gravatar | 获取Gravatar头像|
|[**getImageBingDaily**](#getimagebingdaily) | **GET** /image/bing-daily | 获取必应每日壁纸|
|[**getImageMotou**](#getimagemotou) | **GET** /image/motou | 生成摸摸头GIF (QQ号方式)|
|[**getImageQrcode**](#getimageqrcode) | **GET** /image/qrcode | 动态生成二维码|
|[**getImageTobase64**](#getimagetobase64) | **GET** /image/tobase64 | 将在线图片转换为Base64|
|[**postImageCompress**](#postimagecompress) | **POST** /image/compress | 无损压缩图片|
|[**postImageFrombase64**](#postimagefrombase64) | **POST** /image/frombase64 | 通过Base64编码上传图片|
|[**postImageMotou**](#postimagemotou) | **POST** /image/motou | 生成摸摸头GIF (图片上传或URL方式)|
|[**postImageSpeechless**](#postimagespeechless) | **POST** /image/speechless | 生成你们怎么不说话了表情包|
|[**postImageSvg**](#postimagesvg) | **POST** /image/svg | SVG转图片|

# **getAvatarGravatar**
> File getAvatarGravatar()

提供一个超高速、高可用的Gravatar头像代理服务。内置了强大的ETag条件缓存，确保用户在更新Gravatar头像后能几乎立刻看到变化，同时最大化地利用缓存。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let email: string; //用户的 Email 地址。如果未提供 `hash` 参数，则此参数为必需。 (optional) (default to undefined)
let hash: string; //用户 Email 地址的小写 MD5 哈希值。如果提供此参数，将忽略 `email` 参数。 (optional) (default to undefined)
let s: number; //头像的尺寸，单位为像素。有效范围是 1 到 2048。 (optional) (default to 80)
let d: string; //当用户没有自己的 Gravatar 头像时，显示的默认头像类型。可选值包括 `mp`, `identicon`, `monsterid`, `wavatar`, `retro`, `robohash`, `blank`, `404`。 (optional) (default to 'mp')
let r: string; //头像分级。可选值：`g`, `pg`, `r`, `x`。 (optional) (default to 'g')

const { status, data } = await apiInstance.getAvatarGravatar(
    email,
    hash,
    s,
    d,
    r
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | 用户的 Email 地址。如果未提供 &#x60;hash&#x60; 参数，则此参数为必需。 | (optional) defaults to undefined|
| **hash** | [**string**] | 用户 Email 地址的小写 MD5 哈希值。如果提供此参数，将忽略 &#x60;email&#x60; 参数。 | (optional) defaults to undefined|
| **s** | [**number**] | 头像的尺寸，单位为像素。有效范围是 1 到 2048。 | (optional) defaults to 80|
| **d** | [**string**] | 当用户没有自己的 Gravatar 头像时，显示的默认头像类型。可选值包括 &#x60;mp&#x60;, &#x60;identicon&#x60;, &#x60;monsterid&#x60;, &#x60;wavatar&#x60;, &#x60;retro&#x60;, &#x60;robohash&#x60;, &#x60;blank&#x60;, &#x60;404&#x60;。 | (optional) defaults to 'mp'|
| **r** | [**string**] | 头像分级。可选值：&#x60;g&#x60;, &#x60;pg&#x60;, &#x60;r&#x60;, &#x60;x&#x60;。 | (optional) defaults to 'g'|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应，返回图片二进制数据。 |  * Content-Type -  <br>  * ETag -  <br>  * Cache-Control -  <br>  |
|**400** | 当请求中既没有提供 &#x60;email&#x60; 也没有提供 &#x60;hash&#x60; 参数时。 |  -  |
|**404** | 当 &#x60;d&#x3D;404&#x60; 且请求的 email 或 hash 没有对应的 Gravatar 头像时。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getImageBingDaily**
> File getImageBingDaily()

每天都想换张新壁纸？让必应的美图点亮你的一天吧！  ## 功能概述 这个接口会获取 Bing 搜索引擎当天全球同步的每日壁纸，并直接以图片形式返回。你可以用它来做应用的启动页、网站背景，或者任何需要每日更新精美图片的地方。  ## 使用须知  > [!NOTE] > **响应格式是图片** > 请注意，此接口成功时直接返回图片二进制数据（通常为 `image/jpeg`），而非 JSON 格式。请确保客户端能够正确处理。  我们内置了备用方案：如果从必应官方获取图片失败，系统会尝试返回一张预存的高质量风景图，以保证服务的稳定性。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

const { status, data } = await apiInstance.getImageBingDaily();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 请求成功！响应体是JPEG或PNG格式的图片二进制数据。 |  -  |
|**502** | 上游服务错误。我们无法从必应官方API获取到图片，并且备用图片方案也失败了。请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getImageMotou**
> File getImageMotou()

想在线rua一下好友的头像吗？这个趣味接口可以满足你。  ## 功能概述 此接口通过GET方法，专门用于通过QQ号生成摸摸头GIF。你只需要提供一个QQ号码，我们就会自动获取其公开头像，并制作成一个可爱的动图。  ## 使用须知 - **响应格式**：接口成功时直接返回 `image/gif` 格式的二进制数据。 - **背景颜色**：你可以通过 `bg_color` 参数来控制GIF的背景。使用 `transparent` 选项可以让它更好地融入各种聊天背景中。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let qq: string; //你想要摸头的对象的QQ号码。 (default to undefined)
let bgColor: 'white' | 'black' | 'transparent'; //GIF的背景颜色。留空则由后端服务决定默认值。 (optional) (default to undefined)

const { status, data } = await apiInstance.getImageMotou(
    qq,
    bgColor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **qq** | [**string**] | 你想要摸头的对象的QQ号码。 | defaults to undefined|
| **bgColor** | [**&#39;white&#39; | &#39;black&#39; | &#39;transparent&#39;**]**Array<&#39;white&#39; &#124; &#39;black&#39; &#124; &#39;transparent&#39;>** | GIF的背景颜色。留空则由后端服务决定默认值。 | (optional) defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/gif, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 生成成功！响应体是GIF格式的图片二进制数据。 |  -  |
|**400** | 请求参数错误。必须提供有效的 \&#39;qq\&#39; 参数。 |  -  |
|**500** | 服务器内部错误。可能的原因包括：获取QQ头像失败，或在生成GIF过程中发生错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getImageQrcode**
> File getImageQrcode()

无论是网址、文本还是联系方式，通通可以变成一个二维码！这是一个非常灵活的二维码生成工具。  ## 功能概述 你提供一段文本内容，我们为你生成对应的二维码图片。你可以自定义尺寸，并选择不同的返回格式以适应不同场景。  ## 使用须知  > [!IMPORTANT] > **关键参数 `format`** > 此参数决定了成功响应的内容类型和结构，请务必根据你的需求选择并正确处理响应： > - **`image`** (默认): 直接返回 `image/png` 格式的图片二进制数据，适合在 `<img>` 标签中直接使用。 > - **`json`**: 返回一个包含 Base64 Data URI 的 JSON 对象，适合需要在前端直接嵌入CSS或HTML的场景。 > - **`json_url`**: 返回一个包含图片临时URL的JSON对象，适合需要图片链接的场景。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let text: string; //你希望编码到二维码中的任何文本内容，比如一个URL、一段话或者一个JSON字符串。 (default to undefined)
let size: number; //二维码图片的边长（正方形），单位是像素。有效范围是 256 到 1024 之间。 (optional) (default to 256)
let format: 'image' | 'json' | 'json_url'; //指定响应内容的格式。可选值为 `image`, `json`, `json_url`。 (optional) (default to 'image')

const { status, data } = await apiInstance.getImageQrcode(
    text,
    size,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **text** | [**string**] | 你希望编码到二维码中的任何文本内容，比如一个URL、一段话或者一个JSON字符串。 | defaults to undefined|
| **size** | [**number**] | 二维码图片的边长（正方形），单位是像素。有效范围是 256 到 1024 之间。 | (optional) defaults to 256|
| **format** | [**&#39;image&#39; | &#39;json&#39; | &#39;json_url&#39;**]**Array<&#39;image&#39; &#124; &#39;json&#39; &#124; &#39;json_url&#39;>** | 指定响应内容的格式。可选值为 &#x60;image&#x60;, &#x60;json&#x60;, &#x60;json_url&#x60;。 | (optional) defaults to 'image'|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 请求成功。响应的格式和内容取决于你传入的 &#x60;format&#x60; 参数。请参考下面不同 &#x60;Content-Type&#x60; 的定义。 |  -  |
|**400** | 请求参数错误。请检查 &#x60;text&#x60; 是否提供，&#x60;size&#x60; 是否在有效范围内，&#x60;format&#x60; 是否为支持的值。 |  -  |
|**500** | 服务器内部错误。在生成二维码的过程中发生了未知错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getImageTobase64**
> GetImageTobase64200Response getImageTobase64()

看到一张网上的图片，想把它转换成 Base64 编码以便嵌入到你的 HTML 或 CSS 中？用这个接口就对了。  ## 功能概述 你提供一个公开可访问的图片 URL，我们帮你把它下载下来，并转换成包含 MIME 类型的 Base64 Data URI 字符串返回给你。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let url: string; //需要转换为Base64的、可公开访问的图片URL地址。 (default to undefined)

const { status, data } = await apiInstance.getImageTobase64(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | 需要转换为Base64的、可公开访问的图片URL地址。 | defaults to undefined|


### Return type

**GetImageTobase64200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 转换成功！返回包含Base64编码的JSON对象。 |  -  |
|**400** | 请求参数错误。请检查你是否提供了 &#x60;url&#x60; 参数，以及它是否是一个合法的URL格式。 |  -  |
|**502** | 获取图片失败。我们无法从你提供的URL下载图片。请检查该URL是否可以公开访问，以及它是否指向一个有效的图片资源。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postImageCompress**
> File postImageCompress()

还在为图片体积和加载速度发愁吗？体验一下我们强大的**无损压缩服务**，它能在几乎不牺牲任何肉眼可感知的画质的前提下，将图片体积压缩到极致。  ## 功能概述 你只需要上传一张常见的图片（如 PNG, JPG），选择一个压缩等级，就能获得一个体积小到惊人的压缩文件。这对于需要大量展示高清图片的网站、App 或小程序来说，是优化用户体验、节省带宽和存储成本的利器。  ## 使用须知 > [!TIP] > 为了给您最好的压缩效果，我们的算法需要进行复杂计算，处理时间可能会稍长一些，请耐心等待。  > [!WARNING] > **服务排队提醒** > 这是一个计算密集型服务。在高并发时，您的请求可能会被排队等待处理。如果您需要将其集成到对延迟敏感的生产服务中，请注意这一点。  ### 请求与响应格式 - 请求必须使用 `multipart/form-data` 格式上传文件。 - 成功响应将直接返回压缩后的文件二进制流 (`application/octet-stream`)，并附带 `Content-Disposition` 头，建议客户端根据此头信息保存文件。  ## 参数详解 ### `level` (压缩等级) 这是一个从 `1` 到 `5` 的整数，它决定了压缩的强度和策略，数字越小，压缩率越高。所有等级都经过精心调校，以在最大化压缩率的同时保证出色的视觉质量。 - `1`: **极限压缩** (推荐，体积最小，画质优异) - `2`: **高效压缩** - `3`: **智能均衡** (默认选项) - `4`: **画质优先** - `5`: **专业保真** (压缩率稍低，保留最多图像信息)  ## 错误处理指南 - **400 Bad Request**: 通常因为没有上传文件，或者 `level` 参数不在 1-5 的范围内。 - **500 Internal Server Error**: 如果在压缩过程中服务器发生内部错误，会返回此状态码。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let file: File; //支持PNG, JPG, JPEG等常见图片格式。文件大小不超过15MB。 (default to undefined)
let level: 1 | 2 | 3 | 4 | 5; //压缩强度 (1-5)，默认为 3。数字越小，压缩率越高。 (optional) (default to 3)
let format: 'png' | 'jpeg'; //输出图片格式，可以是 \'png\' 或 \'jpeg\'。 (optional) (default to 'png')

const { status, data } = await apiInstance.postImageCompress(
    file,
    level,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | 支持PNG, JPG, JPEG等常见图片格式。文件大小不超过15MB。 | defaults to undefined|
| **level** | [**1 | 2 | 3 | 4 | 5**]**Array<1 &#124; 2 &#124; 3 &#124; 4 &#124; 5>** | 压缩强度 (1-5)，默认为 3。数字越小，压缩率越高。 | (optional) defaults to 3|
| **format** | [**&#39;png&#39; | &#39;jpeg&#39;**]**Array<&#39;png&#39; &#124; &#39;jpeg&#39;>** | 输出图片格式，可以是 \&#39;png\&#39; 或 \&#39;jpeg\&#39;。 | (optional) defaults to 'png'|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ѹ���ɹ�����Ӧ����ѹ������ͼƬ���������ݡ�Content-Type ��������ѡ��Ŀ��ʽ����Ĭ��Ϊ image/png�� |  * Content-Disposition - ����ͻ��˽��ļ�����Ϊѹ�������ļ������Ƽ�ʹ��׺����������ʽ�� <br>  |
|**400** | 请求无效。可能是未上传文件、文件格式不受支持或参数错误。 |  -  |
|**500** | 服务器内部错误。压缩过程中发生错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postImageFrombase64**
> PostImageFrombase64200Response postImageFrombase64(postImageFrombase64Request)

当你需要在前端处理完图片（比如裁剪、加滤镜后），不通过传统表单，而是直接上传图片的场景，这个接口就派上用场了。  ## 功能概述 你只需要将图片的 Base64 编码字符串发送过来，我们就会把它解码、保存为图片文件，并返回一个可供访问的公开 URL。  ## 使用须知  > [!IMPORTANT] > **关于 `imageData` 格式** > 你发送的 `imageData` 字符串必须是完整的 Base64 Data URI 格式，它需要包含 MIME 类型信息，例如 `data:image/png;base64,iVBORw0KGgo...`。缺少 `data:image/...;base64,` 前缀将导致解码失败。

### Example

```typescript
import {
    ImageApi,
    Configuration,
    PostImageFrombase64Request
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let postImageFrombase64Request: PostImageFrombase64Request; //一个JSON对象，包含 `imageData` 字段，其值为你想要上传图片的完整Base64 Data URI。

const { status, data } = await apiInstance.postImageFrombase64(
    postImageFrombase64Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postImageFrombase64Request** | **PostImageFrombase64Request**| 一个JSON对象，包含 &#x60;imageData&#x60; 字段，其值为你想要上传图片的完整Base64 Data URI。 | |


### Return type

**PostImageFrombase64200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 上传成功！返回图片的访问地址。 |  -  |
|**400** | 请求失败。可能的原因有：请求体不是有效的JSON，缺少 &#x60;imageData&#x60; 字段，或者 &#x60;imageData&#x60; 的内容不是有效的Base64 Data URI。 |  -  |
|**500** | 服务器内部错误。在解码或保存图片文件时发生了未知错误。请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postImageMotou**
> File postImageMotou()

除了使用QQ头像，你还可以通过上传自己的图片或提供图片URL来制作独一无二的摸摸头GIF。  ## 功能概述 此接口通过POST方法，支持两种方式生成GIF： 1.  **图片URL**：在表单中提供 `image_url` 字段。 2.  **上传图片**：在表单中上传 `file` 文件。  ## 使用须知 - **响应格式**：接口成功时直接返回 `image/gif` 格式的二进制数据。 - **参数优先级**：如果同时提供了 `image_url` 和上传的 `file` 文件，系统将 **优先使用 `image_url`**。 - **背景颜色**：同样支持 `bg_color` 表单字段来控制GIF背景。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let imageUrl: string; //图片的URL地址。如果提供此项，将优先使用该URL的图片。 (optional) (default to undefined)
let file: File; //上传的图片文件。支持JPG、PNG、GIF等常见格式。 (optional) (default to undefined)
let bgColor: string; //GIF的背景颜色。可选值为 \\\'white\\\', \\\'black\\\', \\\'transparent\\\'。 (optional) (default to undefined)

const { status, data } = await apiInstance.postImageMotou(
    imageUrl,
    file,
    bgColor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageUrl** | [**string**] | 图片的URL地址。如果提供此项，将优先使用该URL的图片。 | (optional) defaults to undefined|
| **file** | [**File**] | 上传的图片文件。支持JPG、PNG、GIF等常见格式。 | (optional) defaults to undefined|
| **bgColor** | [**string**]**Array<&#39;white&#39; &#124; &#39;black&#39; &#124; &#39;transparent&#39;>** | GIF的背景颜色。可选值为 \\\&#39;white\\\&#39;, \\\&#39;black\\\&#39;, \\\&#39;transparent\\\&#39;。 | (optional) defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/gif, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 生成成功！响应体是GIF格式的图片二进制数据。 |  -  |
|**400** | 请求参数错误。必须提供 \&#39;image_url\&#39; 或上传 \&#39;file\&#39; 文件两者中的一个。 |  -  |
|**500** | 服务器内部错误。可能的原因包括：从URL获取图片失败、处理上传文件失败，或在生成GIF过程中发生错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postImageSpeechless**
> File postImageSpeechless(postImageSpeechlessRequest)

你们怎么不说话了？是不是都在偷偷玩Uapi，求求你们不要玩Uapi了  ## 效果展示 ![示例](https://uapis.cn/static/uploads/33580466897f1e5815296f235b582815.png)  ## 使用须知 - **响应格式**：接口成功时直接返回 `image/jpeg` 格式的二进制数据。 - **文字内容**：至少需要提供 `top_text`（上方文字）或 `bottom_text`（下方文字）之一。 - **梗图逻辑**：上方描述某个行为，下方通常以「们」开头表示劝阻，形成戏谑的对比效果。

### Example

```typescript
import {
    ImageApi,
    Configuration,
    PostImageSpeechlessRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let postImageSpeechlessRequest: PostImageSpeechlessRequest; //包含表情包文字内容的JSON对象。至少需要提供上方或下方文字之一。

const { status, data } = await apiInstance.postImageSpeechless(
    postImageSpeechlessRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postImageSpeechlessRequest** | **PostImageSpeechlessRequest**| 包含表情包文字内容的JSON对象。至少需要提供上方或下方文字之一。 | |


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ���ɳɹ�����Ӧ����PNG��ʽ�ı����ͼƬ���������ݡ� |  -  |
|**400** | 请求参数错误。必须提供 \&#39;top_text\&#39; 或 \&#39;bottom_text\&#39; 至少其中之一。 |  -  |
|**500** | 服务器内部错误。在生成表情包图片过程中发生错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postImageSvg**
> File postImageSvg()

需要将灵活的 SVG 矢量图形转换为常见的光栅图像格式吗？这个接口可以帮你轻松实现。  ## 功能概述 上传一个 SVG 文件，并指定目标格式（如 PNG、JPEG 等），接口将返回转换后的图像。你还可以调整输出图像的尺寸和（对于JPEG）压缩质量，以满足不同场景的需求。

### Example

```typescript
import {
    ImageApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ImageApi(configuration);

let format: 'png' | 'jpeg' | 'jpg' | 'gif' | 'tiff' | 'bmp'; //输出图像的目标格式。支持的值：`png`, `jpeg`, `jpg`, `gif`, `tiff`, `bmp`。 (optional) (default to 'png')
let width: number; //输出图像的宽度（像素）。如果省略，将根据 `height` 保持宽高比，或者使用 SVG 的原始宽度。 (optional) (default to undefined)
let height: number; //输出图像的高度（像素）。如果省略，将根据 `width` 保持宽高比，或者使用 SVG 的原始高度。 (optional) (default to undefined)
let quality: number; //JPEG 图像的压缩质量（1-100）。仅当 `format` 为 `jpeg` 或 `jpg` 时有效。 (optional) (default to 90)
let file: File; //支持SVG文件 (optional) (default to undefined)

const { status, data } = await apiInstance.postImageSvg(
    format,
    width,
    height,
    quality,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **format** | [**&#39;png&#39; | &#39;jpeg&#39; | &#39;jpg&#39; | &#39;gif&#39; | &#39;tiff&#39; | &#39;bmp&#39;**]**Array<&#39;png&#39; &#124; &#39;jpeg&#39; &#124; &#39;jpg&#39; &#124; &#39;gif&#39; &#124; &#39;tiff&#39; &#124; &#39;bmp&#39;>** | 输出图像的目标格式。支持的值：&#x60;png&#x60;, &#x60;jpeg&#x60;, &#x60;jpg&#x60;, &#x60;gif&#x60;, &#x60;tiff&#x60;, &#x60;bmp&#x60;。 | (optional) defaults to 'png'|
| **width** | [**number**] | 输出图像的宽度（像素）。如果省略，将根据 &#x60;height&#x60; 保持宽高比，或者使用 SVG 的原始宽度。 | (optional) defaults to undefined|
| **height** | [**number**] | 输出图像的高度（像素）。如果省略，将根据 &#x60;width&#x60; 保持宽高比，或者使用 SVG 的原始高度。 | (optional) defaults to undefined|
| **quality** | [**number**] | JPEG 图像的压缩质量（1-100）。仅当 &#x60;format&#x60; 为 &#x60;jpeg&#x60; 或 &#x60;jpg&#x60; 时有效。 | (optional) defaults to 90|
| **file** | [**File**] | 支持SVG文件 | (optional) defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 转换成功！响应体是转换后图像的二进制数据。 |  -  |
|**400** | 请求无效。可能是未上传文件或指定了不支持的输出格式。 |  -  |
|**500** | 服务器内部错误。SVG 渲染或文件处理过程中发生错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

