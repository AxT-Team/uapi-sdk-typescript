# GetGameMinecraftHistoryid200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | 状态码，200代表成功。 | [optional] [default to undefined]
**history** | [**Array&lt;GetGameMinecraftHistoryid200ResponseHistoryInner&gt;**](GetGameMinecraftHistoryid200ResponseHistoryInner.md) | 一个包含所有历史用户名的数组，按时间倒序排列。 | [optional] [default to undefined]
**id** | **string** | 玩家当前的用户名。 | [optional] [default to undefined]
**name_num** | **number** | 历史名称的总数（包含当前名称）。 | [optional] [default to undefined]
**uuid** | **string** | 被查询玩家的32位无破折号UUID。 | [optional] [default to undefined]

## Example

```typescript
import { GetGameMinecraftHistoryid200Response } from 'uapi-sdk-typescript';

const instance: GetGameMinecraftHistoryid200Response = {
    code,
    history,
    id,
    name_num,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
