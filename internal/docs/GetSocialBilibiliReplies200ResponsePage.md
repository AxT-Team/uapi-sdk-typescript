# GetSocialBilibiliReplies200ResponsePage

分页信息概览。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num** | **number** | 当前所在的页码。 | [optional] [default to undefined]
**size** | **number** | 每页的项数。 | [optional] [default to undefined]
**count** | **number** | 根评论（即直接评论视频的评论）的总数。 | [optional] [default to undefined]
**acount** | **number** | 评论区总评论数，包含了所有的楼中楼回复。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliReplies200ResponsePage } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliReplies200ResponsePage = {
    num,
    size,
    count,
    acount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
