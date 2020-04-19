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
  getPushSrc($(this).parent().parent().parent().parent()
  .prev().children().children().attr("src"), cartArray);
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
  $(".cart-cross", "#basketFullModal").on("click", function () {
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

$('.blog__carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 1087,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 730,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                nextArrow: '<div class="arrow-wrapper arrow-wrapper-right"><i class="fas fa-chevron-right  carousel__arrow-right"></div></i>',
                prevArrow: '<div class="arrow-wrapper arrow-wrapper-left"><i class="fas fa-chevron-left  carousel__arrow-left"></i></div>',
            }
        }

    ]
});

// 0/1 basket
function addToBasket (elemId) {
    document.getElementById(elemId).onclick = function () {
        const basketIcon = document.getElementById("basket-iconMine");
        // let qty = basketIcon.innerHTML;
        // const newQty = +qty+1;
        // basketIcon.innerHTML = newQty;
        let qty = basketIcon.innerHTML;
        basketIcon.innerHTML = +qty + 1;

        let basket = document.getElementById("basketButton");
        basket.setAttribute("data-target", "#basketFullModal")
    };
}
addToBasket("basketInGallery1");
addToBasket("basketInGallery2");
addToBasket("basketInGallery3");
addToBasket("basketInGallery4");
// 0/1 basket


// tabs
let tab = function () {
    let tabNav = document.querySelectorAll('.gallery-button'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove
            ('active');
        });
        this.classList.add('active');

        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ?
                item.classList.add('active') :
                item.classList.remove
                ('active');
        })
    }
};
tab();
// tabs




// пыталась делать плавный скролл к секции, но не вышло. оставляю этот код пока здесь
// $(document).ready(function(){
//     $("#furniture-gallery").on("click","a", function (event) {
//         event.preventDefault();
//         let id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });
// пыталась делать плавный скролл к секции, но не вышло. оставляю это пока здесь
 document.addEventListener("DOMContentLoaded",CreateSlider);

 // window.addEventListener('resize',CreateSlider);

 function CreateSlider() {

    const priceSlider = document.getElementById('priceSlider');

    noUiSlider.create(priceSlider,{
        start:[135,500],
        connect:true,
        range:{
            'min':135,
            'max':700
        }
    });
// *************************
    const inputNumber1 = document.getElementById('input-number1');
    const inputNumber2 = document.getElementById('input-number2');
    const inputs = [inputNumber1, inputNumber2];

    priceSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = "$"+Math.trunc(values[handle]);

    });

    inputs.forEach(function (input, handle) {

        input.addEventListener('change', function () {
            priceSlider.noUiSlider.setHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {

            var values = priceSlider.noUiSlider.get();
            var value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            var steps = priceSlider.noUiSlider.steps();

            // [down, up]
            var step = steps[handle];

            var position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {

                case 13:
                    priceSlider.noUiSlider.setHandle(handle, this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }

                    // null = edge of slider
                    if (position !== null) {
                        priceSlider.noUiSlider.setHandle(handle, value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        priceSlider.noUiSlider.setHandle(handle, value - position);
                    }

                    break;
            }
        });
    });

};


// ****************
const $filtersHtml =$('#filters').html();

function windowSize(){
    // console.log($(window).width());
    $('#colFilters .container').remove();
    $('#filters .container').remove();
    if ($(window).width() <= '991'){
        $('#filters .container').remove();
        $('#filters').append($filtersHtml);

    } else {
        $('#colFilters .container').remove();
        $('#colFilters').append($filtersHtml);
    }
}

$(window).on('load resize',windowSize)
    .on('load resize', CreateSlider);

// $('#filters').remove();
// $('#colFilters').append($filtersHtml);
// console.log($(window).width());

