webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./redux/actionTypes.js");

var _jsxFileName = "C:\\Users\\lilliam\\Desktop\\front-end\\practica\\next-redux-pc\\redux\\reducers.js";


var initialState = {
  modo: "dia",
  modoTitle: 'dia',
  name: 'Li'
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_MODO"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      modo: state.modo === 'dia' ? state.modo = 'noche' : state.modo = 'dia',
      modoTitle: state.modoTitle === 'dia' ? state.modoTitle = 'noche' : state.modoTitle = 'dia'
    });
  }

  if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NAME"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      name: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("action", {
        className: "payload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })
    });
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=_app.js.9f8d5299da2abe21bba0.hot-update.js.map