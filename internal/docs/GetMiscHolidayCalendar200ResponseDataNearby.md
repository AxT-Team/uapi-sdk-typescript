# GetMiscHolidayCalendar200ResponseDataNearby

前后最近节日，仅 include_nearby=true 且 date 模式返回。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous** | [**Array&lt;GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner&gt;**](GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner.md) | 当前查询日期之前最近的节日列表（按时间倒序）。 | [optional] [default to undefined]
**next** | [**Array&lt;GetMiscHolidayCalendar200ResponseDataNearbyNextInner&gt;**](GetMiscHolidayCalendar200ResponseDataNearbyNextInner.md) | 当前查询日期之后最近的节日列表（按时间正序）。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200ResponseDataNearby } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200ResponseDataNearby = {
    previous,
    next,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
