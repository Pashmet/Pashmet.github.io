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

function remooveCartItems() {
  $(".cart-item-block:not(:last-child)").remove();
  $(".cart-item-block")
    .removeClass()
    .addClass("cart-item-block container-fluid");
}
function handler(e) {
  let conteiner = $(".modal-content__basketFullMine");
  if (conteiner.has(e.target).length === 0) {
    remooveCartItems();
    // $(".cart-cross, #basketFullModal").on("click", function () {

    // }
    // )
    // ;
  }
}

function createCart() {
  const $cartIemBlock = $(".modal-body__basketFullMine").html();
  $(" #basketFullModal").on("click", handler);
  $(".cart-cross").on("click", remooveCartItems);

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
  totslSum($(".basketFullMine__sum-num"), $(".basketFullMine__total"))
  // console.log("l:" + $(".cart-item-block").length);
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
$(".modal-body__basketFullMine").on(
  "mousedown",
  ".sign-increase",
  // function () {
  //   let $this = $(".sign-increase");
  //   increaseItems();
  // }
  increaseItems
);
// $(".modal-body__basketFullMine")
// .on(
//   "click",
// ".sign-increase",
// totslSum($(".quantity"), $("basketFullMine__total")));

$(".modal-body__basketFullMine").on("mousedown", ".sign-reduce", reduceItems);

function increaseItems() {
  let $this = $(this);
  let $itemQuantyty = +$this.siblings(".quantity").text();
  $itemQuantyty += 1;
  $this.siblings(".quantity").text($itemQuantyty);

  $this
    .parent()
    .next()
    .children(".basketFullMine__sum-num")
    .text(
      multiplication(
        $this.siblings(".quantity").text(),
        $this
          .parent()
          .parent()
          .prev()
          .children(".basketFullMine__name")
          .children(".basketFullMine__name-newPrice")
          .text()
      )
    );
  totslSum($(".basketFullMine__sum-num"), $(".basketFullMine__total"));
}

function reduceItems() {
  let $this = $(this);
  let $itemQuantyty = +$this.siblings(".quantity").text();
  $itemQuantyty -= 1;
  if ($itemQuantyty <= 0) {
    $itemQuantyty += 1;
    let $items = +$("#basket-iconMine").text();
    $items -= 1;
    $("#basket-iconMine").text($items);
    if (!$items) {
      remooveCartItems();
      $("#basketFullModal").modal("hide");
      let basket = $("#basketButton");
      basket.attr("data-target", "#basketEmptyModal");
      cartArray = [];
    } else {
      $this.parent().parent().parent().remove();
    }
  }
  $this.siblings(".quantity").text($itemQuantyty);

  $this
    .parent()
    .next()
    .children(".basketFullMine__sum-num")
    .text(
      multiplication(
        $this.siblings(".quantity").text(),
        $this
          .parent()
          .parent()
          .prev()
          .children(".basketFullMine__name")
          .children(".basketFullMine__name-newPrice")
          .text()
      )
    );
    totslSum($(".basketFullMine__sum-num"), $(".basketFullMine__total"))
}
// *summ items
function multiplication(a, b) {
  let c;
  c = a * b;
  return c;
}
// *summ items

// *total summ
function totslSum(elements, sumOut) {
  let sum = 0;
  elements.each(function () {
    sum += parseInt($(this).text());
  });
  sumOut.text(sum);
}
// *total summ
