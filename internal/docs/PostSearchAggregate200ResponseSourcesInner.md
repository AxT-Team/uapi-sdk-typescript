# PostSearchAggregate200ResponseSourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | 搜索引擎版本 | [optional] [default to undefined]
**status** | **string** | 本次搜索引擎调用状态 | [optional] [default to undefined]
**result_count** | **number** | 该搜索引擎返回的结果数 | [optional] [default to undefined]
**elapsed_ms** | **number** | 该搜索引擎的耗时（毫秒） | [optional] [default to undefined]
**first_result_host** | **string** | 该搜索源首条结果的域名 | [optional] [default to undefined]

## Example

```typescript
import { PostSearchAggregate200ResponseSourcesInner } from 'uapi-sdk-typescript';

const instance: PostSearchAggregate200ResponseSourcesInner = {
    name,
    status,
    result_count,
    elapsed_ms,
    first_result_host,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
