# GetSocialBilibiliLiveroom200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **number** | 主播的用户ID (mid)。 | [optional] [default to undefined]
**room_id** | **number** | 直播间的真实房间号（长号）。 | [optional] [default to undefined]
**short_id** | **number** | 直播间的短号（靓号）。如果没有设置，则为0。 | [optional] [default to undefined]
**attention** | **number** | 主播的粉丝数（关注数量）。 | [optional] [default to undefined]
**online** | **number** | 直播间当前的人气值。注意这不是真实在线人数。 | [optional] [default to undefined]
**live_status** | **number** | 直播状态。0:未开播, 1:直播中, 2:轮播中。 | [optional] [default to undefined]
**area_id** | **number** | 分区ID。 | [optional] [default to undefined]
**parent_area_name** | **string** | 父分区名称。 | [optional] [default to undefined]
**area_name** | **string** | 子分区名称。 | [optional] [default to undefined]
**background** | **string** | 直播间背景图的URL。 | [optional] [default to undefined]
**title** | **string** | 当前直播间的标题。 | [optional] [default to undefined]
**user_cover** | **string** | 用户设置的直播间封面URL。 | [optional] [default to undefined]
**description** | **string** | 直播间公告或描述，支持换行符。 | [optional] [default to undefined]
**live_time** | **string** | 本次直播开始的时间，格式为 &#x60;YYYY-MM-DD HH:mm:ss&#x60;。如果未开播，则为空字符串。 | [optional] [default to undefined]
**tags** | **string** | 直播间设置的标签，以逗号分隔。 | [optional] [default to undefined]
**hot_words** | **Array&lt;string&gt;** | 直播间热词列表，通常用于弹幕互动。 | [optional] [default to undefined]
**new_pendants** | **object** | 主播佩戴的头像框、大航海等级等信息，结构可能比较复杂。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliLiveroom200Response } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliLiveroom200Response = {
    uid,
    room_id,
    short_id,
    attention,
    online,
    live_status,
    area_id,
    parent_area_name,
    area_name,
    background,
    title,
    user_cover,
    description,
    live_time,
    tags,
    hot_words,
    new_pendants,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
