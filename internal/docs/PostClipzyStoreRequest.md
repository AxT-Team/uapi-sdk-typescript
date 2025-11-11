# PostClipzyStoreRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compressedData** | **string** | 必需：经过加密和 LZString 压缩后的 Base64 字符串。请参考文档首页的JS代码示例。 | [default to undefined]
**ttl** | **number** | 可选：片段的留存时间（秒）。正数表示秒数（最大约30天），-1 表示永久存储。默认为 3600。 | [optional] [default to undefined]

## Example

```typescript
import { PostClipzyStoreRequest } from 'uapi-sdk-typescript';

const instance: PostClipzyStoreRequest = {
    compressedData,
    ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
