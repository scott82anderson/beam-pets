<?php

namespace Tests\GraphQL;

use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GraphQLTestCase extends TestCase
{
    use RefreshDatabase, MakesGraphQLRequests;

    protected function createTestResponse($response): TestResponse
    {
        return TestResponse::fromBaseResponse($response);
    }
}
