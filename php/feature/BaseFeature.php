<?php
declare(strict_types=1);

// Ziptastic SDK base feature

class ZiptasticBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ZiptasticContext $ctx, array $options): void {}
    public function PostConstruct(ZiptasticContext $ctx): void {}
    public function PostConstructEntity(ZiptasticContext $ctx): void {}
    public function SetData(ZiptasticContext $ctx): void {}
    public function GetData(ZiptasticContext $ctx): void {}
    public function GetMatch(ZiptasticContext $ctx): void {}
    public function SetMatch(ZiptasticContext $ctx): void {}
    public function PrePoint(ZiptasticContext $ctx): void {}
    public function PreSpec(ZiptasticContext $ctx): void {}
    public function PreRequest(ZiptasticContext $ctx): void {}
    public function PreResponse(ZiptasticContext $ctx): void {}
    public function PreResult(ZiptasticContext $ctx): void {}
    public function PreDone(ZiptasticContext $ctx): void {}
    public function PreUnexpected(ZiptasticContext $ctx): void {}
}
