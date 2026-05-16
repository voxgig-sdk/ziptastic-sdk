<?php
declare(strict_types=1);

// Ziptastic SDK utility: prepare_body

class ZiptasticPrepareBody
{
    public static function call(ZiptasticContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
