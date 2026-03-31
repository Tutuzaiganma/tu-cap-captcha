module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */// forum.js


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./src/forum/components/discussion.js":
/*!********************************************!*\
  !*** ./src/forum/components/discussion.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectDiscussionCaptcha; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);




function setBodyInputDisabled(composer, disabled) {
  if (!(composer != null && composer.element)) return;
  var editor = composer.element.querySelector('.ComposerBody-editor');
  if (!editor) return;
  var textarea = editor.querySelector('textarea.FormControl, textarea');
  if (textarea) textarea.disabled = !!disabled;
}
function removeCaptchaContainer(composer) {
  var _composer$element;
  (_composer$element = composer.element) == null || (_composer$element = _composer$element.querySelector('.CapCaptcha-container--discussion')) == null || _composer$element.remove();
}
function hasAnimationOrTransition(element) {
  var styles = window.getComputedStyle(element);
  var durations = (styles.animationDuration + "," + styles.transitionDuration).split(',').map(function (part) {
    return part.trim();
  }).filter(Boolean);
  return durations.some(function (value) {
    return value !== '0s' && value !== '0ms';
  });
}
function playPopupAnimation(container) {
  container.classList.remove('is-fading-out');
  container.classList.add('is-entering');
  var cleanup = function cleanup() {
    return container.classList.remove('is-entering');
  };
  if (!hasAnimationOrTransition(container)) {
    cleanup();
    return;
  }
  container.addEventListener('animationend', cleanup, {
    once: true
  });
  container.addEventListener('transitionend', cleanup, {
    once: true
  });
}
function fadeOutAndRemoveDiscussionCaptcha(composer) {
  var _composer$element2;
  var container = (_composer$element2 = composer.element) == null ? void 0 : _composer$element2.querySelector('.CapCaptcha-container--discussion');
  if (!container || container.classList.contains('is-fading-out')) return;
  container.classList.remove('is-entering');
  container.classList.add('is-fading-out');
  var finish = function finish() {
    var _composer$element3;
    if (!(composer != null && (_composer$element3 = composer.element) != null && _composer$element3.contains(container))) return;
    removeCaptchaContainer(composer);
    m.redraw();
  };
  if (!hasAnimationOrTransition(container)) {
    finish();
    return;
  }
  container.addEventListener('animationend', finish, {
    once: true
  });
  container.addEventListener('transitionend', finish, {
    once: true
  });
}
function resetDiscussionCaptcha(composer) {
  composer.capDiscussionToken = '';
  composer.capDiscussionVerified = false;
  removeCaptchaContainer(composer);
  setBodyInputDisabled(composer, true);
}
function setupDiscussionCaptcha(composer, options) {
  if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.discussion_enabled')) return;
  var endpoint = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.discussion_endpoint') || '').trim();
  if (!endpoint) return;
  if (!composer.capDiscussionVerified) setBodyInputDisabled(composer, true);
  if (!composer.element) return;
  var editor = composer.element.querySelector('.ComposerBody-editor');
  if (!editor) return;
  if (composer.capDiscussionVerified) {
    setBodyInputDisabled(composer, false);
    return;
  }
  options.loadWidgetScript();
  var container = editor.querySelector('.CapCaptcha-container--discussion');
  if (!container) {
    container = document.createElement('div');
    container.className = 'Form-group CapCaptcha-container CapCaptcha-container--discussion';
    editor.prepend(container);
    playPopupAnimation(container);
  }
  var widget = container.querySelector('cap-widget');
  if (!widget) {
    widget = document.createElement('cap-widget');
    var attributes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options.getWidgetAttributes(), {
      'data-cap-api-endpoint': endpoint
    });
    Object.entries(attributes).forEach(function (_ref) {
      var name = _ref[0],
        value = _ref[1];
      if (value !== undefined && value !== null) widget.setAttribute(name, String(value));
    });
    container.appendChild(widget);
  }
  if (widget.getAttribute('data-cap-listener-ready') === '1') return;
  widget.setAttribute('data-cap-listener-ready', '1');
  widget.addEventListener('solve', function (event) {
    var _event$detail;
    var token = (event == null || (_event$detail = event.detail) == null ? void 0 : _event$detail.token) || '';
    composer.capDiscussionToken = token;
    composer.capDiscussionVerified = !!token;
    if (composer.capDiscussionVerified) {
      setBodyInputDisabled(composer, false);
      fadeOutAndRemoveDiscussionCaptcha(composer);
    } else {
      setBodyInputDisabled(composer, true);
    }
    m.redraw();
  });
}
function injectDiscussionCaptcha(options) {
  if (options === void 0) {
    options = {};
  }
  var loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : function () {};
  var getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : function () {
    return {};
  };
  var resolvedOptions = {
    loadWidgetScript: loadWidgetScript,
    getWidgetAttributes: getWidgetAttributes
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oninit', function () {
    this.capDiscussionToken = '';
    this.capDiscussionVerified = false;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oncreate', function () {
    setupDiscussionCaptcha(this, resolvedOptions);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onupdate', function () {
    setupDiscussionCaptcha(this, resolvedOptions);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'data', function (original) {
    var data = original();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.discussion_enabled')) {
      data.capToken = typeof this.capDiscussionToken === 'string' ? this.capDiscussionToken.trim() : '';
    }
    return data;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onsubmit', function (original) {
    var token = typeof this.capDiscussionToken === 'string' ? this.capDiscussionToken.trim() : '';
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.discussion_enabled') && !token) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show({
        type: 'error'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.forum.captcha_required') || 'Please complete captcha verification first.');
      return;
    }
    return original();
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'loaded', function (original) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    original.apply(void 0, args);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.discussion_enabled')) return;
    resetDiscussionCaptcha(this);
    setupDiscussionCaptcha(this, resolvedOptions);
    m.redraw();
  });
}

/***/ }),

