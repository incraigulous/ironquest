<?php namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use View;

abstract class Request extends FormRequest {
    protected $fieldMap = array();
    protected $attributeNames = array();

    public function authorize()
    {
        return true;
    }

    /**
     * Returns an array used to relate validation keys to field names.
     *
     * @return array
     */
    public function fieldMap() {

        return $this->fieldMap;

    }

    /**
     * Returns attribute name array for rewriting filed names.
     */
    public function attributeNames() {

        return $this->attributeNames;

    }

    /**
     * Get the proper failed validation response for the request.
     *
     * @param  array  $errors
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function response(array $errors)
    {
        if ($this->ajax() || $this->wantsJson())
        {
            $elements = array();
            foreach($errors as $name => $error) {
                $elements[] = array(
                    'target' => "[name='" . $this->getFieldName($name) . "']",
                    'bsFieldError' => $error[0]
                );
            }
            $response = [
                'elements' => $elements
            ];
            return new JsonResponse($response);
        }

        return $this->redirector->to($this->getRedirectUrl())
            ->withInput($this->except($this->dontFlash))
            ->withErrors($errors, $this->errorBag);
    }

    /**
     * Get a field name a validator key from the field map. If validator key isn't set in the field map, return the validator key.
     *
     * @param $validatorKey
     * @return string
     */
    public function getFieldName($validatorKey) {
        if (!empty($this->fieldMap()[$validatorKey])) return $this->fieldMap()[$validatorKey];
        return $validatorKey;
    }

    /**
     * Map a validator key to a field name.
     *
     * @param $validatorKey
     * @param $fieldName
     */
    public function mapField($validatorKey, $fieldName) {
        $this->fieldMap[$validatorKey] = $fieldName;
    }

    /**
     * Add a custom attribute Name.
     *
     * @param $validatorKey
     * @param $name
     */
    public function nameAttribute($validatorKey, $name) {
        $this->attributeNames[$validatorKey] = $name;
    }

    /**
     * Get the validator instance for the request.
     *
     * @return \Illuminate\Validation\Validator
     */
    protected function getValidatorInstance()
    {
        $validator = parent::getValidatorInstance();
        $validator->setAttributeNames($this->attributeNames());
        return $validator;
    }

}
