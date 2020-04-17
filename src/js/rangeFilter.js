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

