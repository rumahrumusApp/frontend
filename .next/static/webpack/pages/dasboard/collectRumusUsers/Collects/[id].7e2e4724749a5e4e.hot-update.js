"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dasboard/collectRumusUsers/Collects/[id]",{

/***/ "./pages/dasboard/collectRumusUsers/Collects/[id].js":
/*!***********************************************************!*\
  !*** ./pages/dasboard/collectRumusUsers/Collects/[id].js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CollectUserPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ContriTable_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../styles/ContriTable.module.css */ \"./styles/ContriTable.module.css\");\n/* harmony import */ var _styles_ContriTable_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ContriTable_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction CollectUserPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // handleRumus()\n        handleData();\n    }, []);\n    const handleData = async ()=>{\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/collect/collectById/\".concat(router.query.id));\n            console.log(result.data.data);\n            setData(result.data.data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const DelData = async (e, id)=>{\n        try {\n            // e.preventDefault()\n            if (confirm(\"Hapus rumus ini?\") == true) {\n                const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://localhost:8000/user/delUser/\".concat(id));\n                console.log(\"berhasil dihapus\");\n                // setDatarumus(result.data.data)\n                // router.push('/rumussaya')\n                window.location.reload();\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    // router.push('/rumussaya')\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ContriTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/dasboard\",\n                    children: \"Kembali\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ContriTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().tabel),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Koleksi Rumus User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: (_styles_ContriTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: \"Rumus\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                        lineNumber: 72,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, this),\n                                data.length == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: \"Loading...\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                        lineNumber: 78,\n                                        columnNumber: 41\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                    lineNumber: 78,\n                                    columnNumber: 37\n                                }, this) : data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: (_styles_ContriTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().tdtitle),\n                                                children: item.rumus.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 105\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: \"/dasboard/contributor/collectRumusUsers/Collects/\".concat(item.id),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        children: \"Lihat Koleksi\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 237\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 162\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 158\n                                            }, this)\n                                        ]\n                                    }, item.id, true, {\n                                        fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                                        lineNumber: 78,\n                                        columnNumber: 87\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rumika Damayanti\\\\OneDrive\\\\Documents\\\\Project_Magang\\\\frontend\\\\pages\\\\dasboard\\\\collectRumusUsers\\\\Collects\\\\[id].js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CollectUserPage, \"CE4bb1OrJK230QipCdW5J54W3ks=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CollectUserPage;\nvar _c;\n$RefreshReg$(_c, \"CollectUserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNib2FyZC9jb2xsZWN0UnVtdXNVc2Vycy9Db2xsZWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDaUM7QUFDcEI7QUFDaEI7QUFDZTtBQUNEO0FBQ2U7QUFJdkMsU0FBU1Esa0JBQWtCOztJQUV0QyxNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkNELGdEQUFTQSxDQUFDLElBQU07UUFDWixnQkFBZ0I7UUFDaEJVO0lBR0osR0FBRyxFQUFFO0lBR0wsTUFBTUEsYUFBYSxVQUFZO1FBRTNCLElBQUk7WUFDQSxNQUFNQyxTQUFTLE1BQU1ULGlEQUFTLENBQUMsNkNBQTZELE9BQWhCSyxPQUFPTSxLQUFLLENBQUNDLEVBQUU7WUFDM0ZDLFFBQVFDLEdBQUcsQ0FBQ0wsT0FBT0gsSUFBSSxDQUFDQSxJQUFJO1lBQzVCQyxRQUFRRSxPQUFPSCxJQUFJLENBQUNBLElBQUk7UUFHNUIsRUFBRSxPQUFPUyxPQUFPO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDaEI7SUFDSjtJQUVBLE1BQU1DLFVBQVUsT0FBT0MsR0FBRUwsS0FBTztRQUU1QixJQUFJO1lBQ0EscUJBQXFCO1lBQ3JCLElBQUdNLFFBQVEsdUJBQXVCLElBQUksRUFBQztnQkFDdkMsTUFBTVQsU0FBUyxNQUFNVCx1REFBWSxDQUFDLHNDQUF5QyxPQUFIWTtnQkFDeEVDLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixpQ0FBaUM7Z0JBRWpDLDRCQUE0QjtnQkFFNUJNLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtZQUMxQixDQUFDO1FBRUQsRUFBRSxPQUFPUCxPQUFPO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDaEI7SUFFQSw0QkFBNEI7SUFDaEM7SUFJQSxxQkFDSTs7MEJBQ0EsOERBQUNaLDBEQUFVQTs7Ozs7MEJBQ1gsOERBQUNvQjtnQkFBSUMsV0FBVzNCLDRFQUFVOzBCQUNsQiw0RUFBQ0Qsa0RBQUlBO29CQUFDOEIsTUFBTzs4QkFBWTs7Ozs7Ozs7Ozs7MEJBR2pDLDhEQUFDSDtnQkFBSUMsV0FBVzNCLDZFQUFXOztrQ0FDdkIsOERBQUMrQjtrQ0FBRzs7Ozs7O2tDQUNSLDhEQUFDQztrQ0FDRyw0RUFBQ0M7OzhDQUNHLDhEQUFDQztvQ0FBR1AsV0FBVzNCLDhFQUFZOzhDQUN2Qiw0RUFBQ29DO2tEQUFHOzs7Ozs7Ozs7OztnQ0FNUDNCLEtBQUs0QixNQUFNLElBQUksa0JBQUksOERBQUNIOzhDQUFHLDRFQUFDRTtrREFBRzs7Ozs7Ozs7OzsyQ0FBdUIzQixLQUFLNkIsR0FBRyxDQUFDLENBQUNDLHFCQUFTLDhEQUFDTDs7MERBQWlCLDhEQUFDRTtnREFBR1QsV0FBVzNCLCtFQUFhOzBEQUFHdUMsS0FBS0UsS0FBSyxDQUFDQyxLQUFLOzs7Ozs7MERBQU0sOERBQUNOOzBEQUFHLDRFQUFDckMsa0RBQUlBO29EQUFDOEIsTUFBTSxvREFBNEQsT0FBUlUsS0FBS3hCLEVBQUU7OERBQUksNEVBQUM0QjtrRUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBQXJKSixLQUFLeEIsRUFBRTs7Ozs2Q0FBc0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVSLENBQUM7R0ExRXVCUjs7UUFFTEYsa0RBQVNBOzs7S0FGSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzYm9hcmQvY29sbGVjdFJ1bXVzVXNlcnMvQ29sbGVjdHMvW2lkXS5qcz8xZGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uLy4uLy4uL3N0eWxlcy9Db250cmlUYWJsZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJyBcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTmF2YmFyc2lnbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL05hdmJhcidcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdFVzZXJQYWdlKCkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGhhbmRsZVJ1bXVzKClcclxuICAgICAgICBoYW5kbGVEYXRhKClcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2NvbGxlY3QvY29sbGVjdEJ5SWQvJHtyb3V0ZXIucXVlcnkuaWR9YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbERhdGEgPSBhc3luYyAoZSxpZCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZihjb25maXJtKFwiSGFwdXMgcnVtdXMgaW5pP1wiKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlci9kZWxVc2VyLyR7aWR9YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZXJoYXNpbCBkaWhhcHVzXCIpXHJcbiAgICAgICAgICAgIC8vIHNldERhdGFydW11cyhyZXN1bHQuZGF0YS5kYXRhKVxyXG5cclxuICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy9ydW11c3NheWEnKVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJvdXRlci5wdXNoKCcvcnVtdXNzYXlhJylcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TmF2YmFyc2lnbj48L05hdmJhcnNpZ24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kYXNib2FyZGB9PktlbWJhbGk8L0xpbms+ICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGFiZWx9PlxyXG4gICAgICAgICAgICA8aDI+S29sZWtzaSBSdW11cyBVc2VyPC9oMj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlJ1bXVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlVzZXJuYW1lPC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD48L3RkPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAge2RhdGEubGVuZ3RoID09IDAgPyA8dHI+PHRkPkxvYWRpbmcuLi48L3RkPjwvdHI+IDogZGF0YS5tYXAoKGl0ZW0pID0+IDx0ciBrZXk9e2l0ZW0uaWR9Pjx0ZCBjbGFzc05hbWU9e3N0eWxlLnRkdGl0bGV9PntpdGVtLnJ1bXVzLnRpdGxlfTwvdGQ+PHRkPjxMaW5rIGhyZWY9e2AvZGFzYm9hcmQvY29udHJpYnV0b3IvY29sbGVjdFJ1bXVzVXNlcnMvQ29sbGVjdHMvJHtpdGVtLmlkfWB9PjxidXR0b24+TGloYXQgS29sZWtzaTwvYnV0dG9uPjwvTGluaz48L3RkPjwvdHI+KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJOYXZiYXJzaWduIiwiQ29sbGVjdFVzZXJQYWdlIiwicm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVEYXRhIiwicmVzdWx0IiwiZ2V0IiwicXVlcnkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkRlbERhdGEiLCJlIiwiY29uZmlybSIsImRlbGV0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVmdCIsImhyZWYiLCJ0YWJlbCIsImgyIiwidGFibGUiLCJ0Ym9keSIsInRyIiwiaGVhZGVyIiwidGQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidGR0aXRsZSIsInJ1bXVzIiwidGl0bGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dasboard/collectRumusUsers/Collects/[id].js\n"));

/***/ })

});