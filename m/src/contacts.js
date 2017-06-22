﻿angular.module('brainenceApp').controller("contactsCtrl", function ($scope, $timeout) {

    var $contacts_frame = $('#contacts-frame');
    jQuery(function ($) {
        (function () {

            var $contacts_wrap = $contacts_frame.parent();

            $contacts_frame.sly({
                horizontal:1,
                itemNav: 'basic',
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
        $scope.contacts = [];
        for (i = 0; i < data.length; i += 2) {
            $scope.contacts.push([data[i], (i + 1 != data.length ? data[i + 1] : null)]);
        }
        $scope.selectedContact = $scope.contacts[0][0];
        $scope.$apply();
        $timeout(function () {
            $contacts_frame.sly('reload');
        }, 100);
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
        $timeout(function () {
            $photos_frame.sly('reload');
        },200);
    });

    $scope.SelectContact = function (index1, index2) {
        $scope.selectedContact = $scope.contacts[index1][index2];
    }

    $scope.OpenPhoto = function (index) {
        $(".carousel-photo-item").removeClass('active');
        document.getElementsByClassName('carousel-photo-item')[index].className += ' active';
    }
    
});