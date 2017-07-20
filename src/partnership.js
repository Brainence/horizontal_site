angular.module('brainenceApp').controller("partnershipCtrl", function ($scope, $timeout) {


    var $partners_frame = $('#partners-frame');
    jQuery(function ($) {
        (function () {

            var $partners_wrap = $partners_frame.parent();

            $partners_frame.sly({
                horizontal: 1,
                itemNav: 'centered',
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


    $scope.ActivateMenu = function (index) {
        $(".partnership-menu-item").removeClass('partnership-menu-item-active');
        document.getElementsByClassName('partnership-menu-item')[index].className += ' partnership-menu-item-active';
    }

    $scope.showallianceCooperation = function () {
        $("#allianceCooperationContent").show();
        $("#directCooperationContent").hide();
        $("#partnersContent").hide();
    }
    $scope.showDirectCooperation = function () {
        $("#allianceCooperationContent").hide();
        $("#directCooperationContent").show();
        $("#partnersContent").hide();
    }
    $scope.showPartners = function () {
        $("#allianceCooperationContent").hide();
        $("#directCooperationContent").hide();
        $("#partnersContent").show();
        $partners_frame.sly('reload');
        $('#partners-clearfix').width($('#partners-clearfix').width() + 2 * $('.partners-item').length);
    }

});