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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: confrimDelete,\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'Tak, usuń to!',\n      cancelButtonText: 'Nie, anuluj!'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('error', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImNvbmZyaW1EZWxldGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkZWxldGVVcmwiLCJkYXRhIiwiZG9uZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiJBQUFJQSxDQUFDLENBQUMsWUFBVztBQUNYQSxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBVTtBQUFBOztBQUN6QkMsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDVkMsTUFBQUEsS0FBSyxFQUFFQyxhQURHO0FBRVZDLE1BQUFBLElBQUksRUFBRSxTQUZJO0FBR1ZDLE1BQUFBLGdCQUFnQixFQUFFLElBSFI7QUFJVkMsTUFBQUEsaUJBQWlCLEVBQUUsZUFKVDtBQUtWQyxNQUFBQSxnQkFBZ0IsRUFBRTtBQUxSLEtBQVYsRUFNQ0MsSUFORCxDQU1NLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixVQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJaLFFBQUFBLENBQUMsQ0FBQ2EsSUFBRixDQUFPO0FBQ0xDLFVBQUFBLE1BQU0sRUFBRSxRQURIO0FBRUxDLFVBQUFBLEdBQUcsRUFBRUMsU0FBUyxHQUFHaEIsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFRaUIsSUFBUixDQUFhLElBQWI7QUFGWixTQUFQLEVBSUVDLElBSkYsQ0FJTyxVQUFTRCxJQUFULEVBQWU7QUFDbkJFLFVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDQSxTQU5ILEVBT0VDLElBUEYsQ0FPTyxVQUFTTCxJQUFULEVBQWU7QUFDbkJmLFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE9BQVYsRUFBb0JjLElBQUksQ0FBQ00sWUFBTCxDQUFrQkMsT0FBdEMsRUFBK0NQLElBQUksQ0FBQ00sWUFBTCxDQUFrQkUsTUFBakU7QUFFRSxTQVZMO0FBV007QUFDRCxLQXBCUDtBQXFCSyxHQXRCVDtBQXVCVyxDQXhCWixDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBjb25mcmltRGVsZXRlLFxyXG4gICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVGFrLCB1c3XFhCB0byEnLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05pZSwgYW51bHVqISdcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBkZWxldGVVcmwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgfSkgICAgICAgICBcclxuICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgU3dhbC5maXJlKCdlcnJvcicgLCBkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlLCBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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