$(document).ready(loadFirstsItems);

function loadFirstsItems() {
  $(".furniture__item__load:lt(9)").show();
}

$(".furniture__loadMore").on("click", showMoreImg);

function showMoreImg() {
  
  
  setTimeout(function () {
    $(".loadMore__fa").addClass("rotate");
  });
  setTimeout(function () {
    $(".furniture__item__load").show();
  }, 1500);

  $(".loadMore__fa").removeClass("rotate");
}
