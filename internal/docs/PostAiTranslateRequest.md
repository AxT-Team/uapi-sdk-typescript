# PostAiTranslateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | 单个翻译时使用的待翻译文本，与texts参数二选一。最大长度10,000字符。 | [optional] [default to undefined]
**texts** | **Array&lt;string&gt;** | 批量翻译时使用的待翻译文本列表，与text参数二选一。最多50条，总计最大100,000字符。 | [optional] [default to undefined]
**source_lang** | **string** | 源语言代码，可选。如果不指定，系统会自动检测源语言。 | [optional] [default to undefined]
**style** | **string** | 翻译风格，可选。支持casual(随意口语化)、professional(专业商务，默认)、academic(学术正式)、literary(文学艺术)。 | [optional] [default to StyleEnum_Professional]
**context** | **string** | 翻译上下文场景，可选。支持general(通用，默认)、business(商务)、technical(技术)、medical(医疗)、legal(法律)、marketing(市场营销)、entertainment(娱乐)、education(教育)、news(新闻)。 | [optional] [default to ContextEnum_General]
**preserve_format** | **boolean** | 是否保留原文格式，包括换行、缩进等。 | [optional] [default to true]
**fast_mode** | **boolean** | 是否启用快速模式。快速模式响应时间约800ms，准确率95%+；普通模式响应时间约2000ms，准确率98%+。 | [optional] [default to false]
**max_concurrency** | **number** | 批量翻译时的最大并发数，范围1-10。仅在批量翻译时有效。 | [optional] [default to 3]

## Example

```typescript
import { PostAiTranslateRequest } from 'uapi-sdk-typescript';

const instance: PostAiTranslateRequest = {
    text,
    texts,
    source_lang,
    style,
    context,
    preserve_format,
    fast_mode,
    max_concurrency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
