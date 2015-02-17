<?php namespace App\Events;

use App\Events\Event;

use Illuminate\Queue\SerializesModels;

class MilestoneCreated extends Event {

	use SerializesModels;

	public function __construct($milestone)
	{
		$this->milestone = $milestone;
	}

}
