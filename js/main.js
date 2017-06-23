$(document).ready(function () {

    //******* footer *******//

    /* Mouse hovers over the navigation options on the footer and the font colour changes to white */
    $('.footer>li>a').mouseenter(function () {
        $(this).css('color', 'white');
        $(this).css('background-color', 'rgb(74, 28, 65)')
    });
    $('.footer>li>a').mouseleave(function () {
        $(this).css('color', 'rgba(255, 255, 255, 0.6)');
        $(this).css('background-color', 'rgb(74, 28, 65)')
    });

    /* When the nagivation options are clicked, the footer size changes */
    $('.footer>li>a.otherbtn').click(function () {
        $('.footer>li>a').animate({"padding-bottom": "20%"}, 'slow');
        $('.footer-title').show()
    });

    //******** carousel *********//

    /* Home page carousel */
    $('.carousel').carousel({
        interval: 5000,
        pause: "hover",
        wrap: true
    })
        .on('click', '.carousel-control', function (e) {
            e.preventDefault();
            var nav = $(this);
            nav.parents('.carousel').carousel(nav.data('slide'));
        });

    //********** social media ************//

    /* Social media icons grow when hovered over */
    $('.icons>a>img').mouseenter(function () {
        $(this).addClass('social-med1')
    });
    $('.icons>a>img').mouseleave(function () {
        $(this).removeClass('social-med1')
    });

});

/* Click on an album and the album cover, music and information comes up */
/* as well as automatically starting the music (similar to bootstrap pills) */
var playtab = function (selector) {
    $('.tab-all').addClass('hidden-tab');
    $(selector).removeClass('hidden-tab');

    $('.tab-all>audio').trigger('pause');
    $('#watch>video').trigger('pause');
    $(selector + '>audio').trigger('play');
}
