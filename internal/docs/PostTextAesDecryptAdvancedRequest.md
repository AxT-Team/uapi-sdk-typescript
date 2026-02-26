# PostTextAesDecryptAdvancedRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | 待解密的密文（Base64编码）。此值来自加密接口返回的ciphertext字段 | [default to undefined]
**key** | **string** | 解密密钥（必须与加密时相同） | [default to undefined]
**mode** | **string** | 加密模式（必须与加密时相同）：GCM/CBC/ECB/CTR/OFB/CFB | [default to undefined]
**padding** | **string** | 填充方式（可选，必须与加密时相同）：PKCS7/ZERO/NONE。GCM模式默认为NONE | [optional] [default to undefined]
**iv** | **string** | 初始化向量（非GCM模式必须提供，Base64编码）。此值来自加密接口返回的iv字段 | [optional] [default to undefined]

## Example

```typescript
import { PostTextAesDecryptAdvancedRequest } from 'uapi-sdk-typescript';

const instance: PostTextAesDecryptAdvancedRequest = {
    text,
    key,
    mode,
    padding,
    iv,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
