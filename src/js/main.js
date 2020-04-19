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