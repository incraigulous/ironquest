@extends('layouts.darkForm')

@section('content')
        <section class="parallax-bg light-typo padding-top-bottom " data-parallax-background="/images/contact-bg.jpg" data-stellar-background-ratio=".1">

            <div class="container">

                <h1 class="section-title">Edit Milestone</h1>

                <div class="row">

                   {!! BootForm::open()->attribute('class', 'col-sm-8 col-sm-offset-2 ajax-form')->action('/milestones')!!}
                    {!! BootForm::hidden('milestone[id]')->value($milestone->id) !!}
                    @include('milestone.form')
                        <p class="text-center">
                            <button name="submit" type="submit" class="btn btn-quattro" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent">
                                <i class="fa fa-flag"></i>
                                Edit Milestone
                            </button>
                        </p>
                    {!! BootForm::close() !!}
                </div>

            </div>

        </section>

@stop