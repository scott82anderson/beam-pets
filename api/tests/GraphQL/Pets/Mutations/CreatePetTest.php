<?php

namespace Tests\GraphQL\People\Mutations;

use App\Models\Pet;
use App\Models\Person;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class CreatePetTest extends GraphQLTestCase
{
    public function query(array $variables): TestResponse
    {
        return $this->graphQL(
            '
                mutation CreatePet($input: CreatePetInput!) {
                    createPet(input: $input) {
                        id
                        name
                        age
                        species
                        owner {
                            name
                        }
                    }
                }
            ',
            $variables
        );
    }

    /** @test */
    public function it_creates_a_pet()
    {
        $person = Person::factory()->create();

        $this->query([
            'input' => [
                'name' => 'Fido Dido',
                'age' => 5,
                'species' => 'Golden Retriever',
                'owner' => [
                    'connect' => $person->id,
                ],
            ],
        ]);

        $pet = Pet::where('name', 'Fido Dido')->first();

        $this->assertNotNull($pet);
        $this->assertEquals($pet->age, 5);
        $this->assertEquals($pet->species, 'Golden Retriever');
        $this->assertInstanceOf(Person::class, $pet->owner()->first());
    }
}
