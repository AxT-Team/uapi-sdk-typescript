# GetMiscTrackingQuery200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracking_number** | **string** | 快递单号 | [optional] [default to undefined]
**carrier_code** | **string** | 快递公司编码 | [optional] [default to undefined]
**carrier_name** | **string** | 快递公司名称 | [optional] [default to undefined]
**track_count** | **number** | 物流轨迹数量 | [optional] [default to undefined]
**tracks** | [**Array&lt;GetMiscTrackingQuery200ResponseDataTracksInner&gt;**](GetMiscTrackingQuery200ResponseDataTracksInner.md) | 物流轨迹列表，按时间倒序排列 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscTrackingQuery200ResponseData } from 'uapi-sdk-typescript';

const instance: GetMiscTrackingQuery200ResponseData = {
    tracking_number,
    carrier_code,
    carrier_name,
    track_count,
    tracks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
