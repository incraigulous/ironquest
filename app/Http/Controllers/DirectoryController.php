<?php namespace App\Http\Controllers;

class DirectoryController extends BaseController {

	public function __construct()
	{
		$this->middleware('access.player');
	}

	/**
	 * Display the specified resource.
	 * GET /directory/
	 *
	 * @return Response
	 */
	public function show()
	{
        return view('directory.show');
	}

}