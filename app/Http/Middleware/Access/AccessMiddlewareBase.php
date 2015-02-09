<?php namespace App\Http\Middleware\Access;

use Closure, Auth, Response, Redirect, Request;

abstract class AccessMiddlewareBase {
	protected $level;
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if (Auth::guest())
		{
			if (Request::ajax())
			{
				return Response::make('Unauthorized', 401);
			}
			else
			{
				return redirect('login');
			}
		}

		if (!Auth::checkAccess($this->level)) {
			return Redirect::route('denied');
		};

		return $next($request);
	}

}
