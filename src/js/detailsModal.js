// *furniture

$('.furniture__qView').on('click', function () {
    let $srcImg = $(this).prev().attr('src');
$('.details__img-img').attr('src', $srcImg);
});


// *furniture-galery

$('.gallery-eye').on('click', function () {
    let $srcImg = $(this)
    .parent()
    .children('.active')
    .children().attr('src');
$('.details__img-img').attr('src', $srcImg);
});

