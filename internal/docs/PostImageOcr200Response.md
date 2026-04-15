# PostImageOcr200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | 按阅读顺序拼接后的识别文本。 | [optional] [default to undefined]
**plain_text** | **string** | 纯文本结果，适合做搜索、索引或直接展示。 | [optional] [default to undefined]
**markdown** | **string** | 根据图片中的标题、段落和表格整理出的 Markdown 文本。只有在 &#x60;return_markdown&#x3D;true&#x60; 时才会返回。 | [optional] [default to undefined]
**words_result** | [**Array&lt;PostImageOcr200ResponseWordsResultInner&gt;**](PostImageOcr200ResponseWordsResultInner.md) | 逐段文字结果。适合做高亮、框选和逐项解析。 | [optional] [default to undefined]
**words_result_num** | **number** | 识别出的文字片段数量。 | [optional] [default to undefined]
**need_location** | **boolean** | 本次响应是否包含坐标信息。 | [optional] [default to undefined]
**timing** | **object** | 耗时拆分信息，适合做性能统计或排查。 | [optional] [default to undefined]
**summary** | **object** | 识别结果的统计摘要。 | [optional] [default to undefined]
**image** | **object** | 图片本身的基础信息。 | [optional] [default to undefined]
**lines** | **Array&lt;object&gt;** | 按行组织的详细识别结果。 | [optional] [default to undefined]
**blocks** | **Array&lt;object&gt;** | 按块组织的详细识别结果。 | [optional] [default to undefined]
**pages** | **Array&lt;object&gt;** | 按页组织的详细识别结果。 | [optional] [default to undefined]
**raw** | **object** | 补充识别结果对象，适合需要继续解析更多细节字段的场景。 | [optional] [default to undefined]

## Example

```typescript
import { PostImageOcr200Response } from 'uapi-sdk-typescript';

const instance: PostImageOcr200Response = {
    text,
    plain_text,
    markdown,
    words_result,
    words_result_num,
    need_location,
    timing,
    summary,
    image,
    lines,
    blocks,
    pages,
    raw,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
