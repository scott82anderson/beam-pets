<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Artisan;
use RuntimeException;

class TestController extends Controller
{
  public function __construct()
  {
    if (env('PLATFORM_ENV') === 'production') {
      throw new RuntimeException("Not allowed in production.");
    };
  }

  public function reset(): JsonResponse
  {
    Artisan::call('migrate:refresh');

    return response()->json();
  }
}
