<?php namespace App\Http\Requests;

class MilestoneStoreRequest extends Request {

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'milestone_name' => 'required',
			'milestone_short' => 'required|max:256',
			'milestone_text' => 'required',
			'ability_short' => 'required_with:rewards_ability|max:256',
			'targets' => 'required_with:rewards_ability',
			'ranges' => 'required_with:rewards_ability',
		];
	}

}
