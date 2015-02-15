/*============================================
Page Preloader
==============================================*/

$(window).load(function(){
    $('#page-loader').fadeOut(500);
});

function process_content(item) {

    jQuery(item).find('.bootbox-html').each(function(index, el) {
        var target = el.getAttribute('bootbox-target');
        var message = $(target).html();
        jQuery(el).on( "click", function() {
            bootbox.dialog({
                title: el.getAttribute('bootbox-title'),
                message: message,
            });
        });
        $(document).on("shown.bs.modal", function (event) {
            process_content(event.target);
        });
    });

    jQuery(item).find('.bootbox-confirm').each(function(index, el) {
        var message = jQuery(el).attr('confirm-message');
        var href = jQuery(el).attr('href');

        if (!message) {
            message = "Are you sure?";
        }

        jQuery(el).on( "click", function(event) {
            event.preventDefault();
            bootbox.confirm(message, function (result) {
                if (result) {
                    if (href) {
                        window.location.href = href;
                    }
                }
            });
        });

    });

    jQuery(item).find('.drawer').each(function(index, el) {
        new SimpleDrawer(el);
    });

    jQuery(item).find('select[multiple]').each(function(index, el) {
        var placeholder = (el.getAttribute('placeholder') ? el.getAttribute('placeholder') : "No option selected...");
        var enableFiltering = (el.getAttribute('multiselect-filtering') ? el.getAttribute('multiselect-filtering') : false);

        jQuery(el).multiselect({
            enableFiltering: enableFiltering,
            filterPlaceholder: 'Search...',
            buttonText: function(options, select) {
                    if (options.length === 0) {
                        return placeholder;
                    }
                    else if (options.length > 6) {
                        return "Woah, that's a lot of selections." ;
                    }
                    else {
                        var labels = [];
                        options.each(function() {
                            if ($(this).attr('label') !== undefined) {
                                labels.push($(this).attr('label'));
                            }
                            else {
                                labels.push($(this).html());
                            }
                        });
                        return labels.join(', ') + ' ';
                    }
                }
        });
    });

    jQuery(item).find('.repeatable').each(function(index, el) {
        new Repeater(el);
    });

    jQuery(item).find('.ajax-form').each(function(index, el) {
        new AjaxForm(el);
    });


}

$(document).ready(function() {
    process_content($('body'));
});