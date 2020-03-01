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
                    arrows: false,
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

});