'use strict'

// parentElement.appendChild(newDiv)

const btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', function addDiv() {
  const parentElement = document.querySelector('.collector')
  const task = document.querySelector('.task')
  const newTask = task.cloneNode(true)
  // const textNewDiv = document.createTextNode('Hello')
  // newDiv.appendChild(textNewDiv)
  parentElement.appendChild(newTask)
})

// let div = document.createElement('div')
// div.className = 'task'
// div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.'
// document.body.append(div)

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

/*

<div id="row">
<div class="page-block">
Страница 1
</div>
</div> 
<button class="addBtn">+Страница</button>
<button class="addBtn">Готово</button>


const addBtn = document.querySelector('.addBtn');
var blockNumber = 2;
addBtn.onclick = () => {
  // Создаем блок и добавляем номер
  const createBlock = document.createElement('div');
  createBlock.className = 'page-block';
  createBlock.innerText = 'Страница ' + blockNumber;
  blockNumber++;
  addBtn.insertAdjacentElement('beforebegin', createBlock);
}

*/
