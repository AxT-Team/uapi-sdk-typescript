# PostImageNsfw200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nsfw_score** | **number** | NSFW 内容的置信度分数，范围 0-1，越高表示越可能是敏感内容。 | [optional] [default to undefined]
**normal_score** | **number** | 正常内容的置信度分数，范围 0-1。 | [optional] [default to undefined]
**is_nsfw** | **boolean** | 是否判定为 NSFW 内容。 | [optional] [default to undefined]
**label** | **string** | 内容标签，\&#39;nsfw\&#39; 或 \&#39;normal\&#39;。 | [optional] [default to undefined]
**suggestion** | **string** | 处理建议：\&#39;pass\&#39;（通过）、\&#39;review\&#39;（人工复核）、\&#39;block\&#39;（拦截）。 | [optional] [default to undefined]
**risk_level** | **string** | 风险等级：\&#39;low\&#39;、\&#39;medium\&#39;、\&#39;high\&#39;。 | [optional] [default to undefined]
**confidence** | **number** | 模型对当前判断的置信度。 | [optional] [default to undefined]
**inference_time_ms** | **number** | 模型推理耗时，单位毫秒。 | [optional] [default to undefined]

## Example

```typescript
import { PostImageNsfw200Response } from 'uapi-sdk-typescript';

const instance: PostImageNsfw200Response = {
    nsfw_score,
    normal_score,
    is_nsfw,
    label,
    suggestion,
    risk_level,
    confidence,
    inference_time_ms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
