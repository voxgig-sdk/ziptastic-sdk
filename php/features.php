<?php
declare(strict_types=1);

// Ziptastic SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ZiptasticFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ZiptasticBaseFeature();
            case "test":
                return new ZiptasticTestFeature();
            default:
                return new ZiptasticBaseFeature();
        }
    }
}
