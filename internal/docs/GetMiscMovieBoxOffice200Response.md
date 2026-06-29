# GetMiscMovieBoxOffice200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**Array&lt;GetMiscMovieBoxOffice200ResponseListInner&gt;**](GetMiscMovieBoxOffice200ResponseListInner.md) | 影片排名列表 | [optional] [default to undefined]
**market** | [**GetMiscMovieBoxOffice200ResponseMarket**](GetMiscMovieBoxOffice200ResponseMarket.md) |  | [optional] [default to undefined]
**total_items** | **number** | 返回的影片数量 | [optional] [default to undefined]
**update_gap_seconds** | **number** | 上游数据刷新间隔（秒） | [optional] [default to undefined]
**update_time** | **string** | 数据更新时间的格式化字符串 | [optional] [default to undefined]
**updated_at** | **number** | 数据更新时间戳（毫秒） | [optional] [default to undefined]

## Example

```typescript
import { GetMiscMovieBoxOffice200Response } from 'uapi-sdk-typescript';

const instance: GetMiscMovieBoxOffice200Response = {
    list,
    market,
    total_items,
    update_gap_seconds,
    update_time,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
