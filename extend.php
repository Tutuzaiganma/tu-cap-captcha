<?php

namespace Tu\CapCaptcha;

use Flarum\Extend;
use Flarum\Discussion\Event\Saving as DiscussionSaving;
use Flarum\Post\Event\Saving as PostSaving;
use Flarum\User\Event\Saving as UserSaving;
use Tu\CapCaptcha\Listener\ValidateDiscussionCaptcha;
use Tu\CapCaptcha\Listener\ValidateReplyCaptcha;
use Tu\CapCaptcha\Listener\ValidateRegisterCaptcha;
use Tu\CapCaptcha\Middleware\ValidateForgotCaptcha;
use Tu\CapCaptcha\Middleware\ValidateLoginCaptcha;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    (new Extend\Locales(__DIR__ . '/resources/locale')),

    (new Extend\ApiSerializer(\Flarum\Api\Serializer\ForumSerializer::class))
        ->attributes(ForumAttributes::class),

    (new Extend\Middleware('forum'))
        ->add(ValidateLoginCaptcha::class),

    (new Extend\Middleware('api'))
        ->add(ValidateForgotCaptcha::class),

    (new Extend\Event())
        ->listen(UserSaving::class, ValidateRegisterCaptcha::class)
        ->listen(DiscussionSaving::class, ValidateDiscussionCaptcha::class)
        ->listen(PostSaving::class, ValidateReplyCaptcha::class),

    (new Extend\Settings())
        ->default('tu-cap-captcha.global_widget_script_url', CapConfigResolver::DEFAULT_WIDGET_SCRIPT_URL)
        ->default('tu-cap-captcha.global_floating_script_url', CapConfigResolver::DEFAULT_FLOATING_SCRIPT_URL)
        ->default('tu-cap-captcha.global_wasm_url', '')
        ->default('tu-cap-captcha.forgot_enabled', '0')
        ->default('tu-cap-captcha.forgot_custom_enabled', '0')
        ->default('tu-cap-captcha.register_enabled', '0')
        ->default('tu-cap-captcha.register_custom_enabled', '0')
        ->default('tu-cap-captcha.discussion_enabled', '0')
        ->default('tu-cap-captcha.discussion_custom_enabled', '0')
        ->default('tu-cap-captcha.reply_enabled', '0')
        ->default('tu-cap-captcha.reply_custom_enabled', '0')
        ->default('tu-cap-captcha.login_enabled', '0')
        ->default('tu-cap-captcha.login_custom_enabled', '0')
        ->default('tu-cap-captcha.search_enabled', '0')
        ->default('tu-cap-captcha.search_custom_enabled', '0'),
];

