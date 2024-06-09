'use strict'

// parentElement.appendChild(newDiv)

let parentElement = document.querySelector('.collector')
let addTask = document.querySelector('.addTask')
let addTask1 = document.querySelector('.addTask1')
let ol = document.querySelector('.ol')
let taskLi = document.querySelector('.taskLi')
let taskDiv = document.querySelector('.taskDiv')
let buttonDeleteTask = document.querySelector('.buttonDeleteTask')
let buttonAccept = document.querySelector('.buttonAccept')
let inputText = document.querySelector('.inputText')
// let li = document.querySelector('.li')
let addTaskSUV = document.querySelector('.addTaskSUV')

// addTask.addEventListener('click', function () {
//   let newTask = taskDiv.cloneNode(true)
//   ol.append(newTask)
// })

addTask.addEventListener('click', function () {
  // пробую сделать добавление нового задания правильно
  let newTask = taskLi.cloneNode(true)
  ol.append(newTask)

  // работающий переборщик названий классов
  // taskLi.classList.forEach((item) => {
  //   // work
  //   console.log(item)
  // })

  // рабочий вывод длинны списка
  // let elements = document.querySelectorAll('li') // work
  // console.log(elements.length)

  // работающий заменитель классов
  // let elements = document.querySelectorAll('li') // work
  // for (let i = 1; i < elements.length; i++) {
  //   elements.forEach((item) => {
  //     item.className = `TaskLi-${i + 1}`
  //   })
  // }

  // НЕ СРАБОТАЛ, но потом заработал ))
  let elements = document.querySelectorAll('li')
  let buttom = document.querySelectorAll('div > button')

  let counter = 0
  let counter1 = 0
  elements.forEach((item) => {
    counter++
    item.classList = `TaskLi-${counter}`
  })

  buttom.forEach((item) => {
    counter1++
    item.classList = `buttonDelete-${counter1}`
  })

  // попробуй воспольоваться методом
  // const spanList = [...document.querySelectorAll("span")];
})

buttonAccept.onclick = function () {
  let inputValue = inputText.value
  console.log(inputValue)
}

buttonDeleteTask.addEventListener('click', function () {})

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

class ToDoList {
  constructor() {
    this.posts = 0
    this.postsDone = 0
  }
}

const arr = []
const counter = function () {}
