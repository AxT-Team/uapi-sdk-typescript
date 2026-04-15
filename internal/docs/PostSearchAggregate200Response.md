# PostSearchAggregate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | 执行的搜索查询 | [optional] [default to undefined]
**total_results** | **number** | 返回的搜索结果总数 | [optional] [default to undefined]
**results** | [**Array&lt;PostSearchAggregate200ResponseResultsInner&gt;**](PostSearchAggregate200ResponseResultsInner.md) | 搜索结果列表 | [optional] [default to undefined]
**sources** | [**Array&lt;PostSearchAggregate200ResponseSourcesInner&gt;**](PostSearchAggregate200ResponseSourcesInner.md) | 本次请求实际命中的搜索引擎信息 | [optional] [default to undefined]
**process_time_ms** | **number** | 本次请求总耗时（毫秒） | [optional] [default to undefined]
**metadata** | [**PostSearchAggregate200ResponseMetadata**](PostSearchAggregate200ResponseMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregate200Response } from 'uapi-sdk-typescript';

const instance: PostSearchAggregate200Response = {
    query,
    total_results,
    results,
    sources,
    process_time_ms,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
