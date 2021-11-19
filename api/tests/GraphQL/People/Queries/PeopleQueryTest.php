<?php

namespace Tests\GraphQL\People\Queries;

use App\Models;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class PeopleQueryTest extends GraphQLTestCase
{
    public function query(): TestResponse
    {
        return $this->graphQL('
            query GetPeople {
                people {
                    id
                    name
                }
            }
        ');
    }

    /** @test */
    public function it_returns_expected_fields()
    {
        $people = Models\Person::factory()
            ->count(2)
            ->create();

        $response = $this->query();

        $expecting = [
            'data' => [
                'people' => [],
            ],
        ];

        foreach ($people as $person) {
            $expecting['data']['people'][] = [
                'id' => (string) $person->id,
                'name' => (string) $person->name,
            ];
        }

        $response->assertJson($expecting);
    }
}
