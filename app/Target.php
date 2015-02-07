<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Target extends Model {
    use OptionableTrait;

    //protected $table = '';

    //protected $primaryKey = '';

    protected $fillable = [];

    public function target() {
        return $this->belongsToMany('App\Target', 'ability_has_targets');
    }
}
