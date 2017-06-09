(function () {

    'use strict';

    var arrNames = [];

    for (var i = 0; i < 5; i++) {
        arrNames[i] = prompt('Введите имя:', '');
    }

    var userName = prompt('Введите имя пользователя:', '');


    function checkName(names, userName) {

        for (var j = 0, max = names.length; j < max - 1; j++) {
            var name = names[j];
            if (name === userName) {
                alert(name + ', вы вошли успешно!');
                return;
            }
        }
        alert('Ошибка входа.');
    }

    checkName(arrNames, userName);

})();



