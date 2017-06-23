angular.module('SwingJiveDirectives', [])
    /* Angular Directive for Itunes API (on Listen page) using the template 'directives/itunes-search.html' */
    .directive('itunes', function () {
        return {
            restrict: 'E',
            templateUrl: "templates/directives/itunes-search.html"
        };
    })
    /* Angular Directive for Photo gallery (on Listen page) using the template 'directives/photos.html' */
    .directive('photos', function () {
        return {
            restrict: 'E',
            templateUrl: "templates/directives/photos.html"
        };
    })
