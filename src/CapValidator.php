<?php

namespace Tu\CapCaptcha;

use Psr\Log\LoggerInterface;

class CapValidator
{
    public function __construct(
        protected CapConfigResolver $configResolver,
        protected LoggerInterface $logger
    ) {
    }

    public function shouldProtect(string $operation): bool
    {
        return $this->configResolver->shouldProtect($operation);
    }

    public function verifyOperationToken(string $operation, ?string $token): bool
    {
        if (! $this->shouldProtect($operation)) {
            return true;
        }

        $endpoint = $this->configResolver->getEndpoint($operation);
        $secret = $this->configResolver->getSecret($operation);

        return $this->verify($endpoint, $secret, $token ?? '');
    }

    public function verify(string $endpoint, string $secret, string $token): bool
    {
        $endpoint = trim($endpoint);
        $secret = trim($secret);
        $token = trim($token);

        if ($endpoint === '' || $secret === '' || $token === '') {
            return false;
        }

        try {
            $response = @file_get_contents(
                rtrim($endpoint, '/') . '/siteverify',
                false,
                stream_context_create([
                    'http' => [
                        'method' => 'POST',
                        'header' => "Content-Type: application/json\r\n",
                        'content' => json_encode([
                            'secret' => $secret,
                            'response' => $token,
                        ]),
                        'ignore_errors' => true,
                        'timeout' => 10,
                    ],
                ])
            );

            $payload = json_decode($response ?: '', true);

            return is_array($payload) && ($payload['success'] ?? false) === true;
        } catch (\Throwable $exception) {
            $this->logger->error(
                'Cap captcha verify failed: ' . $exception->getMessage(),
                ['exception' => $exception]
            );

            return false;
        }
    }
}
