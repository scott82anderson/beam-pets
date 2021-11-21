<?php

namespace Tests\GraphQL\People\Mutations;

use App\Models\Person;
use App\Models\Pet;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class DeletePetTest extends GraphQLTestCase
{
    public function query(array $variables): TestResponse
    {
        return $this->graphQL(
            '
                mutation DeletePet($id: ID!) {
                    deletePet(id: $id) {
                        name
                    }
                }
            ',
            $variables
        );
    }

    /** @test */
    public function it_deletes_a_pet()
    {
        $person = Person::factory()->create();

        $pet = Pet::factory()->create([
            'owner_id' => $person,
        ]);

        $this->query([
            'id' => $pet->id,
        ]);

        $pet = Pet::find($pet->id);

        $this->assertNull($pet);
    }
}
