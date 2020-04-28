let cartArray = [];

// *furniture-galery get src img

$(".gallery-basket").on("click", function () {
  getPushSrc(
    $(this).parent().children(".active").children().attr("src"),
    cartArray
  );
});

// *products get src img
$(".details__addCart").on("click", function () {
  incrementCart();
  getPushSrc(
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .prev()
      .children()
      .children()
      .attr("src"),
    cartArray
  );
});

// *details get src img
$(".furniture__addCart").on("click", function () {
  incrementCart();
  getPushSrc($(this).prev().prev().attr("src"), cartArray);
});

$("#basketButton").on("click", function () {
  createCart();
  setSrcImg($(".cartImg"), cartArray);
});

function createCart() {
  const $cartIemBlock = $(".modal-body__basketFullMine").html();
  // !довернути клік поза модалкою
  $(".cart-cross, #basketFullModal").on("click", function () {
    $(".cart-item-block:not(:last-child)").remove();
    $(".cart-item-block")
      .removeClass()
      .addClass("cart-item-block container-fluid");
  });

  let $items = +$("#basket-iconMine").text();
  let delta = 1;
  let blockLenth = $(".cart-item-block").length;
  if (blockLenth < $items) {
    delta = $(".cart-item-block").length;
  } else {
    delta = $items;
  }

  for (i = delta; i < $items; ++i) {
    $(".cart-item-block:last").after($cartIemBlock);
  }
  numeringClasses($(".cart-item-block"), "item");
  console.log("l:" + $(".cart-item-block").length);
}

function numeringClasses(fragment, clas) {
  fragment.each(function (i) {
    $(this).addClass(clas + (i + 1));
  });
}

function setSrcImg($selector, array) {
  for (i = 0; i < array.length; i++) {
    $selector.eq(i).attr("src", array[i]);
  }
}

function getPushSrc(path, array) {
  array.push(path);
}

function incrementCart() {
  let $items = +$("#basket-iconMine").text();
  $items += 1;
  $("#basket-iconMine").text($items);
  let basket = document.getElementById("basketButton");
  basket.setAttribute("data-target", "#basketFullModal");
}

// $('.sign-increase').on('click', increaseItems);
// $('.sign-reduce').on('click', reduceItems);
// console.log($('.sign-increase'));
$(".modal-body__basketFullMine").on("mousedown", ".sign-increase", increaseItems);
$(".modal-body__basketFullMine").on("mousedown", ".sign-reduce", reduceItems);
function increaseItems() {
  let $itemQuantyty = +$(this).siblings(".quantity").text();
  $itemQuantyty += 1;
  $(this).siblings(".quantity").text($itemQuantyty);
  console.log($(this));
};

function reduceItems() {
  // let $itemQuantytyEl = +$(this).siblings(".quantity");
  let $itemQuantyty = +$(this).siblings(".quantity").text();
  $itemQuantyty -= 1;
  $(this).siblings(".quantity").text($itemQuantyty);
};
// *summ items

// *summ items

// *total summ

// *total summ
