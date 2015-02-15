<?php namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use View;

abstract class Request extends FormRequest {

    public function authorize()
    {
        return true;
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
                    'target' => "[name='" . $name . "']",
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

}
