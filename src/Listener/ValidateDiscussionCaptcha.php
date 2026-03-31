<?php

namespace Tu\CapCaptcha\Listener;

use Flarum\Discussion\Event\Saving;
use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Tu\CapCaptcha\CapValidator;

class ValidateDiscussionCaptcha
{
    public function __construct(
        protected CapValidator $validator,
        protected Translator $translator
    ) {
    }

    public function handle(Saving $event): void
    {
        // Only validate on creating a new discussion.
        if ($event->discussion->exists) {
            return;
        }

        // Admin-created discussions do not require captcha.
        if ($event->actor->isAdmin()) {
            return;
        }

        if (! $this->validator->shouldProtect('discussion')) {
            return;
        }

        $token = (string) ($event->data['attributes']['capToken'] ?? '');

        if (! $this->validator->verifyOperationToken('discussion', $token)) {
            throw new ValidationException([
                'capToken' => $this->translator->trans('tu-cap-captcha.api.invalid_captcha'),
            ]);
        }
    }
}
