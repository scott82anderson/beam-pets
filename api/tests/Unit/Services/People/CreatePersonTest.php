<?php

namespace Tests\Unit\Services\People;

use App\Services\People;
use Tests\Unit\UnitTestCase;

class CreatePersonTest extends UnitTestCase
{
    /** @test */
    public function it_creates_a_person()
    {
        $repository = resolve(People::class);

        $person = $repository->create([
            'name' => 'Testy McTester',
            'description' => 'A real swell bean',
            'ignored' => 'field',
        ]);

        $this->assertNotNull($person);
        $this->assertEquals($person->name, 'Testy McTester');
        $this->assertEquals($person->description, 'A real swell bean');
        $this->assertNull($person->ignored);
    }
}
