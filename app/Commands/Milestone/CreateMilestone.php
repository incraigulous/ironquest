<?php namespace App\Commands\Milestones;

use App\Commands\Command,
    Illuminate\Contracts\Bus\SelfHandling,
    App\Ability,
    App\Milestone;

class CreateMilestone extends Command implements SelfHandling {

	public function __construct(array $ability, array $targets, array $ranges, array $attunements, array $milestone)
	{
		$this->ability = $ability;
        $this->targets = $targets;
        $this->ranges = $ranges;
        $this->attunements = $attunements;
        $this->milestone = $milestone;
	}

	/**
	 * Insert the ability and all of it's relationships.
	 *
	 * @return void
	 */
	public function handle()
	{
        DB::transaction(function() {
            $ability = Ability::create($this->ability);
            $ability->targets->attach($this->targets);
            $ability->ranges->attach($this->ranges);
            $ability->attunements->attach($this->attunements);
            $milestone = new Milestone($this->milestone);
            $ability->milestone()->save($milestone);

            event(new AbilityCreated($this->user, $this->podcast));
        });
	}

}
