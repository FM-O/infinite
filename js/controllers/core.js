"use strict";

var infinite = angular.module('infinite', ['ngRoute']);

infinite.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.loadSocials = function () {
        var request = $http({
            method: "get",
            url: "API/socials.php"
        });

        /* Check whether the HTTP Request is successful or not. */
        request.success(function (data) {

            console.log("data required successfully retrieved" + data);
            $scope.socials = data;
        });
    }();

    $scope.socials = "views/templates/socials.html";
    $scope.txt = {
        "txt1" : "coucou",
        "txt2" : "hello"
    };

}]);

infinite.directive('mainNav', function () {
    return {
        templateUrl: 'views/templates/mainNav.html',
        restrict: 'A',
        replace: true,
        transclude: true,
        link: function (scope, element, attrs) {
            // DOM manipulation/events here!
        }
    }
});