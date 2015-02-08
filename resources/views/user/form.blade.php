{!! Form::openGroup('first_name') !!}
{!! Form::text('first_name', null, array('placeholder' => 'First Name')) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('last_name') !!}
{!! Form::text('last_name', null, array('placeholder' => 'Last Name')) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('email') !!}
{!! Form::email('email', null, array('placeholder' => 'Email')) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('username') !!}
{!! Form::text('username', null, array('placeholder' => 'Username')) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('type') !!}
{!! Form::select('type', $userTypeOptions) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('password') !!}
{!! Form::password('password', array('placeholder' => 'Password')) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('password_confirmation') !!}
{!! Form::password('password_confirmation', array('placeholder' => 'Confirm Password')) !!}
{!! Form::closeGroup() !!}