# GetMiscHolidayCalendar200ResponseDataQuery

请求参数回显。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | 日视图查询参数（YYYY-MM-DD）。非日视图时可能为空。 | [optional] [default to undefined]
**month** | **string** | 月视图查询参数（YYYY-MM）。非月视图时可能为空。 | [optional] [default to undefined]
**year** | **string** | 年视图查询参数（YYYY）。非年视图时可能为空。 | [optional] [default to undefined]
**timezone** | **string** | 实际生效的时区。 | [optional] [default to undefined]
**holiday_type** | **string** | 节日筛选类型。 | [optional] [default to undefined]
**include_nearby** | **boolean** | 是否开启前后最近节日查询。 | [optional] [default to undefined]
**nearby_limit** | **number** | 前后最近节日返回数量上限。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHolidayCalendar200ResponseDataQuery } from 'uapi-sdk-typescript';

const instance: GetMiscHolidayCalendar200ResponseDataQuery = {
    date,
    month,
    year,
    timezone,
    holiday_type,
    include_nearby,
    nearby_limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
