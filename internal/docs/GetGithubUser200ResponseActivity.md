# GetGithubUser200ResponseActivity

贡献活动数据（需开启 activity=true）

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **string** | 活动统计范围，常见值为 all 或 organization。 | [optional] [default to undefined]
**organization** | **string** | 按组织过滤时对应的组织登录名。 | [optional] [default to undefined]
**from** | **string** | 统计开始日期。 | [optional] [default to undefined]
**to** | **string** | 统计结束日期。 | [optional] [default to undefined]
**total_contributions** | **number** | 统计范围内的总贡献数。 | [optional] [default to undefined]
**total_commit_contributions** | **number** | Commit 贡献总数。 | [optional] [default to undefined]
**total_issue_contributions** | **number** | Issue 贡献总数。 | [optional] [default to undefined]
**total_pull_request_contributions** | **number** | Pull Request 贡献总数。 | [optional] [default to undefined]
**total_pull_request_review_contributions** | **number** | Pull Request Review 贡献总数。 | [optional] [default to undefined]
**contribution_calendar** | [**GetGithubUser200ResponseActivityContributionCalendar**](GetGithubUser200ResponseActivityContributionCalendar.md) |  | [optional] [default to undefined]
**timeline** | [**Array&lt;GetGithubUser200ResponseActivityTimelineInner&gt;**](GetGithubUser200ResponseActivityTimelineInner.md) | 按月份聚合后的贡献时间线。 | [optional] [default to undefined]

## Example

```typescript
import { GetGithubUser200ResponseActivity } from 'uapi-sdk-typescript';

const instance: GetGithubUser200ResponseActivity = {
    scope,
    organization,
    from,
    to,
    total_contributions,
    total_commit_contributions,
    total_issue_contributions,
    total_pull_request_contributions,
    total_pull_request_review_contributions,
    contribution_calendar,
    timeline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
