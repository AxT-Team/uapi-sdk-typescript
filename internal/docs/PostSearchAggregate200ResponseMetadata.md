# PostSearchAggregate200ResponseMetadata

本次请求的处理元数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_fetched** | **number** | 额外抓取正文的结果数 | [optional] [default to undefined]
**dedupe_removed** | **number** | 去重后移除的结果数 | [optional] [default to undefined]
**request_params** | [**PostSearchAggregate200ResponseMetadataRequestParams**](PostSearchAggregate200ResponseMetadataRequestParams.md) |  | [optional] [default to undefined]
**rerank_applied** | **boolean** | 是否执行了排序重排 | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregate200ResponseMetadata } from 'uapi-sdk-typescript';

const instance: PostSearchAggregate200ResponseMetadata = {
    content_fetched,
    dedupe_removed,
    request_params,
    rerank_applied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
