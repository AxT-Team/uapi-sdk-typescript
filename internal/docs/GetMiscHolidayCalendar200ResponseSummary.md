# GetMiscHolidayCalendar200ResponseSummary

统计摘要。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_days** | **number** | 查询范围内总天数。 | [optional] [default to undefined]
**weekend_days** | **number** | 查询范围内周末天数。 | [optional] [default to undefined]
**workdays** | **number** | 查询范围内工作日天数（含法定调休上班）。 | [optional] [default to undefined]
**rest_days** | **number** | 查询范围内休息日天数（含周末和法定休假）。 | [optional] [default to undefined]
**holiday_events** | **number** | 按 holiday_type 过滤后的节日事件总数。 | [optional] [default to undefined]
**legal_rest_days** | **number** | 法定休假日天数。 | [optional] [default to undefined]
**legal_workdays** | **number** | 法定调休上班天数。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200ResponseSummary } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200ResponseSummary = {
    total_days,
    weekend_days,
    workdays,
    rest_days,
    holiday_events,
    legal_rest_days,
    legal_workdays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
