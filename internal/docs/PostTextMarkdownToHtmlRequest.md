# PostTextMarkdownToHtmlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | 原始 Markdown 字符串，最大不超过 1MB。 | [default to undefined]
**format** | **string** | 响应格式。传 &#x60;json&#x60; 时返回 JSON 包裹的 HTML 片段；传 &#x60;html&#x60; 时直接返回 &#x60;text/html&#x60;，并且响应内容会自动带完整的网页结构，适合浏览器预览或直接保存为网页文件。默认是 &#x60;json&#x60;。 | [optional] [default to FormatEnum_Json]
**sanitize** | **boolean** | 是否开启安全模式，过滤掉用户输入中的风险脚本。默认是 &#x60;true&#x60;。 | [optional] [default to true]

## Example

```typescript
import { PostTextMarkdownToHtmlRequest } from 'uapi-sdk-typescript';

const instance: PostTextMarkdownToHtmlRequest = {
    text,
    format,
    sanitize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
