webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.tsx ***!
  \******************************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.scss */ \"./src/components/Footer/Footer.module.scss\");\n/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var data_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! data/footer */ \"./src/data/footer.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pedrolima/Work/pedrolima.dev/src/components/Footer/Footer.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Footer = function Footer() {\n  return __jsx(\"footer\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, data_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (group) {\n    return __jsx(LinkGroup, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, group, {\n      key: group.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.copyright,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"t-font-1 t-size-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"t-weight-light t-color-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"And that\\u2019s it...\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    className: \"t-weight-light t-color-g6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"You've made it to the end!\")), __jsx(\"p\", {\n    className: \"t-size-5 t-color-g4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"This website was developed using Next.js, TypeScript and SASS.\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), \"Designed using Figma. \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 33\n    }\n  }), __jsx(\"strong\", {\n    className: \"t-color-g5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"Thanks for visiting!\"))));\n};\n_c = Footer;\n\nvar LinkGroup = function LinkGroup(props) {\n  return __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkGroup,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, props.links.map(function (link) {\n    var Icon = link.icon;\n    return __jsx(\"li\", {\n      className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,\n      key: link.label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, link.icon && __jsx(Icon, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 29\n      }\n    }), __jsx(\"a\", {\n      href: link.href,\n      target: \"_blank\",\n      rel: \"noreferrer noopener\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }, link.label));\n  })));\n};\n\n_c2 = LinkGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Footer\");\n$RefreshReg$(_c2, \"LinkGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3g/YjA2MCJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJsaW5rcyIsIkZvb3RlckRhdGEiLCJtYXAiLCJncm91cCIsIm5hbWUiLCJjb3B5cmlnaHQiLCJMaW5rR3JvdXAiLCJwcm9wcyIsImxpbmtHcm91cCIsImxpbmtMaXN0IiwibGluayIsIkljb24iLCJpY29uIiwibGFiZWwiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDMUIsU0FDRTtBQUFRLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwwREFBTSxDQUFDRSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG1EQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFBQyxLQUFLO0FBQUEsV0FDbkIsTUFBQyxTQUFELHlGQUFlQSxLQUFmO0FBQXNCLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRG1CO0FBQUEsR0FBcEIsQ0FESCxDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVOLDBEQUFNLENBQUNPLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZ0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFNLGFBQVMsRUFBQywyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FMRixDQURGLEVBV0U7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsNEJBR3dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIeEIsRUFJRTtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGLENBWEYsQ0FORixDQURGO0FBMkJELENBNUJNO0tBQU1SLE07O0FBZ0NiLElBQU1TLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLENBQUFDLEtBQUssRUFBSTtBQUNuRCxTQUNFO0FBQUssYUFBUyxFQUFFVCwwREFBTSxDQUFDVSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVWLDBEQUFNLENBQUNXLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsS0FBSyxDQUFDUCxLQUFOLENBQVlFLEdBQVosQ0FBZ0IsVUFBQVEsSUFBSSxFQUFJO0FBQ3ZCLFFBQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxJQUFsQjtBQUVBLFdBQ0U7QUFBSSxlQUFTLEVBQUVkLDBEQUFNLENBQUNZLElBQXRCO0FBQTRCLFNBQUcsRUFBRUEsSUFBSSxDQUFDRyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dILElBQUksQ0FBQ0UsSUFBTCxJQUFhLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGhCLEVBRUU7QUFBRyxVQUFJLEVBQUVGLElBQUksQ0FBQ0ksSUFBZDtBQUFvQixZQUFNLEVBQUMsUUFBM0I7QUFBb0MsU0FBRyxFQUFDLHFCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dKLElBQUksQ0FBQ0csS0FEUixDQUZGLENBREY7QUFRRCxHQVhBLENBREgsQ0FERixDQURGO0FBa0JELENBbkJEOztNQUFNUCxTO0FBcUJTVCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEZvb3RlckRhdGEgZnJvbSAnZGF0YS9mb290ZXInXG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XG4gICAgICAgIHtGb290ZXJEYXRhLm1hcChncm91cCA9PiAoXG4gICAgICAgICAgPExpbmtHcm91cCB7Li4uZ3JvdXB9IGtleT17Z3JvdXAubmFtZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInQtZm9udC0xIHQtc2l6ZS0zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidC13ZWlnaHQtbGlnaHQgdC1jb2xvci1wcmltYXJ5XCI+XG4gICAgICAgICAgICBBbmQgdGhhdOKAmXMgaXQuLi5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidC13ZWlnaHQtbGlnaHQgdC1jb2xvci1nNlwiPlxuICAgICAgICAgICAgWW91J3ZlIG1hZGUgaXQgdG8gdGhlIGVuZCFcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDM+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidC1zaXplLTUgdC1jb2xvci1nNFwiPlxuICAgICAgICAgIFRoaXMgd2Vic2l0ZSB3YXMgZGV2ZWxvcGVkIHVzaW5nIE5leHQuanMsIFR5cGVTY3JpcHQgYW5kIFNBU1MuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgRGVzaWduZWQgdXNpbmcgRmlnbWEuIDxiciAvPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidC1jb2xvci1nNVwiPlRoYW5rcyBmb3IgdmlzaXRpbmchPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmludGVyZmFjZSBMaW5rR3JvdXBQcm9wcyBleHRlbmRzIElMaW5rR3JvdXAge31cblxuY29uc3QgTGlua0dyb3VwOiBSZWFjdC5GQzxMaW5rR3JvdXBQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rR3JvdXB9PlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtMaXN0fT5cbiAgICAgICAge3Byb3BzLmxpbmtzLm1hcChsaW5rID0+IHtcbiAgICAgICAgICBjb25zdCBJY29uID0gbGluay5pY29uXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGtleT17bGluay5sYWJlbH0+XG4gICAgICAgICAgICAgIHtsaW5rLmljb24gJiYgPEljb24gLz59XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsuaHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Footer/Footer.tsx\n");

/***/ })

})