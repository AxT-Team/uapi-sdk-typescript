# GetGithubUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login** | **string** | GitHub 登录名。 | [optional] [default to undefined]
**name** | **string** | 用户公开显示的名称。 | [optional] [default to undefined]
**bio** | **string** | 用户个人简介。 | [optional] [default to undefined]
**company** | **string** | 用户填写的公司或组织信息。 | [optional] [default to undefined]
**location** | **string** | 用户公开展示的地理位置。 | [optional] [default to undefined]
**blog** | **string** | 用户填写的网站或博客地址。 | [optional] [default to undefined]
**twitter_username** | **string** | 用户绑定的 X（Twitter）用户名。 | [optional] [default to undefined]
**email** | **string** | 用户公开可见的邮箱地址。 | [optional] [default to undefined]
**html_url** | **string** | GitHub 个人主页链接。 | [optional] [default to undefined]
**avatar_url** | **string** | 用户头像图片链接。 | [optional] [default to undefined]
**type** | **string** | 账号类型，常见值为 User 或 Organization。 | [optional] [default to undefined]
**public_repos** | **number** | 公开仓库数量。 | [optional] [default to undefined]
**public_gists** | **number** | 公开 Gist 数量。 | [optional] [default to undefined]
**followers** | **number** | 关注该用户的人数。 | [optional] [default to undefined]
**following** | **number** | 该用户正在关注的人数。 | [optional] [default to undefined]
**created_at** | **string** | GitHub 账号创建时间（ISO 8601）。 | [optional] [default to undefined]
**updated_at** | **string** | 用户资料最近更新时间（ISO 8601）。 | [optional] [default to undefined]
**organizations** | [**Array&lt;GetGithubUser200ResponseOrganizationsInner&gt;**](GetGithubUser200ResponseOrganizationsInner.md) | 用户公开加入的组织列表 | [optional] [default to undefined]
**activity** | [**GetGithubUser200ResponseActivity**](GetGithubUser200ResponseActivity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetGithubUser200Response } from 'uapi-sdk-typescript';

const instance: GetGithubUser200Response = {
    login,
    name,
    bio,
    company,
    location,
    blog,
    twitter_username,
    email,
    html_url,
    avatar_url,
    type,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    organizations,
    activity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
