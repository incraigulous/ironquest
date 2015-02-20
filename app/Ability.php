<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Ability extends Model {
    use OptionableTrait;

    //protected $table = '';

    //protected $primaryKey = '';

    protected $guarded = [];
    protected $table = 'ability';

    public function milestone() {
        return $this->hasOne('App\Milestone', 'id', 'ability_id');
    }

    public function ranges()
    {
        return $this->belongsToMany('App\Range', 'ability_has_ranges', 'ability_id', 'ranges_id');
    }

    public function targets()
    {
        return $this->belongsToMany('App\Target', 'ability_has_targets', 'ability_id', 'targets_id');
    }

    public function attunements()
    {
        return $this->belongsToMany('App\Attunement', 'ability_has_attunements', 'ability_id', 'attunements_id');
    }
}
