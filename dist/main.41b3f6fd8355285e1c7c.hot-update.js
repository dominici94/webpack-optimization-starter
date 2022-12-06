"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack_optimization_starter"]("main",{

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearNewTodoInput\": () => (/* binding */ clearNewTodoInput),\n/* harmony export */   \"getTodoId\": () => (/* binding */ getTodoId),\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/notification.module.css */ \"./src/styles/notification.module.css\");\n\r\n\r\nfunction renderTodos(todos) {\r\n  const renderedItemArray = todos.map(function (todo) {\r\n    const className = todo.completed ? \"completed\" : \"\";\r\n    const completionClass = todo.completed ? \"checked\" : \"\";\r\n    return `\r\n            <li data-id=\"${todo.id}\" class=\"${className}\">\r\n                <span class=\"custom-checkbox\">\r\n                    <img class=\"check\" src=\"./images/checkmark.svg\" width=\"22\" height=\"22\"></img>\r\n                    <input class=\"real-checkbox\" type=\"checkbox\" ${completionClass} />\r\n                </span>\r\n                <label>${todo.text}</label>\r\n                <span class=\"delete\"></span>\r\n            </li>\r\n        `;\r\n  });\r\n  document.querySelector(\".todo-list\").innerHTML = renderedItemArray.join(\"\");\r\n}\r\n\r\nfunction clearNewTodoInput() {\r\n  document.querySelector(\".new-todo\").value = \"\";\r\n  showNotification();\r\n}\r\n\r\nfunction getTodoId(element) {\r\n  return parseInt(\r\n    element.dataset.id ||\r\n      element.parentNode.dataset.id ||\r\n      element.parentNode.parentNode.dataset.id,\r\n    10\r\n  );\r\n}\r\n\r\nfunction showNotification() {\r\n  const notification = `<div class=\"${_styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification}\">Todo item added</div>`;\r\n  document.body.innerHTML += notification;\r\n  setTimeout(function () {\r\n    const notificationElement = document.querySelector(\r\n      `.${_styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification}`\r\n    );\r\n    notificationElement.parentNode.removeChild(notificationElement);\r\n  }, 2000);\r\n}\r\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/ui.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("60373ac53cd539db13de")
/******/ })();
/******/ 
/******/ }
);