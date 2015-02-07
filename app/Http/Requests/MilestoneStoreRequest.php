<?php namespace App\Http\Requests;

class StoreMilestoneRequest extends Request {

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'milestone.name' => 'required',
			'milestone.short' => 'required|max:256',
			'milestone.text' => 'required',
			'ability.short' => 'required_with:rewards_ability|max:256',
			'targets' => 'required_with:rewards_ability',
			'ranges' => 'required_with:rewards_ability',
			'attribute_modifier[]id' => 'required_with:rewards_attribute',
			'attribute_modifier[]mod' => 'required_with:rewards_attribute|numeric'
		];
	}

}
