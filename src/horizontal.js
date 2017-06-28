﻿
var $frame = $('#oneperframe');
jQuery(function ($) {
    (function () {

        var $wrap = $frame.parent();

        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            speed: 1000,
            elasticBounds: 1,
            easing: 'swing',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1
        }, {
            change: changePage
        }).init();
    }());
});


var status = 0; //0-uninizialize, 1-menu button click or onpopstate


function changePage(eventName) {
    if (status == 0) {
        var url;
        switch (this.rel.activeItem) {
            case 0: url = 'home'; break;
            case 1: url = 'portfolio'; break;
            case 2: url = 'testimonials'; break;
            case 3: url = 'contacts'; break;
            case 4: url = 'career'; break;
            case 5: url = 'partnership'; break;
        }
        activatePageNr(this.rel.activeItem);
        window.history.pushState(url, 'Brainence', "#" + url);
        switch (url) {
            case 'home': $('#oneperframe').sly('activate', 0); break;
            case 'portfolio': $('#oneperframe').sly('activate', 1); break;
            case 'testimonials': $('#oneperframe').sly('activate', 2); break;
            case 'contacts': $('#oneperframe').sly('activate', 3); break;
            case 'career': $('#oneperframe').sly('activate', 4); break;
            case 'partnership': $('#oneperframe').sly('activate', 5); break;
            default: $('#oneperframe').sly('activate', 0);
        }
    }
    status = 0;
}


var activatePageNr = function (index) {
    status = 1;
    //$frame.sly('activate', index);
    clearmenuclass();
    $("#menu-button-" + index).addClass('menu-active');
    status = 0;
}

var clearmenuclass = function () {
    for (i = 0; i < 6; i++) {
        $("#menu-button-" + i).removeClass('menu-active');
    }
}