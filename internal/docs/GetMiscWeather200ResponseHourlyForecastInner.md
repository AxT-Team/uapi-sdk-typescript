# GetMiscWeather200ResponseHourlyForecastInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **string** | 预报时间（ISO8601 或 YYYY-MM-DD HH:MM） | [optional] [default to undefined]
**temperature** | **number** | 温度 °C | [optional] [default to undefined]
**weather** | **string** | 天气状况 | [optional] [default to undefined]
**wind_direction** | **string** | 风向（可选） | [optional] [default to undefined]
**wind_speed** | **number** | 风速 km/h（可选） | [optional] [default to undefined]
**wind_scale** | **string** | 风力等级（可选） | [optional] [default to undefined]
**humidity** | **number** | 湿度 %（可选） | [optional] [default to undefined]
**precip** | **number** | 降水量 mm（可选） | [optional] [default to undefined]
**pressure** | **number** | 气压 hPa（可选） | [optional] [default to undefined]
**cloud** | **number** | 云量 %（可选） | [optional] [default to undefined]
**feels_like** | **number** | 体感温度 °C（可选） | [optional] [default to undefined]
**dew_point** | **number** | 露点温度 °C（可选） | [optional] [default to undefined]
**visibility** | **number** | 能见度 km（可选） | [optional] [default to undefined]
**pop** | **number** | 降水概率 %（可选） | [optional] [default to undefined]
**uv_index** | **number** | 紫外线指数（可选，国内城市通常不返回） | [optional] [default to undefined]

## Example

```typescript
import { GetMiscWeather200ResponseHourlyForecastInner } from 'uapi-sdk-typescript';

const instance: GetMiscWeather200ResponseHourlyForecastInner = {
    time,
    temperature,
    weather,
    wind_direction,
    wind_speed,
    wind_scale,
    humidity,
    precip,
    pressure,
    cloud,
    feels_like,
    dew_point,
    visibility,
    pop,
    uv_index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
