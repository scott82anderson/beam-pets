<?php

namespace Tests\Traits;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

trait AssertsModels
{
    public function assertModelAttributes(Model $expected, Model $actual)
    {
        $this->assertEquals(
            Arr::except($expected->getAttributes(), ['id']),
            Arr::except($actual->getAttributes(), ['id'])
        );
    }

    public function assertModelAttributesExcept(Model $expected, Model $actual, array $except)
    {
        $this->assertEquals(
            Arr::except($expected->getAttributes(), $except),
            Arr::except($actual->getAttributes(), $except)
        );
    }

    public function assertHasSoftDeletes(Model $model)
    {
        $hasSoftDeletes = in_array(SoftDeletes::class, class_uses($model));

        $this->assertTrue($hasSoftDeletes, get_class($model) . " does not implement soft deletes.");
    }

    public function assertNoSoftDeletes(Model $model)
    {
        $hasSoftDeletes = in_array(SoftDeletes::class, class_uses($model));

        $this->assertFalse($hasSoftDeletes, get_class($model) . " does not implement soft deletes.");
    }
}
