// $('#basketButton').on('click', function () {

//     let $srcImg = $(this).prev().attr('src');
// $('.details__img-img').attr('src', $srcImg);
// });

// *furniture-galery get src img

$(".gallery-basket").on("click", function () {
  let $srcImg = $(this).parent().children(".active").children().attr("src");
  localStorage.setItem("item", $srcImg);
});

$("#basketButton").on("click", function () {
  let $srcImg = localStorage.getItem("item");
  $(".cartImg").attr("src", $srcImg);
});



function createCart() {
    const $cartIemBlock = $(".modal-body__basketFullMine").html();
    $('.cart-item-block:not(:last)').remove()
    $('.cart-cross', '#basketFullModal').on("click", function() {
        $('.cart-item-block:not(:last-child)').remove()
    })
    console.log("sib:"+$('.cart-item-block').siblings().length)
    console.log("ll:"+$('.cart-item-block').length)

  let $items = +$("#basket-iconMine").text();
  // console.log($items);
let delta = 0;
let blockLenth = $(".cart-item-block").length
if(blockLenth<$items){
    delta = $(".cart-item-block").length
}
else{
    delta = $items
}

  for (i = delta; i < $items; ++i) {
    $(".cart-item-block:last")
    .after($cartIemBlock);
  }
  numeringClasses($(".cart-item-block"), 'item')
  console.log("l:"+$(".cart-item-block").length)
}
  
$("#basketButton").on("click", createCart);

function numeringClasses(fragment, clas){
    fragment.each(function(i){
        if(!$(this).hasClass(clas+"*")){

            $(this).addClass(clas + (i+1))
        }
    })
}

// if(!($('#basketFullModal').hasClass('.show'))){
//     $('.cart-item-block').remove()
// }

