"use strict";

var infinite = angular.module('infinite', ['ngRoute']);

infinite.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.loadSocials = function () {
        $http.get("./API/data/socials.json")
            .success(function (data) {
                $scope.socials = data;
            });
    }();

    $scope.loadImages = function () {
        $http.get("./API/data/app.json")
            .success(function (data) {
                $scope.images = data.images;
                $scope.texts = data.texts;
            });
    }();

    $scope.loadNews = function () {
        $http.get("./API/data/news.json")
            .success(function (data) {
                $scope.news = data;
            });
    }();

    $scope.loadNews = function () {
        $http.get("./API/data/jeffries_work.json")
            .success(function (data) {
                $scope.works = data;
            });
    }();

    $scope.showText = function ($data) {

        var test = $data;
        console.log(test);
        setTimeout(function () {

        }, 350);
    }
}]);

