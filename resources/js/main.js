/*============================================
Page Preloader
==============================================*/

$(window).load(function(){
    $('#page-loader').fadeOut(500);
});

function process_content(item) {

    /*============================================
    Drawer
    ==============================================*/

    jQuery(item).find('.drawer').each(function(index, el) {
        var opts = jQuery(el).attr('drawer-options');
        if (opts) {
            var options = opts.parseJSON();
        } else {
            var options = {};
        }
        var drawer = new Drawer(el, options);
    });

}

$(document).ready(function() {
    process_content($('body'));
});