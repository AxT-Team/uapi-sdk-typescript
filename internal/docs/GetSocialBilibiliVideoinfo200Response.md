# GetSocialBilibiliVideoinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bvid** | **string** | 稿件的BV号。 | [optional] [default to undefined]
**aid** | **number** | 稿件的AV号。 | [optional] [default to undefined]
**videos** | **number** | 稿件分P总数。如果是单P视频，则为1。 | [optional] [default to undefined]
**tid** | **number** | 视频所属的子分区 ID。 | [optional] [default to undefined]
**tname** | **string** | 视频所属的子分区名称。 | [optional] [default to undefined]
**copyright** | **number** | 视频类型。1代表原创，2代表转载。 | [optional] [default to undefined]
**pic** | **string** | 稿件封面图片的URL。这是一个可以直接在网页上展示的链接。 | [optional] [default to undefined]
**title** | **string** | 稿件的标题。 | [optional] [default to undefined]
**pubdate** | **number** | 稿件发布时间的Unix时间戳（秒）。 | [optional] [default to undefined]
**ctime** | **number** | 用户投稿时间的Unix时间戳（秒）。 | [optional] [default to undefined]
**desc** | **string** | 视频简介。可能会包含HTML换行符。 | [optional] [default to undefined]
**desc_v2** | [**Array&lt;GetSocialBilibiliVideoinfo200ResponseDescV2Inner&gt;**](GetSocialBilibiliVideoinfo200ResponseDescV2Inner.md) | 结构化简介片段。 | [optional] [default to undefined]
**state** | **number** | 视频状态码。 | [optional] [default to undefined]
**duration** | **number** | 稿件总时长（所有分P累加），单位为秒。 | [optional] [default to undefined]
**rights** | [**GetSocialBilibiliVideoinfo200ResponseRights**](GetSocialBilibiliVideoinfo200ResponseRights.md) |  | [optional] [default to undefined]
**owner** | [**GetSocialBilibiliVideoinfo200ResponseOwner**](GetSocialBilibiliVideoinfo200ResponseOwner.md) |  | [optional] [default to undefined]
**stat** | [**GetSocialBilibiliVideoinfo200ResponseStat**](GetSocialBilibiliVideoinfo200ResponseStat.md) |  | [optional] [default to undefined]
**dynamic** | **string** | 投稿时附带的动态文字。 | [optional] [default to undefined]
**cid** | **number** | 主分P的 CID（弹幕 ID）。 | [optional] [default to undefined]
**dimension** | [**GetSocialBilibiliVideoinfo200ResponseDimension**](GetSocialBilibiliVideoinfo200ResponseDimension.md) |  | [optional] [default to undefined]
**no_cache** | **boolean** | 不缓存标记。 | [optional] [default to undefined]
**pages** | [**Array&lt;GetSocialBilibiliVideoinfo200ResponsePagesInner&gt;**](GetSocialBilibiliVideoinfo200ResponsePagesInner.md) | 视频分P列表。即使是单P视频，该数组也包含一个元素。 | [optional] [default to undefined]
**subtitle** | [**GetSocialBilibiliVideoinfo200ResponseSubtitle**](GetSocialBilibiliVideoinfo200ResponseSubtitle.md) |  | [optional] [default to undefined]
**staff** | [**Array&lt;GetSocialBilibiliVideoinfo200ResponseStaffInner&gt;**](GetSocialBilibiliVideoinfo200ResponseStaffInner.md) | 联合投稿成员列表。 | [optional] [default to undefined]
**ugc_season** | [**GetSocialBilibiliVideoinfo200ResponseUgcSeason**](GetSocialBilibiliVideoinfo200ResponseUgcSeason.md) |  | [optional] [default to undefined]
**is_chargeable_season** | **boolean** | 是否为付费合集。 | [optional] [default to undefined]
**is_story** | **boolean** | 是否为剧情类视频。 | [optional] [default to undefined]
**honor_reply** | [**GetSocialBilibiliVideoinfo200ResponseHonorReply**](GetSocialBilibiliVideoinfo200ResponseHonorReply.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliVideoinfo200Response } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliVideoinfo200Response = {
    bvid,
    aid,
    videos,
    tid,
    tname,
    copyright,
    pic,
    title,
    pubdate,
    ctime,
    desc,
    desc_v2,
    state,
    duration,
    rights,
    owner,
    stat,
    dynamic,
    cid,
    dimension,
    no_cache,
    pages,
    subtitle,
    staff,
    ugc_season,
    is_chargeable_season,
    is_story,
    honor_reply,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
