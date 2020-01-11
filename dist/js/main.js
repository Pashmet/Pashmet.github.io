
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

// 0/1 basket
document.getElementById("basketInGallery").onclick = function () {
    const basketIcon = document.getElementById("basket-iconMine");
    // let qty = basketIcon.innerHTML;
    // const newQty = +qty+1;
    // basketIcon.innerHTML = newQty;


    let qty = basketIcon.innerHTML;
    basketIcon.innerHTML = +qty + 1;

    let basket = document.getElementById("basketButton");
    basket.setAttribute("data-target", "#basketFullModal")
};

// 0/1 basket


$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );