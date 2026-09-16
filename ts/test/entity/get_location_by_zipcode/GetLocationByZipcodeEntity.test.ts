

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"city","req":false,"short":"The city associated with the ZIP code","type":"`$STRING`","index$":0},{"active":true,"name":"country","req":false,"short":"The country associated with the ZIP code","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"state","req":false,"short":"The state associated with the ZIP code","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"get_location_by_zipcode","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"90210","kind":"param","name":"id","orig":"zipcode","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"myCallback","kind":"query","name":"callback","orig":"callback","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{zipcode}","json":"{\"operationId\":\"getLocationByZipcode\",\"parameters\":[{\"description\":\"The ZIP code to look up location information for\",\"in\":\"path\",\"name\":\"zipcode\",\"required\":true,\"schema\":{\"example\":\"90210\",\"pattern\":\"^[0-9]{5}$\",\"type\":\"string\"}},{\"description\":\"Optional JSONP callback function name for cross-domain requests\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"example\":\"myCallback\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"example1\":{\"summary\":\"Example response for ZIP code 90210\",\"value\":{\"city\":\"Beverly Hills\",\"country\":\"US\",\"state\":\"CA\"}}},\"schema\":{\"properties\":{\"city\":{\"description\":\"The city associated with the ZIP code\",\"example\":\"Beverly Hills\",\"type\":\"string\"},\"country\":{\"description\":\"The country associated with the ZIP code\",\"example\":\"US\",\"type\":\"string\"},\"state\":{\"description\":\"The state associated with the ZIP code\",\"example\":\"CA\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with location information\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid ZIP code format\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Invalid ZIP code format\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"ZIP code not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"ZIP code not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{zipcode}","rename":{"param":{"zipcode":"id"}},"segments":[{"var":"id"}],"select":{"exist":["callback","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_location_by_zipcode","name__orig":"get_location_by_zipcode","Name":"GetLocationByZipcode","name_":"get_location_by_zipcode","name-":"get-location-by-zipcode","NAME":"GET_LOCATION_BY_ZIPCODE","index$":0}, {"active":true,"entity":"get_location_by_zipcode","key$":"BasicGetLocationByZipcodeFlow","kind":"basic","name":"BasicGetLocationByZipcodeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_location_by_zipcode_ref01","srcdatavar":"get_location_by_zipcode_ref01_data","suffix":"_dt0"},"match":{"id":"get_location_by_zipcode01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_location_by_zipcode_ref01"}}],"index$":0}]}, 'GetLocationByZipcode')
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
  
