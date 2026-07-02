import app from 'flarum/forum/app';
import extractText from 'flarum/common/utils/extractText';

const LOADING_CARD_SELECTOR = '[data-cap-loading-card="1"]';

function trans(key) {
  const value = app.translator.trans(key);
  const text = extractText(value);

  return text || key;
}

function getLoadingCopy() {
  return {
    title: trans('tu-cap-captcha.forum.loading_verification'),
    hint: trans('tu-cap-captcha.forum.loading_verification_hint'),
  };
}

function markWidgetReady(container) {
  if (!container) return;

  container.classList.add('is-widget-ready');
  const loadingCard = container.querySelector(LOADING_CARD_SELECTOR);
  if (loadingCard) loadingCard.setAttribute('aria-hidden', 'true');
}

function createLoadingCardElement() {
  const copy = getLoadingCopy();
  const card = document.createElement('div');
  card.className = 'CapCaptcha-loadingCard';
  card.setAttribute('data-cap-loading-card', '1');
  card.setAttribute('role', 'status');
  card.setAttribute('aria-live', 'polite');

  const spinner = document.createElement('span');
  spinner.className = 'CapCaptcha-loadingCard-spinner';
  spinner.setAttribute('aria-hidden', 'true');

  const body = document.createElement('span');
  body.className = 'CapCaptcha-loadingCard-body';

  const title = document.createElement('span');
  title.className = 'CapCaptcha-loadingCard-title';
  title.textContent = copy.title;

  const hint = document.createElement('span');
  hint.className = 'CapCaptcha-loadingCard-hint';
  hint.textContent = copy.hint;

  body.append(title, hint);
  card.append(spinner, body);

  return card;
}

export function captchaLoadingCard() {
  const copy = getLoadingCopy();

  return m(
    'div.CapCaptcha-loadingCard',
    {
      'data-cap-loading-card': '1',
      role: 'status',
      'aria-live': 'polite',
    },
    [
      m('span.CapCaptcha-loadingCard-spinner', { 'aria-hidden': 'true' }),
      m('span.CapCaptcha-loadingCard-body', [
        m('span.CapCaptcha-loadingCard-title', copy.title),
        m('span.CapCaptcha-loadingCard-hint', copy.hint),
      ]),
    ]
  );
}

export function ensureCaptchaLoadingCard(container) {
  if (!container) return null;

  container.classList.add('has-loading-card');

  let card = container.querySelector(LOADING_CARD_SELECTOR);
  if (!card) {
    card = createLoadingCardElement();
    container.prepend(card);
  }

  return card;
}

export function watchCaptchaWidgetReady(widget, container = widget?.closest?.('.CapCaptcha-container')) {
  if (!widget || !container) return;

  container.classList.add('has-loading-card');

  const finish = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => markWidgetReady(container));
    });
  };

  if (typeof customElements !== 'undefined' && customElements.get('cap-widget')) {
    finish();
    return;
  }

  if (widget.shadowRoot || typeof widget.reset === 'function') {
    finish();
    return;
  }

  if (typeof customElements !== 'undefined' && typeof customElements.whenDefined === 'function') {
    customElements.whenDefined('cap-widget').then(finish);
  }
}
