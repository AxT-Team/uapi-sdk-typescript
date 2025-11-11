# GetNetworkWhois200ResponseOneOf1

### JSON格式响应 当 `format=json` 时，`whois` 字段返回结构化的JSON对象。  > [!NOTE] > **注意**：返回的具体字段可能因域名注册局和隐私保护设置而异。某些敏感信息可能会被部分隐藏或标记为 `REDACTED FOR PRIVACY`。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** |  | [optional] [default to undefined]
**whois** | **object** | ### 结构化WHOIS信息  返回经过解析的JSON对象，包含以下主要部分：  - **域名信息**: 包含域名ID、注册状态、DNS服务器等 - **注册商信息**: 注册服务商的详细信息 - **注册人信息**: 域名所有者的相关信息（可能因隐私保护而部分隐藏） - **重要日期**: 包括注册日期、更新日期和到期日期 | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkWhois200ResponseOneOf1 } from 'uapi-sdk-typescript';

const instance: GetNetworkWhois200ResponseOneOf1 = {
    code,
    whois,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
