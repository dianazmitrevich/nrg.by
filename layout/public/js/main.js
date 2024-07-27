/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("$(\".main-banner .banner__slider\").slick({\n    autoplay: true,\n    autoplaySpeed: 3000,\n    arrows: false,\n    dots: true,\n});\n\nlet menuToggles = document.querySelectorAll(\".menu-toggle\");\nlet menu = document.querySelector(\".header .menu\");\nlet body = document.querySelector(\"body\");\n\nmenuToggles.forEach((menuToggle) => {\n    menuToggle.addEventListener(\"click\", () => {\n        menu.classList.toggle(\"show\");\n        body.classList.toggle(\"stop-scroll\");\n    });\n});\n\ndocument.addEventListener(\"click\", (event) => {\n    if (!menu.contains(event.target) && ![...menuToggles].some((toggle) => toggle.contains(event.target))) {\n        menu.classList.remove(\"show\");\n        body.classList.remove(\"stop-scroll\");\n    }\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;