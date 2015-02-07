<?php
/**
 * Created by PhpStorm.
 * User: craigwann1
 * Date: 2/6/15
 * Time: 11:16 PM
 */

namespace App\Abilities;

use App\Ability;
use App\Milestone;

class Abilities {

    public function create(array $input)
    {
        $ability = Ability::create($input['ability']);
        $ability->targets->attach($input['targets']);
        $ability->ranges->attach($input['ranges']);
        $ability->attunements->attach($input['attunements']);
        $milestone = new Milestone($input['milestones']);
        $ability->milestone()->save($milestone);
        return $ability;
    }

    public function update(array $input)
    {

    }
}