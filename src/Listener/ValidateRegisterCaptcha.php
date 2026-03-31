<?php

namespace Tu\CapCaptcha\Listener;

use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Flarum\User\Event\Saving;
use Tu\CapCaptcha\CapValidator;

class ValidateRegisterCaptcha
{
    public function __construct(
        protected CapValidator $validator,
        protected Translator $translator
    ) {
    }

    public function handle(Saving $event): void
    {
        // Only validate on registration (new user)
        if ($event->user->exists) {
            return;
        }

        // Admin-created users do not require captcha
        if ($event->actor->isAdmin()) {
            return;
        }

        if (! $this->validator->shouldProtect('register')) {
            return;
        }

        $token = (string) ($event->data['attributes']['capToken'] ?? '');

        if (! $this->validator->verifyOperationToken('register', $token)) {
            throw new ValidationException([
                'capToken' => $this->translator->trans('tu-cap-captcha.api.invalid_captcha'),
            ]);
        }
    }
}