/***/ "./src/forum/components/forget.js":
/*!****************************************!*\
  !*** ./src/forum/components/forget.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectForgetCaptcha; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/ForgotPasswordModal */ "flarum/forum/components/ForgotPasswordModal");
/* harmony import */ var flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/ChangePasswordModal */ "flarum/forum/components/ChangePasswordModal");
/* harmony import */ var flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4__);





function getWidget(modal) {
  return modal.$('cap-widget')[0] || null;
}
function getCapToken(modal) {
  var _getWidget$getAttribu, _getWidget;
  var token = (_getWidget$getAttribu = (_getWidget = getWidget(modal)) == null ? void 0 : _getWidget.getAttribute('data-cap-token')) != null ? _getWidget$getAttribu : '';
  return typeof token === 'string' ? token.trim() : '';
}
function resetCaptcha(modal) {
  var widget = getWidget(modal);
  if (!widget) return;
  widget.setAttribute('data-cap-token', '');
  if (typeof widget.reset === 'function') widget.reset();
}
function setupSolveListener(modal) {
  var widget = getWidget(modal);
  if (!widget || widget.getAttribute('data-cap-listener-ready') === '1') return;
  widget.setAttribute('data-cap-listener-ready', '1');
  widget.addEventListener('solve', function (event) {
    var _event$detail;
    widget.setAttribute('data-cap-token', (event == null || (_event$detail = event.detail) == null ? void 0 : _event$detail.token) || '');
  });
}
function showCaptchaError(modal) {
  modal.alertAttrs = {
    type: 'error',
    content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.forum.captcha_required') || 'Please complete captcha verification first.'
  };
  modal.loading = false;
  m.redraw();
}
function injectForgetCaptcha(options) {
  if (options === void 0) {
    options = {};
  }
  var loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : function () {};
  var getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : function () {
    return {};
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'fields', function (items) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled')) return;
    var endpoint = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim();
    if (!endpoint) return;
    loadWidgetScript();
    items.add('capCaptcha', m('div.Form-group.CapCaptcha-container', [m('cap-widget', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getWidgetAttributes(), {
      'data-cap-api-endpoint': endpoint
    }))]), 0);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oncreate', function () {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled')) return;
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim()) return;
    setupSolveListener(this);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'fields', function (original) {
    var items = original();
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled')) return items;
    var endpoint = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim();
    if (!endpoint) return items;
    loadWidgetScript();
    var submit = items.get('submit');
    if (submit) items.remove('submit');
    items.add('capCaptcha', m('div.Form-group.CapCaptcha-container', [m('cap-widget', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getWidgetAttributes(), {
      'data-cap-api-endpoint': endpoint
    }))]), 0);
    if (submit) items.add('submit', submit, -10);
    return items;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'oncreate', function () {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled')) return;
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim()) return;
    setupSolveListener(this);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onsubmit', function (original, event) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled') && !getCapToken(this)) {
      event.preventDefault();
      showCaptchaError(this);
      return;
    }
    return original(event);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'requestParams', function (original) {
    var data = original();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled')) data.capToken = getCapToken(this);
    return data;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'onsubmit', function (original, event) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled') && !getCapToken(this)) {
      event.preventDefault();
      showCaptchaError(this);
      return;
    }
    return original(event);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'requestBody', function (original) {
    var data = original();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled')) data.capToken = getCapToken(this);
    return data;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onerror', function (original, error) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.forgot_enabled')) resetCaptcha(this);
    return original(error);
  });
}

