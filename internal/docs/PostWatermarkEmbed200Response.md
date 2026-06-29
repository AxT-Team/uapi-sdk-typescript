# PostWatermarkEmbed200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_chars** | **number** | 在当前图片和配置下，能够嵌入的最大字符数。 | [optional] [default to undefined]
**embed_ms** | **number** | 处理耗时（毫秒）。 | [optional] [default to undefined]
**format** | **string** | 实际输出的图片格式。 | [optional] [default to undefined]
**image_base64** | **string** | 处理完成后的图片 Base64 编码。 | [optional] [default to undefined]
**image_name** | **string** | 原始图片文件名（若请求中包含则返回）。 | [optional] [default to undefined]
**payload** | **string** | 实际嵌入的标识内容。 | [optional] [default to undefined]

## Example

```typescript
import { PostWatermarkEmbed200Response } from 'uapi-sdk-typescript';

const instance: PostWatermarkEmbed200Response = {
    capacity_chars,
    embed_ms,
    format,
    image_base64,
    image_name,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
