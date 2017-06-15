



angular.module('brainenceApp').controller("photosCtrl", function ($scope, $timeout) {
   
    $.getJSON("content/photos.json", function (data) {
        $("#photoCarousel").carousel("pause").removeData();
        $scope.photos = data;
        $scope.$apply();
        $("#photoCarousel").carousel(0);
    });

});