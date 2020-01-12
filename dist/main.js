/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/calculateExpression.js":
/*!***********************************************!*\
  !*** ./src/javascript/calculateExpression.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar calculateExpression = function calculateExpression(firstNum, mathOperator, secondNum) {\n  var firstOperand = firstNum || '1';\n  var operator = mathOperator || '*';\n  var secondOperand = secondNum || '1';\n  var calculation = {\n    '+': function _() {\n      return Number(firstOperand) + Number(secondOperand);\n    },\n    '-': function _() {\n      return Number(firstOperand) - Number(secondOperand);\n    },\n    '*': function _() {\n      return Number(firstOperand) * Number(secondOperand);\n    },\n    '/': function _() {\n      return Number(firstOperand) / Number(secondOperand);\n    },\n    '^': function _() {\n      return Math.pow(Number(firstOperand), Number(secondOperand));\n    },\n    '√': function _() {\n      return Math.pow(Number(firstOperand), 1 / Number(secondOperand));\n    }\n  };\n  return calculation[operator]();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculateExpression);\n\n//# sourceURL=webpack:///./src/javascript/calculateExpression.js?");

/***/ }),

/***/ "./src/javascript/calculatorStore.js":
/*!*******************************************!*\
  !*** ./src/javascript/calculatorStore.js ***!
  \*******************************************/
/*! exports provided: changeClearEntryState, changeOperand, fillInOperand, changeOperator, changeSeparator, changeResult, defaultScreenDisplay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeClearEntryState\", function() { return changeClearEntryState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeOperand\", function() { return changeOperand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillInOperand\", function() { return fillInOperand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeOperator\", function() { return changeOperator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeSeparator\", function() { return changeSeparator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeResult\", function() { return changeResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultScreenDisplay\", function() { return defaultScreenDisplay; });\nvar calculatorStore = {\n  firstOperand: '',\n  firstOperandSeparator: false,\n  operator: '',\n  secondOperand: '',\n  secondOperandSeparator: false,\n  result: 0,\n  entryCleared: false\n};\nvar changeClearEntryState = function changeClearEntryState(state) {\n  calculatorStore.entryCleared = state;\n};\nvar changeOperand = function changeOperand(objectKey, objectEntry) {\n  calculatorStore[objectKey] = objectEntry;\n};\nvar fillInOperand = function fillInOperand(objectKey, objectEntry) {\n  calculatorStore[objectKey] += objectEntry;\n};\nvar changeOperator = function changeOperator(operator) {\n  calculatorStore.operator = operator;\n};\nvar changeSeparator = function changeSeparator(objectKey, objectEntry) {\n  calculatorStore[objectKey] = objectEntry;\n};\nvar changeResult = function changeResult(result) {\n  calculatorStore.result = result;\n};\nvar defaultScreenDisplay = function defaultScreenDisplay() {\n  return \"\".concat(calculatorStore.firstOperand).concat(calculatorStore.operator).concat(calculatorStore.secondOperand);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculatorStore);\n\n//# sourceURL=webpack:///./src/javascript/calculatorStore.js?");

/***/ }),

/***/ "./src/javascript/clearEntryOperation.js":
/*!***********************************************!*\
  !*** ./src/javascript/clearEntryOperation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clearEntryOperation; });\n/* harmony import */ var _calculatorStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorStore */ \"./src/javascript/calculatorStore.js\");\n\nfunction clearEntryOperation(displayElement) {\n  if (!_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].entryCleared) {\n    if (_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].secondOperand) {\n      Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('secondOperand', '');\n      Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('secondOperandSeparator', false);\n      displayElement.innerText = Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"defaultScreenDisplay\"])();\n    } else if (_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operator) {\n      Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperator\"])('');\n      displayElement.innerText = Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"defaultScreenDisplay\"])();\n    } else {\n      Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('firstOperand', _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].result);\n      Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('firstOperandSeparator', false);\n      displayElement.innerText = _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firstOperand;\n    }\n\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeClearEntryState\"])(true);\n  }\n}\n\n//# sourceURL=webpack:///./src/javascript/clearEntryOperation.js?");

/***/ }),

/***/ "./src/javascript/clearOperation.js":
/*!******************************************!*\
  !*** ./src/javascript/clearOperation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clearOperation; });\n/* harmony import */ var _calculatorStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorStore */ \"./src/javascript/calculatorStore.js\");\n\nfunction clearOperation(displayElement) {\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('firstOperand', '');\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('firstOperandSeparator', false);\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperator\"])('');\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('secondOperand', '');\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('secondOperandSeparator', false);\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeResult\"])(0);\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeClearEntryState\"])(false);\n  displayElement.innerText = _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].result;\n}\n\n//# sourceURL=webpack:///./src/javascript/clearOperation.js?");

/***/ }),

/***/ "./src/javascript/digitButtonOperation.js":
/*!************************************************!*\
  !*** ./src/javascript/digitButtonOperation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return digitButtonOperation; });\n/* harmony import */ var _calculatorStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorStore */ \"./src/javascript/calculatorStore.js\");\n\nfunction digitButtonOperation(event, displayElement) {\n  var digit = event.target.value;\n\n  if (_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operator) {\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"fillInOperand\"])('secondOperand', digit);\n  } else if (!_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firstOperand) {\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('firstOperand', digit);\n  } else {\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"fillInOperand\"])('firstOperand', digit);\n  }\n\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeClearEntryState\"])(false);\n  displayElement.innerText = Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"defaultScreenDisplay\"])();\n}\n\n//# sourceURL=webpack:///./src/javascript/digitButtonOperation.js?");

/***/ }),

