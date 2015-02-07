<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class UserType extends Model {
    use SoftDeletingTrait;
    use OptionableTrait;

    //protected $table = '';

    //protected $primaryKey = '';

    protected $fillable = [];
}
