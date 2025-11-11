# PostAiTranslate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**is_batch** | **boolean** | 标识是否为批量翻译请求。 | [optional] [default to undefined]
**data** | [**PostAiTranslate200ResponseData**](PostAiTranslate200ResponseData.md) |  | [optional] [default to undefined]
**batch_data** | [**Array&lt;PostAiTranslate200ResponseBatchDataInner&gt;**](PostAiTranslate200ResponseBatchDataInner.md) | 批量翻译结果列表，仅在批量翻译时返回。 | [optional] [default to undefined]
**batch_summary** | [**PostAiTranslate200ResponseBatchSummary**](PostAiTranslate200ResponseBatchSummary.md) |  | [optional] [default to undefined]
**performance** | [**PostAiTranslate200ResponsePerformance**](PostAiTranslate200ResponsePerformance.md) |  | [optional] [default to undefined]
**quality_metrics** | [**PostAiTranslate200ResponseQualityMetrics**](PostAiTranslate200ResponseQualityMetrics.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostAiTranslate200Response } from 'uapi-sdk-typescript';

const instance: PostAiTranslate200Response = {
    code,
    message,
    is_batch,
    data,
    batch_data,
    batch_summary,
    performance,
    quality_metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
