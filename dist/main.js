/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/note */ \"./src/modules/note.js\");\n/* harmony import */ var _modules_filterNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filterNotes */ \"./src/modules/filterNotes.js\");\n/* harmony import */ var _modules_createNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createNote */ \"./src/modules/createNote.js\");\n\r\n\r\n\r\n\r\n(0,_modules_note__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_filterNotes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_createNote__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://notes-app-js/./src/index.js?");

/***/ }),

/***/ "./src/modules/createNote.js":
/*!***********************************!*\
  !*** ./src/modules/createNote.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst createNote = () => {\r\nconst noteInput = document.querySelector('.note-input');\r\nconst noteButton = document.querySelector('.note-button');\r\nconst noteList = document.querySelector('.note-list');\r\n\r\n\r\nconst getTime = () => {\r\n    let date = new Date();\r\n    // date.toString().slice(4, 15);\r\n    // console.log( date.toString().slice(4, 15) );\r\n    // .replace(/^.../, \"\")\r\n    // .replace(/T.*/, \"\")\r\n    // .slice(1, 4)\r\n    // return date;\r\n    // return `${date.getHours ()}:${date.getMinutes()}`\r\n    return date.toString().slice(4, 15);\r\n};\r\n\r\nconst addNote = (event) => {\r\n    event.preventDefault();\r\n    getTime();\r\n    const noteDiv = document.createElement('div');\r\n    noteDiv.classList.add('note');\r\n}\r\n\r\n\r\nnoteButton.addEventListener('click', addNote);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNote);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/createNote.js?");

/***/ }),

/***/ "./src/modules/filterNotes.js":
/*!************************************!*\
  !*** ./src/modules/filterNotes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./src/utils.js\");\n/* harmony import */ var _renderNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNote */ \"./src/modules/renderNote.js\");\n/* harmony import */ var _renderArchive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderArchive.js */ \"./src/modules/renderArchive.js\");\n\r\n\r\n\r\n\r\nconst filter = () => {\r\n    const archivedNotes = [];\r\n    const activeNotes = [];\r\n    let categories = {};\r\n\r\n    const filterArchivedSctive = (arr) => {\r\n        arr.filter(item => item.archived ? archivedNotes.push(item) : activeNotes.push(item));\r\n    }\r\n\r\n    filterArchivedSctive(_utils_js__WEBPACK_IMPORTED_MODULE_0__.NOTES);\r\n    (0,_renderNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(activeNotes, '.notes');\r\n    (0,_renderNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(archivedNotes, '.archived-notes');\r\n\r\n    const getCategories = () => {       \r\n       \r\n        const categoriesMap = _utils_js__WEBPACK_IMPORTED_MODULE_0__.NOTES.reduce((acc, { category, archived }) => {\r\n            if (!acc[category]) {\r\n                return {\r\n                    ...acc,\r\n                    [category]: {\r\n                    category,\r\n                    active: Number(!archived),\r\n                    archived: Number(!!archived),\r\n                    }\r\n                };\r\n            }\r\n            \r\n            return {\r\n                ...acc,\r\n                [category]: {\r\n                    ...acc[category],\r\n                    active: acc[category].active + Number(!archived),\r\n                    archived: acc[category].archived + Number(!!archived)\r\n                },\r\n            };\r\n          }, {});\r\n          \r\n        categories = Object.values(categoriesMap);\r\n    }\r\n    getCategories();\r\n    (0,_renderArchive_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(categories);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/filterNotes.js?");

/***/ }),

/***/ "./src/modules/note.js":
/*!*****************************!*\
  !*** ./src/modules/note.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderNote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderNote */ \"./src/modules/renderNote.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\nconst note = () => {\r\n    const editButton = document.querySelectorAll('.edit-note');\r\n    const removeButton = document.querySelectorAll('.remove-note');\r\n    const archiveButton = document.querySelectorAll('.add-note');\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (note);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/note.js?");

/***/ }),

