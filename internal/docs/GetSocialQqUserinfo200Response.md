# GetSocialQqUserinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **number** | 年龄 | [optional] [default to undefined]
**avatar_url** | **string** | 头像URL | [optional] [default to undefined]
**big_club_level** | **number** | QQ大会员等级 | [optional] [default to undefined]
**email** | **string** | QQ邮箱 | [optional] [default to undefined]
**green_diamond_level** | **number** | 绿钻等级（可选） | [optional] [default to undefined]
**is_big_club** | **boolean** | 是否为QQ大会员用户 | [optional] [default to undefined]
**is_svip** | **boolean** | 是否为SVIP用户 | [optional] [default to undefined]
**is_vip** | **boolean** | 是否为VIP用户 | [optional] [default to undefined]
**is_years_vip** | **boolean** | 是否为年费VIP用户 | [optional] [default to undefined]
**last_updated** | **string** | 最后更新时间（ISO 8601格式） | [optional] [default to undefined]
**location** | **string** | 地理位置（省市） | [optional] [default to undefined]
**long_nick** | **string** | 个性签名 | [optional] [default to undefined]
**lover_vip_level** | **number** | 情侣/恋人类会员等级（可选） | [optional] [default to undefined]
**nickname** | **string** | 用户昵称 | [optional] [default to undefined]
**privilege_icons** | [**GetSocialQqUserinfo200ResponsePrivilegeIcons**](GetSocialQqUserinfo200ResponsePrivilegeIcons.md) |  | [optional] [default to undefined]
**qid** | **string** | QQ个性域名 | [optional] [default to undefined]
**qq** | **string** | QQ号 | [optional] [default to undefined]
**qq_level** | **number** | QQ等级。用户隐藏时返回 null | [optional] [default to undefined]
**reg_time** | **string** | 注册时间（ISO 8601格式） | [optional] [default to undefined]
**sex** | **string** | 性别 | [optional] [default to undefined]
**video_vip_level** | **number** | 腾讯影视会员等级（可选） | [optional] [default to undefined]
**vip_level** | **number** | VIP等级 | [optional] [default to undefined]
**vip_status** | **number** | 会员开通状态 | [optional] [default to undefined]
**vip_type** | **number** | 会员类型 | [optional] [default to undefined]
**yellow_diamond_level** | **number** | 黄钻等级（可选） | [optional] [default to undefined]

## Example

```typescript
import { GetSocialQqUserinfo200Response } from 'uapi-sdk-typescript';

const instance: GetSocialQqUserinfo200Response = {
    age,
    avatar_url,
    big_club_level,
    email,
    green_diamond_level,
    is_big_club,
    is_svip,
    is_vip,
    is_years_vip,
    last_updated,
    location,
    long_nick,
    lover_vip_level,
    nickname,
    privilege_icons,
    qid,
    qq,
    qq_level,
    reg_time,
    sex,
    video_vip_level,
    vip_level,
    vip_status,
    vip_type,
    yellow_diamond_level,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
