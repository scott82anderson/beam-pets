<?php

namespace Tests\Unit\Services\People;

use App\Models\Person;
use App\Services\People;
use Tests\Unit\UnitTestCase;

class UpdatePersonTest extends UnitTestCase
{
    /** @test */
    public function it_updates_a_person()
    {
        $person = Person::factory()->create([
            'name' => 'Testy McTester',
            'description' => 'A real swell bean',
        ]);

        $repository = resolve(People::class);

        $repository->update($person, [
            'name' => 'Testy McTesterson',
            'description' => 'A real swell beanstalk',
            'ignored' => 'field',
        ]);

        $person->refresh();
        $this->assertNotNull($person);
        $this->assertEquals($person->name, 'Testy McTesterson');
        $this->assertEquals($person->description, 'A real swell beanstalk');
        $this->assertNull($person->ignored);
    }
}
