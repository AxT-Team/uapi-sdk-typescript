# GetMiscHotboard200ResponseOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**update_time** | **string** | 热榜更新时间。时光机无匹配快照时可能为空字符串。 | [optional] [default to undefined]
**snapshot_time** | **number** | 时光机模式返回的快照实际时间戳（毫秒）。当前热榜模式下通常不返回。 | [optional] [default to undefined]
**list** | [**Array&lt;GetMiscHotboard200ResponseOneOfListInner&gt;**](GetMiscHotboard200ResponseOneOfListInner.md) | 热榜条目列表。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHotboard200ResponseOneOf } from 'uapi-sdk-typescript';

const instance: GetMiscHotboard200ResponseOneOf = {
    type,
    update_time,
    snapshot_time,
    list,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
