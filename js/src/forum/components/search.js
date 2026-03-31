import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Search from 'flarum/forum/components/Search';

// 页面生命周期内的验证状态，一旦通过永不再弹
let searchCaptchaVerified = false;

const TRIGGER_ID = 'cap-search-floating-trigger';
const WIDGET_ID = 'cap-search-floating-widget';

/**
 * 将触发按钮定位到搜索输入框的正下方。
 * cap-floating 读取 trigger.getBoundingClientRect() 决定弹层坐标。
 */
function alignTriggerToInput(trigger, inputEl) {
  const rect = inputEl.getBoundingClientRect();
  trigger.style.top = `${rect.bottom}px`;
  trigger.style.left = `${rect.left}px`;
  trigger.style.width = `${rect.width}px`;
}

/**
 * 在 document.body 上注入 trigger + cap-widget（全局单例）。
 * 挂到 body 避免 .Search 的 CSS 裁剪导致位置偏移。
 */
function initFloatingElements(options, endpoint, onSolved) {
  if (document.getElementById(TRIGGER_ID)) return;

  options.loadWidgetScript();

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.id = TRIGGER_ID;
  trigger.className = 'CapCaptcha-search-trigger';
  trigger.setAttribute('data-cap-floating', `#${WIDGET_ID}`);
  trigger.setAttribute('data-cap-floating-position', 'bottom');
  document.body.appendChild(trigger);

  const widget = document.createElement('cap-widget');
  widget.id = WIDGET_ID;

  const attrs = { ...options.getWidgetAttributes(), 'data-cap-api-endpoint': endpoint };
  Object.entries(attrs).forEach(([name, value]) => {
    if (value !== undefined && value !== null) widget.setAttribute(name, String(value));
  });
  document.body.appendChild(widget);

  widget.addEventListener('solve', (event) => {
    const token = event?.detail?.token || '';
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
  const input = searchEl.querySelector('input.FormControl, input[type="search"], input');
  if (!input || input.getAttribute('data-cap-search-ready') === '1') return;

  input.setAttribute('data-cap-search-ready', '1');

  function activateCaptcha() {
    const trigger = document.getElementById(TRIGGER_ID);
    if (!trigger) return;
    alignTriggerToInput(trigger, input);
    input.disabled = true;
    // 让浏览器先渲染 disabled 状态，再触发 WASM/DOM 操作
    requestAnimationFrame(() => trigger.click());
  }

  input.addEventListener('mousedown', (e) => {
    if (searchCaptchaVerified) return;
    e.preventDefault();
    activateCaptcha();
  });

  input.addEventListener('focus', () => {
    if (searchCaptchaVerified) return;
    input.blur();
    activateCaptcha();
  });
}

export default function injectSearchCaptcha(options = {}) {
  const loadWidgetScript = typeof options.loadWidgetScript === 'function' ? options.loadWidgetScript : () => {};
  const getWidgetAttributes = typeof options.getWidgetAttributes === 'function' ? options.getWidgetAttributes : () => ({});
  const resolvedOptions = { loadWidgetScript, getWidgetAttributes };

  extend(Search.prototype, 'oncreate', function () {
    if (!app.forum.attribute('tu-cap-captcha.search_enabled')) return;
    if (!this.element) return;

    const endpoint = (app.forum.attribute('tu-cap-captcha.search_endpoint') || '').trim();
    if (!endpoint) return;

    initFloatingElements(resolvedOptions, endpoint, () => {
      searchCaptchaVerified = true;
      const input = this.element.querySelector('input.FormControl, input[type="search"], input');
      if (input) {
        input.disabled = false;
        input.focus();
      }
      m.redraw();
    });

    setupInputInterception(this.element);
  });
}
