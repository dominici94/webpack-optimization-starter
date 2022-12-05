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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handlers */ \"./src/js/event-handlers.js\");\n\r\n\r\n\r\nwindow.addEventListener(\"load\", _event_handlers__WEBPACK_IMPORTED_MODULE_1__.onLoadEventHandler);\r\ndocument.addEventListener(\"change\", function (event) {\r\n  if (event.target.classList.contains(\"new-todo\")) {\r\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_1__.newTodoEventHandler)(event);\r\n  }\r\n});\r\ndocument.addEventListener(\"click\", function (event) {\r\n  if (event.target.classList.contains(\"delete\")) {\r\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_1__.removeTodoEventHandler)(event);\r\n  }\r\n  if (event.target.classList.contains(\"real-checkbox\")) {\r\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_1__.toggleTodoEventListener)(event);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a4b47769cc72f5a1404")
/******/ })();
/******/ 
/******/ }
);