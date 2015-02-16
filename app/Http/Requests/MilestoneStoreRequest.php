<?php namespace App\Http\Requests;

class MilestoneStoreRequest extends Request {

    /**
     * Map validation keys to field names.
     *
     * @var array
     */
    protected $fieldMap = [
        'milestone.name' => 'milestone[name]',
        'milestone.short' => 'milestone[short]',
        'milestone.text' => 'milestone[text]',
        'ability.short' => 'ability[short]',
    ];

    /**
     * Custom attribute names.
     *
     * @var array
     */
    protected $attributeNames = [
        'milestone.name' => 'milestone name',
        'milestone.short' => 'milestone short description',
        'milestone.text' => 'milestone text',
        'ability.short' => 'ability short description'
    ];

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'milestone.name' => 'required|max:256',
			'milestone.short' => 'required|max:256',
			'milestone.text' => 'required',
			'ability.short' => 'required_with:rewards_ability|max:256',
			'targets' => 'required_with:rewards_ability',
			'ranges' => 'required_with:rewards_ability',
		];
	}

}
