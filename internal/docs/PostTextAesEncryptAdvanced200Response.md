# PostTextAesEncryptAdvanced200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphertext** | **string** | 加密后的密文（Base64编码） | [optional] [default to undefined]
**mode** | **string** | 使用的加密模式 | [optional] [default to undefined]
**padding** | **string** | 使用的填充方式 | [optional] [default to undefined]
**iv** | **string** | 使用的IV（Base64编码）。GCM模式不返回此字段 | [optional] [default to undefined]

## Example

```typescript
import { PostTextAesEncryptAdvanced200Response } from 'uapi-sdk-typescript';

const instance: PostTextAesEncryptAdvanced200Response = {
    ciphertext,
    mode,
    padding,
    iv,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
