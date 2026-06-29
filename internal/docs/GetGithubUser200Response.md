# GetGithubUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | [**GetGithubUser200ResponseActivity**](GetGithubUser200ResponseActivity.md) |  | [optional] [default to undefined]
**avatar_url** | **string** | 用户头像图片链接。 | [optional] [default to undefined]
**bio** | **string** | 用户个人简介。 | [optional] [default to undefined]
**blog** | **string** | 用户填写的网站或博客地址。 | [optional] [default to undefined]
**company** | **string** | 用户填写的公司或组织信息。 | [optional] [default to undefined]
**created_at** | **string** | GitHub 账号创建时间（ISO 8601）。 | [optional] [default to undefined]
**email** | **string** | 用户公开可见的邮箱地址。 | [optional] [default to undefined]
**followers** | **number** | 关注该用户的人数。 | [optional] [default to undefined]
**following** | **number** | 该用户正在关注的人数。 | [optional] [default to undefined]
**html_url** | **string** | GitHub 个人主页链接。 | [optional] [default to undefined]
**location** | **string** | 用户公开展示的地理位置。 | [optional] [default to undefined]
**login** | **string** | GitHub 登录名。 | [optional] [default to undefined]
**name** | **string** | 用户公开显示的名称。 | [optional] [default to undefined]
**organizations** | [**Array&lt;GetGithubUser200ResponseOrganizationsInner&gt;**](GetGithubUser200ResponseOrganizationsInner.md) | 用户公开加入的组织列表 | [optional] [default to undefined]
**pinned_repositories** | [**Array&lt;GetGithubUser200ResponsePinnedRepositoriesInner&gt;**](GetGithubUser200ResponsePinnedRepositoriesInner.md) | 用户主页展示的 pinned 仓库列表（需开启 pinned&#x3D;true）。 | [optional] [default to undefined]
**public_gists** | **number** | 公开 Gist 数量。 | [optional] [default to undefined]
**public_repos** | **number** | 公开仓库数量。 | [optional] [default to undefined]
**repositories** | [**Array&lt;GetGithubUser200ResponseRepositoriesInner&gt;**](GetGithubUser200ResponseRepositoriesInner.md) | 最近活跃的公开仓库列表（需开启 repos&#x3D;true 或传入 repos_limit）。 | [optional] [default to undefined]
**twitter_username** | **string** | 用户绑定的 X（Twitter）用户名。 | [optional] [default to undefined]
**type** | **string** | 账号类型，常见值为 User 或 Organization。 | [optional] [default to undefined]
**updated_at** | **string** | 用户资料最近更新时间（ISO 8601）。 | [optional] [default to undefined]

## Example

```typescript
import { GetGithubUser200Response } from 'uapi-sdk-typescript';

const instance: GetGithubUser200Response = {
    activity,
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    email,
    followers,
    following,
    html_url,
    location,
    login,
    name,
    organizations,
    pinned_repositories,
    public_gists,
    public_repos,
    repositories,
    twitter_username,
    type,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
