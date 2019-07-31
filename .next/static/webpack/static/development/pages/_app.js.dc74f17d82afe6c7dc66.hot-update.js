webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/actionTypes.js":
/*!******************************!*\
  !*** ./redux/actionTypes.js ***!
  \******************************/
/*! exports provided: ADD_TO_BUYCAR, CHANGE_MODO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_BUYCAR", function() { return ADD_TO_BUYCAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_MODO", function() { return CHANGE_MODO; });
var ADD_TO_BUYCAR = 'ADD_TO_BUYCAR';
var CHANGE_MODO = 'CHANGE_MODO';

/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./redux/actionTypes.js");


var initialState = {
  modo: "dia"
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_MODO"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      modo: state.modo === 'dia' ? state.modo = 'noche' : state.modo = 'dia'
    });
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=_app.js.dc74f17d82afe6c7dc66.hot-update.js.map