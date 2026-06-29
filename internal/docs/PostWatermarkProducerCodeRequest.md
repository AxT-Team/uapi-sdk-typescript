# PostWatermarkProducerCodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding** | **string** | 主体绑定的证件类型。组织需使用统一社会信用代码；个人可选身份证、手机号、护照或网号。 | [optional] [default to undefined]
**code** | **string** | 待校验的 27 位现成编码。填写后接口将直接执行合法性校验。 | [optional] [default to undefined]
**identifier** | **string** | 证件号实际内容。长度需匹配选择的类型（如统一社会信用代码 18 位、手机号 11 位）。 | [optional] [default to undefined]
**model_code** | **string** | 4 位自定义模型或应用码（可选）。未提供时扩展段将默认填充 00000。 | [optional] [default to undefined]
**service_type** | **string** | 服务角色类型（仅在提供模型应用码时一同生效）。 | [optional] [default to undefined]
**subject_type** | **string** | 主体类型是组织还是个人。 | [optional] [default to undefined]

## Example

```typescript
import { PostWatermarkProducerCodeRequest } from 'uapi-sdk-typescript';

const instance: PostWatermarkProducerCodeRequest = {
    binding,
    code,
    identifier,
    model_code,
    service_type,
    subject_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
