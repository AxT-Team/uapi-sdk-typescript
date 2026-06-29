# DailyRecommendMomentItem

语录本体。

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **string** | 作者或说话者。 | [optional] [default to undefined]
**authorinfo** | [**RandomAuthorinfo**](RandomAuthorinfo.md) |  | [optional] [default to undefined]
**category** | **string** | 语录分类。 | [optional] [default to undefined]
**content** | **string** | 语录正文。 | [optional] [default to undefined]
**contentLength** | **number** | 正文字数。 | [optional] [default to undefined]
**corpus** | **string** | 所属语料库标识。 | [optional] [default to undefined]
**createdAt** | **string** | 语料入库时间戳（秒），部分语料返回。 | [optional] [default to undefined]
**matchedTags** | **Array&lt;string&gt;** | 命中的标签，部分模式返回。 | [optional] [default to undefined]
**source** | **string** | 语录出处或来源。 | [optional] [default to undefined]
**uuid** | **string** | 语录唯一标识。 | [optional] [default to undefined]

## Example

```typescript
import { DailyRecommendMomentItem } from 'uapi-sdk-typescript';

const instance: DailyRecommendMomentItem = {
    author,
    authorinfo,
    category,
    content,
    contentLength,
    corpus,
    createdAt,
    matchedTags,
    source,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
