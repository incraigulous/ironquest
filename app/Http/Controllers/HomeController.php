<?php namespace App\Http\Controllers;

class HomeController extends Controller {

	/**
	 * View content.
	 * GET /home/
	 *
	 * @return Response
	 */
	public function show()
	{
        return view('home');
	}

}