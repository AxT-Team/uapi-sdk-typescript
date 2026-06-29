# GetMiscTrackingQuery200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_code** | **string** | 快递公司编码 | [optional] [default to undefined]
**carrier_name** | **string** | 快递公司名称 | [optional] [default to undefined]
**completed_at** | **string** | 完成时间。仅已完成时返回签收或妥投对应的轨迹时间；未完成时为空字符串。 | [optional] [default to undefined]
**is_completed** | **boolean** | 快递是否已完成。仅当状态识别为已签收/已妥投/已完成时为 true。 | [optional] [default to undefined]
**status** | **string** | 快递状态中文名称，例如：待揽收、已揽收、运输中、派送中、已完成、异常、未知。 | [optional] [default to undefined]
**status_code** | **string** | 快递状态编码。可能值：pending、picked_up、in_transit、out_for_delivery、delivered、exception、unknown。 | [optional] [default to undefined]
**track_count** | **number** | 物流轨迹数量 | [optional] [default to undefined]
**tracking_number** | **string** | 快递单号 | [optional] [default to undefined]
**tracks** | [**Array&lt;GetMiscTrackingQuery200ResponseTracksInner&gt;**](GetMiscTrackingQuery200ResponseTracksInner.md) | 物流轨迹列表，按时间倒序排列 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscTrackingQuery200Response } from 'uapi-sdk-typescript';

const instance: GetMiscTrackingQuery200Response = {
    carrier_code,
    carrier_name,
    completed_at,
    is_completed,
    status,
    status_code,
    track_count,
    tracking_number,
    tracks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
