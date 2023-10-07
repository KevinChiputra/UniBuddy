<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;

    protected $table = 'places';
    protected $fillable = ['campus_id', 'name', 'brief_description', 'description', 'type', 'gofood_link', 'gmaps_link'];
    public $timestamps = false;

    public function reviews()
    {
        return $this->hasMany(Review::class, 'place_id', 'id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'comment_id', 'id');
    }

    public function campus()
    {
        return $this->belongsTo(Campus::class, 'campus_id', 'id');
    }
}
