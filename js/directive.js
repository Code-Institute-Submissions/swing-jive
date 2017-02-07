angular.module('SwingJiveDirectives', [])
    .directive('itunes-search', function () {
        return {
            restrict: 'E',
            templateUrl: "../templates/directives/itunes-search.html"
        };
    })
    .directive('photos', function() {
        return {
            restrict: 'E',
            templateUrl: "templates/directives/photos.html"
        };
    });