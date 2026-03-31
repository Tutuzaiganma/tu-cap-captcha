import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import ForgotPasswordModal from 'flarum/forum/components/ForgotPasswordModal';
import ChangePasswordModal from 'flarum/forum/components/ChangePasswordModal';

function getWidget(modal) {
  return modal.$('cap-widget')[0] || null;
}

function getCapToken(modal) {
  const token = getWidget(modal)?.getAttribute('data-cap-token') ?? '';
  return typeof token === 'string' ? token.trim() : '';
}

function resetCaptcha(modal) {
  const widget = getWidget(modal);
  if (!widget) return;
  widget.setAttribute('data-cap-token', '');
  if (typeof widget.reset === 'function') widget.reset();
}

function setupSolveListener(modal) {
  const widget = getWidget(modal);
  if (!widget || widget.getAttribute('data-cap-listener-ready') === '1') return;
  widget.setAttribute('data-cap-listener-ready', '1');
  widget.addEventListener('solve', (event) => {
    widget.setAttribute('data-cap-token', event?.detail?.token || '');
  });
}

function showCaptchaError(modal) {
  modal.alertAttrs = {
    type: 'error',
    content: app.translator.trans('tu-cap-captcha.forum.captcha_required') || 'Please complete captcha verification first.',
  };
  modal.loading = false;
  m.redraw();
}

export default function injectForgetCaptcha(options = {}) {
  const loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : () => {};
  const getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : () => ({});

  extend(ForgotPasswordModal.prototype, 'fields', function (items) {
    if (!app.forum.attribute('tu-cap-captcha.forgot_enabled')) return;
    const endpoint = (app.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim();
    if (!endpoint) return;

    loadWidgetScript();
    items.add(
      'capCaptcha',
      m('div.Form-group.CapCaptcha-container', [m('cap-widget', { ...getWidgetAttributes(), 'data-cap-api-endpoint': endpoint })]),
      0
    );
  });

  extend(ForgotPasswordModal.prototype, 'oncreate', function () {
    if (!app.forum.attribute('tu-cap-captcha.forgot_enabled')) return;
    if (!(app.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim()) return;
    setupSolveListener(this);
  });

  override(ChangePasswordModal.prototype, 'fields', function (original) {
    const items = original();
    if (!app.forum.attribute('tu-cap-captcha.forgot_enabled')) return items;
    const endpoint = (app.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim();
    if (!endpoint) return items;

    loadWidgetScript();

    const submit = items.get('submit');
    if (submit) items.remove('submit');

    items.add(
      'capCaptcha',
      m('div.Form-group.CapCaptcha-container', [m('cap-widget', { ...getWidgetAttributes(), 'data-cap-api-endpoint': endpoint })]),
      0
    );

    if (submit) items.add('submit', submit, -10);

    return items;
  });

  extend(ChangePasswordModal.prototype, 'oncreate', function () {
    if (!app.forum.attribute('tu-cap-captcha.forgot_enabled')) return;
    if (!(app.forum.attribute('tu-cap-captcha.forgot_endpoint') || '').trim()) return;
    setupSolveListener(this);
  });

  override(ForgotPasswordModal.prototype, 'onsubmit', function (original, event) {
    if (app.forum.attribute('tu-cap-captcha.forgot_enabled') && !getCapToken(this)) {
      event.preventDefault();
      showCaptchaError(this);
      return;
    }
    return original(event);
  });

  override(ForgotPasswordModal.prototype, 'requestParams', function (original) {
    const data = original();
    if (app.forum.attribute('tu-cap-captcha.forgot_enabled')) data.capToken = getCapToken(this);
    return data;
  });

  override(ChangePasswordModal.prototype, 'onsubmit', function (original, event) {
    if (app.forum.attribute('tu-cap-captcha.forgot_enabled') && !getCapToken(this)) {
      event.preventDefault();
      showCaptchaError(this);
      return;
    }
    return original(event);
  });

  override(ChangePasswordModal.prototype, 'requestBody', function (original) {
    const data = original();
    if (app.forum.attribute('tu-cap-captcha.forgot_enabled')) data.capToken = getCapToken(this);
    return data;
  });

  override(ForgotPasswordModal.prototype, 'onerror', function (original, error) {
    if (app.forum.attribute('tu-cap-captcha.forgot_enabled')) resetCaptcha(this);
    return original(error);
  });
}