/***/ }),

/***/ "./src/forum/components/login.js":
/*!***************************************!*\
  !*** ./src/forum/components/login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectLoginCaptcha; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__);




function getWidget(modal) {
  return modal.$('cap-widget')[0] || null;
}
function getCapToken(modal) {
  var _getWidget$getAttribu, _getWidget;
  var token = (_getWidget$getAttribu = (_getWidget = getWidget(modal)) == null ? void 0 : _getWidget.getAttribute('data-cap-token')) != null ? _getWidget$getAttribu : '';
  return typeof token === 'string' ? token.trim() : '';
}
function resetCaptcha(modal) {
  var widget = getWidget(modal);
  if (!widget) return;
  widget.setAttribute('data-cap-token', '');
  if (typeof widget.reset === 'function') widget.reset();
}
function setupSolveListener(modal) {
  var widget = getWidget(modal);
  if (!widget || widget.getAttribute('data-cap-listener-ready') === '1') return;
  widget.setAttribute('data-cap-listener-ready', '1');
  widget.addEventListener('solve', function (event) {
    var _event$detail;
    widget.setAttribute('data-cap-token', (event == null || (_event$detail = event.detail) == null ? void 0 : _event$detail.token) || '');
  });
}
function showCaptchaError(modal) {
  modal.alertAttrs = {
    type: 'error',
    content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.forum.captcha_required') || 'Please complete captcha verification first.'
  };
  modal.loading = false;
  m.redraw();
}
function injectLoginCaptcha(options) {
  if (options === void 0) {
    options = {};
  }
  var loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : function () {};
  var getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : function () {
    return {};
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'fields', function (items) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.login_enabled')) return;
    var endpoint = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.login_endpoint') || '').trim();
    if (!endpoint) return;
    loadWidgetScript();
    items.add('capCaptcha', m('div.Form-group.CapCaptcha-container', [m('cap-widget', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getWidgetAttributes(), {
      'data-cap-api-endpoint': endpoint
    }))]), 15);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oncreate', function () {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.login_enabled')) return;
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.login_endpoint') || '').trim()) return;
    setupSolveListener(this);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onsubmit', function (original, event) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.login_enabled') && !getCapToken(this)) {
      event.preventDefault();
      showCaptchaError(this);
      return;
    }
    return original(event);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'loginParams', function (original) {
    var params = original();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.login_enabled')) params.capToken = getCapToken(this);
    return params;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onerror', function (original, error) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.login_enabled')) resetCaptcha(this);
    return original(error);
  });
}

/***/ }),

