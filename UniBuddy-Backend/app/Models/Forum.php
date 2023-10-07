<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
    use HasFactory;

    protected $table = 'forums';
    protected $fillable = ['user_id', 'date', 'forum_text'];
    public $timestamps = false;

    public function interactions()
    {
        return $this->hasMany(ForumInteraction::class, 'forum_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
