

angular.module('brainenceApp').filter('cropString', function () {
    return function (x) {
        return x.substring(0,145);
    };
});


angular.module('brainenceApp').controller("portfolioCtrl", function ($scope) {

    var $portfolio_frame = $('#portfolio-frame');
    jQuery(function ($) {
        (function () {

            var $portfolio_wrap = $portfolio_frame.parent();

            $portfolio_frame.sly({
                horizontal: 1,
                itemNav: 'centered',
                smart: 1,
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $portfolio_wrap.find('.portfolio-scrollbar'),
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

    $.getJSON("content/portfolios.json", function (data) {
        $scope.portfolios = data;
        $scope.$apply();

        $('#portfolio-frame').sly('reload');
    });


    $scope.SelectPortfolio = function (index) {
        $scope.showList = false;
        $scope.selectedPortfolio = $scope.portfolios[index];
        $scope.$apply();
    }

    $scope.SelectList = function () {
        $scope.showList = true;
    }

});