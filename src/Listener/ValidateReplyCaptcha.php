<?php

namespace Tu\CapCaptcha\Listener;

use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Flarum\Post\CommentPost;
use Flarum\Post\Event\Saving;
use Tu\CapCaptcha\CapValidator;

class ValidateReplyCaptcha
{
    public function __construct(
        protected CapValidator $validator,
        protected Translator $translator
    ) {
    }

    public function handle(Saving $event): void
    {
        // Only validate when creating a new comment post (reply).
        if ($event->post->exists || !($event->post instanceof CommentPost)) {
            return;
        }

        // The first post created together with a new discussion is not a reply.
        // It should be validated by discussion captcha only.
        if (
            (($event->data['attributes']['title'] ?? null) !== null) ||
            (($event->post->discussion->first_post_id ?? null) === null)
        ) {
            return;
        }

        // Admin replies do not require captcha.
        if ($event->actor->isAdmin()) {
            return;
        }

        if (! $this->validator->shouldProtect('reply')) {
            return;
        }

        $token = (string) ($event->data['attributes']['capToken'] ?? '');

        if (! $this->validator->verifyOperationToken('reply', $token)) {
            throw new ValidationException([
                'capToken' => $this->translator->trans('tu-cap-captcha.api.invalid_captcha'),
            ]);
        }
    }
}
