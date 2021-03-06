<?php namespace App\Commands\Users;

use App\Commands\Command, App\User, Illuminate\Contracts\Bus\SelfHandling, ReflectionMethod;

class UpdateUser extends Command implements SelfHandling {

    protected $id, $first_name, $last_name, $username, $email, $user_type_id, $password;
    /**
     * Create a new command instance.
     *
     */
    public function __construct($id, $first_name, $last_name, $username, $email, $user_type_id, $password)
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
        $user = User::find($this->id);
        $user->first_name = $this->first_name;
        $user->last_name = $this->last_name;
        $user->username = $this->username;
        $user->email = $this->email;
        $user->user_type_id = $this->user_type_id;
        $user->password = bcrypt($this->password);
        $user->save();
	}

}
