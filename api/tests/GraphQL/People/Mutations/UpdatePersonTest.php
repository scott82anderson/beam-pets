<?php

namespace Tests\GraphQL\People\Mutations;

use App\Models\Person;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class UpdatePersonTest extends GraphQLTestCase
{
    public function query(array $variables): TestResponse
    {
        return $this->graphQL(
            '
                mutation UpdatePerson($input: UpdatePersonInput!) {
                    updatePerson(input: $input) {
                        id
                        name
                        description
                    }
                }
            ',
            $variables
        );
    }

    /** @test */
    public function it_updates_a_person()
    {
        $person = Person::factory()->create();

        $this->query([
            'input' => [
                'id' => $person->id,
                'name' => 'Foo Person',
                'description' => 'Updated description',
            ]
        ]);

        $person->refresh();
        $this->assertEquals($person->name, 'Foo Person');
        $this->assertEquals($person->description, 'Updated description');
    }
}
