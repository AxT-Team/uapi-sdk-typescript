# GetSocialBilibiliVideoinfo200ResponseSubtitleListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | 字幕 ID。 | [optional] [default to undefined]
**lan** | **string** | 语言代码。 | [optional] [default to undefined]
**lan_doc** | **string** | 语言名称。 | [optional] [default to undefined]
**is_lock** | **boolean** | 是否锁定。 | [optional] [default to undefined]
**author_mid** | **number** | 字幕作者 UID。 | [optional] [default to undefined]
**subtitle_url** | **string** | 字幕文件链接。 | [optional] [default to undefined]
**author** | [**GetSocialBilibiliVideoinfo200ResponseSubtitleListInnerAuthor**](GetSocialBilibiliVideoinfo200ResponseSubtitleListInnerAuthor.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliVideoinfo200ResponseSubtitleListInner } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliVideoinfo200ResponseSubtitleListInner = {
    id,
    lan,
    lan_doc,
    is_lock,
    author_mid,
    subtitle_url,
    author,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
