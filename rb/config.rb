# Ziptastic SDK configuration

module ZiptasticConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Ziptastic",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "http://ziptasticapi.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_location_by_zipcode" => {},
        },
      },
      "entity" => {
        "get_location_by_zipcode" => {
          "fields" => [
            {
              "name" => "city",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "type" => "`$STRING`",
            },
            {
              "name" => "state",
              "type" => "`$STRING`",
            },
          ],
          "name" => "get_location_by_zipcode",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "90210",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "zipcode",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "myCallback",
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{zipcode}",
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "zipcode" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "callback",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ZiptasticFeatures.make_feature(name)
  end
end
