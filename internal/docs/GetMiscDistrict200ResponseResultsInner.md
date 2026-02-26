# GetMiscDistrict200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | 地区名称。 | [optional] [default to undefined]
**level** | **string** | 行政级别：province / city / district / street。 | [optional] [default to undefined]
**country** | **string** | 国家名称。 | [optional] [default to undefined]
**country_code** | **string** | ISO 3166-1 alpha-2 国家代码。 | [optional] [default to undefined]
**province** | **string** | 省/州（中国数据）或一级行政区（国际数据）。 | [optional] [default to undefined]
**city** | **string** | 市（仅中国数据）。 | [optional] [default to undefined]
**district** | **string** | 区/县（仅中国数据）。 | [optional] [default to undefined]
**street** | **string** | 街道/乡镇（仅中国数据）。 | [optional] [default to undefined]
**adcode** | **string** | 行政区划代码（仅中国数据）。 | [optional] [default to undefined]
**citycode** | **string** | 城市区号（仅中国数据）。 | [optional] [default to undefined]
**center** | [**GetMiscDistrict200ResponseResultsInnerCenter**](GetMiscDistrict200ResponseResultsInnerCenter.md) |  | [optional] [default to undefined]
**population** | **number** | 人口（仅国际城市数据）。 | [optional] [default to undefined]
**timezone** | **string** | 时区（仅国际城市数据），如 Asia/Tokyo。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscDistrict200ResponseResultsInner } from 'uapi-sdk-typescript';

const instance: GetMiscDistrict200ResponseResultsInner = {
    name,
    level,
    country,
    country_code,
    province,
    city,
    district,
    street,
    adcode,
    citycode,
    center,
    population,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
