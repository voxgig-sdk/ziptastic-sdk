# Ziptastic SDK

Look up the city, state, and country for any US ZIP code with a single GET request

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Ziptastic API

[Ziptastic](http://ziptasticapi.com) is a small, free HTTP API that turns a US ZIP code into the matching country, state, and city. It was originally created by Thomas Schultz and was later rewritten in PHP on top of the SLIM framework by Josh Strange.

What you get from the API:

- A single endpoint of the form `http://ZiptasticAPI.com/{ZIPCODE}` that returns geographic location data for a US ZIP code.
- JSON response fields covering country, state, and city for the requested ZIP.
- Optional JSONP support via a `?callback={name}` query parameter for use directly from the browser.

The service is unauthenticated, CORS-enabled, and intended for straightforward client- or server-side ZIP-to-location lookups.

## Try it

**TypeScript**
```bash
npm install ziptastic
```

**Python**
```bash
pip install ziptastic-sdk
```

**PHP**
```bash
composer require voxgig/ziptastic-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ziptastic-sdk/go
```

**Ruby**
```bash
gem install ziptastic-sdk
```

**Lua**
```bash
luarocks install ziptastic-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ZiptasticSDK } from 'ziptastic'

const client = new ZiptasticSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ziptastic-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ziptastic": {
      "command": "/abs/path/to/ziptastic-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetLocationByZipcode** | Retrieves the country, state, and city for a US ZIP code via `GET /{zipcode}` (optionally with `?callback=` for JSONP). | `/{zipcode}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ziptastic_sdk import ZiptasticSDK

client = ZiptasticSDK({})


# Load a specific getlocationbyzipcode
getlocationbyzipcode, err = client.GetLocationByZipcode(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ziptastic_sdk.php';

$client = new ZiptasticSDK([]);


// Load a specific getlocationbyzipcode
[$getlocationbyzipcode, $err] = $client->GetLocationByZipcode(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ziptastic-sdk/go"

client := sdk.NewZiptasticSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Ziptastic_sdk"

client = ZiptasticSDK.new({})


# Load a specific getlocationbyzipcode
getlocationbyzipcode, err = client.GetLocationByZipcode(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ziptastic_sdk")

local client = sdk.new({})


-- Load a specific getlocationbyzipcode
local getlocationbyzipcode, err = client:GetLocationByZipcode(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ZiptasticSDK.test()
const result = await client.GetLocationByZipcode().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ZiptasticSDK.test(None, None)
result, err = client.GetLocationByZipcode(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ZiptasticSDK::test(null, null);
[$result, $err] = $client->GetLocationByZipcode(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetLocationByZipcode(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ZiptasticSDK.test(nil, nil)
result, err = client.GetLocationByZipcode(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetLocationByZipcode(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Ziptastic API

- Upstream: [http://ziptasticapi.com](http://ziptasticapi.com)

---

Generated from the Ziptastic API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
