# GetNetworkUrlstatus200ResponseOneOf

当目标 URL 可访问时，`status` 为目标返回的 HTTP 状态码（如 `200`）。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **number** | 目标URL实际返回的HTTP状态码。 | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkUrlstatus200ResponseOneOf } from 'uapi-sdk-typescript';

const instance: GetNetworkUrlstatus200ResponseOneOf = {
    status,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
