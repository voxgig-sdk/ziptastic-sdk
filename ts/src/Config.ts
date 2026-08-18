
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


  main = {
    name: 'Ziptastic',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "type": "`$STRING`"
        },
        {
          "name": "state",
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

