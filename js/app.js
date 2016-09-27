angular.module('swing-jive', ['ngRoute', 'RouteControllers']);
 
angular.module('swing-jive').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    $routeProvider.when('/meet-the-band', {
        templateUrl: 'templates/meet-the-band.html',
        controller: 'MeetTheBandController'
    })
    .when('/listen', {
        templateUrl: 'templates/listen.html',
        controller: 'ListenController'
    })
    .when('/bookings', {
        templateUrl: 'templates/bookings.html',
        controller: 'BookingsController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    })
    .otherwise({
    	redirectTo: '/'
    });
});