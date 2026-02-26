# GetMiscWeather200ResponseForecastInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | 日期 YYYY-MM-DD | [optional] [default to undefined]
**week** | **string** | 星期几（&#x60;lang&#x3D;en&#x60; 时返回英文星期） | [optional] [default to undefined]
**temp_max** | **number** | 最高温度 °C | [optional] [default to undefined]
**temp_min** | **number** | 最低温度 °C | [optional] [default to undefined]
**weather_day** | **string** | 白天天气（&#x60;lang&#x3D;en&#x60; 时返回英文） | [optional] [default to undefined]
**weather_night** | **string** | 夜间天气（&#x60;lang&#x3D;en&#x60; 时返回英文） | [optional] [default to undefined]
**wind_dir_day** | **string** | 白天风向（可选，&#x60;lang&#x3D;en&#x60; 时返回英文） | [optional] [default to undefined]
**wind_dir_night** | **string** | 夜间风向（可选，&#x60;lang&#x3D;en&#x60; 时返回英文） | [optional] [default to undefined]
**wind_scale_day** | **string** | 白天风力（可选，&#x60;lang&#x3D;en&#x60; 时返回英文） | [optional] [default to undefined]
**wind_scale_night** | **string** | 夜间风力（可选，&#x60;lang&#x3D;en&#x60; 时返回英文） | [optional] [default to undefined]
**wind_speed_day** | **number** | 白天风速 km/h（可选） | [optional] [default to undefined]
**humidity** | **number** | 湿度 %（可选） | [optional] [default to undefined]
**precip** | **number** | 降水量 mm（可选） | [optional] [default to undefined]
**visibility** | **number** | 能见度 km（可选） | [optional] [default to undefined]
**uv_index** | **number** | 紫外线指数（可选） | [optional] [default to undefined]
**sunrise** | **string** | 日出时间 HH:MM（可选） | [optional] [default to undefined]
**sunset** | **string** | 日落时间 HH:MM（可选） | [optional] [default to undefined]

## Example

```typescript
import { GetMiscWeather200ResponseForecastInner } from 'uapi-sdk-typescript';

const instance: GetMiscWeather200ResponseForecastInner = {
    date,
    week,
    temp_max,
    temp_min,
    weather_day,
    weather_night,
    wind_dir_day,
    wind_dir_night,
    wind_scale_day,
    wind_scale_night,
    wind_speed_day,
    humidity,
    precip,
    visibility,
    uv_index,
    sunrise,
    sunset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
