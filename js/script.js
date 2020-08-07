$(function () {


    // Menufix

    var navoff = $("header").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $("header").addClass("menu_fix");
        } else {
            $("header").removeClass("menu_fix");
        }
    });


    // Smooth Scroll

    // Smooth Scroll

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    //    Banner slider

    $('#banner_part').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 800,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,

    });


    //    Browse slider

    $('.browse_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 800,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
    }
  ]

    });


    // scroll top 


    $(".scroll_top").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 100);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".scroll_top").fadeIn();
        } else {
            $(".scroll_top").fadeOut();
        }
    });

    // Closes responsive menu when a scroll link is clicked

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });




});
