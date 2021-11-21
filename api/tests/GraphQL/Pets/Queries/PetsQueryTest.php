<?php

namespace Tests\GraphQL\Pets\Queries;

use App\Models;
use App\Models\Person;
use App\Models\Pet;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class PetsQueryTest extends GraphQLTestCase
{
    public function query(): TestResponse
    {
        return $this->graphQL('
            query GetPets {
                pets {
                    id
                    name
                    age
                    species
                }
            }
        ');
    }

    /** @test */
    public function it_returns_expected_fields()
    {
        $person = Person::factory()->create();

        $pets = Pet::factory()
            ->count(2)
            ->create([
                'owner_id' => $person,
            ]);

        $response = $this->query();

        $expecting = [
            'data' => [
                'pets' => [],
            ],
        ];

        foreach ($pets as $pet) {
            $expecting['data']['pets'][] = [
                'id' => (string) $pet->id,
                'name' => (string) $pet->name,
                'age' => (int) $pet->age,
                'species' => (string) $pet->species,
            ];
        }

        $response->assertJson($expecting);
    }
}
