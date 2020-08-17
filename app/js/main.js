$(function(){

    $('.example__item-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        fade: true,
        autoplay: true,
        speed: 1000,
        infinite: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // arrows: false,
                    centerMode: false,
                }
            }
        ] 
    });


    $('.stocks__item-slider').slick({
        dots: true,
        fade: true,
        speed: 1000,
        infinite: true,
        centerMode: true,
    });
    

    $('.reviews__slider').slick({
        dots: false,
        fade: true,
        speed: 1000,
        infinite: true,
        centerMode: true,
    })

    $(".header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });

    $(document).ready(function(){
        $(".drop__down-item").click(function(){
            $(this).next(".menu-drop").toggle();
        })
    });


    new WOW().init();
        

});