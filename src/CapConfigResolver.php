<?php

namespace Tu\CapCaptcha;

use Flarum\Settings\SettingsRepositoryInterface;

class CapConfigResolver
{
    public const EXTENSION_ID = 'tu-cap-captcha';
    public const DEFAULT_WIDGET_SCRIPT_URL = 'https://cdn.jsdelivr.net/npm/@cap.js/widget';
    public const DEFAULT_FLOATING_SCRIPT_URL = 'https://cdn.jsdelivr.net/npm/@cap.js/widget/cap-floating.min.js';

    public function __construct(
        protected SettingsRepositoryInterface $settings
    ) {
    }

    public function shouldProtect(string $operation): bool
    {
        return $this->isOperationEnabled($operation) && $this->hasVerifierConfig($operation);
    }

    public function isOperationEnabled(string $operation): bool
    {
        return $this->get("{$operation}_enabled", '0') === '1';
    }

    public function hasVerifierConfig(string $operation): bool
    {
        return $this->getEndpoint($operation) !== '' && $this->getSecret($operation) !== '';
    }

    public function getEndpoint(string $operation): string
    {
        if ($this->isCustomConfigEnabled($operation)) {
            $customEndpoint = trim((string) $this->get("{$operation}_endpoint", ''));
            if ($customEndpoint !== '') {
                return $customEndpoint;
            }
        }

        return trim((string) $this->get('global_endpoint', ''));
    }

    public function getSecret(string $operation): string
    {
        if ($this->isCustomConfigEnabled($operation)) {
            $customSecret = trim((string) $this->get("{$operation}_secret", ''));
            if ($customSecret !== '') {
                return $customSecret;
            }
        }

        return trim((string) $this->get('global_secret', ''));
    }

    public function getWidgetScriptUrl(): string
    {
        return trim((string) $this->get('global_widget_script_url', self::DEFAULT_WIDGET_SCRIPT_URL));
    }

    public function getFloatingScriptUrl(): string
    {
        return trim((string) $this->get('global_floating_script_url', self::DEFAULT_FLOATING_SCRIPT_URL));
    }

    public function getWasmUrl(): string
    {
        return trim((string) $this->get('global_wasm_url', ''));
    }

    protected function isCustomConfigEnabled(string $operation): bool
    {
        return $this->get("{$operation}_custom_enabled", '0') === '1';
    }

    protected function get(string $key, ?string $default = null): ?string
    {
        return $this->settings->get(self::EXTENSION_ID . '.' . $key, $default);
    }
}
