angular.module('RouteControllers', [])
    .controller('MeetTheBandController', function($scope) {
    
    })
    .controller('ListenController', function($scope) {
    
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
                        sync: true,
                    },
                }); 
            });
            
        });
   
        
    });