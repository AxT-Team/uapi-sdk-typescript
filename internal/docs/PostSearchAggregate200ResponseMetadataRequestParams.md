# PostSearchAggregate200ResponseMetadataRequestParams

服务端实际生效的请求参数回显

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | 实际执行的搜索词 | [optional] [default to undefined]
**limit** | **number** | 实际生效的返回条数 | [optional] [default to undefined]
**page** | **number** | 实际生效的页码 | [optional] [default to undefined]
**timeout_ms** | **number** | 实际生效的超时时间（毫秒） | [optional] [default to undefined]
**sort** | **string** | 实际生效的排序方式 | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregate200ResponseMetadataRequestParams } from 'uapi-sdk-typescript';

const instance: PostSearchAggregate200ResponseMetadataRequestParams = {
    query,
    limit,
    page,
    timeout_ms,
    sort,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
