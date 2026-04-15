# GetGithubUser200ResponseActivityContributionCalendar

按周整理好的贡献日历数据。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | **Array&lt;string&gt;** | 贡献等级对应的颜色列表。 | [optional] [default to undefined]
**is_halloween** | **boolean** | 是否启用了 GitHub 万圣节配色主题。 | [optional] [default to undefined]
**total_contributions** | **number** | 贡献日历中的总贡献数。 | [optional] [default to undefined]
**weeks** | [**Array&lt;GetGithubUser200ResponseActivityContributionCalendarWeeksInner&gt;**](GetGithubUser200ResponseActivityContributionCalendarWeeksInner.md) | 按周排列的贡献日历列数据。 | [optional] [default to undefined]

## Example

```typescript
import { GetGithubUser200ResponseActivityContributionCalendar } from 'uapi-sdk-typescript';

const instance: GetGithubUser200ResponseActivityContributionCalendar = {
    colors,
    is_halloween,
    total_contributions,
    weeks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
