
$('.furniture__qView').on('click', function () {
    let $srcImg = $(this).prev().attr('src');
$('.details__img-img').attr('src', $srcImg);
});
// console.log($('.details__img-img').attr('src'));