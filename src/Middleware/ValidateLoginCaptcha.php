<?php

namespace Tu\CapCaptcha\Middleware;

use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Tu\CapCaptcha\CapValidator;

class ValidateLoginCaptcha implements MiddlewareInterface
{
    public function __construct(
        protected CapValidator $validator,
        protected Translator $translator
    ) {
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        if (! $this->isForumLoginRequest($request)) {
            return $handler->handle($request);
        }

        if (! $this->validator->shouldProtect('login')) {
            return $handler->handle($request);
        }

        $body = $request->getParsedBody();
        $token = is_array($body) ? ($body['capToken'] ?? '') : '';

        if (! $this->validator->verifyOperationToken('login', (string) $token)) {
            throw new ValidationException([
                'capToken' => $this->translator->trans('tu-cap-captcha.api.invalid_captcha'),
            ]);
        }

        return $handler->handle($request);
    }

    protected function isForumLoginRequest(ServerRequestInterface $request): bool
    {
        if (strtoupper($request->getMethod()) !== 'POST') {
            return false;
        }

        return (bool) preg_match('#/login$#', $request->getUri()->getPath());
    }
}
