# PostAiTranslate200ResponseData

单个翻译的详细结果，仅在单个翻译时返回。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_text** | **string** |  | [optional] [default to undefined]
**translated_text** | **string** |  | [optional] [default to undefined]
**detected_lang** | **string** |  | [optional] [default to undefined]
**confidence_score** | **number** |  | [optional] [default to undefined]
**alternatives** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**explanation** | [**PostAiTranslate200ResponseDataExplanation**](PostAiTranslate200ResponseDataExplanation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostAiTranslate200ResponseData } from 'uapi-sdk-typescript';

const instance: PostAiTranslate200ResponseData = {
    original_text,
    translated_text,
    detected_lang,
    confidence_score,
    alternatives,
    explanation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
