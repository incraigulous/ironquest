<?php namespace App\Http\Controllers;

use App\Commands\Milestones\CreateMilestone;
use App\Milestones\Milestones, App\Http\Requests\MilestoneUpdateRequest, App\Http\Requests\MilestoneStoreRequest, App\Milestone;
use View, Input, Config, Redirect, Exception, App\AttributeModifier, App\Target, App\Attunement, App\Range, Event, Session, Illuminate\Http\JsonResponse;

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
	 * @return JsonResponse
	 */
	public function store(MilestoneStoreRequest $request)
	{
		try {
            $this->dispatch(
                new CreateMilestone(
                    $request->get('milestone'),
                    ($request->has('rewards_ability')) ? $request->get('ability') : array(),
                    ($request->has('rewards_ability')) ? $request->get('targets') : array(),
                    ($request->has('rewards_ability')) ? $request->get('ranges') : array(),
                    ($request->has('rewards_ability')) ? $request->get('attunements') : array(),
                    ($request->has('rewards_attribute')) ? $request->get('attribute_modifier') : array()
                )
            );
		} catch (Exception $exception) {
            return new JsonResponse(array(
                'message' => $exception->getMessage()
            ));
		}
        return new JsonResponse(array(
            'redirect' => '/milestones'
        ));
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
        return Redirect::to('/milestones/' . $id . '/edit');
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

        return View::make('milestone.update', array(
            'milestone' => $milestone,
            'attributeModifierOptions' => AttributeModifier::listColumnOptions(),
            'targetOptions' => Target::listOptions(),
            'attunementOptions' => Attunement::listOptions(),
            'rangeOptions' => Range::listOptions()
        ));
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
            $this->dispatch(
                new UpdateMilestone(
                    $request->get('milestone'),
                    ($request->has('rewards_ability')) ? $request->get('ability') : array(),
                    ($request->has('rewards_ability')) ? $request->get('targets') : array(),
                    ($request->has('rewards_ability')) ? $request->get('ranges') : array(),
                    ($request->has('rewards_ability')) ? $request->get('attunements') : array(),
                    ($request->has('rewards_attribute')) ? $request->get('attribute_modifier') : array()
                )
            );
        } catch (Exception $exception) {
            return new JsonResponse(array(
                'message' => $exception->getMessage()
            ));
        }
        return new JsonResponse(array(
            'redirect' => '/milestones'
        ));
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