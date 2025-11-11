# GetMiscTrackingDetect200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracking_number** | **string** | 查询的快递单号 | [optional] [default to undefined]
**carrier_code** | **string** | 最可能的快递公司编码 | [optional] [default to undefined]
**carrier_name** | **string** | 最可能的快递公司名称 | [optional] [default to undefined]
**alternatives** | [**Array&lt;GetMiscTrackingDetect200ResponseDataAlternativesInner&gt;**](GetMiscTrackingDetect200ResponseDataAlternativesInner.md) | 其他可能的快递公司列表（如果存在） | [optional] [default to undefined]

## Example

```typescript
import { GetMiscTrackingDetect200ResponseData } from 'uapi-sdk-typescript';

const instance: GetMiscTrackingDetect200ResponseData = {
    tracking_number,
    carrier_code,
    carrier_name,
    alternatives,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
