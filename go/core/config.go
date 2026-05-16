package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Ziptastic",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "http://ziptasticapi.com",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_location_by_zipcode": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_location_by_zipcode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "city",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "country",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "state",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
				},
				"name": "get_location_by_zipcode",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "90210",
											"kind": "param",
											"name": "id",
											"orig": "zipcode",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": "myCallback",
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{zipcode}",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"zipcode": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"callback",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
