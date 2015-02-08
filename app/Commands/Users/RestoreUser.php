<?php namespace App\Commands\Users;

use App\Commands\Command;

use Illuminate\Contracts\Bus\SelfHandling;

class RestoreUser extends Command implements SelfHandling {

	/**
	 * Create a new command instance.
	 *
	 */
	public function __construct($id)
	{
		$this->id = $id;
	}

	/**
	 * Execute the command.
	 *
	 * @return void
	 */
	public function handle()
	{
        User::withTrashed()->where('id', '=', $this->id)->restore();
	}

}
