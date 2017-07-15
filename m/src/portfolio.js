angular.module('brainenceApp').filter('cropString', function () {
    return function (x) {
        return x.substring(0, 130);
    };
});
angular.module('brainenceApp').controller("portfolioCtrl", function ($scope, $timeout) {
    var portfolios_data;
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
                // Cycling
                cycleBy: 'items',
                cycleInterval: 5000,
                pauseOnHover: 1,
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
    $.getJSON("content/portfolios.txt", function (data) {
        portfolios_data = data;
        $scope.portfolios = data;
        var technologies = new Set();
        if (technologies.size == 0) {
            for (var i = 0; i < $scope.portfolios.length; i++) {
                for (var j = 0; j < $scope.portfolios[i].tags.length; j++) {
                    technologies.add($scope.portfolios[i].tags[j]);
                }
            }
        }
        $scope.submenuTechnologies = Array.from(technologies);
        var industries = new Set();
        if (industries.size == 0) {
            for (var i = 0; i < $scope.portfolios.length; i++) {
                for (var j = 0; j < $scope.portfolios[i].industries.length; j++) {
                    industries.add($scope.portfolios[i].industries[j]);
                }
            }
        }
        $scope.submenuIndustries = Array.from(industries);
        $scope.$apply();
        $portfolio_frame.sly('reload');
    });
    $scope.PrevPortfolio = function () {
        $portfolio_frame.sly('prevPage');
    };
    $scope.NextPortfolio = function () {
        $portfolio_frame.sly('nextPage');
    };
    $scope.SelectPortfolio = function (index) {
        $scope.showList = false;
        $scope.selectedPortfolio = $scope.portfolios[index];
    }
    $scope.SelectList = function () {
        $scope.showList = true;
    }
    $scope.SortByDate = function () {
        $scope.portfolios = portfolios_data.slice();
        $scope.portfolios.sort(function (value1, value2) {
            if (Date.parse(value1.date) > Date.parse(value2.date)) return -1;
            if (Date.parse(value1.date) < Date.parse(value2.date)) return 1;
            return 0;
        });
        $timeout(function () {
            RefreshFrame();
        });
    }
    $scope.ShowTechnology = function (value) {
        $scope.portfolios = portfolios_data.slice();
        for (var i = 0; i < $scope.portfolios.length; i++) {
            if (!$scope.portfolios[i].tags.includes(value)) {
                $scope.portfolios.splice(i, 1);
                i--;
            }
        };
        $timeout(function () {
            RefreshFrame();
        });
    };
    $scope.ShowIndustry = function (value) {
        $scope.portfolios = portfolios_data.slice();
        for (var i = 0; i < $scope.portfolios.length; i++) {
            if (!$scope.portfolios[i].industries.includes(value)) {
                $scope.portfolios.splice(i, 1);
                i--;
            }
        };
        console.log($scope.portfolios);
        $timeout(function () {
            RefreshFrame();
        });
    };

    function RefreshFrame() {
        $portfolio_frame.sly('reload');
    }
    $scope.ActivateMenu = function (index) {
        $(".portfolio-menu-item").removeClass('portfolio-menu-item-active');
        document.getElementsByClassName('portfolio-menu-item')[index].className += ' portfolio-menu-item-active';
    }
    $scope.ActivateSubmenu = function (index) {
        $(".portfolio-submenu-item").removeClass('portfolio-submenu-item-active');
        document.getElementsByClassName('portfolio-submenu-item')[index].className += ' portfolio-submenu-item-active';
    }
    $scope.ActivateSelectedMenu = function (index) {
        $(".selected-portfolio-menu").removeClass('selected-portfolio-menu-active');
        document.getElementsByClassName('selected-portfolio-menu')[index].className += ' selected-portfolio-menu-active';
    }
});