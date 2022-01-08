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

/***/ "./src/constans.js":
/*!*************************!*\
  !*** ./src/constans.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NOTES\": () => (/* binding */ NOTES)\n/* harmony export */ });\nconst NOTES = [\r\n    {\r\n        name: 'Shopping list',\r\n        created: 'Jan 08 2022',\r\n        category: 'Task',\r\n        content: 'Tomatoes, bread',\r\n        dates: ['22.12.2001'],\r\n        id: 0\r\n    },\r\n    {\r\n        name: 'The theory of evolution',\r\n        created: 'Jan 08 2022',\r\n        category: 'Random Thought',\r\n        content: 'The evolution',\r\n        dates: '22.01.55',\r\n        archived: true,\r\n        id: 1\r\n    },\r\n    {\r\n        name: 'New feature',\r\n        created: 'Jan 08 2022',\r\n        category: 'Idea',\r\n        content: 'Implement new technology',\r\n        dates: '22.01.55',\r\n        id: 2\r\n    },\r\n    {\r\n        name: 'Learn React',\r\n        created: 'Jan 08 2022',\r\n        category: 'Education',\r\n        content: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)',\r\n        dates: '02.01.2022',\r\n        id: 3\r\n    },\r\n    {\r\n        name: 'Learn Redux',\r\n        created: 'Jan 08 2022',\r\n        category: 'Education',\r\n        content: 'It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. ',\r\n        dates: '02.01.2022',\r\n        id: 4\r\n    },\r\n    {\r\n        name: 'Yoga',\r\n        created: 'Jan 08 2022',\r\n        category: 'Sport',\r\n        content: 'yoga is more than a sport',\r\n        dates: '07.12.2021',\r\n        id: 5\r\n    },\r\n    {\r\n        name: 'To Do in JS',\r\n        created: 'Jan 08 2022',\r\n        category: 'Task',\r\n        content: 'Your task is to create a notes app in JS as a web app. Users can add, edit and remove notes. ',\r\n        dates: '22.01.55',\r\n        id: 6\r\n    }\r\n\r\n]\r\n\r\n\r\n\n\n//# sourceURL=webpack://notes-app-js/./src/constans.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_filterNotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/filterNotes */ \"./src/modules/filterNotes.js\");\n/* harmony import */ var _constans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans.js */ \"./src/constans.js\");\n\r\n\r\n\r\n(0,_modules_filterNotes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_constans_js__WEBPACK_IMPORTED_MODULE_1__.NOTES);\r\n\r\n\n\n//# sourceURL=webpack://notes-app-js/./src/index.js?");

/***/ }),

/***/ "./src/modules/addListeners.js":
/*!*************************************!*\
  !*** ./src/modules/addListeners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constans */ \"./src/constans.js\");\n/* harmony import */ var _filterNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterNotes */ \"./src/modules/filterNotes.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n\r\n\r\n\r\n\r\n\r\nconst note = () => {    \r\n    const editButton = document.querySelectorAll('.edit-note');\r\n    const removeButton = document.querySelectorAll('.remove-note');\r\n    const archiveButton = document.querySelectorAll('.add-note');\r\n    const editDoneButton = document.querySelectorAll('.edit-done');\r\n    const noteButton = document.querySelector('.create-button');\r\n\r\n    const createNote = (event) => {\r\n        event.preventDefault();\r\n        let created = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getTime)();\r\n        let newId = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.creatId)();\r\n        let newNote = {name: '',\r\n            created,\r\n            category: '',\r\n            content: '',\r\n            dates: [],\r\n            id: newId\r\n        };\r\n        _constans__WEBPACK_IMPORTED_MODULE_0__.NOTES.push(newNote);\r\n        (0,_filterNotes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_constans__WEBPACK_IMPORTED_MODULE_0__.NOTES);\r\n    }\r\n    \r\n    noteButton.addEventListener('click', createNote);\r\n        \r\n    editButton.forEach(itemBtn => {\r\n        itemBtn.addEventListener('click', (event) => {\r\n            const note = event.target.closest('.note');\r\n            const key = +note.dataset.key;\r\n                for (let i = 0; i < note.children.length; i++) {\r\n                    let child = note.children[i];\r\n                    child.value ? child.setAttribute(\"contentEditable\", true) : null;\r\n                    // child.value === 3 ? child[note.dates.length].setAttribute(\"contentEditable\", true) : null;\r\n                    child.style.whiteSpace = \"normal\";\r\n                    child.style.textOverflow = \"clip\";\r\n                    \r\n                    if (child.children[0] && child.children[0].tagName == 'BUTTON') {\r\n                        child.children[0].style.visibility = \"visible\";\r\n                    };\r\n                _constans__WEBPACK_IMPORTED_MODULE_0__.NOTES.map(note => {\r\n                    editDoneButton.forEach(noteBtn => {\r\n                        noteBtn.addEventListener('click', () => {\r\n                            if (note.id === key) {\r\n                                child.value === 1 ? note.name = child.innerHTML : null;\r\n                                child.value === 2 ? note.content = child.innerHTML : null;\r\n                                child.value === 3 ? note.dates.push(child.innerHTML) : null;\r\n                                return _constans__WEBPACK_IMPORTED_MODULE_0__.NOTES                           \r\n                            }\r\n                            (0,_filterNotes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_constans__WEBPACK_IMPORTED_MODULE_0__.NOTES);\r\n                        })                                         \r\n                    })\r\n                })\r\n            }\r\n        })\r\n    });\r\n\r\n    archiveButton.forEach(item => {\r\n        item.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            const note = event.target.closest('.note');\r\n            const key = +note.dataset.key;\r\n            _constans__WEBPACK_IMPORTED_MODULE_0__.NOTES.forEach(note => {\r\n                if (note.id === key) {\r\n                    let archived = note.archived;\r\n                    note.archived = !archived;\r\n                }\r\n            });\r\n            (0,_filterNotes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_constans__WEBPACK_IMPORTED_MODULE_0__.NOTES);\r\n        }) \r\n    });\r\n\r\n    removeButton.forEach(item => {\r\n        item.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n            const note = event.target.closest('.note');\r\n            const key = +note.dataset.key;\r\n            const index = _constans__WEBPACK_IMPORTED_MODULE_0__.NOTES.findIndex(item => {\r\n                return item.id === key;\r\n            });\r\n            _constans__WEBPACK_IMPORTED_MODULE_0__.NOTES.splice(index, 1);\r\n            (0,_filterNotes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_constans__WEBPACK_IMPORTED_MODULE_0__.NOTES);                \r\n        }) \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (note);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/addListeners.js?");

