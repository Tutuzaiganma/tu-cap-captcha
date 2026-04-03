import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Switch from 'flarum/common/components/Switch';
import extractText from 'flarum/common/utils/extractText';

const extensionId = 'tu-cap-captcha';
const defaultSettings = {
  global_widget_script_url: 'https://cdn.jsdelivr.net/npm/@cap.js/widget',
  global_floating_script_url: 'https://cdn.jsdelivr.net/npm/@cap.js/widget/cap-floating.min.js',
  global_wasm_url: '',
  global_endpoint: '',
  global_secret: '',
};

const operations = [
  { key: 'register', icon: 'fas fa-user-plus' },
  { key: 'login', icon: 'fas fa-sign-in-alt' },
  { key: 'forgot', icon: 'fas fa-unlock-alt' },
  { key: 'discussion', icon: 'fas fa-pen-alt' },
  { key: 'reply', icon: 'fas fa-reply' },
  { key: 'search', icon: 'fas fa-search' },
];

class CapCaptchaSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
    this.activeTab = 'global';
  }

  content() {
    const activeOperation = operations.find((operation) => operation.key === this.activeTab);

    return m('.CapCaptchaSettingsPage', [
      m('.container', [
        m('.CapCaptchaSettingsPage-shell', [
          m('.CapCaptchaSettingsPage-layout', [
            m('.CapCaptchaSettingsPage-sidebar', [
              this.sidebarItem('global', 'fas fa-globe', app.translator.trans('tu-cap-captcha.admin.cards.global')),
              ...operations.map((operation) =>
                this.sidebarItem(
                  operation.key,
                  operation.icon,
                  app.translator.trans(`tu-cap-captcha.admin.operations.${operation.key}`)
                )
              ),
            ]),
            m('.CapCaptchaSettingsPage-main', [
              m('.CapCaptchaSettingsPage-mainCard', [
                this.activeTab === 'global' ? this.globalSettingsCard() : this.operationSettingsCard(activeOperation),
              ]),
            ]),
          ]),
          m('.CapCaptchaSettingsPage-shellActions', [this.restoreDefaultsButton(), this.submitButton()]),
        ]),
      ]),
    ]);
  }

  restoreDefaultsButton() {
    return m(
      'button.Button',
      {
        type: 'button',
        onclick: () => this.restoreDefaults(),
      },
      app.translator.trans('tu-cap-captcha.admin.buttons.restore_defaults')
    );
  }

  restoreDefaults() {
    Object.entries(defaultSettings).forEach(([key, value]) => {
      this.setting(`${extensionId}.${key}`)(value);
    });

    operations.forEach((operation) => {
      this.setting(`${extensionId}.${operation.key}_enabled`)('0');
      this.setting(`${extensionId}.${operation.key}_custom_enabled`)('0');
      this.setting(`${extensionId}.${operation.key}_endpoint`)('');
      this.setting(`${extensionId}.${operation.key}_secret`)('');
    });
  }

  getSettingValue(settingKey, fallback = '') {
    const value = this.setting(settingKey, fallback)();
    return typeof value === 'string' ? value.trim() : '';
  }

  hasGlobalScriptConfig() {
    const widgetScriptUrl = this.getSettingValue(`${extensionId}.global_widget_script_url`);
    const floatingScriptUrl = this.getSettingValue(`${extensionId}.global_floating_script_url`);

    return widgetScriptUrl !== '' && floatingScriptUrl !== '';
  }

  hasGlobalVerifierConfig() {
    const globalEndpoint = this.getSettingValue(`${extensionId}.global_endpoint`);
    const globalSecret = this.getSettingValue(`${extensionId}.global_secret`);

    return globalEndpoint !== '' && globalSecret !== '';
  }

  hasOperationVerifierConfig(operationKey) {
    const customConfigEnabled = this.setting(`${extensionId}.${operationKey}_custom_enabled`, '0')() === '1';
    const operationEndpoint = this.getSettingValue(`${extensionId}.${operationKey}_endpoint`);
    const operationSecret = this.getSettingValue(`${extensionId}.${operationKey}_secret`);

    return customConfigEnabled && operationEndpoint !== '' && operationSecret !== '';
  }

  canEnableOperation(operationKey) {
    if (!this.hasGlobalScriptConfig()) return false;

    return this.hasGlobalVerifierConfig() || this.hasOperationVerifierConfig(operationKey);
  }

  handleOperationEnabledChange(operationKey, enabledSetting, value) {
    if (!value) {
      this.setting(enabledSetting)('0');
      return;
    }

    if (!this.canEnableOperation(operationKey)) {
      this.setting(enabledSetting)('0');
      app.alerts.show(
        { type: 'error' },
        app.translator.trans('tu-cap-captcha.admin.validation.enable_requires_config', {
          operation: app.translator.trans(`tu-cap-captcha.admin.operations.${operationKey}`),
        })
      );
      return;
    }

    this.setting(enabledSetting)('1');
  }

  sidebarItem(tab, iconName, label) {
    const isActive = this.activeTab === tab;

    return m(
      'button.Button',
      {
        type: 'button',
        className: `CapCaptchaSettingsPage-sidebarItem ${isActive ? 'active' : ''}`,
        onclick: () => {
          this.activeTab = tab;
        },
      },
      [m(`i.icon.${iconName}`), m('span', label)]
    );
  }

  globalSettingsCard() {
    return m('.CapCaptchaSettingsPage-section', [
      m('.CapCaptchaSettingsPage-cardHeader', [
        m('i.icon.fas.fa-globe'),
        m('span', app.translator.trans('tu-cap-captcha.admin.cards.global')),
      ]),
      m('.Form', [
        this.textField(
          `${extensionId}.global_widget_script_url`,
          app.translator.trans('tu-cap-captcha.admin.fields.widget_script_url'),
          app.translator.trans('tu-cap-captcha.admin.fields.global_widget_script_url_help')
        ),
        this.textField(
          `${extensionId}.global_floating_script_url`,
          app.translator.trans('tu-cap-captcha.admin.fields.floating_script_url'),
          app.translator.trans('tu-cap-captcha.admin.fields.global_floating_script_url_help')
        ),
        this.textField(
          `${extensionId}.global_wasm_url`,
          app.translator.trans('tu-cap-captcha.admin.fields.wasm_url'),
          app.translator.trans('tu-cap-captcha.admin.fields.global_wasm_url_help')
        ),
        this.textField(
          `${extensionId}.global_endpoint`,
          app.translator.trans('tu-cap-captcha.admin.fields.endpoint'),
          app.translator.trans('tu-cap-captcha.admin.fields.global_endpoint_help')
        ),
        this.textField(
          `${extensionId}.global_secret`,
          app.translator.trans('tu-cap-captcha.admin.fields.secret'),
          app.translator.trans('tu-cap-captcha.admin.fields.global_secret_help'),
          'password'
        ),
      ]),
    ]);
  }

  operationSettingsCard(operation) {
    if (!operation) return null;

    const enabledSetting = `${extensionId}.${operation.key}_enabled`;
    const endpointSetting = `${extensionId}.${operation.key}_endpoint`;
    const secretSetting = `${extensionId}.${operation.key}_secret`;
    const customConfigSetting = `${extensionId}.${operation.key}_custom_enabled`;
    const isEnabled = this.setting(enabledSetting, '0')() === '1';
    const customConfigEnabled = this.setting(customConfigSetting, '0')() === '1';
    const canEnable = this.canEnableOperation(operation.key);

    return m('.CapCaptchaSettingsPage-section', [
      m('.CapCaptchaSettingsPage-cardHeader', [
        m(`i.icon.${operation.icon}`),
        m('span', app.translator.trans(`tu-cap-captcha.admin.operations.${operation.key}`)),
      ]),
      m('.Form', [
        m('.Form-group', [
          m(
            'label',
            app.translator.trans('tu-cap-captcha.admin.fields.enable_switch', {
              operation: app.translator.trans(`tu-cap-captcha.admin.operations.${operation.key}`),
            })
          ),
          m('.helpText', app.translator.trans('tu-cap-captcha.admin.fields.enable_help')),
          m(
            Switch,
            {
              state: isEnabled,
              onchange: (value) => this.handleOperationEnabledChange(operation.key, enabledSetting, value),
            },
            isEnabled
              ? app.translator.trans('tu-cap-captcha.admin.switch.enabled')
              : app.translator.trans('tu-cap-captcha.admin.switch.disabled')
          ),
          !isEnabled && !canEnable
            ? m(
                '.CapCaptchaSettingsPage-validationHint',
                app.translator.trans('tu-cap-captcha.admin.validation.enable_requires_config_hint')
              )
            : null,
        ]),
        m('.Form-group', [
          m('label', app.translator.trans('tu-cap-captcha.admin.fields.custom_config_switch')),
          m('.helpText', app.translator.trans('tu-cap-captcha.admin.fields.custom_config_help')),
          m(
            Switch,
            {
              state: customConfigEnabled,
              onchange: (value) => this.setting(customConfigSetting)(value ? '1' : '0'),
            },
            customConfigEnabled
              ? app.translator.trans('tu-cap-captcha.admin.switch.custom_enabled')
              : app.translator.trans('tu-cap-captcha.admin.switch.custom_disabled')
          ),
        ]),
        customConfigEnabled
          ? this.textField(
              endpointSetting,
              app.translator.trans('tu-cap-captcha.admin.fields.endpoint'),
              app.translator.trans('tu-cap-captcha.admin.fields.per_operation_endpoint_help')
            )
          : null,
        customConfigEnabled
          ? this.textField(
              secretSetting,
              app.translator.trans('tu-cap-captcha.admin.fields.secret'),
              app.translator.trans('tu-cap-captcha.admin.fields.per_operation_secret_help'),
              'password'
            )
          : null,
      ]),
    ]);
  }

  textField(settingKey, label, help, type = 'text') {
    return m('.Form-group', [
      m('label', label),
      help ? m('.helpText', help) : null,
      m('input.FormControl', {
        type,
        bidi: this.setting(settingKey),
      }),
    ]);
  }
}

app.initializers.add('tu/cap-captcha', () => {
  const extension = app.data.extensions?.[extensionId];

  if (extension) {
    extension.extra['flarum-extension'].title = extractText(app.translator.trans('tu-cap-captcha.admin.extension_name'));
    extension.description = extractText(app.translator.trans('tu-cap-captcha.admin.extension_description'));
  }

  app.extensionData.for(extensionId).registerPage(CapCaptchaSettingsPage);
});
