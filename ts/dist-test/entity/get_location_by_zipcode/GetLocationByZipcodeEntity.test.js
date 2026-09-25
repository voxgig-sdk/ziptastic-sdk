"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetLocationByZipcodeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ZIPTASTIC_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ZIPTASTIC_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ZiptasticSDK.test();
        const ent = testsdk.GetLocationByZipcode();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ZIPTASTIC_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_location_by_zipcode.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "city": { "a": true, "h": "City", "n": "city", "r": false, "sh": "The city associated with the ZIP code", "t": "`$STRING`", "key$": "city", "index$": 0 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "The country associated with the ZIP code", "t": "`$STRING`", "key$": "country", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "The state associated with the ZIP code", "t": "`$STRING`", "key$": "state", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "get_location_by_zipcode", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /{zipcode}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "90210", "k": "param", "n": "id", "or": "zipcode", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "myCallback", "k": "query", "n": "callback", "or": "callback", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/{zipcode}", "q": { "exist": ["callback", "id"] }, "r": { "param": { "zipcode": "id" } }, "s": [{ "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "get_location_by_zipcode", "name__orig": "get_location_by_zipcode", "Name": "GetLocationByZipcode", "name_": "get_location_by_zipcode", "name-": "get-location-by-zipcode", "NAME": "GET_LOCATION_BY_ZIPCODE", "index$": 0 }, { "active": true, "entity": "get_location_by_zipcode", "key$": "BasicGetLocationByZipcodeFlow", "kind": "basic", "name": "BasicGetLocationByZipcodeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "get_location_by_zipcode_ref01", "srcdatavar": "get_location_by_zipcode_ref01_data", "suffix": "_dt0" }, "m": { "id": "get_location_by_zipcode01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-get_location_by_zipcode_ref01" } }], "index$": 0 }] }, 'GetLocationByZipcode', { "GET /{zipcode}": { "protocol": "http", "operationId": "getLocationByZipcode", "responses": { "200": { "description": "Successful response with location information", "content": { "application/json": { "schema": { "type": "object", "properties": { "country": { "description": "The country associated with the ZIP code", "example": "US", "key$": "country", "type": "string" }, "state": { "description": "The state associated with the ZIP code", "example": "CA", "key$": "state", "type": "string" }, "city": { "description": "The city associated with the ZIP code", "example": "Beverly Hills", "key$": "city", "type": "string" } }, "index$": 0 }, "examples": { "example1": { "summary": "Example response for ZIP code 90210", "value": { "country": "US", "state": "CA", "city": "Beverly Hills" } } } } } }, "400": { "description": "Invalid ZIP code format", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "Invalid ZIP code format" } } } } } }, "404": { "description": "ZIP code not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "ZIP code not found" } } } } } } }, "parameters": [{ "name": "zipcode", "in": "path", "description": "The ZIP code to look up location information for", "required": true, "schema": { "type": "string", "pattern": "^[0-9]{5}$", "example": "90210" }, "index$": 0 }, { "name": "callback", "in": "query", "description": "Optional JSONP callback function name for cross-domain requests", "required": false, "schema": { "type": "string", "example": "myCallback" }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_location_by_zipcode_ref01_data = Object.values(setup.data.existing.get_location_by_zipcode)[0];
        // LOAD
        const get_location_by_zipcode_ref01_ent = client.GetLocationByZipcode();
        const get_location_by_zipcode_ref01_match_dt0 = {};
        get_location_by_zipcode_ref01_match_dt0.id = get_location_by_zipcode_ref01_data.id;
        const get_location_by_zipcode_ref01_data_dt0 = (await get_location_by_zipcode_ref01_ent.load(get_location_by_zipcode_ref01_match_dt0)).data();
        (0, node_assert_1.default)(get_location_by_zipcode_ref01_data_dt0.id === get_location_by_zipcode_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_location_by_zipcode/GetLocationByZipcodeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ZiptasticSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_location_by_zipcode01', 'get_location_by_zipcode02', 'get_location_by_zipcode03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID': idmap,
        'ZIPTASTIC_TEST_LIVE': 'FALSE',
        'ZIPTASTIC_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID'];
    const live = 'TRUE' === env.ZIPTASTIC_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ZiptasticSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=GetLocationByZipcodeEntity.test.js.map