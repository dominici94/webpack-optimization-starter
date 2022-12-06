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

/***/ "./src/js/event-handlers.js":
/*!**********************************!*\
  !*** ./src/js/event-handlers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTodoEventHandler\": () => (/* binding */ newTodoEventHandler),\n/* harmony export */   \"onLoadEventHandler\": () => (/* binding */ onLoadEventHandler),\n/* harmony export */   \"removeTodoEventHandler\": () => (/* binding */ removeTodoEventHandler),\n/* harmony export */   \"toggleTodoEventListener\": () => (/* binding */ toggleTodoEventListener)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n\n\nfunction trim(value) {\n  return value, replace;\n}\nfunction onLoadEventHandler() {\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n}\nfunction newTodoEventHandler(event) {\n  var text = event.target.value;\n  (0,_data__WEBPACK_IMPORTED_MODULE_1__.addTodo)({\n    id: Date.now(),\n    text: text,\n    completed: false\n  });\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.clearNewTodoInput)();\n}\nfunction removeTodoEventHandler(event) {\n  var id = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.getTodoId)(event.target);\n  (0,_data__WEBPACK_IMPORTED_MODULE_1__.removeTodo)(id);\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n}\nfunction toggleTodoEventListener(event) {\n  var id = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.getTodoId)(event.target);\n  var isCompleted = event.target.checked;\n  (0,_data__WEBPACK_IMPORTED_MODULE_1__.updateTodo)(id, isCompleted);\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n}\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/event-handlers.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a970a916b50a8ce4517")
/******/ })();
/******/ 
/******/ }
);