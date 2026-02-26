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
**member_count** | **number** | 当前成员数 | [optional] [default to undefined]
**max_member_count** | **number** | 最大成员数 | [optional] [default to undefined]
**active_member_num** | **number** | 活跃成员数（可选，部分群有此数据） | [optional] [default to undefined]
**owner_uin** | **string** | 群主QQ号（可选） | [optional] [default to undefined]
**owner_uid** | **string** | 群主UID（可选） | [optional] [default to undefined]
**create_time** | **number** | 建群时间戳（Unix时间戳，可选） | [optional] [default to undefined]
**create_time_str** | **string** | 建群时间格式化字符串（可选） | [optional] [default to undefined]
**group_grade** | **number** | 群等级（可选） | [optional] [default to undefined]
**group_memo** | **string** | 群公告/简介（可选） | [optional] [default to undefined]
**cert_type** | **number** | 认证类型（0&#x3D;未认证，可选） | [optional] [default to undefined]
**cert_text** | **string** | 认证说明文本（可选） | [optional] [default to undefined]

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
    member_count,
    max_member_count,
    active_member_num,
    owner_uin,
    owner_uid,
    create_time,
    create_time_str,
    group_grade,
    group_memo,
    cert_type,
    cert_text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
