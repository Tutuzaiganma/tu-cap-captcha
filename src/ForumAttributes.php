<?php

namespace Tu\CapCaptcha;

use Flarum\Api\Serializer\ForumSerializer;

class ForumAttributes
{
    public function __construct(
        protected CapConfigResolver $configResolver
    ) {
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        return [
            'tu-cap-captcha.widget_script_url' => $this->configResolver->getWidgetScriptUrl(),
            'tu-cap-captcha.floating_script_url' => $this->configResolver->getFloatingScriptUrl(),
            'tu-cap-captcha.wasm_url' => $this->configResolver->getWasmUrl(),
            'tu-cap-captcha.login_enabled' => $this->configResolver->shouldProtect('login'),
            'tu-cap-captcha.login_endpoint' => $this->configResolver->getEndpoint('login'),
            'tu-cap-captcha.register_enabled' => $this->configResolver->shouldProtect('register'),
            'tu-cap-captcha.register_endpoint' => $this->configResolver->getEndpoint('register'),
            'tu-cap-captcha.forgot_enabled' => $this->configResolver->shouldProtect('forgot'),
            'tu-cap-captcha.forgot_endpoint' => $this->configResolver->getEndpoint('forgot'),
            'tu-cap-captcha.discussion_enabled' => $this->configResolver->shouldProtect('discussion'),
            'tu-cap-captcha.discussion_endpoint' => $this->configResolver->getEndpoint('discussion'),
            'tu-cap-captcha.reply_enabled' => $this->configResolver->shouldProtect('reply'),
            'tu-cap-captcha.reply_endpoint' => $this->configResolver->getEndpoint('reply'),
            'tu-cap-captcha.search_enabled' => $this->configResolver->shouldProtect('search'),
            'tu-cap-captcha.search_endpoint' => $this->configResolver->getEndpoint('search'),
        ];
    }
}
