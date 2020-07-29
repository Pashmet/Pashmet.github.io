new WOW().init();

$(document).ready(function () {
  let show = true;
  let countbox = ".advantages-number";
  $(window).on("scroll load resize animationend", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    let w_height = $(window).height(); // Высота окна браузера
    let d_height = $(document).height(); // Высота всего документа
    let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 600 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $('.advantages-number').css('opacity', '1');
      
      $(".advantages-number")
      
      .spincrement({
        thousandSeparator: "",
        duration: 5000,
      })
      // $('.advantages-number').each(function(){
      //   spincrement({
      //     thousandSeparator: "",
      //     duration: 5000,
      //   })
      // })
      // .spincrement({
      //   thousandSeparator: "",
      //   duration: 5000,
      // });

      show = false;
    }
  });
});

// $(window).on(
//     "scroll ",
//     function () {
//         console.log("1");
//     })

// $(document).ready(function () {

//     $('.advantages-number').each(function () {
//        $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//         }, {
//          duration: 1500,
//          easing: 'swing',
//          step: function (now) {
//             $(this).text(Math.ceil(now));
//          }
//         });
//     });

//     });

// $(function() {

// 	var target_block = $(".advantages-number"); // Ищем блок
// 	var blockStatus = true;

// 	$(window).scroll(function() {

// 		var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

// 		if(scrollEvent && blockStatus) {

// 			blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

// 			$({numberValue: 0}).animate({numberValue: 1000}, {

// 				duration: 500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
// 				easing: "linear",

// 				step: function(val) {

// 					$(".advantages-number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

// 				}

// 			});

// 		}

// 	});

// });


!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);
$(".mouse-parallax").on("mousemove", (e)=>{
const x = e.pageX/$(window).width()
const y = e.pageY/$(window).height()

$(".mouse-parallax-bg").css(
    "transform",
    "translate(-" + x * 30 + "px, -"+ y * 30 + "px)"
);
// console.log(x,y);
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

 
  $(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$('.btn-callbeck').on('click', function(){
  $('body').children("*:not(.modal)").addClass('modal-blur')
})


$('.close').on('click', function(){
  $('.modal-blur').removeClass('modal-blur')
})

$(".modal").on("click", function(e){
  let modal= $(".modal-content");
  if (!modal.is(e.target) // если клик был не по нашему блоку
		    && modal.has(e.target).length === 0 ) { // и не по его дочерним элементам
          $('.modal-blur').removeClass('modal-blur');  
          console.log(e.target)
    }
   
})



$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});
$('.nav-link').on('click', ()=>{
	$('.navbar-collapse').removeClass('show')
	$('.nav-icon').removeClass('open')

})

    // JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
        if (support == true) {
        document.querySelector('body').classList.add('webp');
        }else{
        document.querySelector('body').classList.add('no-webp');
        }
        });