
$('.blog__carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    responsive: [
             {
            breakpoint: 1087,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false
                            }
        },
        {
            breakpoint: 730,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:true,
                nextArrow: '<div class="arrow-wrapper arrow-wrapper-right"><i class="fas fa-chevron-right  carousel__arrow-right"></div></i>',
                prevArrow: '<div class="arrow-wrapper arrow-wrapper-left"><i class="fas fa-chevron-left  carousel__arrow-left"></i></div>',
            }
        }

    ]
});
