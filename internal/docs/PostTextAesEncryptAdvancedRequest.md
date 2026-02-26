# PostTextAesEncryptAdvancedRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | 待加密的明文文本 | [default to undefined]
**key** | **string** | 加密密钥（支持任意长度） | [default to undefined]
**mode** | **string** | 加密模式：GCM/CBC/ECB/CTR/OFB/CFB（可选，默认GCM） | [optional] [default to undefined]
**padding** | **string** | 填充方式：PKCS7/ZERO/NONE（可选，默认PKCS7） | [optional] [default to undefined]
**iv** | **string** | 自定义IV（可选，Base64编码，16字节）。GCM模式无需此参数 | [optional] [default to undefined]
**output_format** | **string** | 输出格式：base64（默认）或hex | [optional] [default to undefined]

## Example

```typescript
import { PostTextAesEncryptAdvancedRequest } from 'uapi-sdk-typescript';

const instance: PostTextAesEncryptAdvancedRequest = {
    text,
    key,
    mode,
    padding,
    iv,
    output_format,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
