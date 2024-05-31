'use strict';

function sendForm(evt) {
    //получаем значение поля key
    const keyBox = document.search.key;
    const val = keyBox.value;
    if(val.lenght<3) {
        alert('Недопустимая длина строки');
        evt.preventDefault();
    }
    else
        alert('Отправка завершена');
}

const sendButton = document.search.send;
sendButton.addEventListener("click", sendForm);





// получим доступ к кнопке 2


var button = getElementById("addButton");

