<?php

namespace App\Services;

use App\Models\Person;
use Illuminate\Support\Arr;

class People
{
    public function create(array $input): Person
    {
        $attributes = $this->getPersonAttributes($input);

        return Person::factory()->create($attributes);
    }

    public function update(Person $person, array $input): Person
    {
        $attributes = $this->getPersonAttributes($input);

        $person->update($attributes);

        return $person;
    }

    private function getPersonAttributes(array $input): array
    {
        return Arr::only($input, ['name', 'description']);
    }
}