/***/ "./src/forum/components/register.js":
/*!******************************************!*\
  !*** ./src/forum/components/register.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectRegisterCaptcha; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);




function getWidget(modal) {
  return modal.$('cap-widget')[0] || null;
}
function getCapToken(modal) {
  var _getWidget$getAttribu, _getWidget;
  var token = (_getWidget$getAttribu = (_getWidget = getWidget(modal)) == null ? void 0 : _getWidget.getAttribute('data-cap-token')) != null ? _getWidget$getAttribu : '';
  return typeof token === 'string' ? token.trim() : '';
}
function resetCaptcha(modal) {
  var widget = getWidget(modal);
  if (!widget) return;
  widget.setAttribute('data-cap-token', '');
  if (typeof widget.reset === 'function') widget.reset();
}
function setupSolveListener(modal) {
  var widget = getWidget(modal);
  if (!widget || widget.getAttribute('data-cap-listener-ready') === '1') return;
  widget.setAttribute('data-cap-listener-ready', '1');
  widget.addEventListener('solve', function (event) {
    var _event$detail;
    widget.setAttribute('data-cap-token', (event == null || (_event$detail = event.detail) == null ? void 0 : _event$detail.token) || '');
  });
}
function showCaptchaError(modal) {
  modal.alertAttrs = {
    type: 'error',
    content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.forum.captcha_required') || 'Please complete captcha verification first.'
  };
  modal.loading = false;
  m.redraw();
}
function injectRegisterCaptcha(options) {
  if (options === void 0) {
    options = {};
  }
  var loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : function () {};
  var getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : function () {
    return {};
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'fields', function (items) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.register_enabled')) return;
    var endpoint = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.register_endpoint') || '').trim();
    if (!endpoint) return;
    if (this.attrs.token) return;
    loadWidgetScript();
    items.add('capCaptcha', m('div.Form-group.CapCaptcha-container', [m('cap-widget', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getWidgetAttributes(), {
      'data-cap-api-endpoint': endpoint
    }))]), 0);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oncreate', function () {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.register_enabled')) return;
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.register_endpoint') || '').trim()) return;
    if (this.attrs.token) return;
    setupSolveListener(this);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onsubmit', function (original, event) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.register_enabled') && !this.attrs.token && !getCapToken(this)) {
      event.preventDefault();
      showCaptchaError(this);
      return;
    }
    return original(event);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'submitData', function (original) {
    var data = original();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.register_enabled') && !this.attrs.token) {
      data.capToken = getCapToken(this);
    }
    return data;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onerror', function (original, error) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.register_enabled') && !this.attrs.token) resetCaptcha(this);
    return original(error);
  });
}

/***/ }),

/***/ "./src/forum/components/reply.js":
/*!***************************************!*\
  !*** ./src/forum/components/reply.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectReplyCaptcha; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/ReplyComposer */ "flarum/forum/components/ReplyComposer");
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3__);




