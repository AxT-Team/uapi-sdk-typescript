# PostMiscDateDiffRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** | 开始日期，支持多种格式自动识别 | [default to undefined]
**end_date** | **string** | 结束日期，支持多种格式自动识别 | [default to undefined]
**format** | **string** | 日期格式（可选），如DD-MM-YYYY。不指定则自动识别 | [optional] [default to undefined]

## Example

```typescript
import { PostMiscDateDiffRequest } from 'uapi-sdk-typescript';

const instance: PostMiscDateDiffRequest = {
    start_date,
    end_date,
    format,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
