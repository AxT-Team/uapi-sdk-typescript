# GetMiscMovieBoxOffice200ResponseListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_seat_view** | **string** | 上座率 | [optional] [default to undefined]
**avg_show_view** | **string** | 场均人次 | [optional] [default to undefined]
**box_office** | **string** | 实时综合票房，带单位 | [optional] [default to undefined]
**box_office_rate** | **string** | 实时综合票房占比 | [optional] [default to undefined]
**detail_url** | **string** | 电影详情页 URL | [optional] [default to undefined]
**movie_id** | **number** | 影片 ID | [optional] [default to undefined]
**movie_name** | **string** | 影片名称 | [optional] [default to undefined]
**rank** | **number** | 排名，从 1 开始 | [optional] [default to undefined]
**release_days** | **number** | 已上映天数。仅当 release_info 可解析为“上映N天”时返回 | [optional] [default to undefined]
**release_info** | **string** | 上游上映信息原文 | [optional] [default to undefined]
**release_status** | **string** | 结构化上映状态，可取 released、preview、re_release 或 other | [optional] [default to undefined]
**show_count** | **number** | 排片场次 | [optional] [default to undefined]
**show_count_rate** | **string** | 排片占比 | [optional] [default to undefined]
**split_box_office** | **string** | 实时分账票房，带单位 | [optional] [default to undefined]
**split_box_office_rate** | **string** | 实时分账票房占比 | [optional] [default to undefined]
**sum_box_office** | **string** | 累计综合票房 | [optional] [default to undefined]
**sum_split_box_office** | **string** | 累计分账票房 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscMovieBoxOffice200ResponseListInner } from 'uapi-sdk-typescript';

const instance: GetMiscMovieBoxOffice200ResponseListInner = {
    avg_seat_view,
    avg_show_view,
    box_office,
    box_office_rate,
    detail_url,
    movie_id,
    movie_name,
    rank,
    release_days,
    release_info,
    release_status,
    show_count,
    show_count_rate,
    split_box_office,
    split_box_office_rate,
    sum_box_office,
    sum_split_box_office,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
