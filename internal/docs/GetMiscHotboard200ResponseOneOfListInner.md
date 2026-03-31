# GetMiscHotboard200ResponseOneOfListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extra** | **{ [key: string]: any; }** | 额外信息，不同平台该字段内容不同，例如微博热搜的标签（如“新”“爆”）。 | [optional] [default to undefined]
**hot_value** | **string** |  | [optional] [default to undefined]
**index** | **number** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**cover** | **string** | 封面图 URL，音乐类热榜返回专辑封面，其他平台一般不返回。 | [optional] [default to undefined]

## Example

```typescript
import { GetMiscHotboard200ResponseOneOfListInner } from 'uapi-sdk-typescript';

const instance: GetMiscHotboard200ResponseOneOfListInner = {
    extra,
    hot_value,
    index,
    title,
    url,
    cover,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
