"use strict";

var infinite = angular.module('infinite', ['ngParallax']);

infinite.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.loadSocials = function () {
        $http.get("./api/get.php?guess=socials")
            .success(function (data) {
                $scope.socials = data;
            });
    }();

    $scope.loadImages = function () {
        $http.get("./api/get.php?guess=app")
            .success(function (data) {
                $scope.images = data.images;
                $scope.texts = data.texts;
            });
    }();

    $scope.loadNews = function () {
        $http.get("./api/get.php?guess=news")
            .success(function (data) {
                $scope.news = data;
            });
    }();

    $scope.loadWorks = function () {
        $http.get("./api/get.php?guess=jeffries_work")
            .success(function (data) {
                $scope.works = data;
            });
    }();
}]);

