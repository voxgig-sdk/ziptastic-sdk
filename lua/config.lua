-- Ziptastic SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Ziptastic",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "http://ziptasticapi.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_location_by_zipcode"] = {},
      },
    },
    entity = {
      ["get_location_by_zipcode"] = {
        ["fields"] = {
          {
            ["name"] = "city",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "state",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_location_by_zipcode",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "90210",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "zipcode",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "myCallback",
                      ["kind"] = "query",
                      ["name"] = "callback",
                      ["orig"] = "callback",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{zipcode}",
                ["parts"] = {
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["zipcode"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "callback",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
