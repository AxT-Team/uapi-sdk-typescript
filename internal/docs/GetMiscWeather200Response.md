# GetMiscWeather200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**province** | **string** | 省份 | [optional] [default to undefined]
**city** | **string** | 城市名 | [optional] [default to undefined]
**district** | **string** | 区县或更细一级的行政区名称。自动按 IP 定位时更常见。 | [optional] [default to undefined]
**adcode** | **string** | 行政区划代码（部分数据源可能为空） | [optional] [default to undefined]
**weather** | **string** | 天气状况描述。默认返回中文，传 &#x60;lang&#x3D;en&#x60; 时返回英文。非固定枚举。 | [optional] [default to undefined]
**weather_icon** | **string** | 天气图标代码。请从[天气图标代码表](#enum-list)中查看所有可能的值。 | [optional] [default to undefined]
**temperature** | **number** | 当前温度 °C | [optional] [default to undefined]
**wind_direction** | **string** | 风向 | [optional] [default to undefined]
**wind_power** | **string** | 风力等级 | [optional] [default to undefined]
**humidity** | **number** | 相对湿度 % | [optional] [default to undefined]
**report_time** | **string** | 数据更新时间 | [optional] [default to undefined]
**feels_like** | **number** | 体感温度 °C（extended&#x3D;true 时返回） | [optional] [default to undefined]
**visibility** | **number** | 能见度 km（extended&#x3D;true 时返回） | [optional] [default to undefined]
**pressure** | **number** | 气压 hPa（extended&#x3D;true 时返回） | [optional] [default to undefined]
**uv** | **number** | 紫外线指数（extended&#x3D;true 时返回） | [optional] [default to undefined]
**precipitation** | **number** | 当前降水量 mm（extended&#x3D;true 时返回） | [optional] [default to undefined]
**cloud** | **number** | 云量 %（extended&#x3D;true 时返回） | [optional] [default to undefined]
**aqi** | **number** | 空气质量指数 0-500（extended&#x3D;true 时返回） | [optional] [default to undefined]
**aqi_level** | **number** | AQI 等级 1-6（extended&#x3D;true 时返回） | [optional] [default to undefined]
**aqi_category** | **string** | AQI 等级描述（优/良/轻度污染/中度污染/重度污染/严重污染）（extended&#x3D;true 时返回） | [optional] [default to undefined]
**aqi_primary** | **string** | 主要污染物（如 PM2.5、PM10、O3 等）（extended&#x3D;true 时返回） | [optional] [default to undefined]
**air_pollutants** | [**GetMiscWeather200ResponseAirPollutants**](GetMiscWeather200ResponseAirPollutants.md) |  | [optional] [default to undefined]
**temp_max** | **number** | 当天最高温 °C（forecast&#x3D;true 时返回） | [optional] [default to undefined]
**temp_min** | **number** | 当天最低温 °C（forecast&#x3D;true 时返回） | [optional] [default to undefined]
**forecast** | [**Array&lt;GetMiscWeather200ResponseForecastInner&gt;**](GetMiscWeather200ResponseForecastInner.md) | 多天天气预报，最多7天（forecast&#x3D;true 时返回） | [optional] [default to undefined]
**hourly_forecast** | [**Array&lt;GetMiscWeather200ResponseHourlyForecastInner&gt;**](GetMiscWeather200ResponseHourlyForecastInner.md) | 逐小时预报，最多24小时（hourly&#x3D;true 时返回） | [optional] [default to undefined]
**minutely_precip** | [**GetMiscWeather200ResponseMinutelyPrecip**](GetMiscWeather200ResponseMinutelyPrecip.md) |  | [optional] [default to undefined]
**life_indices** | [**GetMiscWeather200ResponseLifeIndices**](GetMiscWeather200ResponseLifeIndices.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetMiscWeather200Response } from 'uapi-sdk-typescript';

const instance: GetMiscWeather200Response = {
    province,
    city,
    district,
    adcode,
    weather,
    weather_icon,
    temperature,
    wind_direction,
    wind_power,
    humidity,
    report_time,
    feels_like,
    visibility,
    pressure,
    uv,
    precipitation,
    cloud,
    aqi,
    aqi_level,
    aqi_category,
    aqi_primary,
    air_pollutants,
    temp_max,
    temp_min,
    forecast,
    hourly_forecast,
    minutely_precip,
    life_indices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
