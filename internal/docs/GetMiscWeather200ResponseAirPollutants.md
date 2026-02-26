# GetMiscWeather200ResponseAirPollutants

空气污染物分项数据（extended=true 时返回，部分数据源可能不返回）

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pm25** | **number** | PM2.5 μg/m³ | [optional] [default to undefined]
**pm10** | **number** | PM10 μg/m³ | [optional] [default to undefined]
**o3** | **number** | 臭氧 μg/m³ | [optional] [default to undefined]
**no2** | **number** | 二氧化氮 μg/m³ | [optional] [default to undefined]
**so2** | **number** | 二氧化硫 μg/m³ | [optional] [default to undefined]
**co** | **number** | 一氧化碳 mg/m³ | [optional] [default to undefined]

## Example

```typescript
import { GetMiscWeather200ResponseAirPollutants } from 'uapi-sdk-typescript';

const instance: GetMiscWeather200ResponseAirPollutants = {
    pm25,
    pm10,
    o3,
    no2,
    so2,
    co,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
