# PoemApi

All URIs are relative to *https://uapis.cn*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSaying**](#getsaying) | **GET** /saying | 一言|
|[**getSayingRandom**](#getsayingrandom) | **GET** /saying/random | 一言（随机/每日/场景/此刻）|

# **getSaying**
> GetSaying200Response getSaying()

想在你的应用里每天展示一句不一样的话，给用户一点小小的惊喜吗？这个“一言”接口就是为此而生。  ## 功能概述 每次调用，它都会从我们精心收集的、包含数千条诗词、动漫台词、名人名言的语料库中，随机返回一条。你可以用它来做网站首页的Slogan、应用的启动语，或者任何需要灵感点缀的地方。

### Example

```typescript
import {
    PoemApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new PoemApi(configuration);

const { status, data } = await apiInstance.getSaying();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSaying200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 请求成功！返回一条随机的语录。 |  -  |
|**500** | 当语料库为空或无法读取时。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSayingRandom**
> GetSayingRandom200Response getSayingRandom()

一言接口，返回一条随机语录。通过 `mode` 参数切换四种返回方式，并支持按来源、分类、标签过滤。  ## 四种模式（`mode`） - **`random`（默认）**：每次调用随机返回一条语录。 - **`daily`**：同一天内返回固定的同一条，适合每日打卡、签到等场景。 - **`recommend`**：配合 `scene` 参数，返回指定场景（如 `night`、`morning`）的语录。 - **`moment`**：根据请求时所处时段，自动返回应景语录。  ## 语言控制 语料分中英文两类，可通过 `source` 或 `category` 控制： - 需要中文：`source` 选「综合句子语料库 / 曹星宇句子集」，或 `category` 选中文分类（如 影视、文学、诗词）。 - 需要英文：`source` 选「Quotable / 英文历史名言」。  ## 使用须知 > [!NOTE] > - `source`、`category`、`tag` 支持多值，用英文逗号 `,` 或分号 `;` 分隔。 > - `scene` 仅在 `mode=recommend` 时生效且必填，其他模式下会被忽略。 > - 请求示例： >   - 随机：`GET /api/v1/saying/random` >   - 每日：`GET /api/v1/saying/random?mode=daily` >   - 场景：`GET /api/v1/saying/random?mode=recommend&scene=night` >   - 此刻：`GET /api/v1/saying/random?mode=moment`

### Example

```typescript
import {
    PoemApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new PoemApi(configuration);

let mode: 'random' | 'daily' | 'recommend' | 'moment'; //运行模式。不传或 random 为随机一言；可选 daily、recommend、moment。 (optional) (default to 'random')
let scene: 'dawn' | 'morning' | 'noon' | 'afternoon' | 'evening' | 'night' | 'deep-night' | 'work' | 'coding' | 'meeting' | 'relax' | 'emo' | 'philosophy'; //推荐场景。当 mode=recommend 时必填，例如 night、morning、work 等。请从[支持的场景列表](#enum-list)中选择。 (optional) (default to undefined)
let source: 'caoxingyu sentence' | 'english historical quotes' | 'quotable' | 'sentences bundle'; //语料来源过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的来源列表](#enum-list)中选择。 (optional) (default to undefined)
let category: string; //分类过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的分类列表](#enum-list)中选择。 (optional) (default to undefined)
let tag: string; //标签过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的标签列表](#enum-list)中选择。 (optional) (default to undefined)

const { status, data } = await apiInstance.getSayingRandom(
    mode,
    scene,
    source,
    category,
    tag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mode** | [**&#39;random&#39; | &#39;daily&#39; | &#39;recommend&#39; | &#39;moment&#39;**]**Array<&#39;random&#39; &#124; &#39;daily&#39; &#124; &#39;recommend&#39; &#124; &#39;moment&#39;>** | 运行模式。不传或 random 为随机一言；可选 daily、recommend、moment。 | (optional) defaults to 'random'|
| **scene** | [**&#39;dawn&#39; | &#39;morning&#39; | &#39;noon&#39; | &#39;afternoon&#39; | &#39;evening&#39; | &#39;night&#39; | &#39;deep-night&#39; | &#39;work&#39; | &#39;coding&#39; | &#39;meeting&#39; | &#39;relax&#39; | &#39;emo&#39; | &#39;philosophy&#39;**]**Array<&#39;dawn&#39; &#124; &#39;morning&#39; &#124; &#39;noon&#39; &#124; &#39;afternoon&#39; &#124; &#39;evening&#39; &#124; &#39;night&#39; &#124; &#39;deep-night&#39; &#124; &#39;work&#39; &#124; &#39;coding&#39; &#124; &#39;meeting&#39; &#124; &#39;relax&#39; &#124; &#39;emo&#39; &#124; &#39;philosophy&#39;>** | 推荐场景。当 mode&#x3D;recommend 时必填，例如 night、morning、work 等。请从[支持的场景列表](#enum-list)中选择。 | (optional) defaults to undefined|
| **source** | [**&#39;caoxingyu sentence&#39; | &#39;english historical quotes&#39; | &#39;quotable&#39; | &#39;sentences bundle&#39;**]**Array<&#39;caoxingyu sentence&#39; &#124; &#39;english historical quotes&#39; &#124; &#39;quotable&#39; &#124; &#39;sentences bundle&#39;>** | 语料来源过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的来源列表](#enum-list)中选择。 | (optional) defaults to undefined|
| **category** | [**string**] | 分类过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的分类列表](#enum-list)中选择。 | (optional) defaults to undefined|
| **tag** | [**string**] | 标签过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的标签列表](#enum-list)中选择。 | (optional) defaults to undefined|


### Return type

**GetSayingRandom200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 请求成功。&#x60;random&#x60; 模式直接返回语录对象；&#x60;daily&#x60; / &#x60;recommend&#x60; / &#x60;moment&#x60; 模式返回带模式信息的包装对象，语录本体在 &#x60;item&#x60; 字段中。 |  -  |
|**400** | 参数无效。通常是由于指定的推荐场景不存在，或者过滤参数格式有误。 |  -  |
|**404** | 未找到满足当前过滤条件的语录数据。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

