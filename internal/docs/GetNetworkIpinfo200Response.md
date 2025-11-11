# GetNetworkIpinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **string** | 自治系统编号 (由GeoLite2或商业版提供) | [optional] [default to undefined]
**beginip** | **string** | IP范围起始 (仅在默认查询中提供) | [optional] [default to undefined]
**code** | **number** |  | [optional] [default to undefined]
**endip** | **string** | IP范围结束 (仅在默认查询中提供) | [optional] [default to undefined]
**ip** | **string** |  | [optional] [default to undefined]
**isp** | **string** | 运营商 | [optional] [default to undefined]
**latitude** | **number** |  | [optional] [default to undefined]
**llc** | **string** | 归属 | [optional] [default to undefined]
**longitude** | **number** |  | [optional] [default to undefined]
**region** | **string** | 格式：国家 省份 城市 | [optional] [default to undefined]
**district** | **string** | 行政区 (仅在商业查询中提供) | [optional] [default to undefined]
**area_code** | **string** | 行政区划代码 (仅在商业查询中提供) | [optional] [default to undefined]
**city_code** | **string** | 城市区号 (仅在商业查询中提供) | [optional] [default to undefined]
**zip_code** | **string** | 邮政编码 (仅在商业查询中提供) | [optional] [default to undefined]
**time_zone** | **string** | 时区 (仅在商业查询中提供) | [optional] [default to undefined]
**scenes** | **string** | 应用场景 (仅在商业查询中提供) | [optional] [default to undefined]
**elevation** | **string** | 海拔（米）(仅在商业查询中提供) | [optional] [default to undefined]
**weather_station** | **string** | 气象站代码 (仅在商业查询中提供) | [optional] [default to undefined]

## Example

```typescript
import { GetNetworkIpinfo200Response } from 'uapi-sdk-typescript';

const instance: GetNetworkIpinfo200Response = {
    asn,
    beginip,
    code,
    endip,
    ip,
    isp,
    latitude,
    llc,
    longitude,
    region,
    district,
    area_code,
    city_code,
    zip_code,
    time_zone,
    scenes,
    elevation,
    weather_station,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
