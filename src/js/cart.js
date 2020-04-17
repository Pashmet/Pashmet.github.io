// $('#basketButton').on('click', function () {
    
    
    
    
//     let $srcImg = $(this).prev().attr('src');
// $('.details__img-img').attr('src', $srcImg);
// });

// *furniture-galery get src img

$('.gallery-basket').on('click', function () {
    let $srcImg = $(this)
    .parent()
    .children('.active')
    .children().attr('src');
    localStorage.setItem('item', $srcImg)
});

$('#basketButton').on('click', function () {
    let $srcImg = localStorage.getItem('item');
    $('.cartImg').attr('src', $srcImg)
});


// const $cartIemBlock =$('.cart-item-block').html();