/***/ }),

/***/ "./src/modules/filterNotes.js":
/*!************************************!*\
  !*** ./src/modules/filterNotes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderNote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderNote */ \"./src/modules/renderNote.js\");\n/* harmony import */ var _renderArchive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderArchive */ \"./src/modules/renderArchive.js\");\n/* harmony import */ var _addListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addListeners */ \"./src/modules/addListeners.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\nconst filterNotes = (notes) => {\r\n    const archivedNotes = [];\r\n    const activeNotes = [];\r\n\r\n    (0,_filters__WEBPACK_IMPORTED_MODULE_3__.filterArchivedActive)(notes, archivedNotes, activeNotes);\r\n    \r\n    (0,_renderNote__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(activeNotes, '.notes');\r\n    (0,_renderNote__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(archivedNotes, '.archived-notes');\r\n    (0,_renderArchive__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_3__.filterCategories)(notes));\r\n\r\n    (0,_addListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterNotes);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/filterNotes.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterArchivedActive\": () => (/* binding */ filterArchivedActive),\n/* harmony export */   \"filterCategories\": () => (/* binding */ filterCategories)\n/* harmony export */ });\nconst filterArchivedActive = (arr, archive, active) => {\r\n    arr.forEach(item => item.archived ? archive.push(item) : active.push(item));\r\n}\r\n\r\nconst filterCategories = (notes) => {              \r\n    const categoriesMap = notes.reduce((acc, {category, archived}) => {\r\n        if (!acc[category]) {\r\n            return {\r\n                ...acc,\r\n                [category]: {\r\n                category,\r\n                active: Number(!archived),\r\n                archived: Number(!!archived),\r\n                }\r\n            };\r\n        }           \r\n        return {\r\n            ...acc,\r\n            [category]: {\r\n                ...acc[category],\r\n                active: acc[category].active + Number(!archived),\r\n                archived: acc[category].archived + Number(!!archived)\r\n            },\r\n        };\r\n    }, {});     \r\n    const arr = Object.values(categoriesMap);\r\n    return arr;   \r\n}\n\n//# sourceURL=webpack://notes-app-js/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/renderArchive.js":
/*!**************************************!*\
  !*** ./src/modules/renderArchive.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderArchive = (categories) => {\r\n\r\n    const categoriesWrapper = document.querySelector('.categories');\r\n    categoriesWrapper.innerHTML = '';\r\n\r\n    categories.forEach(({category, active, archived}) => {\r\n        categoriesWrapper.insertAdjacentHTML('beforeend', `\r\n            <ul class=\"note\"> \r\n                <li class=\"note-list\">${category}</li>\r\n                <li class=\"note-list\">${active}</li>\r\n                <li class=\"note-list\">${archived}</li>              \r\n            </ul>\r\n        `)\r\n    })    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderArchive);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/renderArchive.js?");

/***/ }),

/***/ "./src/modules/renderNote.js":
/*!***********************************!*\
  !*** ./src/modules/renderNote.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderNote = (list, selector) => {\r\n\r\n    const noteWrapper = document.querySelector(selector);\r\n    noteWrapper.innerHTML = '';\r\n\r\n    list.forEach(({id, name, created, category, content, dates}) => {\r\n        noteWrapper.insertAdjacentHTML('beforeend', `\r\n            <ul class=\"note\" data-key=\"${id}\"> \r\n                <li class=\"note-list\" value=1>${name}</li>\r\n                <li class=\"note-list\">${created}</li>\r\n                <li class=\"note-list\">${category}</li>\r\n                <li class=\"note-list note-content\" value=2>${content}</li>\r\n                <li class=\"note-list\" value=3>${dates}</li>\r\n                <div >\r\n                    <button type=\"submit\" class=\"note-button edit-done\">Done</button>\r\n                </div>\r\n                <div class=\"header-list icon-block\">\r\n                    <img class=\"edit-note\" src=\"assets/edit.svg\" alt=\"img\"></img>\r\n                    <img class=\"add-note\" src=\"assets/add.svg\" alt=\"img\"></img>\r\n                    <img class=\"remove-note\" src=\"assets/remove.svg\" alt=\"img\"></img>\r\n                </div>\r\n            </ul>\r\n        `)\r\n    })\r\n    \r\n   \r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNote);\n\n//# sourceURL=webpack://notes-app-js/./src/modules/renderNote.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTime\": () => (/* binding */ getTime),\n/* harmony export */   \"creatId\": () => (/* binding */ creatId)\n/* harmony export */ });\nconst getTime = () => {\r\n    let date = new Date();\r\n    return date.toString().slice(4, 15);\r\n};\r\n\r\nconst creatId = () => {\r\n    return Math.random(1, 1000);\r\n}\n\n//# sourceURL=webpack://notes-app-js/./src/modules/utils.js?");

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