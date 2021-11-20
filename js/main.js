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

    $('.btn-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    let sectionNav = $('.navigation');

    $('body').css({
        paddingTop: sectionNav.outerHeight() + 20
    })
})


