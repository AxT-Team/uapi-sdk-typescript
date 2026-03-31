# GetSocialBilibiliVideoinfo200ResponseRights

视频权限开关（0 或 1）。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bp** | **number** | 是否可以承包/付费（老字段）。 | [optional] [default to undefined]
**elec** | **number** | 是否允许付费充电。 | [optional] [default to undefined]
**download** | **number** | 是否允许缓存/下载。 | [optional] [default to undefined]
**movie** | **number** | 是否为电影。 | [optional] [default to undefined]
**pay** | **number** | 是否需要付费观看。 | [optional] [default to undefined]
**hd5** | **number** | 高码率相关老字段。 | [optional] [default to undefined]
**no_reprint** | **number** | 是否禁止转载（1 表示禁止）。 | [optional] [default to undefined]
**autoplay** | **number** | 是否允许自动播放。 | [optional] [default to undefined]
**ugc_pay** | **number** | 是否为 UGC 付费内容。 | [optional] [default to undefined]
**is_cooperation** | **number** | 是否为合作视频。 | [optional] [default to undefined]
**ugc_pay_preview** | **number** | 是否允许付费内容试看。 | [optional] [default to undefined]
**no_background** | **number** | 背景相关控制字段。 | [optional] [default to undefined]
**clean_mode** | **number** | 是否为纯净模式。 | [optional] [default to undefined]
**is_stein_gate** | **number** | 互动剧情相关字段。 | [optional] [default to undefined]
**is_360** | **number** | 是否为 360° 全景视频。 | [optional] [default to undefined]
**no_share** | **number** | 是否禁止分享（1 表示禁止）。 | [optional] [default to undefined]
**arc_pay** | **number** | 是否为付费视频。 | [optional] [default to undefined]
**free_watch** | **number** | 付费视频是否允许免费试看。 | [optional] [default to undefined]

## Example

```typescript
import { GetSocialBilibiliVideoinfo200ResponseRights } from 'uapi-sdk-typescript';

const instance: GetSocialBilibiliVideoinfo200ResponseRights = {
    bp,
    elec,
    download,
    movie,
    pay,
    hd5,
    no_reprint,
    autoplay,
    ugc_pay,
    is_cooperation,
    ugc_pay_preview,
    no_background,
    clean_mode,
    is_stein_gate,
    is_360,
    no_share,
    arc_pay,
    free_watch,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
