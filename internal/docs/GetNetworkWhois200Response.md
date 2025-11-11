# GetNetworkWhois200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** |  | [optional] [default to undefined]
**whois** | **object** | ### 结构化WHOIS信息  返回经过解析的JSON对象，包含以下主要部分：  - **域名信息**: 包含域名ID、注册状态、DNS服务器等 - **注册商信息**: 注册服务商的详细信息 - **注册人信息**: 域名所有者的相关信息（可能因隐私保护而部分隐藏） - **重要日期**: 包括注册日期、更新日期和到期日期 | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkWhois200Response } from 'uapi-sdk-typescript';

const instance: GetNetworkWhois200Response = {
    code,
    whois,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
