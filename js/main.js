$(() => {

    // hide spinner loading icon
    setTimeout(() => {
        $('.spinner').fadeOut(700);

        $('body').css({
            "overflow": "visible"
        });
    }, 1200);

    // go to top
    function checkBtnScroll() {
        if ($(window).scrollTop() > 750) {
            $('.btn-top').parent().fadeIn(500).css({
                "display": "flex"
            });
        } else {
            $('.btn-top').parent().fadeOut(500).css({
                "display": "none"
            });
        }
    }

    $(window).on('scroll', function () {
        checkBtnScroll();
    })

    $('.btn-top,.navbar-brand,.logo').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // navigation bar
    let sectionNav = $('.navigation');

    $('body').css({
        paddingTop: sectionNav.outerHeight() + 20
    })

    // open navigation menu
    $('.navbar-toggler').on('click', function (e) {
        e.preventDefault();
        $('.navbar-collapse').slideToggle(300);
        $('.navbar').toggleClass("border-bottom pb-4 border-2x border-white")
    })

    // navigation item scroll click 
    $navItem = $('nav .nav-item');

    $navItem.on('click', function (e) {
        e.preventDefault();

        $link = $(this).find('a');
        $dateLink = $link.data('link');
        $scrollTop = $dateLink != "home" ? $('.' + $dateLink).offset().top : 0;

        $link.addClass('active').parent().siblings('li').find('a').removeClass('active');
        $('html,body').animate({
            scrollTop: $scrollTop - sectionNav.outerHeight()
        }, 700)

    })
})


