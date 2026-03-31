# GetMiscLunartime200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_timestamp** | **string** | 原始 ts 入参。 | [optional] [default to undefined]
**query_timezone** | **string** | 原始 timezone 入参。 | [optional] [default to undefined]
**timezone** | **string** | 解析后的时区。 | [optional] [default to undefined]
**datetime** | **string** | 本地化时间，格式 YYYY-MM-DD HH:mm:ss。 | [optional] [default to undefined]
**datetime_rfc3339** | **string** | RFC3339 时间格式。 | [optional] [default to undefined]
**timestamp_unix** | **number** | 秒级 Unix 时间戳。 | [optional] [default to undefined]
**weekday** | **string** | 星期英文。 | [optional] [default to undefined]
**weekday_cn** | **string** | 星期中文。 | [optional] [default to undefined]
**lunar_year** | **number** | 农历年份（数字）。 | [optional] [default to undefined]
**lunar_month** | **number** | 农历月份（数字）。 | [optional] [default to undefined]
**lunar_day** | **number** | 农历日期（数字）。 | [optional] [default to undefined]
**is_leap_month** | **boolean** | 是否闰月。 | [optional] [default to undefined]
**lunar_year_cn** | **string** | 农历年份中文表示。 | [optional] [default to undefined]
**lunar_month_cn** | **string** | 农历月份中文表示。 | [optional] [default to undefined]
**lunar_day_cn** | **string** | 农历日期中文表示。 | [optional] [default to undefined]
**ganzhi_year** | **string** | 干支年。 | [optional] [default to undefined]
**ganzhi_month** | **string** | 干支月。 | [optional] [default to undefined]
**ganzhi_day** | **string** | 干支日。 | [optional] [default to undefined]
**zodiac** | **string** | 生肖。 | [optional] [default to undefined]
**solar_term** | **string** | 节气名称。有值时返回，无值时可能为空字符串或不返回。 | [optional] [default to undefined]
**lunar_festivals** | **Array&lt;string&gt;** | 农历节日数组。 | [optional] [default to undefined]
**solar_festivals** | **Array&lt;string&gt;** | 公历节日数组。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscLunartime200Response } from 'uapi-sdk-typescript';

const instance: GetMiscLunartime200Response = {
    query_timestamp,
    query_timezone,
    timezone,
    datetime,
    datetime_rfc3339,
    timestamp_unix,
    weekday,
    weekday_cn,
    lunar_year,
    lunar_month,
    lunar_day,
    is_leap_month,
    lunar_year_cn,
    lunar_month_cn,
    lunar_day_cn,
    ganzhi_year,
    ganzhi_month,
    ganzhi_day,
    zodiac,
    solar_term,
    lunar_festivals,
    solar_festivals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
