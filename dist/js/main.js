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


document.addEventListener("DOMContentLoaded", CreateSlider);
 window.addEventListener('resize',CreateSlider);

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
    console.log($(window).width());
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

$(window).on('load resize',windowSize);

// $('#filters').remove();
// $('#colFilters').append($filtersHtml);
console.log($(window).width());

