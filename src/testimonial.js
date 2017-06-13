
angular.module('brainenceApp').controller("testimonialCtrl", function ($scope) {
    var $testimonial_frame = $('#testimonial-frame');
    jQuery(function ($) {
        (function () {

            var $testimonial_wrap = $testimonial_frame.parent();

            $testimonial_frame.sly({
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $testimonial_wrap.find('.testimonial-scrollbar'),
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

    $.getJSON("content/testimonials.json", function (data) {
        $scope.testimonials = data;
        $scope.$apply();

        $('#testimonial-frame').sly('reload');
    });


    $scope.PrevTesimonial = function () {
        $testimonial_frame.sly('prev');
    };

    $scope.NextTesimonial = function () {
        $testimonial_frame.sly('next');
    };
});