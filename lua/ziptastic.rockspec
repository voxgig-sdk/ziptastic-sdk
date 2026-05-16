package = "voxgig-sdk-ziptastic"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/ziptastic-sdk.git"
}
description = {
  summary = "Ziptastic SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["ziptastic_sdk"] = "ziptastic_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
