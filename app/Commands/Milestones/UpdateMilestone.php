<?php namespace App\Commands\Milestones;

use Illuminate\Contracts\Bus\SelfHandling,
    App\Ability,
    App\Milestone,
    App\AttributeModifier,
    DB;

class UpdateMilestone extends CreateMilestone implements SelfHandling {

	/**
	 * Update the milestone along with it's relationships if we have data for them.
	 *
	 * @return void
	 */
	public function handle()
	{
        DB::transaction(function() {
            $milestone = Milestone::find($this->milestone['id']);
            $milestone->name = $this->ability['name'];
            $milestone->text = $this->ability['short'];
            $milestone->short = $this->ability['text'];
            if (count($this->ability)) {
                $ability = Ability::findOrNew($this->ability['id']);
                $ability->short = $this->ability['short'];
                $ability->targets()->sync($this->targets);
                $ability->ranges()->sync($this->ranges);
                $ability->attunements()->sync($this->attunements);
                $ability->save();
                $milestone->ability_id = $ability->id;
            } else {
                $milestone->ability_id = null;
            }

            if (count($this->attributeModifiers)) {
                $attributeModifier = new AttributeModifier();
                $columns = $attributeModifier->listColumnOptions();
                foreach($columns as $key => $value) {
                    $attributeModifier->$key = (!empty($this->attributeModifiers[$key])) ? $this->attributeModifiers[$key] : null;
                }
                $attributeModifier->save();
                $milestone->attribute_modifier_id = $attributeModifier->id;
            } else {
                $milestone->attribute_modifier_id = null;
            }

            $milestone->save();
        });
	}

}
