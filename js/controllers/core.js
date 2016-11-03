"use strict";

var infinite = angular.module('infinite', ['ngRoute']);

infinite.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.text = "coucou";
}]);