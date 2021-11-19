<?php

namespace Tests\GraphQL;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Testing\TestResponse as BaseResponse;
use Illuminate\Testing\Assert as PHPUnit;
use PHPUnit\Framework\ExpectationFailedException;

class TestResponse extends BaseResponse
{
    public function assertRequiredFields(array $fields): void
    {
        $matched = [];

        if ($errors = $this->json("errors.*.message")) {
            foreach ($errors as $error) {
                foreach ($fields as $field) {
                    if (Str::contains($error, "value.$field")) {
                        $matched[] = $field;
                    }
                }
            }
        }

        $matched = array_unique($matched);

        PHPUnit::assertEqualsCanonicalizing($fields, $matched, 'Required field errors not found.');
    }

    public function assertValidationError(string $field, string $message): void
    {

        $match = false;

        foreach ($this->json("errors") as $error) {
            if ($validation = Arr::get($error, 'extensions.validation')) {
                foreach ($validation as $key => $messages) {
                    if ($key === $field) {
                        foreach ($messages as $validationMessage) {
                            if (Str::contains($validationMessage, $message)) {
                                $match = true;
                            }
                        }
                    }
                }
            }
        }

        PHPUnit::assertTrue($match, "No validation errors found for [$field] matching [$message]");
    }

    public function assertNotAuthenticated(): void
    {
        try {
            $this->assertJson([
                "errors" => [
                    [
                        "message" => "Unauthenticated.",
                    ],
                ],
            ]);
        } catch (ExpectationFailedException $exception) {
            throw new ExpectationFailedException('Authentication did not fail as expected.');
        }
    }

    public function assertNotAuthorized(string $field): void
    {
        try {
            $this->assertJson([
                "errors" => [
                    [
                        "message" => "This action is unauthorized.",
                        "path" => [$field]
                    ]
                ]
            ]);
        } catch (ExpectationFailedException $exception) {
            throw new ExpectationFailedException("Authorisation for $field did not fail as expected.");
        }
    }
}
