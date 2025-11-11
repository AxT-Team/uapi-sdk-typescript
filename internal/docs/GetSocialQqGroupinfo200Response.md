# GetSocialQqGroupinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **string** | 群号 | [optional] [default to undefined]
**group_name** | **string** | 群名称 | [optional] [default to undefined]
**avatar_url** | **string** | 群头像URL（标准尺寸100x100） | [optional] [default to undefined]
**description** | **string** | 群描述/简介 | [optional] [default to undefined]
**tag** | **string** | 群标签 | [optional] [default to undefined]
**join_url** | **string** | 加群链接（QR码URL） | [optional] [default to undefined]
**last_updated** | **string** | 最后更新时间（ISO 8601格式） | [optional] [default to undefined]

## Example

```typescript
import { GetSocialQqGroupinfo200Response } from 'uapi-sdk-typescript';

const instance: GetSocialQqGroupinfo200Response = {
    group_id,
    group_name,
    avatar_url,
    description,
    tag,
    join_url,
    last_updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
