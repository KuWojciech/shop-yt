/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy na pewno chcesz usunąć ten rekord??',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'Tak, usuń to!',\n      cancelButtonText: 'Nie, anuluj!'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('error', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRlbGV0ZVVybCIsImRhdGEiLCJkb25lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6IkFBQUlBLENBQUMsQ0FBQyxZQUFXO0FBQ1hBLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsS0FBYixDQUFtQixZQUFVO0FBQUE7O0FBQ3pCQyxJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNWQyxNQUFBQSxLQUFLLEVBQUUseUNBREc7QUFFVkMsTUFBQUEsSUFBSSxFQUFFLFNBRkk7QUFHVkMsTUFBQUEsZ0JBQWdCLEVBQUUsSUFIUjtBQUlWQyxNQUFBQSxpQkFBaUIsRUFBRSxlQUpUO0FBS1ZDLE1BQUFBLGdCQUFnQixFQUFFO0FBTFIsS0FBVixFQU1DQyxJQU5ELENBTU0sVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCLFVBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNoQlgsUUFBQUEsQ0FBQyxDQUFDWSxJQUFGLENBQU87QUFDTEMsVUFBQUEsTUFBTSxFQUFFLFFBREg7QUFFTEMsVUFBQUEsR0FBRyxFQUFFQyxTQUFTLEdBQUdmLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWdCLElBQVIsQ0FBYSxJQUFiO0FBRlosU0FBUCxFQUlFQyxJQUpGLENBSU8sVUFBU0QsSUFBVCxFQUFlO0FBQ25CRSxVQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0EsU0FOSCxFQU9FQyxJQVBGLENBT08sVUFBU0wsSUFBVCxFQUFlO0FBQ25CZCxVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFWLEVBQW9CYSxJQUFJLENBQUNNLFlBQUwsQ0FBa0JDLE9BQXRDLEVBQStDUCxJQUFJLENBQUNNLFlBQUwsQ0FBa0JFLE1BQWpFO0FBRUUsU0FWTDtBQVdNO0FBQ0QsS0FwQlA7QUFxQkssR0F0QlQ7QUF1QlcsQ0F4QlosQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbIiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogJ0N6eSBuYSBwZXdubyBjaGNlc3ogdXN1bsSFxIcgdGVuIHJla29yZD8/JyxcclxuICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaywgdXN1xYQgdG8hJyxcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOaWUsIGFudWx1aiEnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgIHVybDogZGVsZXRlVXJsICsgJCh0aGlzKS5kYXRhKFwiaWRcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH0pICAgICAgICAgXHJcbiAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgIFN3YWwuZmlyZSgnZXJyb3InICwgZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kZWxldGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;