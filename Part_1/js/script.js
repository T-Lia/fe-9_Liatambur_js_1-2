(function () {
    'use strict';

    var number = prompt('Введите число:', '');
    var exponent = prompt('Введите показатель степени:', '');


    if (isNaN(number) || isNaN(exponent)) {
        alert('Вы ввели не число! Повторите попытку');
    }

    function pow(num, exp) {

        var result = 1;

        if (exp > 0) {
            for (var i = 1; i <= exp; i++)
                result *= num;
        } else {
            for (var j = 0; j > exp; j--)
                result /= num;
        }

        return result;
    }

    console.log(pow(number, exponent));
    
})();