
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Ziptastic',
        slug: "ziptastic",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "http://ziptasticapi.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_location_by_zipcode: {
      },

    }
  }


  entity = {
    "get_location_by_zipcode": {
      "fields": [
        {
          "name": "city",
          "short": "The city associated with the ZIP code",
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "short": "The country associated with the ZIP code",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "short": "The state associated with the ZIP code",
          "type": "`$STRING`"
        }
      ],
      "name": "get_location_by_zipcode",
      "op": {
        "load": {
          "input": "data",
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "myCallback",
                    "kind": "query",
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{zipcode}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "zipcode": "id"
                }
              },
              "select": {
                "exist": [
                  "callback",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

