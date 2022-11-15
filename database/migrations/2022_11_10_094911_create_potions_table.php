<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('potions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('picture');
            $table->string('firstingredient');
            $table->string('secondingredient');
            $table->integer('explosiveness');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('potions');
    }
};
