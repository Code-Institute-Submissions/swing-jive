$(document).ready(function() {
    
    //******* footer *******//
    $('.footer>li>a').mouseenter(function() {
        $(this).css('color','rgba(0,0,0,0.8)');
        $(this).css('background-color','rgb(46,117,182)')
    });
    $('.footer>li>a').mouseleave(function() {
        $(this).css('color','white');
        $(this).css('background-color','rgb(46,117,182)')
    });
    
    
    $('.footer>li>a.otherbtn').click(function() {
        $('.footer>li>a').animate({padding: "10px 10px 50px 10px"}, 'slow');
        $('.footer-title').show()
    });
    
    //******** carousel *********//
    
    $('.carousel').carousel({
              interval: 5000,
              pause: "hover",
              wrap: true
     })
     .on('click', '.carousel-control', function(e) {
          e.preventDefault();
          var nav = $(this);
          nav.parents('.carousel').carousel(nav.data('slide'));
      });
    
    //********** home ************//
    
    $('.icons>a>img').mouseenter(function(){
        $(this).removeClass('social-med')
    });
    $('.icons>a>img').mouseleave(function(){
        $(this).addClass('social-med')
    });

    
});