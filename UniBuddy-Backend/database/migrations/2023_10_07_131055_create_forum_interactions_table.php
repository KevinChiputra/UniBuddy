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
        Schema::create('forum_interactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('forum_id');
            $table->unsignedBigInteger('user_id');
            $table->datetime('date');
            $table->enum('type', ['like', 'dislike']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forum_interactions');
    }
};
