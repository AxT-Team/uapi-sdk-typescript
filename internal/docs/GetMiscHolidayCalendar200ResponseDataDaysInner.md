# GetMiscHolidayCalendar200ResponseDataDaysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | 公历日期（YYYY-MM-DD）。 | [optional] [default to undefined]
**year** | **number** | 公历年份。 | [optional] [default to undefined]
**month** | **number** | 公历月份。 | [optional] [default to undefined]
**day** | **number** | 公历日期（天）。 | [optional] [default to undefined]
**weekday_cn** | **string** | 中文星期，如星期三。 | [optional] [default to undefined]
**is_weekend** | **boolean** | 是否为周末。 | [optional] [default to undefined]
**is_workday** | **boolean** | 是否为工作日（含法定调休上班日）。 | [optional] [default to undefined]
**is_rest_day** | **boolean** | 是否为休息日。 | [optional] [default to undefined]
**is_holiday** | **boolean** | 当天是否存在节日/节气/法定事件。 | [optional] [default to undefined]
**legal_holiday_name** | **string** | 法定节假日名称，无则为空。 | [optional] [default to undefined]
**legal_holiday_type** | **string** | 法定假日类型：rest 或 workday_adjust。 | [optional] [default to undefined]
**solar_festival** | **string** | 公历节日名称，无则为空。 | [optional] [default to undefined]
**lunar_festival** | **string** | 农历节日名称，无则为空。 | [optional] [default to undefined]
**solar_term** | **string** | 节气名称，无则为空。 | [optional] [default to undefined]
**lunar_year** | **number** | 农历年份（数字）。 | [optional] [default to undefined]
**lunar_month** | **number** | 农历月份（数字）。 | [optional] [default to undefined]
**lunar_day** | **number** | 农历日期（数字）。 | [optional] [default to undefined]
**lunar_month_name** | **string** | 农历月份中文名称。 | [optional] [default to undefined]
**lunar_day_name** | **string** | 农历日期中文名称。 | [optional] [default to undefined]
**ganzhi_year** | **string** | 干支年。 | [optional] [default to undefined]
**ganzhi_month** | **string** | 干支月。 | [optional] [default to undefined]
**ganzhi_day** | **string** | 干支日。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200ResponseDataDaysInner } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200ResponseDataDaysInner = {
    date,
    year,
    month,
    day,
    weekday_cn,
    is_weekend,
    is_workday,
    is_rest_day,
    is_holiday,
    legal_holiday_name,
    legal_holiday_type,
    solar_festival,
    lunar_festival,
    solar_term,
    lunar_year,
    lunar_month,
    lunar_day,
    lunar_month_name,
    lunar_day_name,
    ganzhi_year,
    ganzhi_month,
    ganzhi_day,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
