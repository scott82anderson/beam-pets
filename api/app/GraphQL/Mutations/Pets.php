<?php

namespace App\GraphQL\Mutations;

use App\Models\Pet;
use App\Services;
use Illuminate\Support\Facades\Log;

class Pets
{
    public function __construct(
        protected Services\Pets $pets
    ) {
    }

    public function create($root, array $input): Pet
    {
        Log::debug(json_encode($input));
        return $this->pet->create($input);
    }

    public function update($root, array $input): Pet
    {
        $pet = Pet::findOrFail($input['id']);

        return $this->pets->update($pet, $input);
    }
}
