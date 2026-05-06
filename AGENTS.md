# AGENTS.md — uapi-sdk-typescript

This file tells AI coding agents how to use the **official TypeScript /
Node.js SDK** for the [uapis.cn](https://uapis.cn) public API platform.

## What this package is

Strongly-typed Node / browser-compatible client for UAPI. Generated from the
live OpenAPI 3.1 spec at <https://uapis.cn/openapi.json> — so the method
list, parameter shapes, and return types stay in lock-step with the real
API.

```bash
npm i uapi-sdk-typescript
# or
pnpm add uapi-sdk-typescript
# or
yarn add uapi-sdk-typescript
```

## Quick start

```ts
import { UapiClient } from "uapi-sdk-typescript";

// Free-tier endpoints don't need an API key
const client = new UapiClient("https://uapis.cn");

const weather = await client.misc.getMiscWeather({ city: "北京" });
console.log(weather);

// Paid endpoints take a key
const paid = new UapiClient("https://uapis.cn", process.env.UAPI_KEY!);
const ocr = await paid.image.postImageOcr({ url: "https://…/photo.png" });
```

The client is grouped by tag (`misc`, `network`, `text`, `image`, `social`,
`translate`, `search`, …) and each method name matches the underlying
`operationId` from the OpenAPI spec.

## Discovery

When generating code, agents should:

1. Pull the spec from <https://uapis.cn/openapi.json> if the schema you need
   isn't already in your local types.
2. Map the operation's `operationId` to a SDK method (`get-misc-weather` →
   `client.misc.getMiscWeather`).
3. Pass the request parameters as a single object — query params, path
   params, and body all live there.

## Authentication

- Many UAPI endpoints (network, text, random, convert, weather, time,
  hotboard) work with no key.
- Paid endpoints want `X-API-Key`. The SDK forwards the second
  `UapiClient` constructor argument to that header.
- For human-in-the-loop OAuth flows, see
  <https://uapis.cn/.well-known/oauth-authorization-server>.

## Errors

Every method throws an `AxiosError`-shaped error on non-2xx responses. The
error body is a JSON object: `{code, success: false, error, request_id?}`.
Surface the `error` text verbatim.

## Rate limits

Headers `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`,
`Retry-After` are returned on every response. Honor them — back off on
`429` and obey `Retry-After`.

## Related repos

- MCP server: <https://github.com/AxT-Team/uapi-mcp> — same endpoints as MCP tools.
- Skills bundle: <https://github.com/AxT-Team/uapi-agent-skills> — markdown
  skills for AI agents that prefer SKILL-driven workflows.
- Browser-only SDK: <https://github.com/AxT-Team/uapi-browser-sdk>.
- Other languages: `uapi-sdk-python`, `uapi-sdk-go`, `uapi-sdk-rust`,
  `uapi-sdk-java`, `uapi-sdk-csharp`, `uapi-sdk-cpp`, `uapi-sdk-php`.