function setBodyInputDisabled(composer, disabled) {
  if (!(composer != null && composer.element)) return;
  var editor = composer.element.querySelector('.ComposerBody-editor');
  if (!editor) return;
  var textarea = editor.querySelector('textarea.FormControl, textarea');
  if (textarea) textarea.disabled = !!disabled;
}
function removeCaptchaContainer(composer) {
  var _composer$element;
  (_composer$element = composer.element) == null || (_composer$element = _composer$element.querySelector('.CapCaptcha-container--reply')) == null || _composer$element.remove();
}
function hasAnimationOrTransition(element) {
  var styles = window.getComputedStyle(element);
  var durations = (styles.animationDuration + "," + styles.transitionDuration).split(',').map(function (part) {
    return part.trim();
  }).filter(Boolean);
  return durations.some(function (value) {
    return value !== '0s' && value !== '0ms';
  });
}
function playPopupAnimation(container) {
  container.classList.remove('is-fading-out');
  container.classList.add('is-entering');
  var cleanup = function cleanup() {
    return container.classList.remove('is-entering');
  };
  if (!hasAnimationOrTransition(container)) {
    cleanup();
    return;
  }
  container.addEventListener('animationend', cleanup, {
    once: true
  });
  container.addEventListener('transitionend', cleanup, {
    once: true
  });
}
function fadeOutAndRemoveReplyCaptcha(composer) {
  var _composer$element2;
  var container = (_composer$element2 = composer.element) == null ? void 0 : _composer$element2.querySelector('.CapCaptcha-container--reply');
  if (!container || container.classList.contains('is-fading-out')) return;
  container.classList.remove('is-entering');
  container.classList.add('is-fading-out');
  var finish = function finish() {
    var _composer$element3;
    if (!(composer != null && (_composer$element3 = composer.element) != null && _composer$element3.contains(container))) return;
    removeCaptchaContainer(composer);
    m.redraw();
  };
  if (!hasAnimationOrTransition(container)) {
    finish();
    return;
  }
  container.addEventListener('animationend', finish, {
    once: true
  });
  container.addEventListener('transitionend', finish, {
    once: true
  });
}
function resetReplyCaptcha(composer) {
  composer.capReplyToken = '';
  composer.capReplyVerified = false;
  removeCaptchaContainer(composer);
  setBodyInputDisabled(composer, true);
}
function setupReplyCaptcha(composer, options) {
  if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.reply_enabled')) return;
  var endpoint = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.reply_endpoint') || '').trim();
  if (!endpoint) return;
  if (!composer.capReplyVerified) setBodyInputDisabled(composer, true);
  if (!composer.element) return;
  var editor = composer.element.querySelector('.ComposerBody-editor');
  if (!editor) return;
  if (composer.capReplyVerified) {
    setBodyInputDisabled(composer, false);
    return;
  }
  options.loadWidgetScript();
  var container = editor.querySelector('.CapCaptcha-container--reply');
  if (!container) {
    container = document.createElement('div');
    container.className = 'Form-group CapCaptcha-container CapCaptcha-container--reply';
    editor.prepend(container);
    playPopupAnimation(container);
  }
  var widget = container.querySelector('cap-widget');
  if (!widget) {
    widget = document.createElement('cap-widget');
    var attributes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options.getWidgetAttributes(), {
      'data-cap-api-endpoint': endpoint
    });
    Object.entries(attributes).forEach(function (_ref) {
      var name = _ref[0],
        value = _ref[1];
      if (value !== undefined && value !== null) widget.setAttribute(name, String(value));
    });
    container.appendChild(widget);
  }
  if (widget.getAttribute('data-cap-listener-ready') === '1') return;
  widget.setAttribute('data-cap-listener-ready', '1');
  widget.addEventListener('solve', function (event) {
    var _event$detail;
    var token = (event == null || (_event$detail = event.detail) == null ? void 0 : _event$detail.token) || '';
    composer.capReplyToken = token;
    composer.capReplyVerified = !!token;
    if (composer.capReplyVerified) {
      setBodyInputDisabled(composer, false);
      fadeOutAndRemoveReplyCaptcha(composer);
    } else {
      setBodyInputDisabled(composer, true);
    }
    m.redraw();
  });
}
function injectReplyCaptcha(options) {
  if (options === void 0) {
    options = {};
  }
  var loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : function () {};
  var getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : function () {
    return {};
  };
  var resolvedOptions = {
    loadWidgetScript: loadWidgetScript,
    getWidgetAttributes: getWidgetAttributes
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oninit', function () {
    this.capReplyToken = '';
    this.capReplyVerified = false;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oncreate', function () {
    setupReplyCaptcha(this, resolvedOptions);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onupdate', function () {
    setupReplyCaptcha(this, resolvedOptions);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'data', function (original) {
    var data = original();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.reply_enabled')) {
      data.capToken = typeof this.capReplyToken === 'string' ? this.capReplyToken.trim() : '';
    }
    return data;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onsubmit', function (original) {
    var token = typeof this.capReplyToken === 'string' ? this.capReplyToken.trim() : '';
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.reply_enabled') && !token) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show({
        type: 'error'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.forum.captcha_required') || 'Please complete captcha verification first.');
      return;
    }
    return original();
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'loaded', function (original) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    original.apply(void 0, args);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.reply_enabled')) return;
    resetReplyCaptcha(this);
    setupReplyCaptcha(this, resolvedOptions);
    m.redraw();
  });
}

