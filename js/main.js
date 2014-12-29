$(document).ready(function(){

    // Toggle mobile nav

    var nav = $('.main-nav');

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


    //Smooth scroll to page id (for index page)

    $('a[href^="/#"], a[href^="#"]').on('click',function (e) {
        var target = this.hash;
        var $target = $(target);
        var path = window.location.pathname;

        if (target != '#nav'){
            if (path == '/' || target == '#contact'){
                e.preventDefault();

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            }
        }
    });


    // Back to top Functionality
    $(window).scroll(function() {
        if($(this).scrollTop() !== 0) {
            $('#top').fadeIn();
            $('#top .fa').fadeIn();
        } else {
            $('#top').fadeOut();
            $('#top .fa').fadeOut();
        }
    });

    $('#top').click(function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop:0},400);
    });


    // Select Random decorative image

    var randomSelect = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    var images = [
        'bee',
        'bird',
        'bubbles',
        'bug',
        'caterpiller',
        'crab',
        'dandelion',
        'fish',
        'hearts',
        'jellyfish',
        'lanterns',
        'martini',
        'monster',
        'moon',
        'mountain',
        'mushrooms',
        'rocket',
        'snail',
        'snowflakes',
        'spiders',
        'sun',
        'volcano',
        'whale',
        'wheat' ]

    function getImage(){
        var img = randomSelect(images);
        $('.banner').append('<img src="/assets/banner-images/' + img + '.svg" alt="decorative image" class="banner-image ' + img + '">')
    }

    getImage();

});
