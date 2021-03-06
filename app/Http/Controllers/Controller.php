<?php namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesCommands;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;

abstract class Controller extends BaseController {

	use DispatchesCommands, ValidatesRequests;

	protected $errorFlash = 'An unexpected error has occurred.';
    protected $notFoundMessage = "You must have failed your perception check.";

	function message($header, $message) {
		return view('message', array('header' => $header, 'message' => $message));
	}

}
