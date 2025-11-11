# PostTextAesEncryptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Key must be 16, 24, or 32 bytes long to select AES-128, AES-192, or AES-256. | [default to undefined]
**text** | **string** |  | [default to undefined]

## Example

```typescript
import { PostTextAesEncryptRequest } from 'uapi-sdk-typescript';

const instance: PostTextAesEncryptRequest = {
    key,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
