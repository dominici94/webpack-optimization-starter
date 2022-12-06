/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/styles/notification.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const notification_module = ({"notification":"E0yvz8SDFF78Hbsu2uXH"});
;// CONCATENATED MODULE: ./src/js/ui.js


function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? "completed" : "";
    const completionClass = todo.completed ? "checked" : "";
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="./images/checkmark.svg" width="22" height="22"></img>
                    <input class="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector(".todo-list").innerHTML = renderedItemArray.join("");
}

function clearNewTodoInput() {
  document.querySelector(".new-todo").value = "";
  showNotification();
}

function getTodoId(element) {
  return parseInt(
    element.dataset.id ||
      element.parentNode.dataset.id ||
      element.parentNode.parentNode.dataset.id,
    10
  );
}

function showNotification() {
  const notification = `<div class="${notification_module.notification}">Todo item added</div>`;
  document.body.innerHTML += notification;
  setTimeout(function () {
    const notificationElement = document.querySelector(
      `.${notification_module.notification}`
    );
    notificationElement.parentNode.removeChild(notificationElement);
  }, 2000);
}

;// CONCATENATED MODULE: ./src/todos.json
const todos_namespaceObject = JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false}]');
;// CONCATENATED MODULE: ./src/js/data.js


let data = todos_namespaceObject;

function getAllTodos() {
  return data;
}

function addTodo(todo) {
  data.push(todo);
}

function removeTodo(id) {
  data = data.filter(function (item) {
    return item.id !== id;
  });
}

function updateTodo(id, completed) {
  const itemIndex = data.findIndex(function (value) {
    return value.id === id;
  });
  data[itemIndex].completed = completed;
}

;// CONCATENATED MODULE: ./src/js/event-handlers.js



function onLoadEventHandler() {
  renderTodos(getAllTodos());
}

function newTodoEventHandler(event) {
  let text = event.target.value;
  addTodo({
    id: Date.now(),
    text: text,
    completed: false,
  });
  renderTodos(getAllTodos());
  clearNewTodoInput();
}

function removeTodoEventHandler(event) {
  const id = getTodoId(event.target);
  removeTodo(id);
  renderTodos(getAllTodos());
}

function toggleTodoEventListener(event) {
  const id = getTodoId(event.target);
  const isCompleted = event.target.checked;
  updateTodo(id, isCompleted);
  renderTodos(getAllTodos());
}

;// CONCATENATED MODULE: ./src/js/index.js



window.addEventListener("load", onLoadEventHandler);
document.addEventListener("change", function (event) {
  if (event.target.classList.contains("new-todo")) {
    newTodoEventHandler(event);
  }
});
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    removeTodoEventHandler(event);
  }
  if (event.target.classList.contains("real-checkbox")) {
    toggleTodoEventListener(event);
  }
});

console.log("prova");

/******/ })()
;