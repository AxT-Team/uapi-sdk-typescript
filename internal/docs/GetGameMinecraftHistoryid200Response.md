# GetGameMinecraftHistoryid200Response

响应结构根据查询参数不同而变化

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | 【name 查询时返回】查询的用户名。 | [optional] [default to undefined]
**count** | **number** | 【name 查询时返回】匹配到的用户数量，为 0 时表示未找到。 | [optional] [default to undefined]
**results** | [**Array&lt;GetGameMinecraftHistoryid200ResponseResultsInner&gt;**](GetGameMinecraftHistoryid200ResponseResultsInner.md) | 【name 查询时返回】匹配用户列表，包含当前用户名或曾用名匹配的所有玩家。 | [optional] [default to undefined]
**id** | **string** | 【uuid 查询时返回】玩家当前的用户名。 | [optional] [default to undefined]
**uuid** | **string** | 【uuid 查询时返回】被查询玩家的UUID（带连字符格式）。 | [optional] [default to undefined]
**name_num** | **number** | 【uuid 查询时返回】历史名称的总数（包含当前名称）。 | [optional] [default to undefined]
**history** | [**Array&lt;GetGameMinecraftHistoryid200ResponseHistoryInner&gt;**](GetGameMinecraftHistoryid200ResponseHistoryInner.md) | 【uuid 查询时返回】包含所有历史用户名的数组，按时间倒序排列。 | [optional] [default to undefined]

## Example

```typescript
import { GetGameMinecraftHistoryid200Response } from 'uapi-sdk-typescript';

const instance: GetGameMinecraftHistoryid200Response = {
    query,
    count,
    results,
    id,
    uuid,
    name_num,
    history,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
