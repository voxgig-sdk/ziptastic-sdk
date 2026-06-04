# Ziptastic SDK configuration


def make_config():
    return {
        "main": {
            "name": "Ziptastic",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "http://ziptasticapi.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_location_by_zipcode": {},
            },
        },
        "entity": {
      "get_location_by_zipcode": {
        "fields": [
          {
            "name": "city",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "state",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "get_location_by_zipcode",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "90210",
                      "kind": "param",
                      "name": "id",
                      "orig": "zipcode",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "myCallback",
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{zipcode}",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "zipcode": "id",
                  },
                },
                "select": {
                  "exist": [
                    "callback",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
