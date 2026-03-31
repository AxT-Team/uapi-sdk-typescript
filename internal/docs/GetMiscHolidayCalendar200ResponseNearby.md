# GetMiscHolidayCalendar200ResponseNearby

前后最近节日，仅 include_nearby=true 且 date 模式返回。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous** | [**Array&lt;GetMiscHolidayCalendar200ResponseNearbyPreviousInner&gt;**](GetMiscHolidayCalendar200ResponseNearbyPreviousInner.md) | 当前查询日期之前最近的节日列表（按时间倒序）。 | [optional] [default to undefined]
**next** | [**Array&lt;GetMiscHolidayCalendar200ResponseNearbyNextInner&gt;**](GetMiscHolidayCalendar200ResponseNearbyNextInner.md) | 当前查询日期之后最近的节日列表（按时间正序）。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200ResponseNearby } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200ResponseNearby = {
    previous,
    next,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
