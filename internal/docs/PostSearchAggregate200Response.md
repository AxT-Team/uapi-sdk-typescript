# PostSearchAggregate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | 实际执行的搜索查询 | [optional] [default to undefined]
**total_results** | **number** | 搜索结果总数 | [optional] [default to undefined]
**results** | [**Array&lt;PostSearchAggregate200ResponseResultsInner&gt;**](PostSearchAggregate200ResponseResultsInner.md) | 搜索结果列表 | [optional] [default to undefined]
**sources** | [**Array&lt;PostSearchAggregate200ResponseSourcesInner&gt;**](PostSearchAggregate200ResponseSourcesInner.md) | 各搜索引擎的结果数量统计 | [optional] [default to undefined]
**process_time_ms** | **number** | 处理耗时（毫秒） | [optional] [default to undefined]
**cached** | **boolean** | 结果是否来自缓存 | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregate200Response } from 'uapi-sdk-typescript';

const instance: PostSearchAggregate200Response = {
    query,
    total_results,
    results,
    sources,
    process_time_ms,
    cached,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
