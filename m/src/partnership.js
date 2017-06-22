angular.module('brainenceApp').controller("partnershipCtrl", function ($scope, $timeout) {

    $scope.ActivateMenu = function (index) {
        $(".partnership-menu-item").removeClass('partnership-menu-item-active');
        document.getElementsByClassName('partnership-menu-item')[index].className += ' partnership-menu-item-active';
    }

    $scope.showallianceCooperation = function () {
        $("#allianceCooperationContent").show();
        $("#directCooperationContent").hide();
    }
    $scope.showDirectCooperation = function () {
        $("#allianceCooperationContent").hide();
        $("#directCooperationContent").show();
    }

});