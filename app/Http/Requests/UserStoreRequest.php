<?php namespace App\Http\Requests;

class UserStoreRequest extends Request {


	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'first_name' => 'required',
			'last_name' => 'required',
			'type' => 'required',
			'email' => 'required|email|unique:users',
			'username' => 'required|unique:users|alpha_dash',
			'password' => 'required|between:4,16|alpha_num|confirmed',
		];
	}

}
