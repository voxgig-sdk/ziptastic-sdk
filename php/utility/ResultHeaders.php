<?php
declare(strict_types=1);

// Ziptastic SDK utility: result_headers

class ZiptasticResultHeaders
{
    public static function call(ZiptasticContext $ctx): ?ZiptasticResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
