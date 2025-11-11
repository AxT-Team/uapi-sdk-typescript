# GetSocialBilibiliArchives200ResponseVideosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aid** | **number** | 视频AID | [optional] [default to undefined]
**bvid** | **string** | BV号 | [optional] [default to undefined]
**title** | **string** | 标题 | [optional] [default to undefined]
**cover** | **string** | 封面URL | [optional] [default to undefined]
**duration** | **number** | 时长(秒) | [optional] [default to undefined]
**play_count** | **number** | 播放量 | [optional] [default to undefined]
**publish_time** | **number** | 发布时间戳 | [optional] [default to undefined]
**create_time** | **number** | 创建时间戳 | [optional] [default to undefined]
**state** | **number** | 视频状态 | [optional] [default to undefined]
**is_ugc_pay** | **number** | 是否付费视频。0&#x3D;免费，1&#x3D;付费 | [optional] [default to undefined]
**is_interactive** | **boolean** | 是否为互动视频 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliArchives200ResponseVideosInner } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliArchives200ResponseVideosInner = {
    aid,
    bvid,
    title,
    cover,
    duration,
    play_count,
    publish_time,
    create_time,
    state,
    is_ugc_pay,
    is_interactive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