/***/ "./src/javascript/equalitySignOperation.js":
/*!*************************************************!*\
  !*** ./src/javascript/equalitySignOperation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return equalitySignOperation; });\n/* harmony import */ var _calculatorStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorStore */ \"./src/javascript/calculatorStore.js\");\n/* harmony import */ var _calculateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateExpression */ \"./src/javascript/calculateExpression.js\");\n\n\n\nvar resetCalculatorEntries = function resetCalculatorEntries() {\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('firstOperandSeparator', false);\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperator\"])('');\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('secondOperand', '');\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('secondOperandSeparator', false);\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeClearEntryState\"])(false);\n};\n\nfunction equalitySignOperation(displayElement) {\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeResult\"])(Object(_calculateExpression__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firstOperand, _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operator, _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].secondOperand));\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('firstOperand', _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].result);\n  resetCalculatorEntries();\n  displayElement.innerText = Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"defaultScreenDisplay\"])();\n}\n\n//# sourceURL=webpack:///./src/javascript/equalitySignOperation.js?");

/***/ }),

/***/ "./src/javascript/floatSeparator.js":
/*!******************************************!*\
  !*** ./src/javascript/floatSeparator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return floatSeparator; });\n/* harmony import */ var _calculatorStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorStore */ \"./src/javascript/calculatorStore.js\");\n\nfunction floatSeparator(event, displayElement) {\n  var separatorSign = event.target.value;\n\n  if (_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operator && !_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].secondOperandSeparator) {\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"fillInOperand\"])('secondOperand', separatorSign);\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('secondOperandSeparator', true);\n  } else if (!_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operator && !_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firstOperandSeparator) {\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"fillInOperand\"])('firstOperand', separatorSign);\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('firstOperandSeparator', true);\n  }\n\n  displayElement.innerText = Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"defaultScreenDisplay\"])();\n}\n\n//# sourceURL=webpack:///./src/javascript/floatSeparator.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculatorStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorStore */ \"./src/javascript/calculatorStore.js\");\n/* harmony import */ var _equalitySignOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equalitySignOperation */ \"./src/javascript/equalitySignOperation.js\");\n/* harmony import */ var _digitButtonOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./digitButtonOperation */ \"./src/javascript/digitButtonOperation.js\");\n/* harmony import */ var _mathOperatorOperation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mathOperatorOperation */ \"./src/javascript/mathOperatorOperation.js\");\n/* harmony import */ var _clearOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearOperation */ \"./src/javascript/clearOperation.js\");\n/* harmony import */ var _floatSeparator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floatSeparator */ \"./src/javascript/floatSeparator.js\");\n/* harmony import */ var _clearEntryOperation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clearEntryOperation */ \"./src/javascript/clearEntryOperation.js\");\n\n\n\n\n\n\n\nvar screen = document.getElementById('screen');\nvar equalitySignButton = document.getElementById('equality-sign');\nvar digitButtons = document.querySelectorAll('.grid-items__digit');\nvar separatorButton = document.getElementById('separator');\nvar operatorButtons = document.querySelectorAll('.grid-items__operator');\nvar clearButton = document.getElementById('clear');\nvar clearEntryButton = document.getElementById('clear-entry');\n\nvar setInitialScreenContent = function setInitialScreenContent() {\n  screen.innerText = _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].result;\n};\n\nfunction attachEventListeners() {\n  equalitySignButton.addEventListener('click', function () {\n    return Object(_equalitySignOperation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(screen);\n  });\n  digitButtons.forEach(function (button) {\n    button.addEventListener('click', function (event) {\n      return Object(_digitButtonOperation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, screen);\n    });\n  });\n  separatorButton.addEventListener('click', function (event) {\n    return Object(_floatSeparator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(event, screen);\n  });\n  operatorButtons.forEach(function (button) {\n    button.addEventListener('click', function (event) {\n      return Object(_mathOperatorOperation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(event, screen);\n    });\n  });\n  clearButton.addEventListener('click', function () {\n    return Object(_clearOperation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(screen);\n  });\n  clearEntryButton.addEventListener('click', function () {\n    return Object(_clearEntryOperation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(screen);\n  });\n}\n\nsetInitialScreenContent();\nattachEventListeners();\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/mathOperatorOperation.js":
/*!*************************************************!*\
  !*** ./src/javascript/mathOperatorOperation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mathOperatorOperation; });\n/* harmony import */ var _calculatorStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorStore */ \"./src/javascript/calculatorStore.js\");\n/* harmony import */ var _calculateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateExpression */ \"./src/javascript/calculateExpression.js\");\n\n\n\nvar resetCalculatorEntries = function resetCalculatorEntries() {\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('firstOperandSeparator', false);\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('secondOperand', '');\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeSeparator\"])('secondOperandSeparator', false);\n  Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeClearEntryState\"])(false);\n};\n\nfunction mathOperatorOperation(event, displayElement) {\n  var operatorSign = event.currentTarget.value;\n\n  if (_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operator) {\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeResult\"])(Object(_calculateExpression__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firstOperand, _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operator, _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].secondOperand));\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperand\"])('firstOperand', _calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].result);\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperator\"])(operatorSign);\n    resetCalculatorEntries();\n  } else {\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeOperator\"])(operatorSign);\n    Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"changeClearEntryState\"])(false);\n  }\n\n  displayElement.innerText = Object(_calculatorStore__WEBPACK_IMPORTED_MODULE_0__[\"defaultScreenDisplay\"])();\n}\n\n//# sourceURL=webpack:///./src/javascript/mathOperatorOperation.js?");

/***/ })

/******/ });