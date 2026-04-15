# SocialApi

All URIs are relative to *https://uapis.cn/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGithubRepo**](#getgithubrepo) | **GET** /github/repo | 查询 GitHub 仓库|
|[**getGithubUser**](#getgithubuser) | **GET** /github/user | 查询 GitHub 用户信息|
|[**getSocialBilibiliArchives**](#getsocialbilibiliarchives) | **GET** /social/bilibili/archives | 查询 B站投稿|
|[**getSocialBilibiliLiveroom**](#getsocialbilibililiveroom) | **GET** /social/bilibili/liveroom | 查询 B站直播间|
|[**getSocialBilibiliReplies**](#getsocialbilibilireplies) | **GET** /social/bilibili/replies | 查询 B站评论|
|[**getSocialBilibiliUserinfo**](#getsocialbilibiliuserinfo) | **GET** /social/bilibili/userinfo | 查询 B站用户|
|[**getSocialBilibiliVideoinfo**](#getsocialbilibilivideoinfo) | **GET** /social/bilibili/videoinfo | 查询 B站视频|
|[**getSocialQqGroupinfo**](#getsocialqqgroupinfo) | **GET** /social/qq/groupinfo | 查询 QQ 群信息|
|[**getSocialQqUserinfo**](#getsocialqquserinfo) | **GET** /social/qq/userinfo | 查询 QQ 信息|

# **getGithubRepo**
> GetGithubRepo200Response getGithubRepo()

需要快速获取一个GitHub仓库的核心信息？这个接口一次请求就能返回仓库的关键数据，适合项目展示、统计和分析场景。  ### 可获取的数据 一次请求，即可获得以下信息： - **核心指标**: `star`, `fork`, `open_issues` 等关键统计数据。 - **项目详情**: 描述、主页、分支、语言、话题标签、开源协议。 - **参与者信息**: 获取协作者(`collaborators`)和维护者参考信息(`maintainers`)列表，包括他们的公开邮箱（如果可用）。  > [!NOTE] > `collaborators` 字段在私有仓库或权限受限时可能为空。`maintainers` 为整理后的参考信息，仅供参考。

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let repo: string; //目标仓库的标识，格式为 `owner/repo`。 (default to undefined)

const { status, data } = await apiInstance.getGithubRepo(
    repo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repo** | [**string**] | 目标仓库的标识，格式为 &#x60;owner/repo&#x60;。 | defaults to undefined|


### Return type

**GetGithubRepo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功获取仓库信息。 |  -  |
|**400** | 请求参数缺失或格式错误。请确保 &#x60;repo&#x60; 参数已提供且格式为 &#x60;owner/repo&#x60;。 |  -  |
|**502** | 暂时无法获取仓库信息，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGithubUser**
> GetGithubUser200Response getGithubUser()

需要获取开发者的 GitHub 画像？这个接口不仅能返回详尽的基础资料和所属的公开组织列表，还能一键拉取开发者的绿格子数据。  ## 功能概述 - **开发者基础画像**：返回用户的仓库数、关注数、公司、地理位置和社交媒体链接等，非常适合用来自动生成技术博客的作者名片或建立开发者档案。 - **贡献日历与时间线**：只要开启 `activity=true`，就能获取该用户最近一年的全量贡献数据。返回的 JSON 已经将数据按周（weeks）和天（days）整理好，前端通过简单的双重循环就能画出和 GitHub 主页一模一样的贡献日历。 - **组织级贡献过滤**：如果你只想评估某个人在特定团队开源项目中的活跃度，直接传入 `org` 参数。接口会自动剥离他在其他私有项目或个人仓库的提交，只返回针对该组织的贡献数据。

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let user: string; //GitHub 用户名（必需符合 GitHub 命名规范：仅限字母、数字、连字符，最长 39 位）。 (default to undefined)
let activity: boolean; //是否获取最近一年的贡献活动数据（如贡献图、时间线）。传入 true 开启，其他值均视为不开启。 (optional) (default to false)
let activityScope: 'all' | 'organization'; //活动数据范围。可选 all 或 organization。只有开启 activity 时才有意义。 (optional) (default to 'all')
let org: string; //组织登录名。如果传入此参数，会自动视为开启 organization 级别的贡献查询，切勿再同时传 activity_scope=all。 (optional) (default to undefined)

const { status, data } = await apiInstance.getGithubUser(
    user,
    activity,
    activityScope,
    org
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | [**string**] | GitHub 用户名（必需符合 GitHub 命名规范：仅限字母、数字、连字符，最长 39 位）。 | defaults to undefined|
| **activity** | [**boolean**] | 是否获取最近一年的贡献活动数据（如贡献图、时间线）。传入 true 开启，其他值均视为不开启。 | (optional) defaults to false|
| **activityScope** | [**&#39;all&#39; | &#39;organization&#39;**]**Array<&#39;all&#39; &#124; &#39;organization&#39;>** | 活动数据范围。可选 all 或 organization。只有开启 activity 时才有意义。 | (optional) defaults to 'all'|
| **org** | [**string**] | 组织登录名。如果传入此参数，会自动视为开启 organization 级别的贡献查询，切勿再同时传 activity_scope&#x3D;all。 | (optional) defaults to undefined|


### Return type

**GetGithubUser200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功获取用户信息。如果开启了 &#x60;activity&#x3D;true&#x60;，会在响应体中附加 &#x60;activity&#x60; 对象。 |  -  |
|**400** | 参数格式错误，或参数组合不合法。 |  -  |
|**404** | 找不到指定的用户，或者传入的组织不存在。 |  -  |
|**502** | 上游服务器发生错误或响应超时。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocialBilibiliArchives**
> GetSocialBilibiliArchives200Response getSocialBilibiliArchives()

想要获取UP主的所有投稿视频？或者想在你的应用里展示创作者的作品集？这个接口能帮你轻松实现。  ## 功能概述 通过用户的 `mid`（用户ID），你可以获取该UP主的投稿视频列表。接口支持关键词搜索、分页加载和多种排序方式，让你能够灵活地展示和分析创作者的内容。  ## 参数说明 - **`mid` (用户ID)**: B站用户的mid，必填参数。 - **`keywords` (搜索关键词)**: 可选，用于在该UP主的投稿中搜索特定关键词。 - **`orderby` (排序方式)**:    - `pubdate`: 按最新发布排序（默认）   - `views`: 按最多播放排序 - **`ps` (每页条数)**: 默认20条。 - **`pn` (页码)**: 默认1，用于分页。  ## 响应体字段说明 - **`total` (总稿件数)**: UP主的投稿总数。 - **`page` (当前页码)**: 当前返回的页码。 - **`size` (每页数量)**: 每页返回的视频数量。 - **`videos` (视频列表)**: 包含当前页的所有视频信息：   - `aid`: 视频的AV号   - `bvid`: 视频的BV号   - `title`: 视频标题   - `cover`: 封面URL   - `duration`: 时长（秒）   - `play_count`: 播放量   - `publish_time`: 发布时间戳   - `create_time`: 创建时间戳   - `state`: 视频状态   - `is_ugc_pay`: 是否付费视频（0=免费，1=付费）   - `is_interactive`: 是否为互动视频

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let mid: string; //B站用户的mid（用户ID） (default to undefined)
let keywords: string; //搜索关键词，可为空 (optional) (default to undefined)
let orderby: string; //排序方式。`pubdate`=最新发布，`views`=最多播放 (optional) (default to undefined)
let ps: string; //每页条数，默认20 (optional) (default to undefined)
let pn: string; //页码，默认1 (optional) (default to undefined)

const { status, data } = await apiInstance.getSocialBilibiliArchives(
    mid,
    keywords,
    orderby,
    ps,
    pn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mid** | [**string**] | B站用户的mid（用户ID） | defaults to undefined|
| **keywords** | [**string**] | 搜索关键词，可为空 | (optional) defaults to undefined|
| **orderby** | [**string**] | 排序方式。&#x60;pubdate&#x60;&#x3D;最新发布，&#x60;views&#x60;&#x3D;最多播放 | (optional) defaults to undefined|
| **ps** | [**string**] | 每页条数，默认20 | (optional) defaults to undefined|
| **pn** | [**string**] | 页码，默认1 | (optional) defaults to undefined|


### Return type

**GetSocialBilibiliArchives200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功！返回用户的投稿视频列表。 |  -  |
|**400** | 参数错误 |  -  |
|**404** | 用户不存在 |  -  |
|**500** | 服务器错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocialBilibiliLiveroom**
> GetSocialBilibiliLiveroom200Response getSocialBilibiliLiveroom()

想知道你喜欢的主播开播了吗？或者想在你的应用里集成B站直播间状态？这个接口能满足你。  ## 功能概述 这是一个智能接口，你可以用主播的 `mid` (用户ID) 或者直播间的 `room_id` (长号或短号)来查询。它会返回直播间的详细信息，包括是否在直播、标题、封面、人气、分区等。  ## 响应体字段说明 - **`live_status` (直播状态)**: `0` 代表未开播，`1` 代表直播中，`2` 代表轮播中。

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let mid: string; //主播的用户ID (`mid`)。与 `room_id` 任选其一。 (optional) (default to undefined)
let roomId: string; //直播间ID，可以是长号（真实ID）或短号（靓号）。与 `mid` 任选其一。 (optional) (default to undefined)

const { status, data } = await apiInstance.getSocialBilibiliLiveroom(
    mid,
    roomId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mid** | [**string**] | 主播的用户ID (&#x60;mid&#x60;)。与 &#x60;room_id&#x60; 任选其一。 | (optional) defaults to undefined|
| **roomId** | [**string**] | 直播间ID，可以是长号（真实ID）或短号（靓号）。与 &#x60;mid&#x60; 任选其一。 | (optional) defaults to undefined|


### Return type

**GetSocialBilibiliLiveroom200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功！返回直播间的详细信息。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocialBilibiliReplies**
> GetSocialBilibiliReplies200Response getSocialBilibiliReplies()

想要分析B站视频的评论区？这个接口可以帮你轻松获取评论数据，包括热门评论和最新评论，还支持分页加载。  ## 功能概述 通过视频的 `oid`（通常就是视频的`aid`），你可以分页获取该视频的评论区内容。你可以指定排序方式和分页参数，来精确地获取你需要的数据。  ## 参数说明 - **`sort` (排序方式)**   - `0` 或 `time`：按时间排序   - `1` 或 `like`：按点赞排序   - `2` 或 `reply`：按回复数排序   - `3` 或 `hot`（也支持 `hottest`、`最热`）：按最热排序  ## 响应体字段说明 - **`hots` (热门评论)**: 仅在请求第一页时，可能会返回热门评论列表。其结构与 `replies` 中的对象一致。 - **`replies` (评论列表)**: 这是一个数组，包含了当前页的评论。其中：   - `root`: 指向根评论的ID。如果评论本身就是根评论，则为 `0`。   - `parent`: 指向该条回复所回复的上一级评论ID。如果评论是根评论，则为 `0`。

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let oid: string; //目标评论区的ID。对于视频，这通常就是它的 `aid`。 (default to undefined)
let sort: string; //排序方式。支持 `0/time`（按时间）、`1/like`（按点赞）、`2/reply`（按回复数）、`3/hot/hottest/最热`（按最热）。默认为 `0/time`。 (optional) (default to undefined)
let ps: string; //每页获取的评论数量，范围是1到20。默认为 `20`。 (optional) (default to undefined)
let pn: string; //要获取的页码，从1开始。默认为 `1`。 (optional) (default to undefined)

const { status, data } = await apiInstance.getSocialBilibiliReplies(
    oid,
    sort,
    ps,
    pn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oid** | [**string**] | 目标评论区的ID。对于视频，这通常就是它的 &#x60;aid&#x60;。 | defaults to undefined|
| **sort** | [**string**] | 排序方式。支持 &#x60;0/time&#x60;（按时间）、&#x60;1/like&#x60;（按点赞）、&#x60;2/reply&#x60;（按回复数）、&#x60;3/hot/hottest/最热&#x60;（按最热）。默认为 &#x60;0/time&#x60;。 | (optional) defaults to undefined|
| **ps** | [**string**] | 每页获取的评论数量，范围是1到20。默认为 &#x60;20&#x60;。 | (optional) defaults to undefined|
| **pn** | [**string**] | 要获取的页码，从1开始。默认为 &#x60;1&#x60;。 | (optional) defaults to undefined|


### Return type

**GetSocialBilibiliReplies200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功！返回指定分页和排序的评论列表。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocialBilibiliUserinfo**
> GetSocialBilibiliUserinfo200Response getSocialBilibiliUserinfo()

想在你的应用里集成B站用户资料展示？这个接口可以轻松获取用户的公开信息。  ## 功能概述 通过一个用户的UID（那一串纯数字ID），你可以查询到该用户的昵称、性别、头像、等级、签名等一系列公开的基本信息。

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let uid: string; //Bilibili用户的UID (default to undefined)

const { status, data } = await apiInstance.getSocialBilibiliUserinfo(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Bilibili用户的UID | defaults to undefined|


### Return type

**GetSocialBilibiliUserinfo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 查询成功！返回 B 站用户公开数据。 |  -  |
|**400** | 缺少uid参数 |  -  |
|**404** | Bilibili用户不存在 |  -  |
|**502** | 暂时无法获取相关数据，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocialBilibiliVideoinfo**
> GetSocialBilibiliVideoinfo200Response getSocialBilibiliVideoinfo()

想在你的应用里展示B站视频的详细信息吗？无论是封面、标题，还是播放量、UP主信息，这个接口都能一网打尽。  ## 功能概述 通过提供视频的 `aid` 或 `bvid`，你可以获取到该视频的完整元数据，包括多P信息、UP主资料、数据统计等。  ## 响应体字段说明 - **`copyright` (视频类型)**: `1` 代表原创，`2` 代表转载。 - **`owner` (UP主信息)**: 包含 `mid`, `name`, `face` 等UP主的基本资料。 - **`stat` (数据统计)**: 包含了播放、弹幕、评论、点赞、投币、收藏、分享等核心数据。 - **`pages` (分P列表)**: 这是一个数组，包含了视频的每一个分P的信息，即使是单P视频也会有一个元素。

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let aid: string; //视频的AV号 (aid)，纯数字格式。`aid`和`bvid`任选其一即可。 (optional) (default to undefined)
let bvid: string; //视频的BV号 (bvid)，例如 `BV117411r7R1`。`aid`和`bvid`任选其一即可。 (optional) (default to undefined)

const { status, data } = await apiInstance.getSocialBilibiliVideoinfo(
    aid,
    bvid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aid** | [**string**] | 视频的AV号 (aid)，纯数字格式。&#x60;aid&#x60;和&#x60;bvid&#x60;任选其一即可。 | (optional) defaults to undefined|
| **bvid** | [**string**] | 视频的BV号 (bvid)，例如 &#x60;BV117411r7R1&#x60;。&#x60;aid&#x60;和&#x60;bvid&#x60;任选其一即可。 | (optional) defaults to undefined|


### Return type

**GetSocialBilibiliVideoinfo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功！返回Bilibili视频的详细信息。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocialQqGroupinfo**
> GetSocialQqGroupinfo200Response getSocialQqGroupinfo()

想在你的应用里展示QQ群信息？这个接口让你轻松获取群名称、群头像、群简介、成员数量等详细公开信息。  ## 功能概述 你只需要提供一个QQ群号（5-12位纯数字），接口就会返回该群的完整公开信息。我们会先验证群号的有效性，确保返回的数据准确可靠。接口响应速度快，数据结构清晰，非常适合集成到各类应用场景中。  ## 返回数据说明 接口会返回以下QQ群的关键信息：  ### 基础字段（所有群都有） - **群基础信息**: 包括群号、群名称，让你能够准确识别和展示群聊 - **视觉素材**: 提供群头像URL（支持多种尺寸），可直接用于在你的界面中展示群聊图标 - **群介绍资料**: 包含群描述/简介和群标签，帮助用户了解群聊的主题和特色 - **便捷入口**: 返回加群链接（二维码URL），方便用户一键加入感兴趣的群聊 - **成员统计**: 当前成员数和最大成员数，直观了解群规模 - **数据时效**: 提供最后更新时间戳，让你了解数据的新鲜度  ### 扩展字段（部分群有） - **活跃度**: 活跃成员数量（可选） - **群主信息**: 群主QQ号和UID（可选） - **时间信息**: 建群时间戳和格式化时间（可选） - **群等级**: 群等级数值（可选） - **群公告**: 群公告/简介内容（可选） - **认证信息**: 官方认证类型和说明（可选）  所有返回的数据都遵循标准的JSON格式，字段命名清晰，便于解析和使用。扩展字段仅在数据可用时返回，保持响应体精简。

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let groupId: string; //QQ群号，长度5-12位 (default to undefined)

const { status, data } = await apiInstance.getSocialQqGroupinfo(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | QQ群号，长度5-12位 | defaults to undefined|


### Return type

**GetSocialQqGroupinfo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应，返回QQ群的详细信息 |  -  |
|**400** | 缺少或无效的group_id参数 |  -  |
|**404** | QQ群不存在或暂时无法访问 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocialQqUserinfo**
> GetSocialQqUserinfo200Response getSocialQqUserinfo()

通过 QQ 号查询用户资料，返回头像、昵称、个性签名、等级和 VIP 信息。  ## 功能概述 这个接口适合用在用户资料展示、头像卡片、账号绑定结果展示等场景。若用户把 QQ 等级设为隐藏，`qq_level` 会返回 `null`。  ## 数据字段说明 - **基础信息**: 昵称、个性签名、头像、年龄、性别 - **联系信息**: QQ 邮箱、个性域名（QID） - **等级信息**: QQ 等级、VIP 状态和等级 - **时间信息**: 注册时间、最后更新时间

### Example

```typescript
import {
    SocialApi,
    Configuration
} from 'uapi-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SocialApi(configuration);

let qq: string; //需要查询的QQ号 (default to undefined)

const { status, data } = await apiInstance.getSocialQqUserinfo(
    qq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **qq** | [**string**] | 需要查询的QQ号 | defaults to undefined|


### Return type

**GetSocialQqUserinfo200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功响应，返回QQ用户的详细信息 |  -  |
|**400** | 缺少或无效的qq参数 |  -  |
|**404** | 获取QQ用户信息失败或用户不存在 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

