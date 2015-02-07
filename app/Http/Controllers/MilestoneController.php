<?php namespace App\Http\Controllers;

use App\Services\Milestone\Milestone as Milestone;
use App\Services\AttributeModifier\AttributeModifier;
use View as View;
use Input as Input;
use Config as Config;
use Redirect as Redirect;
use App\Http\Requests\MilestoneUpdateRequest;
use App\Http\Requests\MilestoneStoreRequest;

class MilestoneController extends BaseController {

	public function __construct()
	{
		$this->middleware('access.player', ['only' => ['index', 'show']]);
		$this->middleware('access.manager', ['except' => ['index', 'show']]);
	}

	/**
	 * Display a listing of the resource.
	 * GET /milestone
	 *
	 * @return Response
	 */
	public function index()
	{
        return View::make('milestone.index', array('milestones' => $this->milestone->allPaginated()));
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /milestone/create
	 *
	 * @return Response
	 */
	public function create()
	{
        return View::make('milestone.create', $this->milestone->getOptionData());
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /milestone
	 *
	 * @return Response
	 */
	public function store(MilestoneStoreRequest $request)
	{
        if (!$result = $this->milestone->create(Input::all())) {
            return Redirect::route('milestones.create')->withInput()->withErrors($this->milestone->errors());
        }

        return Redirect::route('milestones.edit', array($result));
	}

	/**
	 * Display the specified resource.
	 * GET /milestone/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        return Redirect::to('/milestone/' . $id . '/edit');
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /milestone/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
        $milestone = $this->milestone->find($id);
        if (!$milestone) {
            return $this->message('No milestone found', $this->not_found_message);
        }

        return View::make('milestone.edit', $milestone);
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /milestone/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(MilestoneUpdateRequest $request, $id)
	{
        if (!$result = $this->milestone->update(Input::all())) {
            return Redirect::route('milestones.edit')->withInput()->withErrors($this->milestone->errors());
        }

        return Redirect::route('milestones.edit', array($result));
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /milestone/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        if (!$result = $this->milestone->delete($id)) {
            return Redirect::route('milestones.edit', array($id));
        }

        return Redirect::route('milestones.edit', array($result));
    }
}