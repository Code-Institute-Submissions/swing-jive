angular.module('SwingJiveDirectives', [])
    .directive('itunes-search', function () {
        return {
            restrict: "E",
            scope: true,
            templateUrl: "../templates/directives/itunes-search.html"
        };
    })
    .directive('photos', function() {
        return {
            restrict: "E",
            scope: true,
            templateUrl: "../templates/directives/photos.html"
        };
    })