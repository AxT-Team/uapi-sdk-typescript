# GetGithubRepo200ResponseLatestRelease

仓库最新发布版本信息，如果没有 Release 则为 null。可用于实现应用更新检查功能。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag_name** | **string** | 版本标签 | [optional] [default to undefined]
**name** | **string** | 发布名称 | [optional] [default to undefined]
**published_at** | **string** | 发布时间 | [optional] [default to undefined]
**html_url** | **string** | Release 页面链接 | [optional] [default to undefined]
**prerelease** | **boolean** | 是否为预发布版本 | [optional] [default to undefined]
**draft** | **boolean** | 是否为草稿 | [optional] [default to undefined]

## Example

```typescript
import { GetGithubRepo200ResponseLatestRelease } from 'uapi-sdk-typescript';

const instance: GetGithubRepo200ResponseLatestRelease = {
    tag_name,
    name,
    published_at,
    html_url,
    prerelease,
    draft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
