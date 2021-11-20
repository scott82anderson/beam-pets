<?php

namespace App\GraphQL\Mutations;

use App\Models\Person;
use App\Services;
use Illuminate\Support\Facades\Log;

class People
{
    public function __construct(
        protected Services\People $people
    ) {
    }

    public function create($root, array $input): Person
    {
        Log::debug(json_encode($input));
        return $this->people->create($input);
    }

    public function update($root, array $input): Person
    {
        $person = Person::findOrFail($input['id']);

        return $this->people->update($person, $input);
    }
}
