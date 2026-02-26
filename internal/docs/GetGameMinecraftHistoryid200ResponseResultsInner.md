# GetGameMinecraftHistoryid200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | 玩家当前的用户名。 | [optional] [default to undefined]
**uuid** | **string** | 玩家的UUID（带连字符格式）。 | [optional] [default to undefined]
**name_num** | **number** | 历史名称的总数。 | [optional] [default to undefined]
**history** | [**Array&lt;GetGameMinecraftHistoryid200ResponseResultsInnerHistoryInner&gt;**](GetGameMinecraftHistoryid200ResponseResultsInnerHistoryInner.md) | 历史用户名数组。 | [optional] [default to undefined]

## Example

```typescript
import { GetGameMinecraftHistoryid200ResponseResultsInner } from 'uapi-sdk-typescript';

const instance: GetGameMinecraftHistoryid200ResponseResultsInner = {
    id,
    uuid,
    name_num,
    history,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
