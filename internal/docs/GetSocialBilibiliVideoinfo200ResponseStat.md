# GetSocialBilibiliVideoinfo200ResponseStat

视频的核心数据统计。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aid** | **number** | AV 号。 | [optional] [default to undefined]
**view** | **number** | 播放数。 | [optional] [default to undefined]
**danmaku** | **number** | 弹幕数。 | [optional] [default to undefined]
**reply** | **number** | 评论数。 | [optional] [default to undefined]
**favorite** | **number** | 收藏数。 | [optional] [default to undefined]
**coin** | **number** | 投币数。 | [optional] [default to undefined]
**share** | **number** | 分享数。 | [optional] [default to undefined]
**like** | **number** | 获赞数。 | [optional] [default to undefined]
**now_rank** | **number** | 当前全站/分区排名。 | [optional] [default to undefined]
**his_rank** | **number** | 历史排名。 | [optional] [default to undefined]
**dislike** | **number** | 点踩量（通常为 0）。 | [optional] [default to undefined]
**evaluation** | **string** | 评分/评估文案，通常为空。 | [optional] [default to undefined]
**vt** | **number** | 视频类型相关历史字段。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliVideoinfo200ResponseStat } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliVideoinfo200ResponseStat = {
    aid,
    view,
    danmaku,
    reply,
    favorite,
    coin,
    share,
    like,
    now_rank,
    his_rank,
    dislike,
    evaluation,
    vt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
