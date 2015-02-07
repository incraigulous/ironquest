<?php namespace App\Http\Requests;

class UserUpdateRequest extends Request {

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
			'user_type_id' => 'required',
			'email' => 'required|email|unique:users',
			'username' => 'required',
			'password' => 'required|between:4,16|alpha_num'
		];
	}

}
