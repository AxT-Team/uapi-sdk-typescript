# GetMiscWeather200ResponseMinutelyPrecip

分钟级降水预报（minutely=true 时返回，仅国内城市可用）

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **string** | 降水描述 | [optional] [default to undefined]
**update_time** | **string** | 更新时间 | [optional] [default to undefined]
**data** | [**Array&lt;GetMiscWeather200ResponseMinutelyPrecipDataInner&gt;**](GetMiscWeather200ResponseMinutelyPrecipDataInner.md) | 每5分钟一个数据点，共24个 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscWeather200ResponseMinutelyPrecip } from 'uapi-sdk-typescript';

const instance: GetMiscWeather200ResponseMinutelyPrecip = {
    summary,
    update_time,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
