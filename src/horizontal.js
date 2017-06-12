
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
            }).init();
    }());
});

var activatePageNr = function (index) {
    $frame.sly('activate', index);
    clearmenuclass();
    $("#menu-button-" + index).addClass('menu-active');
}

var clearmenuclass = function() {
    for (i = 0; i < 5; i++) {
        $("#menu-button-" + i).removeClass('menu-active');
    }
}
