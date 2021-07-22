(function() {
var exports = {};
exports.id = "pages/ninjas/[id]";
exports.ids = ["pages/ninjas/[id]"];
exports.modules = {

/***/ "./pages/ninjas/[id].js":
/*!******************************!*\
  !*** ./pages/ninjas/[id].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\NextJS projects\\ninjalist\\pages\\ninjas\\[id].js";
const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map(ninja => {
    return {
      params: {
        id: ninja.id.toString()
      }
    };
  });
  return {
    paths: paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return {
    props: {
      ninja: data
    }
  };
};

const Details = ({
  ninja
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ninja.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ninja.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ninja.website
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ninja.address.city
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/ninjas/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaW5qYWxpc3QvLi9wYWdlcy9uaW5qYXMvW2lkXS5qcyIsIndlYnBhY2s6Ly9uaW5qYWxpc3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwYXRocyIsIm1hcCIsIm5pbmphIiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJEZXRhaWxzIiwibmFtZSIsImVtYWlsIiwid2Vic2l0ZSIsImFkZHJlc3MiLCJjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsY0FBYyxHQUFHLFlBQVc7QUFDdEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBRCxDQUF2QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFFQSxRQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxLQUFLLElBQUk7QUFDN0IsV0FBTztBQUNKQyxZQUFNLEVBQUU7QUFBRUMsVUFBRSxFQUFFRixLQUFLLENBQUNFLEVBQU4sQ0FBU0MsUUFBVDtBQUFOO0FBREosS0FBUDtBQUdGLEdBSmEsQ0FBZDtBQU1BLFNBQU87QUFDSkwsU0FBSyxFQUFFQSxLQURIO0FBRUpNLFlBQVEsRUFBRTtBQUZOLEdBQVA7QUFJRixDQWRNO0FBZ0JBLE1BQU1DLGNBQWMsR0FBRyxNQUFNQyxPQUFOLElBQWtCO0FBQzdDLFFBQU1KLEVBQUUsR0FBR0ksT0FBTyxDQUFDTCxNQUFSLENBQWVDLEVBQTFCO0FBQ0EsUUFBTVIsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxnREFBZ0RPLEVBQWpELENBQXZCO0FBQ0EsUUFBTU4sSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUVBLFNBQU87QUFDSlUsU0FBSyxFQUFFO0FBQ0pQLFdBQUssRUFBRUo7QUFESDtBQURILEdBQVA7QUFNRixDQVhNOztBQWFQLE1BQU1ZLE9BQU8sR0FBRyxDQUFDO0FBQUNSO0FBQUQsQ0FBRCxLQUFhO0FBQzFCLHNCQUNHO0FBQUEsNEJBQ0c7QUFBQSxnQkFBS0EsS0FBSyxDQUFDUztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZUFFRztBQUFBLGdCQUFJVCxLQUFLLENBQUNVO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSCxlQUdHO0FBQUEsZ0JBQUlWLEtBQUssQ0FBQ1c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhILGVBSUc7QUFBQSxnQkFBSVgsS0FBSyxDQUFDWSxPQUFOLENBQWNDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREg7QUFRRixDQVREOztBQVdBLCtEQUFlTCxPQUFmLEU7Ozs7Ozs7Ozs7O0FDeENBLG1EIiwiZmlsZSI6InBhZ2VzL25pbmphcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMoKSA9PiB7XHJcbiAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChuaW5qYSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIHBhcmFtczogeyBpZDogbmluamEuaWQudG9TdHJpbmcoKSB9XHJcbiAgICAgIH1cclxuICAgfSlcclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHBhdGhzOiBwYXRocyxcclxuICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoY29udGV4dCkgPT4ge1xyXG4gICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkXHJcbiAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJyArIGlkKVxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgbmluamE6IGRhdGFcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBEZXRhaWxzID0gKHtuaW5qYX0pID0+IHtcclxuICAgcmV0dXJuICggXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxoMT57bmluamEubmFtZX08L2gxPlxyXG4gICAgICAgICA8cD57bmluamEuZW1haWx9PC9wPlxyXG4gICAgICAgICA8cD57bmluamEud2Vic2l0ZX08L3A+XHJcbiAgICAgICAgIDxwPntuaW5qYS5hZGRyZXNzLmNpdHl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9