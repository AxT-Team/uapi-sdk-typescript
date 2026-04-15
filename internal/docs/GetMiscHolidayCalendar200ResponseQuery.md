# GetMiscHolidayCalendar200ResponseQuery

请求参数回显。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | 日视图查询参数。date 模式下为 YYYY-MM-DD，其余模式下为空字符串。 | [optional] [default to undefined]
**holiday_type** | **string** | 节日筛选类型。 | [optional] [default to undefined]
**include_nearby** | **boolean** | 是否开启前后最近节日查询。 | [optional] [default to undefined]
**exclude_past** | **boolean** | 是否过滤今天之前已经过去的节日。 | [optional] [default to undefined]
**month** | **string** | 月视图查询参数。month 模式下为 YYYY-MM，其余模式下为空字符串。 | [optional] [default to undefined]
**nearby_limit** | **number** | 前后最近节日返回数量上限。 | [optional] [default to undefined]
**timezone** | **string** | 实际生效的时区。 | [optional] [default to undefined]
**year** | **string** | 年视图查询参数。year 模式下为 YYYY，其余模式下为空字符串。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200ResponseQuery } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200ResponseQuery = {
    date,
    holiday_type,
    include_nearby,
    exclude_past,
    month,
    nearby_limit,
    timezone,
    year,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
