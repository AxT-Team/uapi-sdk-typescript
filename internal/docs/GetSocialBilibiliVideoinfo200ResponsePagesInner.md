# GetSocialBilibiliVideoinfo200ResponsePagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cid** | **number** | 分P的唯一标识CID，用于获取弹幕等。 | [optional] [default to undefined]
**page** | **number** | 分P的序号，从1开始。 | [optional] [default to undefined]
**part** | **string** | 分P的标题。对于单P视频，通常是视频主标题。 | [optional] [default to undefined]
**duration** | **number** | 该分P的持续时间，单位为秒。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliVideoinfo200ResponsePagesInner } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliVideoinfo200ResponsePagesInner = {
    cid,
    page,
    part,
    duration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
