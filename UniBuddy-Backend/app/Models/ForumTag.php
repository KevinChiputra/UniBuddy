<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForumTag extends Model
{
    use HasFactory;

    protected $table = 'forum_tags';
    protected $fillable = ['forum_id', 'tag'];
    public $timestamps = false;

    public function forum()
    {
        return $this->belongsTo(Forum::class, 'forum_id', 'id');
    }
}
