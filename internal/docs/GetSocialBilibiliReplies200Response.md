# GetSocialBilibiliReplies200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**GetSocialBilibiliReplies200ResponsePage**](GetSocialBilibiliReplies200ResponsePage.md) |  | [optional] [default to undefined]
**config** | **object** | 评论区配置。不同视频或不同权限下可能为 null。 | [optional] [default to undefined]
**hots** | **Array&lt;object&gt;** | 热门评论列表。结构与 &#x60;replies&#x60; 中的对象一致。如果当前页是第一页，且有热门评论，则此数组非空。 | [optional] [default to undefined]
**replies** | [**Array&lt;GetSocialBilibiliReplies200ResponseRepliesInner&gt;**](GetSocialBilibiliReplies200ResponseRepliesInner.md) | 当前页的评论列表。 | [optional] [default to undefined]
**upper** | **object** | UP 主相关信息。无数据时为 null。 | [optional] [default to undefined]
**top** | **object** | 置顶评论信息。没有置顶评论时为 null。 | [optional] [default to undefined]
**notice** | **object** | 评论区公告信息。没有公告时为 null。 | [optional] [default to undefined]
**vote** | **number** | 评论区投票相关状态值。没有投票时通常为 0。 | [optional] [default to undefined]
**folder** | **object** | 评论折叠相关信息。没有数据时为 null。 | [optional] [default to undefined]
**control** | **object** | 评论区控制信息。没有数据时为 null。 | [optional] [default to undefined]
**cursor** | **object** | 游标翻页信息。部分场景下为 null。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliReplies200Response } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliReplies200Response = {
    page,
    config,
    hots,
    replies,
    upper,
    top,
    notice,
    vote,
    folder,
    control,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
