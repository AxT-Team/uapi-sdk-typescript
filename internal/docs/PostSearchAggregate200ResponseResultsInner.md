# PostSearchAggregate200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | 结果标题 | [optional] [default to undefined]
**url** | **string** | 结果链接 | [optional] [default to undefined]
**snippet** | **string** | 结果摘要/描述 | [optional] [default to undefined]
**domain** | **string** | 来源域名 | [optional] [default to undefined]
**source** | **string** | 搜索引擎标识 | [optional] [default to undefined]
**position** | **number** | 原始排名位置 | [optional] [default to undefined]
**score** | **number** | 综合得分 (0-1，经过机器学习排序) | [optional] [default to undefined]
**publish_time** | **string** | 发布时间 (ISO 8601 格式) | [optional] [default to undefined]
**author** | **string** | 作者信息 | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregate200ResponseResultsInner } from 'uapi-sdk-typescript';

const instance: PostSearchAggregate200ResponseResultsInner = {
    title,
    url,
    snippet,
    domain,
    source,
    position,
    score,
    publish_time,
    author,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
