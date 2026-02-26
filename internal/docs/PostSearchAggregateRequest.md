# PostSearchAggregateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | 搜索查询关键词，支持中英文 | [default to undefined]
**site** | **string** | 限制搜索特定网站，不需要 &#x60;site:&#x60; 前缀 | [optional] [default to undefined]
**filetype** | **string** | 限制文件类型，不需要 &#x60;filetype:&#x60; 前缀。支持 pdf、doc、docx、ppt、pptx、xls、xlsx、txt 等 | [optional] [default to undefined]
**fetch_full** | **boolean** | 是否获取页面完整正文（会影响响应时间） | [optional] [default to false]
**timeout_ms** | **number** | 请求超时时间（毫秒），范围 1000-30000 | [optional] [default to 8000]
**sort** | **string** | 排序方式 | [optional] [default to SortEnum_Relevance]
**time_range** | **string** | 时间范围过滤 | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregateRequest } from 'uapi-sdk-typescript';

const instance: PostSearchAggregateRequest = {
    query,
    site,
    filetype,
    fetch_full,
    timeout_ms,
    sort,
    time_range,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
