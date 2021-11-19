<?php

namespace Tests\GraphQL\People\Queries;

use App\Models;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class PersonQueryTest extends GraphQLTestCase
{
    public function query(array $variables): TestResponse
    {
        return $this->graphQL('
            query GetPerson($id: ID!) {
                person(id: $id) {
                    id
                    name
                }
            }
        ', $variables);
    }

    /** @test */
    public function it_returns_expected_fields()
    {
        $person = Models\Person::factory()
            ->create();

        $response = $this->query([
            'id' => $person->id,
        ]);

        $response->assertJson([
            'data' => [
                'person' => [
                    'id' => (string) $person->id,
                    'name' => (string) $person->name,
                ],
            ],
        ]);
    }
}