/***/ }),

/***/ "./src/forum/components/search.js":
/*!****************************************!*\
  !*** ./src/forum/components/search.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectSearchCaptcha; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/Search */ "flarum/forum/components/Search");
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3__);





// 页面生命周期内的验证状态，一旦通过永不再弹
var searchCaptchaVerified = false;
var TRIGGER_ID = 'cap-search-floating-trigger';
var WIDGET_ID = 'cap-search-floating-widget';

/**
 * 将触发按钮定位到搜索输入框的正下方。
 * cap-floating 读取 trigger.getBoundingClientRect() 决定弹层坐标。
 */
function alignTriggerToInput(trigger, inputEl) {
  var rect = inputEl.getBoundingClientRect();
  trigger.style.top = rect.bottom + "px";
  trigger.style.left = rect.left + "px";
  trigger.style.width = rect.width + "px";
}

/**
 * 在 document.body 上注入 trigger + cap-widget（全局单例）。
 * 挂到 body 避免 .Search 的 CSS 裁剪导致位置偏移。
 */
function initFloatingElements(options, endpoint, onSolved) {
  if (document.getElementById(TRIGGER_ID)) return;
  options.loadWidgetScript();
  var trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.id = TRIGGER_ID;
  trigger.className = 'CapCaptcha-search-trigger';
  trigger.setAttribute('data-cap-floating', "#" + WIDGET_ID);
  trigger.setAttribute('data-cap-floating-position', 'bottom');
  document.body.appendChild(trigger);
  var widget = document.createElement('cap-widget');
  widget.id = WIDGET_ID;
  var attrs = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options.getWidgetAttributes(), {
    'data-cap-api-endpoint': endpoint
  });
  Object.entries(attrs).forEach(function (_ref) {
    var name = _ref[0],
      value = _ref[1];
    if (value !== undefined && value !== null) widget.setAttribute(name, String(value));
  });
  document.body.appendChild(widget);
  widget.addEventListener('solve', function (event) {
    var _event$detail;
    var token = (event == null || (_event$detail = event.detail) == null ? void 0 : _event$detail.token) || '';
    if (token) onSolved(token);
  });
}

/**
 * 在搜索输入框上绑定拦截逻辑：
 * - mousedown：阻止默认聚焦，触发浮动验证码
 * - focus（键盘 Tab）：失焦并触发浮动验证码
 * 验证通过后两个处理器均提前返回，恢复正常搜索行为。
 */
