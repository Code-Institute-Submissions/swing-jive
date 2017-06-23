angular.module('RouteControllers', [])

    .controller('MeetTheBandController', function ($scope) {
        /* Make the buttons breath when hovered over */
        $('ul.meet>li').mouseenter(function () {
            $(this).animate({fontSize: '18px'}, 'slow');
            $(this).addClass('meet-hover');
            $('ul.meet>li').css('border-width', '0');
        });
        $('ul.meet>li').mouseleave(function () {
            $(this).animate({fontSize: '14px'}, 'slow');
            $(this).removeClass('meet-hover');
            $('ul.meet>li').css('border-width', '1px');
        });
    
        /* Removing styling needed just for home page */
        $('body').removeClass('homebody');
        $('.laptop-title').removeClass('homelaptop-title'); 
        $('.mobile-title').removeClass('homemobile-title');
    })

    .controller('ListenController', function ($scope, $http) {
        /* Make the buttons breath when hovered over */
        $('ul.meet>li').mouseenter(function () {
            $(this).animate({fontSize: '18px'}, 'slow');
            $(this).addClass('meet-hover');
            $('ul.meet>li').css('border-width', '0');
        });
        $('ul.meet>li').mouseleave(function () {
            $(this).animate({fontSize: '14px'}, 'slow');
            $(this).removeClass('meet-hover');
            $('ul.meet>li').css('border-width', '1px');
        });

        /* Adjust buttons just on Listen page */
        $('ul.meet>li').css('width', '100px')

        /* Hover over an album and the other albums turn faded */
        $('.listen-opt-albums>button').mouseenter(function () {
            $(this).siblings().css('opacity', '0.5')
        });
        $('.listen-opt-albums>button').mouseleave(function () {
            $(this).siblings().css('opacity', '1');
        });

        /* Hover over an album and it gains a thick white border */
        $('.listen-opt-albums>button>img').mouseenter(function () {
            $(this).css('border', '5px solid white');
            $(this).css('opacity', '1')
        });
        $('.listen-opt-albums>button>img').mouseleave(function () {
            $(this).css('border', '1px solid white');
            $(this).css('opacity', '0.5')
        });
        $('.listen-opt-albums>button').click(function () {
            $(this).css('outline', 'none');
        });


        /* Watch the video on the 'watch' tab and all the music stops playing */
        $('#watch>video').on('play', function (e) {
            $('.tab-all>audio').trigger('pause');
        });
    
        /* Removing styling needed just for home page */
        $('body').removeClass('homebody');
        $('.laptop-title').removeClass('homelaptop-title'); 
        $('.mobile-title').removeClass('homemobile-title');

    })

    .controller('BookingsController', function ($scope) {
        /* When the form is submitted, the footer appears to show tickets have sold out */
        $('#myform1').on('submit', function (ev) {
            $('.footer1').removeClass('hide');
        });
        $('#myform2').on('submit', function (ev) {
            $('.footer2').removeClass('hide');
        });
        $('#myform3').on('submit', function (ev) {
            $('.footer3').removeClass('hide');
        });

        /* Center text on modal footer but only on Booking page */
        $('.modal-footer').css("text-align", "center");
    
        /* Removing styling needed just for home page */
        $('body').removeClass('homebody');
        $('.laptop-title').removeClass('homelaptop-title'); 
        $('.mobile-title').removeClass('homemobile-title');

    })

    /* Itunes API Controller on Listen page NOT MY CODE */
    .controller('ItunesController', function ($scope, $http) {
        $scope.searchiTunes = function (keyword) {
            // use the jsonp callback function from the $http service this
            // will get around any limitations for cross-domain scripting.
            $http.jsonp('//itunes.apple.com/search?limit=3', {
                params: {
                    'callback': 'JSON_CALLBACK',
                    'term': keyword,
                    'entity': 'musicTrack',
                    'media': 'music'
                }
                // returns a promise. when returned, .then perform action..
            }).then(onSearchComplete, onError)
        }

        // Get the data out of the response when search succeeds.
        var onSearchComplete = function (response) {
            // the response has a few data elements
            // so we will grab all of that.
            $scope.data = response.data
            // we will also store just the songs into
            // a separate variable for the view to iterate
            $scope.songs = response.data.results
        }

        // if there's an error, store that for viewing.
        var onError = function (reason) {
            $scope.error = reason
        }

    })

    .controller('ContactController', function ($scope) {
        /* Exiting the Modal (produced after the form) reloads the page */
        $('.close').click(function () {
            location.reload();
        });
        $('.modal').on('hidden.bs.modal', function () {
            location.reload();
        });

        /* On submit form, show a modal to tell User their form has been a success */
        $('#myform1').on('submit', function (ev) {
            $('#myModal1').modal('show');
        });
        $('#myform2').on('submit', function (ev) {
            $('#myModal2').modal('show');
        });
    
        /* Removing styling needed just for home page */
        $('body').removeClass('homebody');
        $('.laptop-title').removeClass('homelaptop-title'); 
        $('.mobile-title').removeClass('homemobile-title');

    })

    .controller('HomeController', function ($scope) {

        /* Styling needed just for home page */
        $('body').addClass('homebody');
        $('.laptop-title').addClass('homelaptop-title'); 
        $('.mobile-title').addClass('homemobile-title');
    
        /* Animate the footer growing upwards and hide the footer title */
        $('.footer>li>a').animate({"padding-bottom": "100%"}, 'slow');
        $('.footer-title').hide();
        
        /* 'textillate' jQuery for animated font effect */
        $(function () {
            $('.demo').textillate({

                initialDelay: 300,
                in: {
                    effect: 'fadeIn',
                    shuffle: false,
                    delay: 60,
                },
            });
        });


    });
