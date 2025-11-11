# PostTextAesDecryptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | 密钥，长度必须为16、24或32字节，对应AES-128/192/256。 | [default to undefined]
**text** | **string** | Base64编码的密文。 | [default to undefined]
**nonce** | **string** | 16�ֽڵ�IV/Nonce����Ϊ16���ַ� | [default to undefined]

## Example

```typescript
import { PostTextAesDecryptRequest } from 'uapi-sdk-typescript';

const instance: PostTextAesDecryptRequest = {
    key,
    text,
    nonce,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
