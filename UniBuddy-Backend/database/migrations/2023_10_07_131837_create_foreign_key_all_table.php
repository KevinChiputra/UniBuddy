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
        Schema::table('places', function(Blueprint $table) {
            $table->foreign('campus_id')->references('id')->on('campuses');
        });

        Schema::table('reviews', function(Blueprint $table) {
            $table->foreign('place_id')->references('id')->on('places');
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::table('comments', function(Blueprint $table) {
            $table->foreign('place_id')->references('id')->on('places');
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::table('forums', function(Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::table('forum_tags', function(Blueprint $table) {
            $table->foreign('forum_id')->references('id')->on('forums');
        });

        Schema::table('forum_interactions', function(Blueprint $table) {
            $table->foreign('forum_id')->references('id')->on('forums');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
};
