/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactLoad: () => (/* binding */ contactLoad)
/* harmony export */ });
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



function contactLoad() {
  document.body.innerHTML = '';

  let navbar = _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('div', '', document.body);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendBtn('Home', navbar, _page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialpageLoad);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendBtn('Menu', navbar, _menu_js__WEBPACK_IMPORTED_MODULE_1__.menuLoad);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendBtn('Contact', navbar, contactLoad);

  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('h1', 'Contact', document.body);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('p', 'Contact info', document.body);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('p', 'Phone number: 123-456-789', document.body);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('p', 'Email: ffjkld@gmail.com', document.body);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuLoad: () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");


function menuLoad() {
  document.body.innerHTML = '';
  let navbar = _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('div', '', document.body);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendBtn('Home', navbar, _page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialpageLoad);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendBtn('Menu', navbar, menuLoad);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendBtn('Contact', navbar, _contact_js__WEBPACK_IMPORTED_MODULE_1__.contactLoad);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('h1', 'Menu', document.body);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('p', 'Menu items', document.body);
  let ul = _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('ul', '', document.body);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('li', 'Item 1: $1.00', ul);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('li', 'Item 2: $2.00', ul);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('li', 'Item 3: $3.00', ul);
  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendEL('li', 'Item 4: $4.00', ul);
}


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAndAppendBtn: () => (/* binding */ createAndAppendBtn),
/* harmony export */   createAndAppendEL: () => (/* binding */ createAndAppendEL),
/* harmony export */   createAndAppendImg: () => (/* binding */ createAndAppendImg),
/* harmony export */   initialpageLoad: () => (/* binding */ initialpageLoad)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



function initialpageLoad() {
    document.body.innerHTML = '';

    const navbar = createAndAppendEL('div', '', document.body);
    createAndAppendBtn('Home', navbar, initialpageLoad);
    createAndAppendBtn('Menu', navbar, _menu__WEBPACK_IMPORTED_MODULE_0__.menuLoad);
    createAndAppendBtn('Contact', navbar, _contact__WEBPACK_IMPORTED_MODULE_1__.contactLoad);

    console.log('page-load.js is being imported');

    createAndAppendEL('h1', 'Supa Cool restaurant', document.body);
    createAndAppendImg('https://picsum.photos/200', document.body);

    createAndAppendEL(
        'p',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        document.body
    );

    createAndAppendEL(
        'p',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        document.body
    );
}

function createAndAppendEL(typeOfEl, text, appendingParent) {
    const el = document.createElement(typeOfEl);
    el.textContent = text;
    appendingParent.appendChild(el);
    return el;
}

function createAndAppendImg(src, appendingParent) {
    const img = document.createElement('img');
    img.src = src;
    appendingParent.appendChild(img);
    return img;
}

function createAndAppendBtn(text, appendingParent, moduleToRun) {
    const btn = document.createElement('button');
    btn.textContent = text;
    appendingParent.appendChild(btn);
    btn.addEventListener('click', moduleToRun);
    return btn;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.initialpageLoad)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ047O0FBRTlCO0FBQ1A7O0FBRUEsZUFBZSw0REFBMEI7QUFDekMsRUFBRSw2REFBMkIsaUJBQWlCLDBEQUF3QjtBQUN0RSxFQUFFLDZEQUEyQixpQkFBaUIsOENBQVE7QUFDdEQsRUFBRSw2REFBMkI7O0FBRTdCLEVBQUUsNERBQTBCO0FBQzVCLEVBQUUsNERBQTBCO0FBQzVCLEVBQUUsNERBQTBCO0FBQzVCLEVBQUUsNERBQTBCO0FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNBO0FBQ3BDO0FBQ1A7QUFDQSxlQUFlLDREQUEwQjtBQUN6QyxFQUFFLDZEQUEyQixpQkFBaUIsMERBQXdCO0FBQ3RFLEVBQUUsNkRBQTJCO0FBQzdCLEVBQUUsNkRBQTJCLG9CQUFvQixvREFBVztBQUM1RCxFQUFFLDREQUEwQjtBQUM1QixFQUFFLDREQUEwQjtBQUM1QixXQUFXLDREQUEwQjtBQUNyQyxFQUFFLDREQUEwQjtBQUM1QixFQUFFLDREQUEwQjtBQUM1QixFQUFFLDREQUEwQjtBQUM1QixFQUFFLDREQUEwQjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDTTs7QUFFakM7QUFDUDs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLDJDQUFRO0FBQy9DLDBDQUEwQyxpREFBVzs7QUFFckQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7O0FBRTlDO0FBQ0EsRUFBRSwyREFBZTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGFnZUxvYWQgZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHsgbWVudUxvYWQgfSBmcm9tICcuL21lbnUuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGV0IG5hdmJhciA9IHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEVMKCdkaXYnLCAnJywgZG9jdW1lbnQuYm9keSk7XG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEJ0bignSG9tZScsIG5hdmJhciwgcGFnZUxvYWQuaW5pdGlhbHBhZ2VMb2FkKTtcbiAgcGFnZUxvYWQuY3JlYXRlQW5kQXBwZW5kQnRuKCdNZW51JywgbmF2YmFyLCBtZW51TG9hZCk7XG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEJ0bignQ29udGFjdCcsIG5hdmJhciwgY29udGFjdExvYWQpO1xuXG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEVMKCdoMScsICdDb250YWN0JywgZG9jdW1lbnQuYm9keSk7XG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEVMKCdwJywgJ0NvbnRhY3QgaW5mbycsIGRvY3VtZW50LmJvZHkpO1xuICBwYWdlTG9hZC5jcmVhdGVBbmRBcHBlbmRFTCgncCcsICdQaG9uZSBudW1iZXI6IDEyMy00NTYtNzg5JywgZG9jdW1lbnQuYm9keSk7XG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEVMKCdwJywgJ0VtYWlsOiBmZmprbGRAZ21haWwuY29tJywgZG9jdW1lbnQuYm9keSk7XG59XG4iLCJpbXBvcnQgKiBhcyBwYWdlTG9hZCBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQgeyBjb250YWN0TG9hZCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5leHBvcnQgZnVuY3Rpb24gbWVudUxvYWQoKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGxldCBuYXZiYXIgPSBwYWdlTG9hZC5jcmVhdGVBbmRBcHBlbmRFTCgnZGl2JywgJycsIGRvY3VtZW50LmJvZHkpO1xuICBwYWdlTG9hZC5jcmVhdGVBbmRBcHBlbmRCdG4oJ0hvbWUnLCBuYXZiYXIsIHBhZ2VMb2FkLmluaXRpYWxwYWdlTG9hZCk7XG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEJ0bignTWVudScsIG5hdmJhciwgbWVudUxvYWQpO1xuICBwYWdlTG9hZC5jcmVhdGVBbmRBcHBlbmRCdG4oJ0NvbnRhY3QnLCBuYXZiYXIsIGNvbnRhY3RMb2FkKTtcbiAgcGFnZUxvYWQuY3JlYXRlQW5kQXBwZW5kRUwoJ2gxJywgJ01lbnUnLCBkb2N1bWVudC5ib2R5KTtcbiAgcGFnZUxvYWQuY3JlYXRlQW5kQXBwZW5kRUwoJ3AnLCAnTWVudSBpdGVtcycsIGRvY3VtZW50LmJvZHkpO1xuICBsZXQgdWwgPSBwYWdlTG9hZC5jcmVhdGVBbmRBcHBlbmRFTCgndWwnLCAnJywgZG9jdW1lbnQuYm9keSk7XG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEVMKCdsaScsICdJdGVtIDE6ICQxLjAwJywgdWwpO1xuICBwYWdlTG9hZC5jcmVhdGVBbmRBcHBlbmRFTCgnbGknLCAnSXRlbSAyOiAkMi4wMCcsIHVsKTtcbiAgcGFnZUxvYWQuY3JlYXRlQW5kQXBwZW5kRUwoJ2xpJywgJ0l0ZW0gMzogJDMuMDAnLCB1bCk7XG4gIHBhZ2VMb2FkLmNyZWF0ZUFuZEFwcGVuZEVMKCdsaScsICdJdGVtIDQ6ICQ0LjAwJywgdWwpO1xufVxuIiwiaW1wb3J0IHsgbWVudUxvYWQgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgY29udGFjdExvYWQgfSBmcm9tICcuL2NvbnRhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbHBhZ2VMb2FkKCkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBuYXZiYXIgPSBjcmVhdGVBbmRBcHBlbmRFTCgnZGl2JywgJycsIGRvY3VtZW50LmJvZHkpO1xuICAgIGNyZWF0ZUFuZEFwcGVuZEJ0bignSG9tZScsIG5hdmJhciwgaW5pdGlhbHBhZ2VMb2FkKTtcbiAgICBjcmVhdGVBbmRBcHBlbmRCdG4oJ01lbnUnLCBuYXZiYXIsIG1lbnVMb2FkKTtcbiAgICBjcmVhdGVBbmRBcHBlbmRCdG4oJ0NvbnRhY3QnLCBuYXZiYXIsIGNvbnRhY3RMb2FkKTtcblxuICAgIGNvbnNvbGUubG9nKCdwYWdlLWxvYWQuanMgaXMgYmVpbmcgaW1wb3J0ZWQnKTtcblxuICAgIGNyZWF0ZUFuZEFwcGVuZEVMKCdoMScsICdTdXBhIENvb2wgcmVzdGF1cmFudCcsIGRvY3VtZW50LmJvZHkpO1xuICAgIGNyZWF0ZUFuZEFwcGVuZEltZygnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMCcsIGRvY3VtZW50LmJvZHkpO1xuXG4gICAgY3JlYXRlQW5kQXBwZW5kRUwoXG4gICAgICAgICdwJyxcbiAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nLFxuICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgKTtcblxuICAgIGNyZWF0ZUFuZEFwcGVuZEVMKFxuICAgICAgICAncCcsXG4gICAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJyxcbiAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRFTCh0eXBlT2ZFbCwgdGV4dCwgYXBwZW5kaW5nUGFyZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVPZkVsKTtcbiAgICBlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYXBwZW5kaW5nUGFyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRJbWcoc3JjLCBhcHBlbmRpbmdQYXJlbnQpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGFwcGVuZGluZ1BhcmVudC5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHJldHVybiBpbWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRCdG4odGV4dCwgYXBwZW5kaW5nUGFyZW50LCBtb2R1bGVUb1J1bikge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYXBwZW5kaW5nUGFyZW50LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kdWxlVG9SdW4pO1xuICAgIHJldHVybiBidG47XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxwYWdlTG9hZCB9IGZyb20gJy4vcGFnZS1sb2FkJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaW5pdGlhbHBhZ2VMb2FkKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==