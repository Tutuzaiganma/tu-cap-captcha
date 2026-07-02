import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import ReplyComposer from 'flarum/forum/components/ReplyComposer';
import { ensureCaptchaLoadingCard, watchCaptchaWidgetReady } from './loading-card';

const CAP_EDITOR_HOST_CLASS = 'CapCaptcha-editor-host';

function setBodyInputDisabled(composer, disabled) {
  if (!composer?.element) return;
  const editor = composer.element.querySelector('.ComposerBody-editor');
  if (!editor) return;
  const isDisabled = !!disabled;
  const textarea = editor.querySelector('textarea.FormControl, textarea');
  if (textarea) textarea.disabled = isDisabled;

  const controlElements = editor.querySelectorAll(
    '.TextEditor-controls button, .TextEditor-controls input, .TextEditor-controls select, .TextEditor-controls textarea'
  );

  controlElements.forEach((element) => {
    element.disabled = isDisabled;
    element.setAttribute('aria-disabled', isDisabled ? 'true' : 'false');
    element.style.pointerEvents = isDisabled ? 'none' : '';
    element.style.opacity = isDisabled ? '0.55' : '';
  });
}

function syncEditorHostClass(composer) {
  const editor = composer?.element?.querySelector('.ComposerBody-editor');
  if (!editor) return;

  const hasCaptcha = !!editor.querySelector('.CapCaptcha-container--discussion, .CapCaptcha-container--reply');
  editor.classList.toggle(CAP_EDITOR_HOST_CLASS, hasCaptcha);
}

function removeCaptchaContainer(composer) {
  composer.element?.querySelector('.CapCaptcha-container--reply')?.remove();
  syncEditorHostClass(composer);
}

function hasAnimationOrTransition(element) {
  const styles = window.getComputedStyle(element);
  const durations = `${styles.animationDuration},${styles.transitionDuration}`
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);

  return durations.some((value) => value !== '0s' && value !== '0ms');
}

function playPopupAnimation(container) {
  container.classList.remove('is-fading-out');
  container.classList.add('is-entering');

  const cleanup = () => container.classList.remove('is-entering');

  if (!hasAnimationOrTransition(container)) {
    cleanup();
    return;
  }

  container.addEventListener('animationend', cleanup, { once: true });
  container.addEventListener('transitionend', cleanup, { once: true });
}

function fadeOutAndRemoveReplyCaptcha(composer) {
  const container = composer.element?.querySelector('.CapCaptcha-container--reply');
  if (!container || container.classList.contains('is-fading-out')) return;

  container.classList.remove('is-entering');
  container.classList.add('is-fading-out');

  const finish = () => {
    if (!composer?.element?.contains(container)) return;
    removeCaptchaContainer(composer);
    m.redraw();
  };

  if (!hasAnimationOrTransition(container)) {
    finish();
    return;
  }

  container.addEventListener('animationend', finish, { once: true });
  container.addEventListener('transitionend', finish, { once: true });
}

function resetReplyCaptcha(composer) {
  composer.capReplyToken = '';
  composer.capReplyVerified = false;

  removeCaptchaContainer(composer);
  setBodyInputDisabled(composer, true);
}

function setupReplyCaptcha(composer, options) {
  if (!app.forum.attribute('tu-cap-captcha.reply_enabled')) return;

  const endpoint = (app.forum.attribute('tu-cap-captcha.reply_endpoint') || '').trim();
  if (!endpoint) return;

  if (!composer.capReplyVerified) setBodyInputDisabled(composer, true);
  if (!composer.element) return;

  const editor = composer.element.querySelector('.ComposerBody-editor');
  if (!editor) return;

  if (composer.capReplyVerified) {
    setBodyInputDisabled(composer, false);
    return;
  }

  options.loadWidgetScript();

  let container = editor.querySelector('.CapCaptcha-container--reply');
  if (!container) {
    container = document.createElement('div');
    container.className = 'Form-group CapCaptcha-container CapCaptcha-container--reply';
    editor.prepend(container);
    playPopupAnimation(container);
  }
  editor.classList.add(CAP_EDITOR_HOST_CLASS);
  ensureCaptchaLoadingCard(container);

  let widget = container.querySelector('cap-widget');
  if (!widget) {
    widget = document.createElement('cap-widget');
    const attributes = { ...options.getWidgetAttributes(), 'data-cap-api-endpoint': endpoint };
    Object.entries(attributes).forEach(([name, value]) => {
      if (value !== undefined && value !== null) widget.setAttribute(name, String(value));
    });
    container.appendChild(widget);
  }
  watchCaptchaWidgetReady(widget, container);

  if (widget.getAttribute('data-cap-listener-ready') === '1') return;
  widget.setAttribute('data-cap-listener-ready', '1');

  widget.addEventListener('solve', (event) => {
    const token = event?.detail?.token || '';
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

export default function injectReplyCaptcha(options = {}) {
  const loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : () => {};
  const getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : () => ({});
  const resolvedOptions = { loadWidgetScript, getWidgetAttributes };

  extend(ReplyComposer.prototype, 'oninit', function () {
    this.capReplyToken = '';
    this.capReplyVerified = false;
  });

  extend(ReplyComposer.prototype, 'oncreate', function () {
    setupReplyCaptcha(this, resolvedOptions);
  });

  extend(ReplyComposer.prototype, 'onupdate', function () {
    setupReplyCaptcha(this, resolvedOptions);
  });

  override(ReplyComposer.prototype, 'data', function (original) {
    const data = original();
    if (app.forum.attribute('tu-cap-captcha.reply_enabled')) {
      data.capToken = typeof this.capReplyToken === 'string' ? this.capReplyToken.trim() : '';
    }
    return data;
  });

  override(ReplyComposer.prototype, 'onsubmit', function (original) {
    const token = typeof this.capReplyToken === 'string' ? this.capReplyToken.trim() : '';
    if (app.forum.attribute('tu-cap-captcha.reply_enabled') && !token) {
      app.alerts.show(
        { type: 'error' },
        app.translator.trans('tu-cap-captcha.forum.captcha_required') || 'Please complete captcha verification first.'
      );
      return;
    }
    return original();
  });

  override(ReplyComposer.prototype, 'loaded', function (original, ...args) {
    original(...args);

    if (!app.forum.attribute('tu-cap-captcha.reply_enabled')) return;

    resetReplyCaptcha(this);
    setupReplyCaptcha(this, resolvedOptions);
    m.redraw();
  });
}
