<?php

namespace Tests\GraphQL\People\Mutations;

use App\Models\Person;
use App\Models\Pet;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class UpdatePetTest extends GraphQLTestCase
{
    public function query(array $variables): TestResponse
    {
        return $this->graphQL(
            '
                mutation UpdatePet($input: UpdatePetInput!) {
                    updatePet(input: $input) {
                        id
                        name
                        age
                        species
                    }
                }
            ',
            $variables
        );
    }

    /** @test */
    public function it_updates_a_pet()
    {
        $person = Person::factory()->create();

        $pet = Pet::factory()->create([
            'owner_id' => $person,
        ]);

        $this->query([
            'input' => [
                'id' => $pet->id,
                'name' => 'Foo Pet',
                'age' => 6,
                'species' => 'Poodle'
            ],
        ]);

        $pet->refresh();
        $this->assertEquals($pet->name, 'Foo Pet');
        $this->assertEquals($pet->age, 6);
        $this->assertEquals($pet->species, 'Poodle');
    }
}