function setupInputInterception(searchEl) {
  var input = searchEl.querySelector('input.FormControl, input[type="search"], input');
  if (!input || input.getAttribute('data-cap-search-ready') === '1') return;
  input.setAttribute('data-cap-search-ready', '1');
  function activateCaptcha() {
    var trigger = document.getElementById(TRIGGER_ID);
    if (!trigger) return;
    alignTriggerToInput(trigger, input);
    input.disabled = true;
    // 让浏览器先渲染 disabled 状态，再触发 WASM/DOM 操作
    requestAnimationFrame(function () {
      return trigger.click();
    });
  }
  input.addEventListener('mousedown', function (e) {
    if (searchCaptchaVerified) return;
    e.preventDefault();
    activateCaptcha();
  });
  input.addEventListener('focus', function () {
    if (searchCaptchaVerified) return;
    input.blur();
    activateCaptcha();
  });
}
function injectSearchCaptcha(options) {
  if (options === void 0) {
    options = {};
  }
  var loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : function () {};
  var getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : function () {
    return {};
  };
  var resolvedOptions = {
    loadWidgetScript: loadWidgetScript,
    getWidgetAttributes: getWidgetAttributes
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oncreate', function () {
    var _this = this;
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.search_enabled')) return;
    if (!this.element) return;
    var endpoint = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-cap-captcha.search_endpoint') || '').trim();
    if (!endpoint) return;
    initFloatingElements(resolvedOptions, endpoint, function () {
      searchCaptchaVerified = true;
      var input = _this.element.querySelector('input.FormControl, input[type="search"], input');
      if (input) {
        input.disabled = false;
        input.focus();
      }
      m.redraw();
    });
    setupInputInterception(this.element);
  });
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login */ "./src/forum/components/login.js");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register */ "./src/forum/components/register.js");
/* harmony import */ var _components_forget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forget */ "./src/forum/components/forget.js");
/* harmony import */ var _components_discussion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/discussion */ "./src/forum/components/discussion.js");
/* harmony import */ var _components_reply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reply */ "./src/forum/components/reply.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search */ "./src/forum/components/search.js");








var CAP_WIDGET_I18N_ZH_HANS = {
  'data-cap-i18n-initial-state': '点击验证',
  'data-cap-i18n-verify-aria-label': '点击进行人机验证',
  'data-cap-i18n-verifying-label': '验证中...',
  'data-cap-i18n-verifying-aria-label': '正在验证，请稍候',
  'data-cap-i18n-solved-label': '验证通过',
  'data-cap-i18n-verified-aria-label': '验证通过，现在可以继续操作',
  'data-cap-i18n-error-label': '验证失败，请重试',
  'data-cap-i18n-error-aria-label': '验证发生错误，请重试',
  'data-cap-i18n-wasm-disabled': '开启 WASM 可显著加速验证',
  'data-cap-i18n-troubleshooting-label': '故障排查'
};
var capWidgetScriptLoaded = false;
function resolveForumSetting(attribute) {
  var _app$forum;
  var value = (_app$forum = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum) == null ? void 0 : _app$forum.attribute(attribute);
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : '';
}
function loadScript(src) {
  if (!src || document.querySelector("script[src=\"" + src + "\"]")) return;
  var script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}
function loadCapWidgetScript() {
  if (capWidgetScriptLoaded) return;
  capWidgetScriptLoaded = true;
  var widgetScriptUrl = resolveForumSetting('tu-cap-captcha.widget_script_url');
  var floatingScriptUrl = resolveForumSetting('tu-cap-captcha.floating_script_url');
  var customWasmUrl = resolveForumSetting('tu-cap-captcha.wasm_url');
  if (customWasmUrl) {
    window.CAP_CUSTOM_WASM_URL = customWasmUrl;
  }
  loadScript(widgetScriptUrl);
  loadScript(floatingScriptUrl);
}
function getCapWidgetAttributes() {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, CAP_WIDGET_I18N_ZH_HANS, {
    'data-cap-disable-haptics': 'true'
  });
}
flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('tu/cap-captcha', function () {
  var captchaOptions = {
    loadWidgetScript: loadCapWidgetScript,
    getWidgetAttributes: getCapWidgetAttributes
  };
  Object(_components_login__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, captchaOptions));
  Object(_components_register__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, captchaOptions));
  Object(_components_forget__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, captchaOptions));
  Object(_components_discussion__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, captchaOptions));
  Object(_components_reply__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, captchaOptions));
  Object(_components_search__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, captchaOptions));
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/ChangePasswordModal":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ChangePasswordModal']" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/ChangePasswordModal'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/ForgotPasswordModal":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ForgotPasswordModal']" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/ForgotPasswordModal'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/ReplyComposer":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ReplyComposer']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/ReplyComposer'];

/***/ }),

/***/ "flarum/forum/components/Search":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Search']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Search'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map