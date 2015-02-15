<div id="message"></div>

{!! Form::openGroup('milestone_name') !!}
{!! Form::text('milestone_name', null, array('placeholder' => 'Name')) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('milestone_short') !!}
{!! Form::textarea('milestone_short', null, array('placeholder' => 'Short Description', 'maxlength' => 256, 'rows' => 3)) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('milestone_text') !!}
{!! Form::textarea('milestone_text', null, array('placeholder' => 'Full Text', 'maxlength' => 256, 'rows' => 3)) !!}
{!! Form::closeGroup() !!}

<hr />

<h2>What does it do?</h2>

<div class="drawer">
    {!! Form::openGroup('rewards_ability') !!}
    {!! Form::inlineCheckbox('rewards_ability', null, 'It awards an ability.', false, ['class' => 'drawer-toggle']) !!}
    {!! Form::closeGroup() !!}

    <div class="drawer-target">
        {!! Form::openGroup('ability_short') !!}
        {!! Form::textarea('ability_short', null, array('class' => 'drawer-toggle', 'placeholder' => 'Ability Short Description', 'maxlength' => 256, 'rows' => 3)) !!}
        {!! Form::closeGroup() !!}

        {!! Form::openGroup('targets') !!}
        {!! Form::select('targets', $targetOptions, null, array('multiple' => true, 'placeholder' => 'Select Targets')) !!}
        {!! Form::closeGroup() !!}

        {!! Form::openGroup('ranges') !!}
        {!! Form::select('ranges', $rangeOptions, null, array('multiple' => true, 'placeholder' => 'Select Ranges')) !!}
        {!! Form::closeGroup() !!}

        {!! Form::openGroup('attunements') !!}
        {!! Form::select('attunements', $attunementOptions, null, array('multiple' => true, 'placeholder' => 'Select Attunements')) !!}
        {!! Form::closeGroup() !!}

        <hr />
    </div>
</div>

<div class="drawer">
    {!! Form::openGroup('rewards_attribute') !!}
        {!! Form::inlineCheckbox('rewards_attribute', null, 'It awards an attribute modifier.', false, ['class' => 'drawer-toggle']) !!}
    {!! Form::closeGroup() !!}

    <div class="drawer-target">
        <div class="repeatable">
                <div class="col-sm-9 no-left">
                    {!! Form::openGroup('attribute_modifier[id][]') !!}
                    {!! Form::select('attribute_modifier[id][]', array_merge(array('' => 'Choose Attribute...'), $attributeModifierOptions), array('id' => 'attribute')) !!}
                    {!! Form::closeGroup() !!}
                </div>
                <div class="col-sm-2 large-text">
                    {!! Form::openGroup('attribute_modifier[mod][]') !!}
                    {!! Form::text('attribute_modifier[mod][]', Input::old('username'), array('placeholder' => 'Mod Num', 'id' => 'attribute_modifier')) !!}
                    {!! Form::closeGroup() !!}
                </div>
                <div class="col-sm-1 large-text">
                    <i class="fa fa-plus repeater-add"></i>
                    <i class="fa fa-minus repeater-remove"></i>
                </div>
         </div>
    </div>
</div>

