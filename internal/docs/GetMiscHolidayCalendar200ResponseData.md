# GetMiscHolidayCalendar200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | 查询模式：day、month、year。 | [optional] [default to undefined]
**query** | [**GetMiscHolidayCalendar200ResponseDataQuery**](GetMiscHolidayCalendar200ResponseDataQuery.md) |  | [optional] [default to undefined]
**summary** | [**GetMiscHolidayCalendar200ResponseDataSummary**](GetMiscHolidayCalendar200ResponseDataSummary.md) |  | [optional] [default to undefined]
**days** | [**Array&lt;GetMiscHolidayCalendar200ResponseDataDaysInner&gt;**](GetMiscHolidayCalendar200ResponseDataDaysInner.md) | 日期明细列表。 | [optional] [default to undefined]
**holidays** | [**Array&lt;GetMiscHolidayCalendar200ResponseDataHolidaysInner&gt;**](GetMiscHolidayCalendar200ResponseDataHolidaysInner.md) | 节日事件列表。 | [optional] [default to undefined]
**nearby** | [**GetMiscHolidayCalendar200ResponseDataNearby**](GetMiscHolidayCalendar200ResponseDataNearby.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200ResponseData } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200ResponseData = {
    mode,
    query,
    summary,
    days,
    holidays,
    nearby,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
