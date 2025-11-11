# GetSearchEngines200ResponseEngine

搜索引擎的基本信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | 引擎标识名称 | [optional] [default to undefined]
**display_name** | **string** | 引擎显示名称 | [optional] [default to undefined]
**description** | **string** | 引擎描述 | [optional] [default to undefined]
**available** | **boolean** | 引擎是否可用 | [optional] [default to undefined]
**version** | **string** | 引擎版本号 | [optional] [default to undefined]
**features** | **Array&lt;string&gt;** | 支持的特性列表 | [optional] [default to undefined]

## Example

```typescript
import { GetSearchEngines200ResponseEngine } from 'uapi-sdk-typescript';

const instance: GetSearchEngines200ResponseEngine = {
    name,
    display_name,
    description,
    available,
    version,
    features,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
