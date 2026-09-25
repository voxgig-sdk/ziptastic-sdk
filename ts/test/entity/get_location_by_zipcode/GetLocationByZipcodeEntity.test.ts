

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ZiptasticSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetLocationByZipcodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ZIPTASTIC_TEST_LIVE=TRUE.
  afterEach(liveDelay('ZIPTASTIC_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ZiptasticSDK.test()
    const ent = testsdk.GetLocationByZipcode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ZIPTASTIC_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_location_by_zipcode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"city":{"a":true,"h":"City","n":"city","r":false,"sh":"The city associated with the ZIP code","t":"`$STRING`","key$":"city","index$":0},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"The country associated with the ZIP code","t":"`$STRING`","key$":"country","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The state associated with the ZIP code","t":"`$STRING`","key$":"state","index$":3}},"id":{"field":"id","name":"id"},"name":"get_location_by_zipcode","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /{zipcode}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"90210","k":"param","n":"id","or":"zipcode","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"myCallback","k":"query","n":"callback","or":"callback","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{zipcode}","q":{"exist":["callback","id"]},"r":{"param":{"zipcode":"id"}},"s":[{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_location_by_zipcode","name__orig":"get_location_by_zipcode","Name":"GetLocationByZipcode","name_":"get_location_by_zipcode","name-":"get-location-by-zipcode","NAME":"GET_LOCATION_BY_ZIPCODE","index$":0}, {"active":true,"entity":"get_location_by_zipcode","key$":"BasicGetLocationByZipcodeFlow","kind":"basic","name":"BasicGetLocationByZipcodeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_location_by_zipcode_ref01","srcdatavar":"get_location_by_zipcode_ref01_data","suffix":"_dt0"},"m":{"id":"get_location_by_zipcode01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_location_by_zipcode_ref01"}}],"index$":0}]}, 'GetLocationByZipcode', {"GET /{zipcode}":{"protocol":"http","operationId":"getLocationByZipcode","responses":{"200":{"description":"Successful response with location information","content":{"application/json":{"schema":{"type":"object","properties":{"country":{"description":"The country associated with the ZIP code","example":"US","key$":"country","type":"string"},"state":{"description":"The state associated with the ZIP code","example":"CA","key$":"state","type":"string"},"city":{"description":"The city associated with the ZIP code","example":"Beverly Hills","key$":"city","type":"string"}},"index$":0},"examples":{"example1":{"summary":"Example response for ZIP code 90210","value":{"country":"US","state":"CA","city":"Beverly Hills"}}}}}},"400":{"description":"Invalid ZIP code format","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Invalid ZIP code format"}}}}}},"404":{"description":"ZIP code not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"ZIP code not found"}}}}}}},"parameters":[{"name":"zipcode","in":"path","description":"The ZIP code to look up location information for","required":true,"schema":{"type":"string","pattern":"^[0-9]{5}$","example":"90210"},"index$":0},{"name":"callback","in":"query","description":"Optional JSONP callback function name for cross-domain requests","required":false,"schema":{"type":"string","example":"myCallback"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_location_by_zipcode_ref01_data = Object.values(setup.data.existing.get_location_by_zipcode)[0] as any

    // LOAD
    const get_location_by_zipcode_ref01_ent = client.GetLocationByZipcode()
    const get_location_by_zipcode_ref01_match_dt0: any = {}
    get_location_by_zipcode_ref01_match_dt0.id = get_location_by_zipcode_ref01_data.id
    const get_location_by_zipcode_ref01_data_dt0 = (await get_location_by_zipcode_ref01_ent.load(get_location_by_zipcode_ref01_match_dt0)).data()
    assert(get_location_by_zipcode_ref01_data_dt0.id === get_location_by_zipcode_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_location_by_zipcode/GetLocationByZipcodeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ZiptasticSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_location_by_zipcode01','get_location_by_zipcode02','get_location_by_zipcode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID': idmap,
    'ZIPTASTIC_TEST_LIVE': 'FALSE',
    'ZIPTASTIC_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID']

  const live = 'TRUE' === env.ZIPTASTIC_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ZiptasticSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ZIPTASTIC_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
