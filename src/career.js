
angular.module('brainenceApp').controller("careerCtrl", function ($scope, $timeout) {
    var careers_data;

    var $career_frame = $('#career-frame');
    jQuery(function ($) {
        (function () {

            var $career_wrap = $career_frame.parent();

            $career_frame.sly({
                horizontal: 1,
                itemNav: 'centered',
                smart: 1,
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $career_wrap.find('.career-scrollbar'),
                scrollBy: 1,
                speed: 1000,
                elasticBounds: 1,
                easing: 'swing',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                scrollTrap: 1
            }).init();
        }());
    });

    $.getJSON("content/career.json", function (data) {
        careers_data = data;
        $scope.careers = data;
        $scope.$apply();
        UpdateTagClasses();
        $career_frame.sly('reload');
    });


    $scope.PrevCareer = function () {
        $career_frame.sly('prevPage');
    };

    $scope.NextCareer = function () {
        $career_frame.sly('nextPage');
    };

    function RefreshFrame() {
        $career_frame.sly('reload');
    }

    function UpdateTagClasses() {
        $(".career-item").removeClass('sales_marketing');
        $(".career-item").removeClass('hr');
        $(".career-item").removeClass('administrative');
        $(".career-item").removeClass('tech');

        $scope.careers.forEach(function (item, i, arr) {
            document.getElementsByClassName('career-item')[i].className += ' ' + item.tag;
        });
    }

    $scope.ActivateMenuCareer = function (index, menu) {
        $(".career-menu-item").removeClass('career-menu-item-active');
        document.getElementsByClassName('career-menu-item')[index].className += ' career-menu-item-active';

        if (index != 0) {
            $scope.careers = careers_data.slice();
            for (var i = 0; i < $scope.careers.length; i++) {
                if ($scope.careers[i].tag !== menu) {
                    $scope.careers.splice(i, 1);
                    i--;
                }
            };
        }
        $timeout(function () {
            UpdateTagClasses();
            RefreshFrame();
        }, 100);
    }

    $scope.ShowAllCareer = function () {
        $scope.careers = careers_data.slice();
        $timeout(function () {
            UpdateTagClasses();
            RefreshFrame();
        });
    }

    $scope.SelectCareer = function (index) {
        $scope.showList = false;
        $scope.selectedCareer = $scope.careers[index];
        $("#selected-career-image").removeClass('sales_marketing');
        $("#selected-career-image").removeClass('hr');
        $("#selected-career-image").removeClass('administrative');
        $("#selected-career-image").removeClass('tech');
        $('#selected-career-image').addClass($scope.selectedCareer.tag);
        $("#selectedCareer").html($scope.selectedCareer.details);
    }
    $scope.SelectList = function () {
        $scope.showList = true;
    }
});