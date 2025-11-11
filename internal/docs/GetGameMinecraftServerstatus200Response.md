# GetGameMinecraftServerstatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | 状态码，200代表成功。 | [optional] [default to undefined]
**favicon_url** | **string** | 服务器图标的 Base64 Data URI。你可以直接在 &#x60;&lt;img&gt;&#x60; 标签的 &#x60;src&#x60; 属性中使用它。 | [optional] [default to undefined]
**ip** | **string** | 服务器解析后的IP地址。 | [optional] [default to undefined]
**max_players** | **number** | 服务器配置的最大玩家容量。 | [optional] [default to undefined]
**motd_clean** | **string** | 纯文本格式的服务器MOTD（每日消息），去除了所有颜色和格式代码。 | [optional] [default to undefined]
**motd_html** | **string** | HTML格式的服务器MOTD，保留了颜色和样式，方便你在网页上直接渲染。 | [optional] [default to undefined]
**online** | **boolean** | 服务器当前是否在线。 | [optional] [default to undefined]
**players** | **number** | 当前在线的玩家数量。 | [optional] [default to undefined]
**port** | **number** | 服务器使用的端口。 | [optional] [default to undefined]
**version** | **string** | 服务器报告的版本信息。 | [optional] [default to undefined]

## Example

```typescript
import { GetGameMinecraftServerstatus200Response } from 'uapi-sdk-typescript';

const instance: GetGameMinecraftServerstatus200Response = {
    code,
    favicon_url,
    ip,
    max_players,
    motd_clean,
    motd_html,
    online,
    players,
    port,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
