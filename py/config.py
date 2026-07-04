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
            "active": True,
            "name": "city",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "state",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "get_location_by_zipcode",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "90210",
                      "kind": "param",
                      "name": "id",
                      "orig": "zipcode",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "myCallback",
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "reqd": False,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
