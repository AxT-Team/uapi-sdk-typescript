# PostTextConvertRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | 源格式类型 | [default to undefined]
**_options** | **{ [key: string]: any; }** | 可选参数（预留，当前未使用） | [optional] [default to undefined]
**text** | **string** | 待转换的文本内容 | [default to undefined]
**to** | **string** | 目标格式类型 | [default to undefined]

## Example

```typescript
import { PostTextConvertRequest } from 'uapi-sdk-typescript';

const instance: PostTextConvertRequest = {
    from,
    _options,
    text,
    to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
