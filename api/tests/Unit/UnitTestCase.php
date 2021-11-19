<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Traits\AssertsModels;
use Tests\TestCase;

abstract class UnitTestCase extends TestCase
{
    use RefreshDatabase, AssertsModels;
}
