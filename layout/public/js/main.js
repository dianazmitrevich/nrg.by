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

eval("$(\".main-banner .banner__slider\").slick({\n    autoplay: true,\n    autoplaySpeed: 3000,\n    arrows: false,\n    dots: true,\n});\n\n$(\".restaurants__cards .cards__list\").slick({\n    arrows: false,\n    dots: false,\n    infinite: false,\n    variableWidth: true,\n});\n\n$(\".main-events .events__wrap.slider\").slick({\n    dots: false,\n    fade: true,\n    prevArrow: $(\".main-events .events__left\"),\n    nextArrow: $(\".main-events .events__right\"),\n});\n\nlet menuToggles = document.querySelectorAll(\".menu-toggle\");\nlet menu = document.querySelector(\".header .menu\");\nlet body = document.querySelector(\"body\");\n\nmenuToggles.forEach((menuToggle) => {\n    menuToggle.addEventListener(\"click\", () => {\n        menu.classList.toggle(\"show\");\n        body.classList.toggle(\"stop-scroll\");\n    });\n});\n\ndocument.addEventListener(\"click\", (event) => {\n    if (!menu.contains(event.target) && ![...menuToggles].some((toggle) => toggle.contains(event.target))) {\n        menu.classList.remove(\"show\");\n        body.classList.remove(\"stop-scroll\");\n    }\n});\n\nlet d_tabs = document.querySelectorAll(\".d_tabs\");\n\nd_tabs.forEach((d_tab) => {\n    let tabs = d_tab.querySelectorAll(\".tab\");\n\n    tabs.forEach((tab) => {\n        tab.addEventListener(\"click\", () => {\n            let num = parseInt(tab.getAttribute(\"data-tab\"));\n\n            d_tab.querySelectorAll(\".tab\").forEach((element) => {\n                element.classList.remove(\"selected\");\n            });\n\n            d_tab.parentNode.querySelectorAll(\".card\").forEach((element) => {\n                element.classList.remove(\"selected\");\n            });\n\n            tab.classList.add(\"selected\");\n            let selectedCard = d_tab.parentNode.querySelector(`.card[data-tab='${num}']`);\n            selectedCard.classList.add(\"selected\");\n        });\n    });\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

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