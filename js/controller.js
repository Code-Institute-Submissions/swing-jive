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
                $(this).children().css('color', 'rgb(74, 28, 65)')
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
                $(this).children().css('color', 'rgb(74, 28, 65)')
            });
            
            $('ul.meet>li').css('width','100px')
            
            $('.listen-opt-albums>a').mouseenter(function(){
                $(this).siblings().css('opacity','0.5')
            });
            $('.listen-opt-albums>a').mouseleave(function(){
                $(this).siblings().css('opacity','1');
            });
            
            
            $('.listen-opt-albums>a>img').mouseenter(function(){
                $(this).css('border','5px solid white');
                $(this).css('opacity','1')
            });
            $('.listen-opt-albums>a>img').mouseleave(function(){
                $(this).css('border','1px solid white');
                $(this).css('opacity','0.5')
            });
                         
        });
            
    })
    .controller('BookingsController', function($scope) {
    
    })
    .controller('ContactController', function($scope) {
    
    })
    .controller('HomeController', function($scope) {
    
    
        $(document).ready(function(){
            $('.item').animate({height: '420px'},'slow');        $('.footer>li>a').animate({padding: "10px 10px 200px 10px"}, 'slow');
            
            
            $('.footer-title').hide()
            
            
            $(function () {
                $('.demo').textillate({
                    
                    initialDelay: 200,
                    in: {
                        effect: 'fadeIn',
                        shuffle: false,
                        delay: 60,
                    },
                }); 
            });
            
        });
   
        
    });