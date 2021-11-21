<?php

namespace App\GraphQL\Mutations;

use App\Models\Pet;
use App\Services;

class Pets
{
    public function __construct(
        protected Services\Pets $pets
    ) {
    }

    public function create($root, array $input): Pet
    {
        return $this->pet->create($input);
    }

    public function update($root, array $input): Pet
    {
        $pet = Pet::findOrFail($input['id']);

        return $this->pets->update($pet, $input);
    }
}
