# GetGameEpicFree200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | 游戏的唯一标识ID。 | [optional] [default to undefined]
**title** | **string** | 游戏的完整标题名称。 | [optional] [default to undefined]
**cover** | **string** | 游戏封面图片的URL地址。 | [optional] [default to undefined]
**original_price** | **number** | 游戏的原价，单位为人民币元。 | [optional] [default to undefined]
**original_price_desc** | **string** | 格式化后的原价描述字符串。 | [optional] [default to undefined]
**description** | **string** | 游戏的简介描述。 | [optional] [default to undefined]
**seller** | **string** | 游戏的发行商或销售商。 | [optional] [default to undefined]
**is_free_now** | **boolean** | 当前是否处于免费状态。 | [optional] [default to undefined]
**free_start** | **string** | 免费开始时间的可读字符串格式。 | [optional] [default to undefined]
**free_start_at** | **number** | 免费开始时间的13位毫秒时间戳。 | [optional] [default to undefined]
**free_end** | **string** | 免费结束时间的可读字符串格式。 | [optional] [default to undefined]
**free_end_at** | **number** | 免费结束时间的13位毫秒时间戳。 | [optional] [default to undefined]
**link** | **string** | 游戏在Epic Games商店的详情页链接。 | [optional] [default to undefined]

## Example

```typescript
import { GetGameEpicFree200ResponseDataInner } from 'uapi-sdk-typescript';

const instance: GetGameEpicFree200ResponseDataInner = {
    id,
    title,
    cover,
    original_price,
    original_price_desc,
    description,
    seller,
    is_free_now,
    free_start,
    free_start_at,
    free_end,
    free_end_at,
    link,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
