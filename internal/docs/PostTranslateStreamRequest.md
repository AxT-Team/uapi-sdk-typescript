# PostTranslateStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_lang** | **string** | 源语言，支持：中文、英文、auto（自动检测）。默认为auto | [optional] [default to 'auto']
**query** | **string** | 待翻译的文本内容 | [default to undefined]
**to_lang** | **string** | 目标语言，支持：中文、英文 | [default to undefined]
**tone** | **string** | 语气参数，可选 | [optional] [default to undefined]

## Example

```typescript
import { PostTranslateStreamRequest } from 'uapi-sdk-typescript';

const instance: PostTranslateStreamRequest = {
    from_lang,
    query,
    to_lang,
    tone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
