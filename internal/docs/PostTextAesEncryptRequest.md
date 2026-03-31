# PostTextAesEncryptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | 密钥长度必须为 16、24 或 32 字节，分别对应 AES-128、AES-192、AES-256。 | [default to undefined]
**text** | **string** | 待加密的明文文本。 | [default to undefined]

## Example

```typescript
import { PostTextAesEncryptRequest } from 'uapi-sdk-typescript';

const instance: PostTextAesEncryptRequest = {
    key,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
