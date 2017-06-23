angular.module('swing-jive', ['ngRoute', 'RouteControllers', 'SwingJiveDirectives']);

angular.module('swing-jive').config(function ($routeProvider) {

    $routeProvider.when('/', {
        /* Home page */
        /* Angular routing HomeController in controller.js to home.html template on the '/' web page */
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
        .when('/meet-the-band', {
            /* Meet page */
            /* Angular routing MeetTheBandController in controller.js to meet-the-band.html template */
            /* on the '/meet-the-band' web page */
            templateUrl: 'templates/meet-the-band.html',
            controller: 'MeetTheBandController'
        })
        .when('/listen', {
            /* Listen page */
            /* Angular routing ListenController in controller.js to listen.html template on the '/listen' web page */
            templateUrl: 'templates/listen.html',
            controller: 'ListenController'
        })
        .when('/bookings', {
            /* Bookings page */
            /* Angular routing BookingsController in controller.js to bookings.html template */
            /* on the '/bookings' web page */
            templateUrl: 'templates/bookings.html',
            controller: 'BookingsController'
        })
        .when('/contact', {
            /* Contact page */
            /* Angular routing ContactController in controller.js to contact.html template on the '/contact' web page */
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            /* Otherwise redirect to the Home page */
            redirectTo: '/'
        });
});
