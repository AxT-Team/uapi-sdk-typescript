# GetNetworkMyip200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **string** | 你的公网IP地址 | [optional] [default to undefined]
**region** | **string** | 地理位置，格式：国家 省份 城市 | [optional] [default to undefined]
**isp** | **string** | 运营商名称 | [optional] [default to undefined]
**llc** | **string** | 归属机构 | [optional] [default to undefined]
**asn** | **string** | 自治系统编号 | [optional] [default to undefined]
**latitude** | **number** | 纬度 | [optional] [default to undefined]
**longitude** | **number** | 经度 | [optional] [default to undefined]
**beginip** | **string** | IP段起始地址（标准查询） | [optional] [default to undefined]
**endip** | **string** | IP段结束地址（标准查询） | [optional] [default to undefined]
**district** | **string** | 行政区。仅 &#x60;source&#x3D;commercial&#x60; 时可能返回。 | [optional] [default to undefined]
**time_zone** | **string** | 时区名称。仅 &#x60;source&#x3D;commercial&#x60; 时可能返回。 | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkMyip200Response } from 'uapi-sdk-typescript';

const instance: GetNetworkMyip200Response = {
    ip,
    region,
    isp,
    llc,
    asn,
    latitude,
    longitude,
    beginip,
    endip,
    district,
    time_zone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
