<?php namespace App\Http\Controllers;

use App\Milestones\Milestones, App\Http\Requests\MilestoneUpdateRequest, App\Http\Requests\MilestoneStoreRequest, App\Milestone;
use View, Input, Config, Redirect, Exception, App\AttributeModifier, App\Target, App\Attunement, App\Range;

class MilestoneController extends Controller {

	public function __construct(Milestones $milestones)
	{
		$this->milestones = $milestones;

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
        return View::make('milestone.index', array('milestones' => Milestone::paginate(15)));
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /milestone/create
	 *
	 * @return Response
	 */
	public function create()
	{
        return View::make('milestone.create', array(
            'attributeModifierOptions' => AttributeModifier::listColumnOptions(),
            'targetOptions' => Target::listOptions(),
            'attunementOptions' => Attunement::listOptions(),
            'rangeOptions' => Range::listOptions()
        ));
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /milestone
	 *
	 * @return Response
	 */
	public function store(MilestoneStoreRequest $request)
	{
		dd($request->all());
		try {
            $this->dispatchFrom('Command\Abilities\CreateAbility', $request);
		} catch (Exception $exception) {
			Session::flash('message', array('message' => $this->errorFlash, 'context' => 'danger'));
			return Redirect::route('milestones.create');
		}

		Session::flash('message', array('message' => 'Milestone Created!', 'context' => 'success'));
        return Redirect::route('milestones.edit', array(DB::getPdo()->lastInsertId));
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
        $milestone = Milestone::find($id);
        if (!$milestone) {
			Session::flash('message', array('message' => $this->errorFlash, 'context' => 'danger'));
            return $this->message('No milestone found', $this->$notFoundMessage);
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
		try {
			$this->milestones->update(Input::all());
		} catch (Exception $exception) {
			Session::flash('message', array('message' => $this->errorFlash, 'context' => 'danger'));
			return Redirect::route('milestones.edit', $id);
		}

		Session::flash('message', array('message' => 'Milestone updated!', 'context' => 'success'));
        return Redirect::route('milestones.edit', $id);
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