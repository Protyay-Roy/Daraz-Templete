$(function () {
    $('.slider').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
    });

    $("#full").fadeOut();
    var banner = $("#banner_full").offset().top;
    var card = $("#card_part").offset().top;
    $(window).scroll(function(){
        var scrl = $(this).scrollTop();
        if (85 < scrl){
            $("#top").addClass("top")
        }else{
            $("#top").removeClass("top")
        }
        if (300 <= scrl){
            $(".top").fadeOut();
        }else{
            $(".top").fadeIn();
        }
        if (85 < scrl){
            $("#top_logo").addClass("top2")
        }else{
            $("#top_logo").removeClass("top2")
        }
        if (300 <= scrl){
            $("#top_logo").addClass("top3")
            // $("#top_logo").fadeIn();

        }else{
            $("#top_logo").removeClass("top3")
        }
        // if (300 < scrl){
        //     $("#full").addClass("see");
        // }else{
        //     $("#full").removeClass("see")
        // }

        if (300 < scrl){
            $("#full").fadeIn();
        }else{
            $("#full").fadeOut();
        }
    })

    var flash = $('.flashsale').offset().top;
    var just = $('.just_for_you').offset().top;

    $(window).scroll(function () {
        var side_menu = $(this).scrollTop();
        if (side_menu >= 200 && side_menu <= just) {
            $('.side_menu').addClass('side_fix');
        }
        else {
            $('.side_menu').removeClass('side_fix');
        }
    });


    // side menu scroll

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 75
                    }, 1500, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});




