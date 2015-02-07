<?php namespace App\Http\Controllers;

class DashboardController extends BaseController {

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display the specified resource.
     * GET /directory/
     *
     * @return Response
     */
    public function show()
    {
        return view('dashboard.show');
    }

}