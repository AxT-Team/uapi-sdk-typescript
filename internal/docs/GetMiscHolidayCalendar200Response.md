# GetMiscHolidayCalendar200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | 查询模式：day、month、year。 | [optional] [default to undefined]
**query** | [**GetMiscHolidayCalendar200ResponseQuery**](GetMiscHolidayCalendar200ResponseQuery.md) |  | [optional] [default to undefined]
**summary** | [**GetMiscHolidayCalendar200ResponseSummary**](GetMiscHolidayCalendar200ResponseSummary.md) |  | [optional] [default to undefined]
**days** | [**Array&lt;GetMiscHolidayCalendar200ResponseDaysInner&gt;**](GetMiscHolidayCalendar200ResponseDaysInner.md) | 日期明细列表。 | [optional] [default to undefined]
**holidays** | [**Array&lt;GetMiscHolidayCalendar200ResponseHolidaysInner&gt;**](GetMiscHolidayCalendar200ResponseHolidaysInner.md) | 节日事件列表。 | [optional] [default to undefined]
**nearby** | [**GetMiscHolidayCalendar200ResponseNearby**](GetMiscHolidayCalendar200ResponseNearby.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200Response } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200Response = {
    mode,
    query,
    summary,
    days,
    holidays,
    nearby,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
