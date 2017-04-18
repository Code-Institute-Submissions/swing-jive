angular.module('RouteControllers', [])
    .controller('MeetTheBandController', function($scope) {
        $(document).ready(function() {
            $('ul.meet>li').mouseenter(function() {
                $(this).animate({fontSize: '18px'},'slow');
                $(this).addClass('meet-hover');
                $('ul.meet>li').css('border-width','0');
                $(this).children().css('color', 'white')
            });
            $('ul.meet>li').mouseleave(function() {
                $(this).animate({fontSize: '14px'},'slow');
                $(this).removeClass('meet-hover');
                $('ul.meet>li').css('border-width','1px');
                $(this).children().css('color', 'black')
            });
            
            
            
        });
    })



    .controller('ListenController', function($scope, $http) {
        $(document).ready(function() {
            $('ul.meet>li').mouseenter(function() {
                $(this).animate({fontSize: '18px'},'slow');
                $(this).addClass('meet-hover');
                $('ul.meet>li').css('border-width','0');
                $(this).children().css('color', 'white')
            });
            $('ul.meet>li').mouseleave(function() {
                $(this).animate({fontSize: '14px'},'slow');
                $(this).removeClass('meet-hover');
                $('ul.meet>li').css('border-width','1px');
                $(this).children().css('color', 'black')
            });
            
            $('ul.meet>li').css('width','100px')
            
            $('.listen-opt-albums>button').mouseenter(function(){
                $(this).siblings().css('opacity','0.5')
            });
            $('.listen-opt-albums>button').mouseleave(function(){
                $(this).siblings().css('opacity','1');
            });
            $('.listen-opt-albums>button>img').mouseenter(function(){
                $(this).css('border','5px solid white');
                $(this).css('opacity','1')
            });
            $('.listen-opt-albums>button>img').mouseleave(function(){
                $(this).css('border','1px solid white');
                $(this).css('opacity','0.5')
            });
            $('.listen-opt-albums>button').click(function (){
                $(this).css('outline','none'); 
            });
            $('.listen-opt-albums>button.button-tab1').click(function (){
                $('.tab1').removeClass('hidden-tab');
                $('.tab3').addClass('hidden-tab');
                $('.tab4').addClass('hidden-tab');
                $('.tab2').addClass('hidden-tab');
                
                $('.tab1>audio').trigger('play');
                $('.tab3>audio').trigger('pause');
                $('.tab4>audio').trigger('pause');
                $('.tab2>audio').trigger('pause');
                $('#watch>video').trigger('pause')
            });
            $('.listen-opt-albums>button.button-tab2').click(function (){
                $('.tab2').removeClass('hidden-tab');
                $('.tab3').addClass('hidden-tab');
                $('.tab4').addClass('hidden-tab');
                $('.tab1').addClass('hidden-tab');
                
                $('.tab2>audio').trigger('play');
                $('.tab3>audio').trigger('pause');
                $('.tab4>audio').trigger('pause');
                $('.tab1>audio').trigger('pause');
                $('#watch>video').trigger('pause')
            });
            $('.listen-opt-albums>button.button-tab3').click(function (){
                $('.tab3').removeClass('hidden-tab');
                $('.tab2').addClass('hidden-tab');
                $('.tab4').addClass('hidden-tab');
                $('.tab1').addClass('hidden-tab');
                
                $('.tab3>audio').trigger('play');
                $('.tab1>audio').trigger('pause');
                $('.tab4>audio').trigger('pause');
                $('.tab2>audio').trigger('pause');
                $('#watch>video').trigger('pause')
            });
            $('.listen-opt-albums>button.button-tab4').click(function (){
                $('.tab4').removeClass('hidden-tab');
                $('.tab3').addClass('hidden-tab');
                $('.tab2').addClass('hidden-tab');
                $('.tab1').addClass('hidden-tab');
                
                $('.tab4>audio').trigger('play');
                $('.tab3>audio').trigger('pause');
                $('.tab1>audio').trigger('pause');
                $('.tab2>audio').trigger('pause');
                $('#watch>video').trigger('pause')
            });
            
            $('#watch>video').on('play', function(e) {                
                $('.tab4>audio').trigger('pause');
                $('.tab3>audio').trigger('pause');
                $('.tab1>audio').trigger('pause');
                $('.tab2>audio').trigger('pause');
            });
                         
        });
            
    })
    .controller('BookingsController', function($scope) {
        
    })
    .controller('ItunesController', function($scope,$http) {
        $scope.searchiTunes = function(keyword){
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
    var onSearchComplete = function(response){
        // the response has a few data elements
        // so we will grab all of that.
        $scope.data = response.data
        // we will also store just the songs into
        // a separate variable for the view to iterate
        $scope.songs = response.data.results
    }

    // if there's an error, store that for viewing.
    var onError = function(reason){
        $scope.error = reason
    }
    
    })
    .controller('ContactController', function($scope) {
    
    })
    .controller('HomeController', function($scope) {
    
    
        $(document).ready(function(){        
            
        $('.footer>li>a').animate({"padding-bottom": "100%"}, 'slow');
        //$('.footer>li>a').css({minHeight:"200px"});
        $('.footer-title').hide();
        
        
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
   
        
    });