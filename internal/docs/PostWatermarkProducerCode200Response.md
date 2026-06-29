# PostWatermarkProducerCode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding** | **string** | 解析出的证件绑定方式。 | [optional] [default to undefined]
**code** | **string** | 标准的 27 位服务提供者编码。 | [optional] [default to undefined]
**identifier** | **string** | 剔除补位后的主体证件原始明文。 | [optional] [default to undefined]
**model_code** | **string** | 解析出的模型/应用码（启用扩展时存在）。 | [optional] [default to undefined]
**service_extension** | **boolean** | 编码中是否启用了服务扩展段。 | [optional] [default to undefined]
**service_type** | **string** | 解析出的服务角色类型（启用扩展时存在）。 | [optional] [default to undefined]
**subject_code** | **string** | 包含补位逻辑在内的 18 位主体特征段。 | [optional] [default to undefined]
**subject_type** | **string** | 解析出的主体类型。 | [optional] [default to undefined]
**valid** | **boolean** | 该编码是否合规合法。 | [optional] [default to undefined]

## Example

```typescript
import { PostWatermarkProducerCode200Response } from 'uapi-sdk-typescript';

const instance: PostWatermarkProducerCode200Response = {
    binding,
    code,
    identifier,
    model_code,
    service_extension,
    service_type,
    subject_code,
    subject_type,
    valid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