/***/ "./src/modules/renderArchive.js":
/*!**************************************!*\
  !*** ./src/modules/renderArchive.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderArchive = (categories) => {\r\n\r\n    const categoriesWrapper = document.querySelector('.categories');\r\n    categoriesWrapper.innerHTML = '';\r\n\r\n    categories.forEach(category => {\r\n        categoriesWrapper.insertAdjacentHTML('beforeend', `\r\n            <ul class=\"note\"> \r\n                <li class=\"note-list\">${category.category}</li>\r\n                <li class=\"note-list\">${category.active}</li>\r\n                <li class=\"note-list\">${category.archived}</li>              \r\n            </ul>\r\n        `)\r\n    })    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderArchive);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/renderArchive.js?");

/***/ }),

/***/ "./src/modules/renderNote.js":
/*!***********************************!*\
  !*** ./src/modules/renderNote.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderNote = (list, selector) => {\r\n\r\n    const noteWrapper = document.querySelector(selector);\r\n    noteWrapper.innerHTML = '';\r\n\r\n    list.forEach(notesItem => {\r\n        noteWrapper.insertAdjacentHTML('beforeend', `\r\n            <ul class=\"note\" data-key=\"${notesItem.id}\"> \r\n                <li class=\"note-list\">${notesItem.name}</li>\r\n                <li class=\"note-list\">${notesItem.created}</li>\r\n                <li class=\"note-list\">${notesItem.category}</li>\r\n                <li class=\"note-list\">${notesItem.content}</li>\r\n                <li class=\"note-list\">${notesItem.dates}</li>\r\n                <div class=\"header-list icon-block\">\r\n                    <img class=\"edit-note\" src=\"assets/edit.svg\" alt=\"img\"></img>\r\n                    <img class=\"add-note\" src=\"assets/add.svg\" alt=\"img\"></img>\r\n                    <img class=\"remove-note\" src=\"assets/remove.svg\" alt=\"img\"></img>\r\n                </div>\r\n            </ul>\r\n        `)\r\n    })\r\n    \r\n   \r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNote);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/renderNote.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NOTES\": () => (/* binding */ NOTES)\n/* harmony export */ });\nconst NOTES = [\r\n    {\r\n        name: 'Shopping list',\r\n        created: '***',\r\n        category: 'Task',\r\n        content: 'Tomatoes, bread',\r\n        dates: '22.12.2001',\r\n        id: 0\r\n    },\r\n    {\r\n        name: 'The theory of evolution',\r\n        created: '***',\r\n        category: 'Random',\r\n        content: 'The evolution',\r\n        dates: '22.01.55',\r\n        archived: true,\r\n        id: 1\r\n    },\r\n    {\r\n        name: 'New feature',\r\n        created: '***',\r\n        category: 'Idea',\r\n        content: 'Implement new technology',\r\n        dates: '22.01.55',\r\n        id: 2\r\n    },\r\n    {\r\n        name: 'Learn React',\r\n        created: '***',\r\n        category: 'Education',\r\n        content: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)',\r\n        dates: '02.01.2022',\r\n        id: 3\r\n    },\r\n    {\r\n        name: 'Learn Redux',\r\n        created: '***',\r\n        category: 'Education',\r\n        content: 'It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. ',\r\n        dates: '02.01.2022',\r\n        id: 4\r\n    },\r\n    {\r\n        name: 'Yoga',\r\n        created: '***',\r\n        category: 'Sport',\r\n        content: 'yoga is more than a sport',\r\n        dates: '07.12.2021',\r\n        id: 5\r\n    },\r\n    {\r\n        name: 'To Do in JS',\r\n        created: 'Project',\r\n        category: 'Job',\r\n        content: 'Your task is to create a notes app in JS as a web app. Users can add, edit and remove notes. ',\r\n        dates: '22.01.55',\r\n        id: 6\r\n    }\r\n\r\n]\r\n\r\n\r\n\n\n//# sourceURL=webpack://notes-app-js/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;