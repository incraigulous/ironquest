<?php namespace App\Commands\Milestones;

use App\Commands\Command,
    Illuminate\Contracts\Bus\SelfHandling,
    App\Ability,
    App\Milestone,
    App\AttributeModifier,
    DB;

class CreateMilestone extends Command implements SelfHandling {

	public function __construct($milestone, $ability = array(), $targets = array(), $ranges = array(), $attunements = array(), $attributeModifiers = array())
	{
		$this->ability = $ability;
        $this->targets = $targets;
        $this->ranges = $ranges;
        $this->attunements = $attunements;
        $this->milestone = $milestone;
        $this->attributeModifiers = $attributeModifiers;
	}

	/**
	 * Insert the milestone along with it's relationships if we have data for them.
	 *
	 * @return void
	 */
	public function handle()
	{
        DB::transaction(function() {
            $milestone = new Milestone($this->milestone);
            if (count($this->ability)) {
                $ability = Ability::create($this->ability);
                $ability->targets()->attach($this->targets);
                $ability->ranges()->attach($this->ranges);
                $ability->attunements()->attach($this->attunements);
                $ability->save();
                $ability->milestone()->save($milestone);
            }

            if (count($this->attributeModifiers)) {
                $attributeModifier = new AttributeModifier();
                foreach($this->attributeModifiers as $input) {
                    $attributeModifier->$input['id'] = $input['mod'];
                }
                $attributeModifier->save();
                $attributeModifier->milestone()->save($milestone);
            }

            if (!$milestone->id) {
                $milestone->save();
            }
        });
	}

}
