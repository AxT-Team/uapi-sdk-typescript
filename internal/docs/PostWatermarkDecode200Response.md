# PostWatermarkDecode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **number** | 检测结果的置信度，取值范围 0-1。 | [optional] [default to undefined]
**decode_ms** | **number** | 解析耗时（毫秒）。 | [optional] [default to undefined]
**payload** | **string** | 还原出来的标识内容（仅在 present&#x3D;true 时返回）。 | [optional] [default to undefined]
**present** | **boolean** | 是否在图片中检测到隐形水印。 | [optional] [default to undefined]

## Example

```typescript
import { PostWatermarkDecode200Response } from 'uapi-sdk-typescript';

const instance: PostWatermarkDecode200Response = {
    confidence,
    decode_ms,
    payload,
    present,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
