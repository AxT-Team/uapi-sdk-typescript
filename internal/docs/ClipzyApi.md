# ClipzyApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getClipzyGet**](#getclipzyget) | **GET** /api/get | 步骤2 (方法一): 获取加密数据|
|[**getClipzyRaw**](#getclipzyraw) | **GET** /api/raw/{id} | 步骤2 (方法二): 获取原始文本|
|[**postClipzyStore**](#postclipzystore) | **POST** /api/store | 步骤1：上传加密数据|

# **getClipzyGet**
> GetClipzyGet200Response getClipzyGet()

**此接口用于“最高安全等级”方法。**  您提供第一步中获得的ID，它会返回存储在服务器上的**加密数据**。您需要在自己的客户端中，使用您自己保管的密钥来解密它。

### Example

```typescript
import {
    ClipzyApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ClipzyApi(configuration);

let id: string; //片段的唯一 ID。 (default to undefined)

const { status, data } = await apiInstance.getClipzyGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | 片段的唯一 ID。 | defaults to undefined|


### Return type

**GetClipzyGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 获取成功！返回加密并压缩后的数据。 |  -  |
|**400** | 请求参数错误，通常是缺少 &#x60;id&#x60; 参数。 |  -  |
|**404** | 片段未找到。它可能已过期、被删除或ID不正确。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClipzyRaw**
> string getClipzyRaw()

**此接口用于“方便自动化”方法。**  您提供第一步获得的ID，并附上您自己保管的**解密密钥**作为 `key` 参数。服务器会直接为您解密，并返回纯文本内容。  > [!IMPORTANT] > 查看文档首页的 **cURL 示例**，了解此接口最典型的用法。

### Example

```typescript
import {
    ClipzyApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ClipzyApi(configuration);

let id: string; //片段的唯一 ID。 (default to undefined)
let key: string; //用于解密的 Base64 编码的 AES 密钥。 (default to undefined)

const { status, data } = await apiInstance.getClipzyRaw(
    id,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | 片段的唯一 ID。 | defaults to undefined|
| **key** | [**string**] | 用于解密的 Base64 编码的 AES 密钥。 | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 解密并获取成功！响应体为纯文本内容。 |  -  |
|**400** | 请求参数错误，缺少 ID 或密钥。 |  -  |
|**403** | 禁止访问。提供的密钥无法解密对应的数据。 |  -  |
|**404** | 片段未找到。它可能已过期、被删除或ID不正确。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postClipzyStore**
> PostClipzyStore200Response postClipzyStore(postClipzyStoreRequest)

这是所有流程的第一步。您的客户端应用需要先在本地准备好 **加密后的数据**，然后调用此接口进行上传。成功后，您会得到一个用于后续操作的唯一ID。  > [!NOTE] > 您发送给此接口的应该是**密文**，而不是原始文本。请参考文档首页的JavaScript示例来了解如何在客户端进行加密。

### Example

```typescript
import {
    ClipzyApi,
    Configuration,
    PostClipzyStoreRequest
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ClipzyApi(configuration);

let postClipzyStoreRequest: PostClipzyStoreRequest; //包含加密数据和可选的TTL。

const { status, data } = await apiInstance.postClipzyStore(
    postClipzyStoreRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postClipzyStoreRequest** | **PostClipzyStoreRequest**| 包含加密数据和可选的TTL。 | |


### Return type

**PostClipzyStore200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 片段创建成功！返回该片段的唯一ID。 |  -  |
|**400** | 请求体缺失、格式错误或参数无效。 |  -  |
|**413** | 请求体过大。上传的数据（压缩后）超过了服务器限制。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

