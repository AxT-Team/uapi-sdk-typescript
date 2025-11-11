# NetworkApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getNetworkDns**](#getnetworkdns) | **GET** /network/dns | 执行DNS解析查询|
|[**getNetworkIcp**](#getnetworkicp) | **GET** /network/icp | 查询域名ICP备案信息|
|[**getNetworkIpinfo**](#getnetworkipinfo) | **GET** /network/ipinfo | 查询指定IP或域名的归属信息|
|[**getNetworkMyip**](#getnetworkmyip) | **GET** /network/myip | 获取你的公网IP及归属信息|
|[**getNetworkPing**](#getnetworkping) | **GET** /network/ping | 从服务器Ping指定主机|
|[**getNetworkPingmyip**](#getnetworkpingmyip) | **GET** /network/pingmyip | 从服务器Ping你的客户端IP|
|[**getNetworkPortscan**](#getnetworkportscan) | **GET** /network/portscan | 扫描远程主机的指定端口|
|[**getNetworkUrlstatus**](#getnetworkurlstatus) | **GET** /network/urlstatus | 检查URL的可访问性状态|
|[**getNetworkWhois**](#getnetworkwhois) | **GET** /network/whois | 查询域名的WHOIS注册信息|
|[**getNetworkWxdomain**](#getnetworkwxdomain) | **GET** /network/wxdomain | 检查域名在微信中的访问状态|

# **getNetworkDns**
> GetNetworkDns200Response getNetworkDns()

想知道一个域名指向了哪个IP？或者它的邮件服务器是谁？这个接口就像一个在线的 `dig` 或 `nslookup` 工具。  ## 功能概述 你可以查询指定域名的各种DNS记录，包括 `A` (IPv4), `AAAA` (IPv6), `CNAME` (别名), `MX` (邮件交换), `NS` (域名服务器) 和 `TXT` (文本记录)。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let domain: string; //你需要查询的域名，例如 \'cn.bing.com\'。 (default to undefined)
let type: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'TXT'; //你想要查询的DNS记录类型。 (optional) (default to 'A')

const { status, data } = await apiInstance.getNetworkDns(
    domain,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | 你需要查询的域名，例如 \&#39;cn.bing.com\&#39;。 | defaults to undefined|
| **type** | [**&#39;A&#39; | &#39;AAAA&#39; | &#39;CNAME&#39; | &#39;MX&#39; | &#39;NS&#39; | &#39;TXT&#39;**]**Array<&#39;A&#39; &#124; &#39;AAAA&#39; &#124; &#39;CNAME&#39; &#124; &#39;MX&#39; &#124; &#39;NS&#39; &#124; &#39;TXT&#39;>** | 你想要查询的DNS记录类型。 | (optional) defaults to 'A'|


### Return type

**GetNetworkDns200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回解析到的DNS记录列表。 |  -  |
|**400** | 请求参数无效。请检查 &#x60;domain&#x60; 参数是否提供且格式正确。 |  -  |
|**404** | 未找到DNS记录。该域名可能不存在，或者不存在你所查询类型的记录（例如，一个没有配置MX记录的域名）。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkIcp**
> GetNetworkIcp200Response getNetworkIcp()

想知道一个网站的背后运营主体是谁吗？如果它是在中国大陆运营的，ICP备案信息可以告诉你答案。  ## 功能概述 提供一个域名，查询其在中国工信部的ICP（Internet Content Provider）备案信息。这对于商业合作前的背景调查、验证网站合法性等场景很有帮助。  > [!NOTE] > **查询范围** > 此查询仅对在中国大陆工信部进行过备案的域名有效。对于国外域名或未备案的域名，将查询不到结果。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let domain: string; //需要查询的域名或URL (default to undefined)

const { status, data } = await apiInstance.getNetworkIcp(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | 需要查询的域名或URL | defaults to undefined|


### Return type

**GetNetworkIcp200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回该域名的ICP备案详情。 |  -  |
|**400** | 请求参数无效。请检查 &#x60;domain&#x60; 参数是否提供且格式正确。 |  -  |
|**404** | 未查询到备案信息。该域名可能没有在工信部备案，或者是我们查询的上游接口暂时没有收录。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkIpinfo**
> GetNetworkIpinfo200Response getNetworkIpinfo()

想知道一个IP地址或域名来自地球的哪个角落？这个接口可以帮你定位它。你可以选择使用默认的GeoIP数据库，也可以指定 `source=commercial` 参数来查询更详细的商业级IP归属信息。  ## 功能概述 提供一个公网IPv4、IPv6地址或域名，我们会利用GeoIP数据库查询并返回它的地理位置（国家、省份、城市）、经纬度、以及所属的运营商（ISP）和自治系统（ASN）信息。这在网络安全分析、访问来源统计等领域非常有用。  当使用 `source=commercial` 参数时，接口将调用高性能商业API，提供更精确的市、区、运营商、时区、海拔等信息。请注意，商业查询的响应时间可能会稍长。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let ip: string; //你需要查询的公网IP地址或域名（支持IPv4和IPv6）。 (default to undefined)
let source: 'commercial'; //查询的数据源。如果留空，将使用默认的数据库。如果设置为 `commercial`，将调用商业级API，返回更详细的地理位置信息，但响应时间可能会稍长。 (optional) (default to undefined)

const { status, data } = await apiInstance.getNetworkIpinfo(
    ip,
    source
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ip** | [**string**] | 你需要查询的公网IP地址或域名（支持IPv4和IPv6）。 | defaults to undefined|
| **source** | [**&#39;commercial&#39;**]**Array<&#39;commercial&#39;>** | 查询的数据源。如果留空，将使用默认的数据库。如果设置为 &#x60;commercial&#x60;，将调用商业级API，返回更详细的地理位置信息，但响应时间可能会稍长。 | (optional) defaults to undefined|


### Return type

**GetNetworkIpinfo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回该IP地址的详细地理和网络信息。  **示例 1：标准查询 (不带 &#x60;source&#x60; 参数)**  请求: &#x60;/api/v1/network/ipinfo?ip&#x3D;120.24.0.0&#x60;  响应: &#x60;&#x60;&#x60;json {   \&quot;code\&quot;: 200,   \&quot;ip\&quot;: \&quot;120.24.0.0\&quot;,   \&quot;beginip\&quot;: \&quot;120.24.0.0\&quot;,   \&quot;endip\&quot;: \&quot;120.24.255.255\&quot;,   \&quot;region\&quot;: \&quot;中国 广东\&quot;,   \&quot;isp\&quot;: \&quot;China Telecom\&quot;,   \&quot;asn\&quot;: \&quot;AS4134\&quot;,   \&quot;llc\&quot;: \&quot;电信\&quot;,   \&quot;latitude\&quot;: 23.1291,   \&quot;longitude\&quot;: 113.2644 } &#x60;&#x60;&#x60;  **示例 2：商业数据源查询 (&#x60;source&#x3D;commercial&#x60;)**  请求: &#x60;/api/v1/network/ipinfo?ip&#x3D;120.24.0.0&amp;source&#x3D;commercial&#x60;  响应: &#x60;&#x60;&#x60;json {   \&quot;code\&quot;: 200,   \&quot;ip\&quot;: \&quot;120.24.0.0\&quot;,   \&quot;region\&quot;: \&quot;中国 广东 广州\&quot;,   \&quot;isp\&quot;: \&quot;电信\&quot;,   \&quot;llc\&quot;: \&quot;电信\&quot;,   \&quot;latitude\&quot;: 23.1291,   \&quot;longitude\&quot;: 113.2644,   \&quot;district\&quot;: \&quot;天河\&quot;,   \&quot;area_code\&quot;: \&quot;440106\&quot;,   \&quot;city_code\&quot;: \&quot;020\&quot;,   \&quot;zip_code\&quot;: \&quot;510000\&quot;,   \&quot;time_zone\&quot;: \&quot;Asia/Shanghai\&quot;,   \&quot;elevation\&quot;: \&quot;50\&quot;,   \&quot;weather_station\&quot;: \&quot;CHXX0049\&quot; } &#x60;&#x60;&#x60; |  -  |
|**400** | IP地址参数无效。请检查 &#x60;ip&#x60; 参数是否提供，以及它是否是一个合法的公网IP地址。 |  -  |
|**404** | 信息未找到。这通常意味着你查询的是一个内网IP地址（如 192.168.x.x）或一个未分配的公网IP地址，我们的数据库中没有它的信息。 |  -  |
|**500** | 服务器内部错误。我们的GeoIP数据库查询服务可能遇到了问题。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkMyip**
> GetNetworkIpinfo200Response getNetworkMyip()

想知道你自己的出口公网IP是多少吗？这个接口就是你的“网络身份证”。你可以选择使用默认的GeoIP数据库，也可以指定 `source=commercial` 参数来查询更详细的商业级IP归属信息。  ## 功能概述 调用此接口，它会返回你（即发起请求的客户端）的公网IP地址，并附带与 `/network/ipinfo` 接口相同的地理位置和网络归属信息。非常适合用于在网页上向用户展示他们自己的IP和地理位置。  当使用 `source=commercial` 参数时，接口将调用高性能商业API，提供更精确的市、区、运营商、时区、海拔等信息。请注意，商业查询的响应时间可能会稍长。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let source: 'commercial'; //查询的数据源。如果留空，将使用默认的数据库。如果设置为 `commercial`，将调用商业级API，返回更详细的地理位置信息，但响应时间可能会稍长。 (optional) (default to undefined)

const { status, data } = await apiInstance.getNetworkMyip(
    source
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**&#39;commercial&#39;**]**Array<&#39;commercial&#39;>** | 查询的数据源。如果留空，将使用默认的数据库。如果设置为 &#x60;commercial&#x60;，将调用商业级API，返回更详细的地理位置信息，但响应时间可能会稍长。 | (optional) defaults to undefined|


### Return type

**GetNetworkIpinfo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回你的客户端IP的详细信息。  **示例 1：标准查询 (不带 &#x60;source&#x60; 参数)**  请求: &#x60;/api/v1/network/myip&#x60;  响应: &#x60;&#x60;&#x60;json {   \&quot;code\&quot;: 200,   \&quot;ip\&quot;: \&quot;1.2.3.4\&quot;,   \&quot;beginip\&quot;: \&quot;1.2.3.0\&quot;,   \&quot;endip\&quot;: \&quot;1.2.3.255\&quot;,   \&quot;region\&quot;: \&quot;中国 湖南 长沙\&quot;,   \&quot;isp\&quot;: \&quot;China Unicom\&quot;,   \&quot;asn\&quot;: \&quot;AS4837\&quot;,   \&quot;llc\&quot;: \&quot;联通\&quot;,   \&quot;latitude\&quot;: 28.1941,   \&quot;longitude\&quot;: 112.9823 } &#x60;&#x60;&#x60;  **示例 2：商业数据源查询 (&#x60;source&#x3D;commercial&#x60;)**  请求: &#x60;/api/v1/network/myip?source&#x3D;commercial&#x60;  响应: &#x60;&#x60;&#x60;json {   \&quot;code\&quot;: 200,   \&quot;ip\&quot;: \&quot;1.2.3.4\&quot;,   \&quot;region\&quot;: \&quot;中国 湖南 长沙\&quot;,   \&quot;isp\&quot;: \&quot;联通\&quot;,   \&quot;llc\&quot;: \&quot;联通\&quot;,   \&quot;latitude\&quot;: 28.1941,   \&quot;longitude\&quot;: 112.9823,   \&quot;district\&quot;: \&quot;岳麓\&quot;,   \&quot;area_code\&quot;: \&quot;430104\&quot;,   \&quot;city_code\&quot;: \&quot;0731\&quot;,   \&quot;zip_code\&quot;: \&quot;410000\&quot;,   \&quot;time_zone\&quot;: \&quot;Asia/Shanghai\&quot;,   \&quot;elevation\&quot;: \&quot;60\&quot;,   \&quot;weather_station\&quot;: \&quot;CHXX0062\&quot; } &#x60;&#x60;&#x60; |  -  |
|**400** | 无法获取有效的客户端IP。这在一些特殊的网络环境下可能发生，例如通过了复杂的代理。 |  -  |
|**500** | 服务器内部错误。在查询IP归属地信息时发生错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkPing**
> GetNetworkPing200Response getNetworkPing()

想知道从我们的服务器到你的服务器网络延迟高不高？这个工具可以帮你测试网络连通性。  ## 功能概述 这个接口会从我们的服务器节点对你指定的主机（域名或IP地址）执行 ICMP Ping 操作。它会返回最小、最大、平均延迟以及丢包率等关键指标，是诊断网络问题的得力助手。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let host: string; //你需要 Ping 的目标主机，可以是域名或IP地址。 (default to undefined)

const { status, data } = await apiInstance.getNetworkPing(
    host
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **host** | [**string**] | 你需要 Ping 的目标主机，可以是域名或IP地址。 | defaults to undefined|


### Return type

**GetNetworkPing200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ping 操作成功！返回延迟统计数据。 |  -  |
|**400** | 请求失败，参数无效或目标不可达。前端可直接展示 &#x60;message&#x60; 字段。  **可能原因**: - **无法解析主机**: &#x60;host&#x60; 参数是一个无效的域名或IP地址。   &#x60;&#x60;&#x60;json   {       \&quot;code\&quot;: \&quot;INVALID_PARAMETER\&quot;,       \&quot;message\&quot;: \&quot;无法解析主机 \&#39;无效的主机名\&#39;，请检查输入是否正确。\&quot;   }   &#x60;&#x60;&#x60; - **Ping 超时**: 目标主机无法访问或被防火墙拦截。   &#x60;&#x60;&#x60;json   {       \&quot;code\&quot;: \&quot;INVALID_PARAMETER\&quot;,       \&quot;message\&quot;: \&quot;对主机 \&#39;目标主机\&#39; 的 Ping 请求超时，目标可能不可达或防火墙已拦截。\&quot;   }   &#x60;&#x60;&#x60; |  -  |
|**429** | 服务繁忙。当服务器 Ping 请求过多时，会触发限流。前端可直接展示 &#x60;message&#x60; 字段。  &#x60;&#x60;&#x60;json {     \&quot;code\&quot;: \&quot;SERVICE_BUSY\&quot;,     \&quot;message\&quot;: \&quot;Ping 服务正忙，请稍后再试。\&quot; } &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkPingmyip**
> GetNetworkPingmyip200Response getNetworkPingmyip()

这是一个非常方便的快捷接口，想知道你的网络到我们服务器的回程延迟吗？点一下就行！  ## 功能概述 这个接口是 `/network/myip` 和 `/network/ping` 的结合体。它会自动获取你客户端的公网IP，然后从我们的服务器Ping这个IP，并返回延迟数据。这对于快速判断你本地网络到服务器的连接质量非常有用。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

const { status, data } = await apiInstance.getNetworkPingmyip();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetNetworkPingmyip200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ping 操作成功！返回到你客户端IP的延迟统计数据。 |  -  |
|**400** | 无法获取客户端IP。 |  -  |
|**404** | Ping操作失败。这很可能是因为你的路由器或防火墙禁止了外部ICMP Ping请求。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkPortscan**
> GetNetworkPortscan200Response getNetworkPortscan()

想检查一下你的服务器上某个端口（比如SSH的22端口或者Web的80端口）是否对外开放？这个工具可以帮你快速确认。  ## 功能概述 你可以指定一个主机和端口号，我们的服务器会尝试连接该端口，并告诉你它是开放的（open）、关闭的（closed）还是超时了（timeout）。这对于网络服务配置检查和基本的安全扫描很有用。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let host: string; //需要扫描的目标主机，可以是域名或IP地址。 (default to undefined)
let port: number; //需要扫描的端口号，范围是 1 到 65535。 (default to undefined)
let protocol: 'tcp' | 'udp'; //扫描使用的协议，可以是 \'tcp\' 或 \'udp\'。 (optional) (default to 'tcp')

const { status, data } = await apiInstance.getNetworkPortscan(
    host,
    port,
    protocol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **host** | [**string**] | 需要扫描的目标主机，可以是域名或IP地址。 | defaults to undefined|
| **port** | [**number**] | 需要扫描的端口号，范围是 1 到 65535。 | defaults to undefined|
| **protocol** | [**&#39;tcp&#39; | &#39;udp&#39;**]**Array<&#39;tcp&#39; &#124; &#39;udp&#39;>** | 扫描使用的协议，可以是 \&#39;tcp\&#39; 或 \&#39;udp\&#39;。 | (optional) defaults to 'tcp'|


### Return type

**GetNetworkPortscan200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 扫描完成！返回端口的状态。 |  -  |
|**400** | 请求参数无效。请检查 &#x60;host&#x60;, &#x60;port&#x60; 等参数是否提供且格式正确。 |  -  |
|**500** | 扫描失败。服务器在执行扫描时发生内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkUrlstatus**
> GetNetworkUrlstatus200Response getNetworkUrlstatus()

你的网站或API还好吗？用这个接口给它做个快速“体检”吧。  ## 功能概述 提供一个URL，我们会向它发起一个请求，并返回其HTTP响应状态码。这是一种简单而有效的服务可用性监控方法。  > [!TIP] > **性能优化**：为了提高效率并减少对目标服务器的负载，我们实际发送的是 `HEAD` 请求，而不是 `GET` 请求。`HEAD` 请求只会获取响应头，而不会下载整个页面内容，因此速度更快。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let url: string; //你需要检查其可访问性状态的完整URL。 (default to undefined)

const { status, data } = await apiInstance.getNetworkUrlstatus(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | 你需要检查其可访问性状态的完整URL。 | defaults to undefined|


### Return type

**GetNetworkUrlstatus200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 检查成功！返回目标的HTTP状态码。 |  -  |
|**400** | 请求参数无效。请检查 &#x60;url&#x60; 参数是否提供且格式正确。 |  -  |
|**502** | 请求URL失败（例如，DNS解析失败、连接超时） |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkWhois**
> GetNetworkWhois200Response getNetworkWhois()

想知道一个域名是什么时候注册的、注册商是谁、什么时候到期？WHOIS信息可以告诉你这一切。  ## 功能概述 这是一个在线的WHOIS查询工具。你可以通过如下两种方式获取WHOIS信息：  - **默认行为**（不带参数）：`GET /api/v1/network/whois?domain=google.com`   - 返回一个JSON对象，`whois` 字段为原始、未处理的WHOIS文本字符串。 - **JSON格式化**：`GET /api/v1/network/whois?domain=google.com&format=json`   - 返回一个JSON对象，`whois` 字段为解析后的JSON对象，包含WHOIS信息中的键值对。  这样你既可以获得最全的原始信息，也可以方便地处理结构化数据。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let domain: string; //你需要查询WHOIS信息的域名。 (default to undefined)
let format: 'text' | 'json'; //返回格式。留空或为 \'text\' 时返回原始WHOIS文本，设为 \'json\' 时返回结构化JSON。 (optional) (default to 'text')

const { status, data } = await apiInstance.getNetworkWhois(
    domain,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | 你需要查询WHOIS信息的域名。 | defaults to undefined|
| **format** | [**&#39;text&#39; | &#39;json&#39;**]**Array<&#39;text&#39; &#124; &#39;json&#39;>** | 返回格式。留空或为 \&#39;text\&#39; 时返回原始WHOIS文本，设为 \&#39;json\&#39; 时返回结构化JSON。 | (optional) defaults to 'text'|


### Return type

**GetNetworkWhois200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！根据 format 参数返回原始WHOIS文本或结构化JSON。 |  -  |
|**400** | 请求参数无效。请检查 &#x60;domain&#x60; 参数是否提供且格式正确。 |  -  |
|**404** | 查询失败或域名不存在。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkWxdomain**
> GetNetworkWxdomain200Response getNetworkWxdomain()

准备在微信里推广你的网站？最好先检查一下域名是否被“拉黑”了。  ## 功能概述 这个接口可以帮你查询一个域名在微信内置浏览器中的访问状态，即是否被微信封禁。这对于做微信生态推广和营销的开发者来说至关重要。

### Example

```typescript
import {
    NetworkApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new NetworkApi(configuration);

let domain: string; //需要查询的域名。 (default to undefined)

const { status, data } = await apiInstance.getNetworkWxdomain(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | 需要查询的域名。 | defaults to undefined|


### Return type

**GetNetworkWxdomain200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回该域名在微信中的状态。 |  -  |
|**400** | 请求参数无效。 |  -  |
|**502** | 查询上游接口失败。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

