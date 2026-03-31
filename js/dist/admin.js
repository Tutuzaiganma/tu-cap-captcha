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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */// admin.js


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);




var extensionId = 'tu-cap-captcha';
var defaultSettings = {
  global_widget_script_url: 'https://cdn.jsdelivr.net/npm/@cap.js/widget',
  global_floating_script_url: 'https://cdn.jsdelivr.net/npm/@cap.js/widget/cap-floating.min.js',
  global_wasm_url: '',
  global_endpoint: '',
  global_secret: ''
};
var operations = [{
  key: 'register',
  icon: 'fas fa-user-plus'
}, {
  key: 'login',
  icon: 'fas fa-sign-in-alt'
}, {
  key: 'forgot',
  icon: 'fas fa-unlock-alt'
}, {
  key: 'discussion',
  icon: 'fas fa-pen-alt'
}, {
  key: 'reply',
  icon: 'fas fa-reply'
}, {
  key: 'search',
  icon: 'fas fa-search'
}];
var CapCaptchaSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  function CapCaptchaSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CapCaptchaSettingsPage, _ExtensionPage);
  var _proto = CapCaptchaSettingsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.activeTab = 'global';
  };
  _proto.content = function content() {
    var _this = this;
    var activeOperation = operations.find(function (operation) {
      return operation.key === _this.activeTab;
    });
    return m('.CapCaptchaSettingsPage', [m('.container', [m('.CapCaptchaSettingsPage-shell', [m('.CapCaptchaSettingsPage-layout', [m('.CapCaptchaSettingsPage-sidebar', [this.sidebarItem('global', 'fas fa-globe', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.cards.global'))].concat(operations.map(function (operation) {
      return _this.sidebarItem(operation.key, operation.icon, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-cap-captcha.admin.operations." + operation.key));
    }))), m('.CapCaptchaSettingsPage-main', [m('.CapCaptchaSettingsPage-mainCard', [this.activeTab === 'global' ? this.globalSettingsCard() : this.operationSettingsCard(activeOperation)])])]), m('.CapCaptchaSettingsPage-shellActions', [this.restoreDefaultsButton(), this.submitButton()])])])]);
  };
  _proto.restoreDefaultsButton = function restoreDefaultsButton() {
    var _this2 = this;
    return m('button.Button', {
      type: 'button',
      onclick: function onclick() {
        return _this2.restoreDefaults();
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.buttons.restore_defaults'));
  };
  _proto.restoreDefaults = function restoreDefaults() {
    var _this3 = this;
    Object.entries(defaultSettings).forEach(function (_ref) {
      var key = _ref[0],
        value = _ref[1];
      _this3.setting(extensionId + "." + key)(value);
    });
    operations.forEach(function (operation) {
      _this3.setting(extensionId + "." + operation.key + "_enabled")('0');
      _this3.setting(extensionId + "." + operation.key + "_custom_enabled")('0');
      _this3.setting(extensionId + "." + operation.key + "_endpoint")('');
      _this3.setting(extensionId + "." + operation.key + "_secret")('');
    });
  };
  _proto.getSettingValue = function getSettingValue(settingKey, fallback) {
    if (fallback === void 0) {
      fallback = '';
    }
    var value = this.setting(settingKey, fallback)();
    return typeof value === 'string' ? value.trim() : '';
  };
  _proto.hasGlobalScriptConfig = function hasGlobalScriptConfig() {
    var widgetScriptUrl = this.getSettingValue(extensionId + ".global_widget_script_url");
    var floatingScriptUrl = this.getSettingValue(extensionId + ".global_floating_script_url");
    return widgetScriptUrl !== '' && floatingScriptUrl !== '';
  };
  _proto.hasGlobalVerifierConfig = function hasGlobalVerifierConfig() {
    var globalEndpoint = this.getSettingValue(extensionId + ".global_endpoint");
    var globalSecret = this.getSettingValue(extensionId + ".global_secret");
    return globalEndpoint !== '' && globalSecret !== '';
  };
  _proto.hasOperationVerifierConfig = function hasOperationVerifierConfig(operationKey) {
    var customConfigEnabled = this.setting(extensionId + "." + operationKey + "_custom_enabled", '0')() === '1';
    var operationEndpoint = this.getSettingValue(extensionId + "." + operationKey + "_endpoint");
    var operationSecret = this.getSettingValue(extensionId + "." + operationKey + "_secret");
    return customConfigEnabled && operationEndpoint !== '' && operationSecret !== '';
  };
  _proto.canEnableOperation = function canEnableOperation(operationKey) {
    if (!this.hasGlobalScriptConfig()) return false;
    return this.hasGlobalVerifierConfig() || this.hasOperationVerifierConfig(operationKey);
  };
  _proto.handleOperationEnabledChange = function handleOperationEnabledChange(operationKey, enabledSetting, value) {
    if (!value) {
      this.setting(enabledSetting)('0');
      return;
    }
    if (!this.canEnableOperation(operationKey)) {
      this.setting(enabledSetting)('0');
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show({
        type: 'error'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.validation.enable_requires_config', {
        operation: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-cap-captcha.admin.operations." + operationKey)
      }));
      return;
    }
    this.setting(enabledSetting)('1');
  };
  _proto.sidebarItem = function sidebarItem(tab, iconName, label) {
    var _this4 = this;
    var isActive = this.activeTab === tab;
    return m('button.Button', {
      type: 'button',
      className: "CapCaptchaSettingsPage-sidebarItem " + (isActive ? 'active' : ''),
      onclick: function onclick() {
        _this4.activeTab = tab;
      }
    }, [m("i.icon." + iconName), m('span', label)]);
  };
  _proto.globalSettingsCard = function globalSettingsCard() {
    return m('.CapCaptchaSettingsPage-section', [m('.CapCaptchaSettingsPage-cardHeader', [m('i.icon.fas.fa-globe'), m('span', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.cards.global'))]), m('.Form', [this.textField(extensionId + ".global_widget_script_url", flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.widget_script_url'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.global_widget_script_url_help')), this.textField(extensionId + ".global_floating_script_url", flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.floating_script_url'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.global_floating_script_url_help')), this.textField(extensionId + ".global_wasm_url", flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.wasm_url'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.global_wasm_url_help')), this.textField(extensionId + ".global_endpoint", flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.endpoint'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.global_endpoint_help')), this.textField(extensionId + ".global_secret", flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.secret'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.global_secret_help'), 'password')])]);
  };
  _proto.operationSettingsCard = function operationSettingsCard(operation) {
    var _this5 = this;
    if (!operation) return null;
    var enabledSetting = extensionId + "." + operation.key + "_enabled";
    var endpointSetting = extensionId + "." + operation.key + "_endpoint";
    var secretSetting = extensionId + "." + operation.key + "_secret";
    var customConfigSetting = extensionId + "." + operation.key + "_custom_enabled";
    var isEnabled = this.setting(enabledSetting, '0')() === '1';
    var customConfigEnabled = this.setting(customConfigSetting, '0')() === '1';
    var canEnable = this.canEnableOperation(operation.key);
    return m('.CapCaptchaSettingsPage-section', [m('.CapCaptchaSettingsPage-cardHeader', [m("i.icon." + operation.icon), m('span', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-cap-captcha.admin.operations." + operation.key))]), m('.Form', [m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.enable_switch', {
      operation: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-cap-captcha.admin.operations." + operation.key)
    })), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.enable_help')), m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
      state: isEnabled,
      onchange: function onchange(value) {
        return _this5.handleOperationEnabledChange(operation.key, enabledSetting, value);
      }
    }, isEnabled ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.switch.enabled') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.switch.disabled')), !isEnabled && !canEnable ? m('.CapCaptchaSettingsPage-validationHint', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.validation.enable_requires_config_hint')) : null]), m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.custom_config_switch')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.custom_config_help')), m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
      state: customConfigEnabled,
      onchange: function onchange(value) {
        return _this5.setting(customConfigSetting)(value ? '1' : '0');
      }
    }, customConfigEnabled ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.switch.custom_enabled') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.switch.custom_disabled'))]), customConfigEnabled ? this.textField(endpointSetting, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.endpoint'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.per_operation_endpoint_help')) : null, customConfigEnabled ? this.textField(secretSetting, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.secret'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.fields.per_operation_secret_help'), 'password') : null])]);
  };
  _proto.textField = function textField(settingKey, label, help, type) {
    if (type === void 0) {
      type = 'text';
    }
    return m('.Form-group', [m('label', label), help ? m('.helpText', help) : null, m('input.FormControl', {
      type: type,
      bidi: this.setting(settingKey)
    })]);
  };
  return CapCaptchaSettingsPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default.a);
flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('tu/cap-captcha', function () {
  var _app$data$extensions;
  var extension = (_app$data$extensions = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.extensions) == null ? void 0 : _app$data$extensions[extensionId];
  if (extension) {
    extension.extra['flarum-extension'].title = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.extension_name');
    extension.description = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-cap-captcha.admin.extension_description');
  }
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.extensionData["for"](extensionId).registerPage(CapCaptchaSettingsPage);
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map