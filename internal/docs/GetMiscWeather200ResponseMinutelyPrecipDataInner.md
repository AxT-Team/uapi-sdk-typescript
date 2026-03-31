# GetMiscWeather200ResponseMinutelyPrecipDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **string** | 预报时间 ISO8601 | [optional] [default to undefined]
**precip** | **number** | 该时间点的降水量 mm | [optional] [default to undefined]
**type** | **string** | 降水类型：rain / snow | [optional] [default to undefined]

## Example

```typescript
import { GetMiscWeather200ResponseMinutelyPrecipDataInner } from 'uapi-sdk-typescript';

const instance: GetMiscWeather200ResponseMinutelyPrecipDataInner = {
    time,
    precip,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
