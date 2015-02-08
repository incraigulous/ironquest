<?php namespace App\Commands\Users;

use App\Commands\Command, ReflectionMethod, App\User;

use Illuminate\Contracts\Bus\SelfHandling;

class CreateUser extends Command implements SelfHandling {

    protected $first_name, $last_name, $username, $email, $type, $password;

	/**
	 * Create a new command instance.
	 *
	 */
	public function __construct($first_name, $last_name, $username, $email, $type, $password)
	{
        $r = new ReflectionMethod(get_class(), '__construct');
        $params = $r->getParameters();

        foreach($params as $paramater) {
            $name = $paramater->name;
            $this->$name = $$name;
        }
	}

	/**
	 * Execute the command.
	 *
	 * @return void
	 */
	public function handle()
	{
		$user = new User();
        $user->first_name = $this->first_name;
        $user->last_name = $this->last_name;
        $user->username = $this->username;
        $user->email = $this->email;
        $user->user_type_id = $this->type;
        $user->password = bcrypt($this->password);
        $user->save();
	}

}
