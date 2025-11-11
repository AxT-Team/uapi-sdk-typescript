# GetSocialBilibiliReplies200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**GetSocialBilibiliReplies200ResponsePage**](GetSocialBilibiliReplies200ResponsePage.md) |  | [optional] [default to undefined]
**hots** | **Array&lt;object&gt;** | 热门评论列表。结构与 &#x60;replies&#x60; 中的对象一致。如果当前页是第一页，且有热门评论，则此数组非空。 | [optional] [default to undefined]
**replies** | [**Array&lt;GetSocialBilibiliReplies200ResponseRepliesInner&gt;**](GetSocialBilibiliReplies200ResponseRepliesInner.md) | 当前页的评论列表。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliReplies200Response } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliReplies200Response = {
    page,
    hots,
    replies,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
