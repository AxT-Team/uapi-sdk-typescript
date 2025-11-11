# GetSocialBilibiliVideoinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bvid** | **string** | 稿件的BV号。 | [optional] [default to undefined]
**aid** | **number** | 稿件的AV号。 | [optional] [default to undefined]
**videos** | **number** | 稿件分P总数。如果是单P视频，则为1。 | [optional] [default to undefined]
**tname** | **string** | 视频所属的子分区名称。 | [optional] [default to undefined]
**copyright** | **number** | 视频类型。1代表原创，2代表转载。 | [optional] [default to undefined]
**pic** | **string** | 稿件封面图片的URL。这是一个可以直接在网页上展示的链接。 | [optional] [default to undefined]
**title** | **string** | 稿件的标题。 | [optional] [default to undefined]
**pubdate** | **number** | 稿件发布时间的Unix时间戳（秒）。 | [optional] [default to undefined]
**ctime** | **number** | 用户投稿时间的Unix时间戳（秒）。 | [optional] [default to undefined]
**desc** | **string** | 视频简介。可能会包含HTML换行符。 | [optional] [default to undefined]
**duration** | **number** | 稿件总时长（所有分P累加），单位为秒。 | [optional] [default to undefined]
**owner** | [**GetSocialBilibiliVideoinfo200ResponseOwner**](GetSocialBilibiliVideoinfo200ResponseOwner.md) |  | [optional] [default to undefined]
**stat** | [**GetSocialBilibiliVideoinfo200ResponseStat**](GetSocialBilibiliVideoinfo200ResponseStat.md) |  | [optional] [default to undefined]
**pages** | [**Array&lt;GetSocialBilibiliVideoinfo200ResponsePagesInner&gt;**](GetSocialBilibiliVideoinfo200ResponsePagesInner.md) | 视频分P列表。即使是单P视频，该数组也包含一个元素。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliVideoinfo200Response } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliVideoinfo200Response = {
    bvid,
    aid,
    videos,
    tname,
    copyright,
    pic,
    title,
    pubdate,
    ctime,
    desc,
    duration,
    owner,
    stat,
    pages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
