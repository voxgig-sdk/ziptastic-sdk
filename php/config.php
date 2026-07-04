<?php
declare(strict_types=1);

// Ziptastic SDK configuration

class ZiptasticConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Ziptastic",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "http://ziptasticapi.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_location_by_zipcode" => [],
                ],
            ],
            "entity" => [
        'get_location_by_zipcode' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'city',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'country',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'state',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
          ],
          'name' => 'get_location_by_zipcode',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '90210',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'zipcode',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'myCallback',
                        'kind' => 'query',
                        'name' => 'callback',
                        'orig' => 'callback',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/{zipcode}',
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'zipcode' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'callback',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ZiptasticFeatures::make_feature($name);
    }
}
