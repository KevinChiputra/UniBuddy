<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForumInteraction extends Model
{
    use HasFactory;

    protected $table = 'forum_interactions';
    protected $fillable = ['forum_id', 'user_id', 'date', 'type'];
    public $timestamps = false;

    public function forum()
    {
        return $this->belongsTo(Forum::class, 'forum_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
