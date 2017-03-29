$(document).ready(function() {
    
    //******* footer *******//
    $('.footer>li>a').mouseenter(function() {
        $(this).css('color','white');
        $(this).css('background-color','rgb(74, 28, 65)')
    });
    $('.footer>li>a').mouseleave(function() {
        $(this).css('color','rgba(255, 255, 255, 0.6)');
        $(this).css('background-color','rgb(74, 28, 65)')
    });
    
    
    $('.footer>li>a.otherbtn').click(function() {
        $('.footer>li>a').animate({"padding-bottom": "20%"}, 'slow');
        $('.footer>li>a').css({minHeight:"20px"});
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
        $(this).addClass('social-med1')
    });
    $('.icons>a>img').mouseleave(function(){
        $(this).removeClass('social-med1')
    });

    
});