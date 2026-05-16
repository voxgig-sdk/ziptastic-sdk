<?php
declare(strict_types=1);

// Ziptastic SDK utility: result_body

class ZiptasticResultBody
{
    public static function call(ZiptasticContext $ctx): ?ZiptasticResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
