# GetNetworkWhois200ResponseOneOf1

### JSON格式响应 当 `format=json` 时，`whois` 字段返回结构化的JSON对象。  > [!NOTE] > **注意**：返回的具体字段可能因域名注册局和隐私保护设置而异。某些敏感信息可能会被部分隐藏或标记为 `REDACTED FOR PRIVACY`。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whois** | **object** | 结构化 WHOIS 信息，返回经过解析的 JSON 对象，通常包含域名信息、注册商信息、注册人信息以及注册日期、更新时间、到期时间等字段。 有些字段会因域名注册局和隐私保护设置而有所不同噢。 | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkWhois200ResponseOneOf1 } from 'uapi-sdk-typescript';

const instance: GetNetworkWhois200ResponseOneOf1 = {
    whois,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
