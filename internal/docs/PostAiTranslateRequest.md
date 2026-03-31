# PostAiTranslateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | 待翻译的文本内容。最大长度10,000字符。 | [default to undefined]
**source_lang** | **string** | 源语言代码，可选。如果不指定，系统会自动检测源语言。 | [optional] [default to undefined]
**style** | **string** | 翻译风格，可选。支持casual(随意口语化)、professional(专业商务，默认)、academic(学术正式)、literary(文学艺术)。 | [optional] [default to StyleEnum_Professional]
**context** | **string** | 翻译上下文场景，可选。支持general(通用，默认)、business(商务)、technical(技术)、medical(医疗)、legal(法律)、marketing(市场营销)、entertainment(娱乐)、education(教育)、news(新闻)。 | [optional] [default to ContextEnum_General]
**preserve_format** | **boolean** | 是否保留原文格式，包括换行、缩进等。 | [optional] [default to true]

## Example

```typescript
import { PostAiTranslateRequest } from 'uapi-sdk-typescript';

const instance: PostAiTranslateRequest = {
    text,
    source_lang,
    style,
    context,
    preserve_format,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
