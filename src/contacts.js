angular.module('brainenceApp').controller("contactsCtrl", function ($scope) {

    var $contacts_frame = $('#contacts-frame');
    jQuery(function ($) {
        (function () {

            var $contacts_wrap = $contacts_frame.parent();

            $contacts_frame.sly({
                horizontal: 1,
                itemNav: 'centered',
                smart: 1,
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $contacts_wrap.find('.contacts-scrollbar'),
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

    $.getJSON("content/contacts.json", function (data) {
        $scope.contacts = data;
        $scope.selectedContact = $scope.contacts[0];
        $scope.$apply();
        $contacts_frame.sly('reload');
    });



    var $photos_frame = $('#photo-frame');
    jQuery(function ($) {
        (function () {

            var $photos_wrap = $photos_frame.parent();

            $photos_frame.sly({
                horizontal: 1,
                itemNav: 'centered',
                smart: 1,
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $photos_wrap.find('.photo-scrollbar'),
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


    $.getJSON("content/photos.json", function (data) {
        $scope.photos = data;
        $scope.$apply();
        $photos_frame.sly('reload');
    });




    $scope.SelectContact = function (index) {
        $scope.selectedContact = $scope.contacts[index];
    }

    
});