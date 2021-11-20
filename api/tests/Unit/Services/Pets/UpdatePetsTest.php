<?php

namespace Tests\Unit\Services\Pets;

use App\Models\Person;
use App\Models\Pet;
use App\Services\Pets;
use Tests\Unit\UnitTestCase;

class UpdatePetsTest extends UnitTestCase
{
    /** @test */
    public function it_updates_a_pet()
    {
        $person = Person::factory()->create();

        $pet = Pet::factory()->create([
            'name' => 'Fido Dido',
            'age' => 5,
            'species' => 'Golden Retriever',
            'owner_id' => $person->id,
        ]);

        $repository = resolve(Pets::class);

        $repository->update($pet, [
            'name' => 'Toothless',
            'age' => 88,
            'species' => 'Dragon',
            'ignored' => 'field',
        ]);

        $pet->refresh();
        $this->assertNotNull($pet);
        $this->assertEquals($pet->name, 'Toothless');
        $this->assertEquals($pet->age, 88);
        $this->assertEquals($pet->species, "Dragon");
        $this->assertInstanceOf(Person::class, $pet->owner()->first());
    }
}
