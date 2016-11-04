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