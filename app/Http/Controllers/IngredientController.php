<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Models\Ingredient;

class IngredientController extends Controller
{
    function index() {
        $firstingredients = Ingredient::where('ingredient', 1);
        $secondingredients= Ingredient::where('ingredient', 2);

        return view("home", ["firstingredients" => $firstingredients, "secondingredients" => $secondingredients]);
    }
}
