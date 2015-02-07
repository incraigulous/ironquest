<?php namespace App\Http\Controllers;

use App\Repos\Eloquent\HomeRepo as Home;

class HomeController extends BaseController {

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