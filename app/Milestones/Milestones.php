<?php
/**
 * Created by PhpStorm.
 * User: craigwann1
 * Date: 2/6/15
 * Time: 10:11 PM
 */

namespace App\Milestones;

use App\AttributeModifier, App\Target, App\Attunement, App\Range, App\Abilities\Abilities;

class Milestones {

    function __construct(Abilities $abilities) {
        $this->abilities = $abilities;
    }

    function getOptionData() {
        return array(
            'attributeModifierOptions' => AttributeModifier::listColumnOptions(),
            'targetOptions' => Target::listOptions(),
            'attunementOptions' => Attunement::listOptions(),
            'rangeOptions' => Range::listOptions()
        );
    }

    /**
     * The abilities class actually takes care of creating our milestone.
     *
     * @param array $data
     * @return boolean
     */
    public function create(array $data)
    {
        $this->abilities->create($data);
    }

    /**
     * The abilities class actually takes care of updating our milestone.
     *
     * @param array $data
     * @return boolean
     */
    public function update(array $data)
    {
        $this->abilities->update($data);
    }

}