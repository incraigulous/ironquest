<?php namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest, App\Http\Requests\UserUpdateRequest,
    App\Commands\Users\RestoreUser,
    App\User, App\UserType,
    Redirect, Request, Auth, Exception;

class UserController extends Controller {

    public function __construct()
    {
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
        return view('user.index', array('users' => User::paginate(15)));
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /user/create
	 *
	 * @return Response
	 */
	public function create()
	{
        return view('user.create', array('userTypeOptions' => UserType::listOptions('level')));
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /user
	 *
	 * @return Response
	 */
	public function store(UserStoreRequest $request)
	{
        try {
            $this->dispatchFrom('Command\Users\CreateUser', $request);
        } catch (Exception $e) {
            return Redirect::route('users.create')->with('message', 'An error has occured.')->with('context', 'danger');
        }

        return Redirect::route('users.edit', array(DB::getPdo()->lastInsertId))->with('message', 'User created!')->with('context', 'success');
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
        $user = User::find($id)->with('UserType');
        if (!$user) {
            return $this->message('No user found', $this->not_found_message);
        }

        return  view('user.edit')->with('user', $user)->with('userTypeOptions', UserTYpe::listOptions('level'));
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /user/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(UserUpdateRequest $request, $id)
	{
        try {
            $this->dispatchFrom('Command\Users\UpdateUser', $request, ['id' => $id]);
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
            User::delete($id);
        } catch (Exception $e) {
            return Redirect::route('users.edit', array($id))->with('message', 'Error deleting user!')->with('context', 'danger');
        }
        return Redirect::route('users.index')->with('message', 'user deleted!')->with('context', 'success');
	}

    public function revive($id)
    {
        try {
            $this->dispatch(new RestoreUser($id));
        } catch (Exception $e) {
            return Redirect::route('users.edit', array($id))->with('message', 'Error reviving user!')->with('context', 'danger');
        }
        return Redirect::route('users.index')->with('message', 'user revived!')->with('context', 'success');
    }
}