<?php
declare(strict_types=1);

// Ziptastic SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ZiptasticMakeContext
{
    public static function call(array $ctxmap, ?ZiptasticContext $basectx): ZiptasticContext
    {
        return new ZiptasticContext($ctxmap, $basectx);
    }
}
