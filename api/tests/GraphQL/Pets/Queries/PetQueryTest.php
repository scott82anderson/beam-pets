<?php

namespace Tests\GraphQL\People\Queries;

use App\Models;
use App\Models\Person;
use App\Models\Pet;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class PetQueryTest extends GraphQLTestCase
{
    public function query(array $variables): TestResponse
    {
        return $this->graphQL('
            query GetPet($id: ID!) {
                pet(id: $id) {
                    id
                    name
                    age
                    species
                    owner {
                        id
                    }
                }
            }
        ', $variables);
    }

    /** @test */
    public function it_returns_expected_fields()
    {
        $person = Person::factory()->create();

        $pet = Pet::factory()->create([
            'owner_id' => $person,
        ]);

        $response = $this->query([
            'id' => $pet->id,
        ]);

        $response->assertJson([
            'data' => [
                'pet' => [
                    'id' => (string) $pet->id,
                    'name' => (string) $pet->name,
                    'age' => (int) $pet->age,
                    'species' => (string) $pet->species,
                    'owner' => [
                        'id' => (string) $pet->owner->id,
                    ],
                ],
            ],
        ]);
    }
}
