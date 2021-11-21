<?php

namespace App\Services;

use App\Models\Pet;
use Illuminate\Support\Arr;

class Pets
{
    public function create(array $input): Pet
    {
        $attributes = $this->getPetAttributes($input);

        return Pet::factory()->create($attributes);
    }

    public function update(Pet $pet, array $input): Pet
    {
        $attributes = $this->getPetAttributes($input);

        $pet->update($attributes);

        return $pet;
    }

    private function getPetAttributes(array $input): array
    {
        return Arr::only($input, ['name', 'age', 'species', 'owner_id']);
    }
}
