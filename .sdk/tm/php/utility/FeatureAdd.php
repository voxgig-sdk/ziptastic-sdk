<?php
declare(strict_types=1);

// Ziptastic SDK utility: feature_add

class ZiptasticFeatureAdd
{
    public static function call(ZiptasticContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
