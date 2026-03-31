# PostTextMd5VerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **string** | 用于比对的 MD5 哈希值（32 位小写十六进制字符串）。 | [default to undefined]
**text** | **string** | 待校验的原始文本，会先计算其 MD5 再与 hash 进行比对。 | [default to undefined]

## Example

```typescript
import { PostTextMd5VerifyRequest } from 'uapi-sdk-typescript';

const instance: PostTextMd5VerifyRequest = {
    hash,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
