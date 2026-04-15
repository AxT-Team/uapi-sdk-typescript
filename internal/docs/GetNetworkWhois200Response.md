# GetNetworkWhois200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whois** | **object** | 结构化 WHOIS 信息，返回经过解析的 JSON 对象，通常包含域名信息、注册商信息、注册人信息以及注册日期、更新时间、到期时间等字段。 有些字段会因域名注册局和隐私保护设置而有所不同噢。 | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkWhois200Response } from 'uapi-sdk-typescript';

const instance: GetNetworkWhois200Response = {
    whois,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
