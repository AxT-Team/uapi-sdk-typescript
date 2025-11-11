# GetStatusRatelimit200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepts** | **number** | Total number of accepted requests | [optional] [default to undefined]
**in_flight** | **number** | Number of current in-flight requests | [optional] [default to undefined]
**last_update** | **string** | Last update time of the status | [optional] [default to undefined]
**limit** | **number** | Current concurrency limit | [optional] [default to undefined]
**load** | **number** | Calculated system load (in_flight / limit) | [optional] [default to undefined]
**min_rtt** | **number** | Minimum observed RTT in milliseconds | [optional] [default to undefined]
**rejects** | **number** | Total number of rejected requests | [optional] [default to undefined]
**rtt** | **number** | Smoothed RTT in milliseconds | [optional] [default to undefined]
**throttled** | **number** | Total number of throttled requests | [optional] [default to undefined]

## Example

```typescript
import { GetStatusRatelimit200Response } from 'uapi-sdk-typescript';

const instance: GetStatusRatelimit200Response = {
    accepts,
    in_flight,
    last_update,
    limit,
    load,
    min_rtt,
    rejects,
    rtt,
    throttled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
