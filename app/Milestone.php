<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Milestone extends Model {
    use OptionableTrait;

    //protected $table = '';

    //protected $primaryKey = '';

    protected $fillable = [];

    protected $guarded = array('id');

    public function attributeModifier()
    {
        return $this->hasOne('App\AttributeModifier', 'id', 'attribute_modifier_id');
    }
}
