<?php

namespace Tests\GraphQL\People\Mutations;

use App\Models\Person;
use Tests\GraphQL\GraphQLTestCase;
use Tests\GraphQL\TestResponse;

class CreatePersonTest extends GraphQLTestCase
{
    public function query(array $variables): TestResponse
    {
        return $this->graphQL(
            '
                mutation CreatePerson($input: CreatePersonInput!) {
                    createPerson(input: $input) {
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
    public function it_creates_a_person()
    {
        $this->query([
            'input' => [
                'name' => 'Testy McTester',
                'description' => 'A cool test person',
            ]
        ]);

        $person = Person::where('name', 'Testy McTester')->first();

        $this->assertNotNull($person);
        $this->assertEquals($person->description, 'A cool test person');
    }
}
