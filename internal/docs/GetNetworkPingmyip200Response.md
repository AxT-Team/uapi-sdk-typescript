# GetNetworkPingmyip200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ip** | **string** | 当前客户端的公网 IP 地址。 | [optional] [default to undefined]
**ping_successful** | **boolean** | 是否成功完成对当前客户端 IP 的 Ping。 | [optional] [default to undefined]
**message** | **string** | 操作结果说明。成功时通常会附带平均延迟信息。 | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkPingmyip200Response } from 'uapi-sdk-typescript';

const instance: GetNetworkPingmyip200Response = {
    client_ip,
    ping_successful,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
