# GetNetworkWhois200ResponseOneOf

### 文本格式响应 当 `format=text` 或未指定时，`whois` 字段包含原始的WHOIS查询文本。这保留了最完整的信息，适合需要自行解析或展示原始数据的场景。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whois** | **string** | WHOIS 原始文本，返回未经处理的原始 WHOIS 查询结果文本。 | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkWhois200ResponseOneOf } from 'uapi-sdk-typescript';

const instance: GetNetworkWhois200ResponseOneOf = {
    whois,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
