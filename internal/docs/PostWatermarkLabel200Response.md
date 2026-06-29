# PostWatermarkLabel200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied** | **Array&lt;string&gt;** | 本次实际注入成功的标识层级，可能包含 \&#39;watermark\&#39;、\&#39;explicit\&#39;、\&#39;metadata\&#39;。 | [optional] [default to undefined]
**capacity_chars** | **number** | 当前配置下的隐形水印最大容量（若开启）。 | [optional] [default to undefined]
**content_producer** | **string** | 成功写入的服务提供者编码。 | [optional] [default to undefined]
**format** | **string** | 实际输出的图片格式。 | [optional] [default to undefined]
**image_base64** | **string** | 处理完成后的图片 Base64 编码。 | [optional] [default to undefined]
**image_name** | **string** | 原始图片文件名（若请求中包含则返回）。 | [optional] [default to undefined]
**watermark_payload** | **string** | 成功嵌入的隐形水印内容（若开启）。 | [optional] [default to undefined]

## Example

```typescript
import { PostWatermarkLabel200Response } from 'uapi-sdk-typescript';

const instance: PostWatermarkLabel200Response = {
    applied,
    capacity_chars,
    content_producer,
    format,
    image_base64,
    image_name,
    watermark_payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
