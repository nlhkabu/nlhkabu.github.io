$(document).ready(function(){

    var nav = $('.main-nav');

    // Toggle mobile nav
    $('.toggle-nav').click(function(e){
        e.preventDefault();
        nav.slideToggle();
    });

    // Reset when window switches to desktop view
    $(window).resize(function() {
        if ($(window).width() > 750) {
            nav.show();
        } else {
            nav.hide();
        }
    });
});
