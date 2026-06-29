# PostSearchAggregate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**PostSearchAggregate200ResponseMetadata**](PostSearchAggregate200ResponseMetadata.md) |  | [optional] [default to undefined]
**process_time_ms** | **number** | 本次请求总耗时（毫秒） | [optional] [default to undefined]
**query** | **string** | 执行的搜索查询 | [optional] [default to undefined]
**results** | [**Array&lt;PostSearchAggregate200ResponseResultsInner&gt;**](PostSearchAggregate200ResponseResultsInner.md) | 搜索结果列表 | [optional] [default to undefined]
**sources** | [**Array&lt;PostSearchAggregate200ResponseSourcesInner&gt;**](PostSearchAggregate200ResponseSourcesInner.md) | 本次请求实际命中的搜索引擎信息 | [optional] [default to undefined]
**total_results** | **number** | 返回的搜索结果总数 | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregate200Response } from 'uapi-sdk-typescript';

const instance: PostSearchAggregate200Response = {
    metadata,
    process_time_ms,
    query,
    results,
    sources,
    total_results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
