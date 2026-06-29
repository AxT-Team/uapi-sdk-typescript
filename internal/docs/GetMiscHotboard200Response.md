# GetMiscHotboard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**Array&lt;GetMiscHotboard200ResponseOneOfListInner&gt;**](GetMiscHotboard200ResponseOneOfListInner.md) | 热榜条目列表。 | [optional] [default to undefined]
**snapshot_time** | **number** | 时光机模式返回的快照实际时间戳（毫秒）。当前热榜模式下通常不返回。 | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**update_time** | **string** | 热榜更新时间。时光机模式下对应返回快照的更新时间。 | [optional] [default to undefined]
**count** | **number** | 匹配到的结果数量。 | [optional] [default to undefined]
**keyword** | **string** | 搜索关键词。 | [optional] [default to undefined]
**results** | [**Array&lt;GetMiscHotboard200ResponseOneOf1ResultsInner&gt;**](GetMiscHotboard200ResponseOneOf1ResultsInner.md) | 搜索结果数组。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHotboard200Response } from 'uapi-sdk-typescript';

const instance: GetMiscHotboard200Response = {
    list,
    snapshot_time,
    type,
    update_time,
    count,
    keyword,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
