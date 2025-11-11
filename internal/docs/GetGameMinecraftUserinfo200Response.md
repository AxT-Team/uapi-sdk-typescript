# GetGameMinecraftUserinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | 状态码，200代表成功。 | [optional] [default to undefined]
**skin_url** | **string** | 玩家当前使用的皮肤图片URL。 | [optional] [default to undefined]
**username** | **string** | 玩家当前的准确用户名（注意大小写可能与输入不同）。 | [optional] [default to undefined]
**uuid** | **string** | 玩家的32位无破折号UUID。 | [optional] [default to undefined]

## Example

```typescript
import { GetGameMinecraftUserinfo200Response } from 'uapi-sdk-typescript';

const instance: GetGameMinecraftUserinfo200Response = {
    code,
    skin_url,
    username,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
