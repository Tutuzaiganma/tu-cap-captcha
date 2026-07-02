import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import { captchaLoadingCard, watchCaptchaWidgetReady } from './loading-card';

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
  if (!widget) return;
  watchCaptchaWidgetReady(widget);
  if (widget.getAttribute('data-cap-listener-ready') === '1') return;
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

export default function injectRegisterCaptcha(options = {}) {
  const loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : () => {};
  const getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : () => ({});

  extend(SignUpModal.prototype, 'fields', function (items) {
    if (!app.forum.attribute('tu-cap-captcha.register_enabled')) return;
    const endpoint = (app.forum.attribute('tu-cap-captcha.register_endpoint') || '').trim();
    if (!endpoint) return;
    if (this.attrs.token) return;

    loadWidgetScript();
    items.add(
      'capCaptcha',
      m('div.Form-group.CapCaptcha-container.has-loading-card', [
        captchaLoadingCard(),
        m('cap-widget', { ...getWidgetAttributes(), 'data-cap-api-endpoint': endpoint }),
      ]),
      0
    );
  });

  extend(SignUpModal.prototype, 'oncreate', function () {
    if (!app.forum.attribute('tu-cap-captcha.register_enabled')) return;
    if (!(app.forum.attribute('tu-cap-captcha.register_endpoint') || '').trim()) return;
    if (this.attrs.token) return;
    setupSolveListener(this);
  });

  override(SignUpModal.prototype, 'onsubmit', function (original, event) {
    if (app.forum.attribute('tu-cap-captcha.register_enabled') && !this.attrs.token && !getCapToken(this)) {
      event.preventDefault();
      showCaptchaError(this);
      return;
    }
    return original(event);
  });

  override(SignUpModal.prototype, 'submitData', function (original) {
    const data = original();
    if (app.forum.attribute('tu-cap-captcha.register_enabled') && !this.attrs.token) {
      data.capToken = getCapToken(this);
    }
    return data;
  });

  override(SignUpModal.prototype, 'onerror', function (original, error) {
    if (app.forum.attribute('tu-cap-captcha.register_enabled') && !this.attrs.token) resetCaptcha(this);
    return original(error);
  });
}
