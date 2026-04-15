# PostTextMarkdownToPdfRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | 原始 Markdown 字符串，最大不超过 1MB。 | [default to undefined]
**theme** | **string** | PDF 的排版主题。可选 &#x60;github&#x60;、&#x60;minimal&#x60;、&#x60;light&#x60;、&#x60;dark&#x60;，默认是 &#x60;github&#x60;。 | [optional] [default to ThemeEnum_Github]
**paper_size** | **string** | PDF 的纸张大小。可选 &#x60;A4&#x60; 或 &#x60;Letter&#x60;，默认是 &#x60;A4&#x60;。 | [optional] [default to PaperSizeEnum_A4]

## Example

```typescript
import { PostTextMarkdownToPdfRequest } from 'uapi-sdk-typescript';

const instance: PostTextMarkdownToPdfRequest = {
    text,
    theme,
    paper_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
