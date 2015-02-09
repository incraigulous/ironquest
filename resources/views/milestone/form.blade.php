{!! Form::openGroup('milestone[name]') !!}
{!! Form::text('milestone[name]', null, array('placeholder' => 'Name')) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('milestone[short]') !!}
{!! Form::textarea('milestone[short]', null, array('placeholder' => 'Short Description', 'maxlength' => 256, 'rows' => 3)) !!}
{!! Form::closeGroup() !!}

{!! Form::openGroup('milestone[text]') !!}
{!! Form::textarea('milestone[text]', null, array('placeholder' => 'Full Text', 'maxlength' => 256, 'rows' => 3)) !!}
{!! Form::closeGroup() !!}

<hr />

<h2>What does it do?</h2>

<div class="drawer">

    {!! Form::openGroup('rewards_ability', 'It awards an ability.') !!}
    {!! Form::checkbox('rewards_ability', null, null, array('class' => 'drawer-toggle')) !!}
    {!! Form::closeGroup() !!}

    <div class="drawer-target">
        {!! Form::openGroup('ability[short]') !!}
        {!! Form::textarea('ability[short]', null, array('class' => 'drawer-toggle', 'placeholder' => 'Ability Short Description', 'maxlength' => 256, 'rows' => 3)) !!}
        {!! Form::closeGroup() !!}

        {!! Form::openGroup('targets[]') !!}
        {!! Form::select('targets[]', $targetOptions, array('multiple' => true)) !!}
        {!! Form::closeGroup() !!}

        {!! Form::openGroup('ranges[]') !!}
        {!! Form::select('ranges[]', $rangeOptions, array('multiple' => true)) !!}
        {!! Form::closeGroup() !!}

        {!! Form::openGroup('attunements[]') !!}
        {!! Form::select('attunements[]', $attunementOptions, array('multiple' => true)) !!}
        {!! Form::closeGroup() !!}
    </div>
</div>

<div class="drawer">
    {!! Form::openGroup('rewards_attribute', 'It awards an attribute modifier.') !!}
    {!! Form::checkbox('rewards_attribute', null, null, array('class' => 'drawer-toggle')) !!}
    {!! Form::closeGroup() !!}

    <div class="drawer-target">
        <div class="clone-container">
            <div class="clone-target row">
                <div class="col-sm-9">
                    {!! Form::openGroup('attribute_modifier[id][]') !!}
                    {!! Form::select('attribute_modifier[id][]', array_merge(array('' => 'Choose Attribute...'), $attributeModifierOptions), array('id' => 'attribute')) !!}
                    {!! Form::closeGroup() !!}
                </div>
                <div class="col-sm-2 large-text">
                    {!! Form::openGroup('attribute_modifier[mod][]') !!}
                    {!! Form::text('milestone[name]', null, array('placeholder' => 'Mod Num', 'id' => 'attribute_modifier')) !!}
                    {!! Form::closeGroup() !!}
                </div>
                <div class="col-sm-1 large-text">
                    <i class="fa fa-plus-circle clone"></i>
                    <i class="fa fa-minus-circle delete"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<hr />


