# GetNetworkUrlstatus200ResponseOneOf1

当目标 URL 不可达或请求失败（如 DNS 失败、超时、连接失败）时，`status` 为 `0`。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **number** | 目标不可达或请求失败时固定为 0。 | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkUrlstatus200ResponseOneOf1 } from 'uapi-sdk-typescript';

const instance: GetNetworkUrlstatus200ResponseOneOf1 = {
    status,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
