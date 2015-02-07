<?php namespace App\Http\Controllers;

use App\Repos\UserRepoInterface as User;
use App\Repos\UserTypeRepoInterface as UserType;
use App\Validators\UserValidator as Validator;
use Redirect;
use Input;
use Auth;
use Exception;

class UserController extends BaseController {

    public function __construct(
        User $user,
        UserType $userType,
        Validator $validator
    )
    {
        $this->user = $user;
        $this->userType = $userType;
        $this->validator = $validator;

        $this->middleware('access.manager', ['except' => ['login', 'processLogin']]);
    }

	/**
	 * Display a listing of the resource.
	 * GET /user
	 *
	 * @return Response
	 */
	public function index()
	{
        return  view('user.index', array('users' => $this->user->allPaginated()));
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /user/create
	 *
	 * @return Response
	 */
	public function create()
	{
        return  view('user.create', array('userTypeOptions' => $this->userType->listOptions('level')));
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /user
	 *
	 * @return Response
	 */
	public function store()
	{
        $validator = $this->validator->make(Input::all());
        if ($validator->fails()) {
            return Redirect::route('users.create')->withInput()->withErrors($validator->messages());
        }

        try {
            $result = $this->milestone->create(Input::all());
        } catch (Exception $e) {
            return Redirect::route('users.create')->with('message', 'An error has occured.')->with('context', 'danger');
        }

        return Redirect::route('users.edit', array($result))->with('message', 'User created!')->with('context', 'success');
	}

	/**
	 * Display the specified resource.
	 * GET /user/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        return Redirect::to('/user/' . $id . '/edit');
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /user/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
        $user = $this->user->find($id, array('userType'));
        if (!$user) {
            return $this->message('No user found', $this->not_found_message);
        }

        return  view('user.edit')->with('user', $user)->with('userTypeOptions', $this->userType->listOptions('level'));
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /user/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
        $validator = $this->validator->existing()->make(Input::all());
        if ($validator->fails()) {
            return Redirect::route('users.edit')->withInput()->withErrors($validator->messages());
        }
        try {
            $this->user->update($id, Input::all());
        } catch (Exception $e) {
            return Redirect::route('users.edit')->with('message', 'An error has occurred.')->with('context', 'danger');
        }
        return Redirect::route('users.edit', array($id))->with('message', 'User Updated!')->with('context', 'success');
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /user/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        try {
            $this->milestone->delete($id);
        } catch (Exception $e) {
            return Redirect::route('users.edit', array($id))->with('message', 'Error deleting user!')->with('context', 'danger');
        }
        return Redirect::route('users.index')->with('message', 'user deleted!')->with('context', 'success');
	}

    public function revive($id)
    {
        try {
            $this->milestone->revive($id);
        } catch (Exception $e) {
            return Redirect::route('users.edit', array($id))->with('message', 'Error reviving user!')->with('context', 'danger');
        }
        return Redirect::route('users.index')->with('message', 'user revived!')->with('context', 'success');
    }
}