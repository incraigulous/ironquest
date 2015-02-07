<?php
/**
 * Created by PhpStorm.
 * User: craigwann1
 * Date: 2/6/15
 * Time: 10:11 PM
 */

namespace App\Milestones;

use App\AttributeModifier, App\Target, App\Attunement, App\Range;

class Milestone {

    function getOptionData() {
        return array(
            'attributeModifierOptions' => App::make('Ironquest\Repos\AttributeModifierRepoInterface')->listColumnOptions(),
            'targetOptions' => App::make('Ironquest\Repos\TargetRepoInterface')->listOptions(),
            'attunementOptions' => App::make('Ironquest\Repos\AttunementRepoInterface')->listOptions(),
            'rangeOptions' => App::make('Ironquest\Repos\RangeRepoInterface')->listOptions()
        );
    }

}