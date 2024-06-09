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
let addTaskSUV = document.querySelector('.addTaskSUV')

addTask.addEventListener('click', function () {
  let newTask = taskLi.cloneNode(true)
  ol.append(newTask)

  let elements = document.querySelectorAll('li')
  let buttonDeleteTask = document.querySelectorAll('.buttonDeleteTask')
  let buttonAccept = document.querySelectorAll('.buttonAccept')

  let counter = 0
  elements.forEach((item) => {
    counter++
    item.classList = `TaskLi-${counter}`
  })
  counter = 0

  buttonDeleteTask.forEach((item) => {
    counter++
    item.classList.toggle = `buttonDeleteTask-${counter}`
  })
  counter = 0

  buttonAccept.forEach((item) => {
    counter++
    item.classList = `buttonAccept-${counter}`
  })
  counter = 0
})
