/**
 * Created by craigwann1 on 2/16/15.
 */
var Preloader = new Class({
    options: {
        selector: '#page-loader',
        inDuration: 0,
        outDuration: 500
    },

    initialize: function (options) {
        this.options = jQuery.extend(true, {}, this.options, options);;
    },

    fadeIn: function () {
        $(this.options.selector).fadeIn(this.options.inDuration);
    },

    fadeOut: function () {
        $(this.options.selector).fadeOut(this.options.outDuration);
    }

});