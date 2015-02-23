<?php namespace App\Http\Requests;

class MilestoneStoreRequest extends Request {

    /**
     * Map validation keys to field names.
     *
     * @var array
     */
    protected $fieldMap = [
        'milestone.name' => 'milestone[name]',
        'milestone.short' => 'milestone[short]',
        'milestone.text' => 'milestone[text]',
        'ability.short' => 'ability[short]',
        'targets' => 'targets[]',
        'ranges' => 'ranges[]'
    ];

    /**
     * Custom attribute names.
     *
     * @var array
     */
    protected $attributeNames = [
        'milestone.name' => 'milestone name',
        'milestone.short' => 'milestone short description',
        'milestone.text' => 'milestone text',
        'ability.short' => 'ability short description'
    ];

    /**
     * Validation Rules.
     *
     * @var array
     */
    protected $rules = [
        'milestone.name' => 'required|max:256',
        'milestone.short' => 'required|max:256',
        'milestone.text' => 'required',
        'ability.short' => 'required_with:rewards_ability|max:256',
        'targets' => 'required_with:rewards_ability',
        'ranges' => 'required_with:rewards_ability'
    ];

    /**
     * Custom rules for repeatable rewards attribute fields.
     */
    protected function buildRules()
    {
        if (!$this->has('rewards_attribute')) return;
        $attributeModifier = $this->input('attribute_modifier');

        foreach($attributeModifier as $id => $input) {
            $idKey = 'attribute_modifier.' . $id . '.id';
            $modKey = 'attribute_modifier.' . $id . '.mod';

            $this->mapField($idKey, 'attribute_modifier[' . $id . '][id]');
            $this->nameAttribute($idKey, 'attribute');
            $this->addRule($idKey, 'required_with:rewards_attribute');

            $this->mapField($modKey, 'attribute_modifier[' . $id . '][mod]');
            $this->nameAttribute($modKey, 'mod');
            $this->addRule($modKey, 'numeric|required_with:' . $idKey);
        }
    }
}
