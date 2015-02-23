<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class AttributeModifier extends Model {
    use OptionableTrait;

    //protected $table = '';

    //protected $primaryKey = '';

    protected $fillable = [];

    public function milestone() {
        return $this->hasOne('App\Milestone', 'attribute_modifiers_id', 'id');
    }
}
