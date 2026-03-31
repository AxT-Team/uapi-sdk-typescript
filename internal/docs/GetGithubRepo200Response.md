# GetGithubRepo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **string** | 仓库完整名称。 | [optional] [default to undefined]
**description** | **string** | 仓库简介。 | [optional] [default to undefined]
**homepage** | **string** | 仓库主页链接。 | [optional] [default to undefined]
**default_branch** | **string** | 默认分支名称。 | [optional] [default to undefined]
**primary_branch** | **string** | 主要分支名称（通常与默认分支一致）。 | [optional] [default to undefined]
**default_branch_sha** | **string** | 默认分支最新提交的 SHA 哈希。 | [optional] [default to undefined]
**visibility** | **string** | 仓库可见性，常见值为 &#x60;public&#x60; 或 &#x60;private&#x60;。 | [optional] [default to undefined]
**archived** | **boolean** | 仓库是否已归档。 | [optional] [default to undefined]
**disabled** | **boolean** | 仓库是否被禁用。 | [optional] [default to undefined]
**fork** | **boolean** | 是否为 Fork 仓库。 | [optional] [default to undefined]
**language** | **string** | 主要语言。 | [optional] [default to undefined]
**topics** | **Array&lt;string&gt;** | 话题标签列表。 | [optional] [default to undefined]
**license** | **string** | 开源许可证名称。 | [optional] [default to undefined]
**stargazers** | **number** | Star 数。 | [optional] [default to undefined]
**forks** | **number** | Fork 数。 | [optional] [default to undefined]
**open_issues** | **number** | 开放 Issue 数。 | [optional] [default to undefined]
**watchers** | **number** | 关注者数量（watchers/subscribers）。 | [optional] [default to undefined]
**pushed_at** | **string** | 最后推送时间（ISO 8601）。 | [optional] [default to undefined]
**created_at** | **string** | 创建时间（ISO 8601）。 | [optional] [default to undefined]
**updated_at** | **string** | 更新时间（ISO 8601）。 | [optional] [default to undefined]
**languages** | **{ [key: string]: number; }** | 语言统计（键为语言名，值为代码字节数）。 | [optional] [default to undefined]
**collaborators** | [**Array&lt;GetGithubRepo200ResponseCollaboratorsInner&gt;**](GetGithubRepo200ResponseCollaboratorsInner.md) | 协作者列表。受权限限制时可能为 null 或空数组。 | [optional] [default to undefined]
**maintainers** | [**Array&lt;GetGithubRepo200ResponseCollaboratorsInner&gt;**](GetGithubRepo200ResponseCollaboratorsInner.md) | 维护者列表（根据默认分支近期提交推断）。 | [optional] [default to undefined]
**latest_release** | [**GetGithubRepo200ResponseLatestRelease**](GetGithubRepo200ResponseLatestRelease.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetGithubRepo200Response } from 'uapi-sdk-typescript';

const instance: GetGithubRepo200Response = {
    full_name,
    description,
    homepage,
    default_branch,
    primary_branch,
    default_branch_sha,
    visibility,
    archived,
    disabled,
    fork,
    language,
    topics,
    license,
    stargazers,
    forks,
    open_issues,
    watchers,
    pushed_at,
    created_at,
    updated_at,
    languages,
    collaborators,
    maintainers,
    latest_release,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
