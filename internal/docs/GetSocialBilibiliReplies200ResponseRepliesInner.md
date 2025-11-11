# GetSocialBilibiliReplies200ResponseRepliesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rpid** | **number** | 评论的唯一ID (Reply ID)。 | [optional] [default to undefined]
**oid** | **number** | 评论区对象ID，即视频的aid。 | [optional] [default to undefined]
**mid** | **number** | 发表评论的用户的mid。 | [optional] [default to undefined]
**root** | **number** | 根评论的rpid。如果为0，表示这条评论是根评论。 | [optional] [default to undefined]
**parent** | **number** | 回复的父级评论的rpid。如果为0，表示是根评论。 | [optional] [default to undefined]
**count** | **number** | 这条评论下的回复（楼中楼）数量。 | [optional] [default to undefined]
**ctime** | **number** | 评论发送时间的Unix时间戳（秒）。 | [optional] [default to undefined]
**like** | **number** | 该评论获得的点赞数。 | [optional] [default to undefined]
**member** | [**GetSocialBilibiliReplies200ResponseRepliesInnerMember**](GetSocialBilibiliReplies200ResponseRepliesInnerMember.md) |  | [optional] [default to undefined]
**content** | [**GetSocialBilibiliReplies200ResponseRepliesInnerContent**](GetSocialBilibiliReplies200ResponseRepliesInnerContent.md) |  | [optional] [default to undefined]
**replies** | **Array&lt;object&gt;** | 楼中楼回复列表。结构与顶层评论对象一致，但通常此数组为空，需要单独请求。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliReplies200ResponseRepliesInner } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliReplies200ResponseRepliesInner = {
    rpid,
    oid,
    mid,
    root,
    parent,
    count,
    ctime,
    like,
    member,
    content,
    replies,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
