'use strict'

// parentElement.appendChild(newDiv)

const btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', function addDiv() {
  let parentElement = document.querySelector('.item3')
  let newDiv = document.createElement('div')
  const textNewDiv = document.createTextNode('Hello')
  newDiv.appendChild(textNewDiv)
  parentElement.append(newDiv)
})

// var button = document.getElementById("button");

var i = 0 // начальное значение

btn1.addEventListener('click', function (e) {
  i = i + 1
  // let counter = document.querySelector
  document.querySelector('.counter').innerHTML = i
})

// document.addEventListener('click', e => {
//   var btn = e.target.closest('button')
//   if (btn) ++btn.textContent
// })

class ToDoList {
  constructor() {
    this.posts = 0
    this.postsDone = 0
  }
}

const arr = []
const counter = function () {}

// const btn1 = document.querySelector('.btn1')

// bnt1.addEventListener('click', div)

// function go() {
//   console.log('Polina')
// }

// let div = document.createElement('div')
// div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.'

// document.body.append(div)

// document.querySelector('.example')

// function sendForm(evt) {
//   //получаем значение поля key
//   const keyBox = document.search.key
//   const val = keyBox.value
//   if (val.lenght < 3) {
//     alert('Недопустимая длина строки')
//     evt.preventDefault()
//   } else alert('Отправка завершена')
// }

// const sendButton = document.search.send
// sendButton.addEventListener('click', sendForm)

// получим доступ к кнопке 2

// var button = getElementById('addButton')
