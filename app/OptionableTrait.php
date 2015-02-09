<?php
/**
 * Created by PhpStorm.
 * User: craig
 * Date: 12/2/14
 * Time: 7:04 PM
 *
 * Lists a model's rows or structure as an option list compatible with laravel's form helper select objects.
 * Requires model name class var.
 */

namespace App;

use DB; use Schema;

trait OptionableTrait {

    protected $database = 'ironquest';

    function scopeListOptions($query, $orderBy = 'id', $format = array('id' => 'name'))
    {
        $data = $query->orderBy($orderBy)->get()->toArray();
        $result = [];
        foreach($data as $row) {
            $result[$row[key($format)]] = $row[$format[key($format)]];
        }
        return $result;
    }

    function scopelistColumnOptions($query)
    {
        $columns = Schema::getColumnListing($this->getTable());

        $result = [];
        foreach($columns as $column) {
            if (($column != 'id') &&
                ($column != 'name') &&
                ($column != 'created_at') &&
                ($column != 'updated_at') &&
                ($column != 'deleted_at')) {
                $result[$column] = ucwords(str_replace('_', ' ', $column));
            }
        }
        return $result;
    }
}