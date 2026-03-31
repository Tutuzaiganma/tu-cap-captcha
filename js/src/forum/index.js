import app from 'flarum/forum/app';
import injectLoginCaptcha from './components/login';
import injectRegisterCaptcha from './components/register';
import injectForgetCaptcha from './components/forget';
import injectDiscussionCaptcha from './components/discussion';
import injectReplyCaptcha from './components/reply';
import injectSearchCaptcha from './components/search';

const CAP_WIDGET_I18N_ZH_HANS = {
  'data-cap-i18n-initial-state': '点击验证',
  'data-cap-i18n-verify-aria-label': '点击进行人机验证',
  'data-cap-i18n-verifying-label': '验证中...',
  'data-cap-i18n-verifying-aria-label': '正在验证，请稍候',
  'data-cap-i18n-solved-label': '验证通过',
  'data-cap-i18n-verified-aria-label': '验证通过，现在可以继续操作',
  'data-cap-i18n-error-label': '验证失败，请重试',
  'data-cap-i18n-error-aria-label': '验证发生错误，请重试',
  'data-cap-i18n-wasm-disabled': '开启 WASM 可显著加速验证',
  'data-cap-i18n-troubleshooting-label': '故障排查',
};

let capWidgetScriptLoaded = false;

function resolveForumSetting(attribute) {
  const value = app.forum?.attribute(attribute);
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : '';
}

function loadScript(src) {
  if (!src || document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

function loadCapWidgetScript() {
  if (capWidgetScriptLoaded) return;

  capWidgetScriptLoaded = true;

  const widgetScriptUrl = resolveForumSetting('tu-cap-captcha.widget_script_url');
  const floatingScriptUrl = resolveForumSetting('tu-cap-captcha.floating_script_url');
  const customWasmUrl = resolveForumSetting('tu-cap-captcha.wasm_url');

  if (customWasmUrl) {
    window.CAP_CUSTOM_WASM_URL = customWasmUrl;
  }

  loadScript(widgetScriptUrl);
  loadScript(floatingScriptUrl);
}

function getCapWidgetAttributes() {
  return {
    ...CAP_WIDGET_I18N_ZH_HANS,
    'data-cap-disable-haptics': 'true',
  };
}

app.initializers.add('tu/cap-captcha', () => {
  const captchaOptions = {
    loadWidgetScript: loadCapWidgetScript,
    getWidgetAttributes: getCapWidgetAttributes,
  };

  injectLoginCaptcha({
    ...captchaOptions,
  });

  injectRegisterCaptcha({
    ...captchaOptions,
  });

  injectForgetCaptcha({
    ...captchaOptions,
  });

  injectDiscussionCaptcha({
    ...captchaOptions,
  });

  injectReplyCaptcha({
    ...captchaOptions,
  });

  injectSearchCaptcha({
    ...captchaOptions,
  });
});
