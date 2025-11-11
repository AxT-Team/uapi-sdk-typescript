# GetConvertUnixtime200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | 状态码，200代表操作成功。 | [optional] [default to undefined]
**datetime** | **string** | 标准格式（YYYY-MM-DD HH:mm:ss）的日期时间字符串。 | [optional] [default to undefined]
**timestamp** | **number** | 转换后的10位秒级Unix时间戳。 | [optional] [default to undefined]

## Example

```typescript
import { GetConvertUnixtime200Response } from 'uapi-sdk-typescript';

const instance: GetConvertUnixtime200Response = {
    code,
    datetime,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
