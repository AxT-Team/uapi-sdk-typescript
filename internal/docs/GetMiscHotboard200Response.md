# GetMiscHotboard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**Array&lt;GetMiscHotboard200ResponseListInner&gt;**](GetMiscHotboard200ResponseListInner.md) | 热榜条目列表。 | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**update_time** | **string** |  | [optional] [default to undefined]
**snapshot_time** | **number** | 时光机模式返回的快照实际时间戳（毫秒）。 | [optional] [default to undefined]
**keyword** | **string** | 搜索模式返回的搜索关键词。 | [optional] [default to undefined]
**count** | **number** | 搜索模式返回的结果数量。 | [optional] [default to undefined]
**results** | [**Array&lt;GetMiscHotboard200ResponseResultsInner&gt;**](GetMiscHotboard200ResponseResultsInner.md) | 搜索模式返回的结果数组。 | [optional] [default to undefined]
**sources** | **Array&lt;string&gt;** | 数据源列表模式返回的可用历史数据源数组。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHotboard200Response } from 'uapi-sdk-typescript';

const instance: GetMiscHotboard200Response = {
    list,
    type,
    update_time,
    snapshot_time,
    keyword,
    count,
    results,
    sources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
