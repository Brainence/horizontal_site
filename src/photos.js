



angular.module('brainenceApp').controller("photosCtrl", function ($scope, $rootScope) {

    $rootScope.LoadPhotos = function (index) {
        $.getJSON("content/photos_full.txt",
            function (data) {
                $('#firstBootstrapImage').remove();
                $("#photoCarousel").carousel("pause").removeData();
                $scope.photos = data;
                $scope.$apply();
                $("#photoCarousel").carousel(index);
                document.getElementsByClassName('carousel-photo-item')[index].className += ' active';
            });
    }
});