# GetMiscWeather200ResponseAlertsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guidance** | **Array&lt;string&gt;** | 防御指引列表 | [optional] [default to undefined]
**level** | **string** | 预警级别，如蓝色、黄色、橙色、红色 | [optional] [default to undefined]
**publish_time** | **string** | 预警发布时间 | [optional] [default to undefined]
**publisher** | **string** | 发布单位 | [optional] [default to undefined]
**text** | **string** | 预警正文 | [optional] [default to undefined]
**title** | **string** | 预警标题 | [optional] [default to undefined]
**type** | **string** | 预警类型，如雷电、暴雨 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscWeather200ResponseAlertsInner } from 'uapi-sdk-typescript';

const instance: GetMiscWeather200ResponseAlertsInner = {
    guidance,
    level,
    publish_time,
    publisher,
    text,
    title,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
