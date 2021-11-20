<?php

namespace Tests\Unit\Services\Pets;

use App\Models\Person;
use App\Services\Pets;
use Tests\Unit\UnitTestCase;

class CreatePetTest extends UnitTestCase
{
    /** @test */
    public function it_creates_a_pet()
    {
        $person = Person::factory()->create();

        $repository = resolve(Pets::class);

        $pet = $repository->create([
            'name' => 'Fido Dido',
            'age' => 5,
            'species' => 'Golden Retriever',
            'owner_id' => $person->id,
            'ignored' => 'field',
        ]);

        $this->assertNotNull($pet);
        $this->assertEquals($pet->name, 'Fido Dido');
        $this->assertEquals($pet->age, 5);
        $this->assertEquals($pet->species, 'Golden Retriever');
        $this->assertNull($pet->ignored);
        $this->assertInstanceOf(Person::class, $pet->owner()->first());
    }
}
