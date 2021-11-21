<?php

namespace App\GraphQL\Mutations;

use App\Models\Person;
use App\Services;

class People
{
    public function __construct(
        protected Services\People $people
    ) {
    }

    public function create($root, array $input): Person
    {
        return $this->people->create($input);
    }

    public function update($root, array $input): Person
    {
        $person = Person::findOrFail($input['id']);

        return $this->people->update($person, $input);
    }
}
