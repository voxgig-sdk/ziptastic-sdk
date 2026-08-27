<?php
declare(strict_types=1);

// GetLocationByZipcode entity test

require_once __DIR__ . '/../ziptastic_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GetLocationByZipcodeEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ZiptasticSDK::test(null, null);
        $ent = $testsdk->GetLocationByZipcode(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = get_location_by_zipcode_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "get_location_by_zipcode." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $get_location_by_zipcode_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.get_location_by_zipcode")));
        $get_location_by_zipcode_ref01_data = null;
        if (count($get_location_by_zipcode_ref01_data_raw) > 0) {
            $get_location_by_zipcode_ref01_data = Helpers::to_map($get_location_by_zipcode_ref01_data_raw[0][1]);
        }

        // LOAD
        $get_location_by_zipcode_ref01_ent = $client->GetLocationByZipcode(null);
        $get_location_by_zipcode_ref01_match_dt0 = [
            "id" => $get_location_by_zipcode_ref01_data["id"],
        ];
        $get_location_by_zipcode_ref01_data_dt0_loaded = $get_location_by_zipcode_ref01_ent->load($get_location_by_zipcode_ref01_match_dt0, null);
        $get_location_by_zipcode_ref01_data_dt0_load_result = Helpers::to_map(is_object($get_location_by_zipcode_ref01_data_dt0_loaded) && method_exists($get_location_by_zipcode_ref01_data_dt0_loaded, 'data_get') ? $get_location_by_zipcode_ref01_data_dt0_loaded->data_get() : $get_location_by_zipcode_ref01_data_dt0_loaded);
        $this->assertNotNull($get_location_by_zipcode_ref01_data_dt0_load_result);
        $this->assertEquals($get_location_by_zipcode_ref01_data_dt0_load_result["id"], $get_location_by_zipcode_ref01_data["id"]);

    }
}

function get_location_by_zipcode_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/get_location_by_zipcode/GetLocationByZipcodeTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ZiptasticSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["get_location_by_zipcode01", "get_location_by_zipcode02", "get_location_by_zipcode03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID" => $idmap,
        "ZIPTASTIC_TEST_LIVE" => "FALSE",
        "ZIPTASTIC_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["ZIPTASTIC_TEST_GET_LOCATION_BY_ZIPCODE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["ZIPTASTIC_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new ZiptasticSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["ZIPTASTIC_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["ZIPTASTIC_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
