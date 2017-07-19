﻿
angular.module('brainenceApp').controller("testimonialCtrl", function ($scope, $timeout) {
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
                clickBar: 1,
                cycleBy: 'items',
                cycleInterval: 5000,
                pauseOnHover: 1,
                scrollTrap: 1
            }).init();
        }());
    });

    $.getJSON("content/testimonials.txt", function (data) {
        $scope.testimonials = data;
        $scope.$apply();
        $timeout(function () {
            $testimonial_frame.sly('reload');
        }, 100);
    });


    $scope.PrevTesimonial = function () {
        $testimonial_frame.sly('prev');
    };

    $scope.NextTesimonial = function () {
        $testimonial_frame.sly('next');
    };


    var $partners_frame = $('#partners-frame');
    jQuery(function ($) {
        (function () {

            var $partners_wrap = $partners_frame.parent();

            $partners_frame.sly({
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $partners_wrap.find('.partners-scrollbar'),
                scrollBy: 1,
                speed: 1000,
                elasticBounds: 1,
                easing: 'swing',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                cycleBy: 'pages',
                cycleInterval: 6000,
                scrollTrap: 1
            }).init();
        }());
    });

    $.getJSON("content/partners.txt", function (data) {
        $scope.partners = data;
        $scope.$apply();
        $timeout(function () {
            $partners_frame.sly('reload');
        }, 100);
    });
});