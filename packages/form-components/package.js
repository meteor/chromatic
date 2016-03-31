Package.describe({
  name: 'form-components',
  version: '0.0.1',
  summary: 'Simple React form components that use method validation',
  documentation: 'README.md'
});

Npm.depends({
  autosize: '3.0.10',
  'react-input-autosize': '0.6.6',
  'externalify': '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'less',
    'react',
    'utils',
    'classnames',
    'cosmos:browserify@0.2.0',
    'validation-error',
    'borealis',
    'chromatic-api',
    'buttons'
  ], 'client');

  api.addFiles([
    'autosize.browserify.js',
    'AutosizeInput.browserify.js',
    'AutosizeInput.browserify.options.json',
    'Form.jsx',
    'Form.less',
    'makeField.jsx',
    'Input.jsx',
    'Input.less',
    'Textarea.jsx',
    'Textarea.less',
    'Select.jsx',
    'Select.less',
    'Stepper.jsx',
    'Radio.jsx',
    'Radio.less',
    'Checkbox.jsx',
    'Checkbox.less',
    'Toggle.jsx',
    'Upload.jsx',
    'FormStyleguide.jsx',
    'SubmitButton.jsx'
  ], 'client');

  api.export([
    'Form',
    'Input',
    'FormInput',
    'Textarea',
    'FormTextarea',
    'Select',
    'FormSelect',
    'Radio',
    'FormRadio',
    'Checkbox',
    'FormCheckbox',
    'Toggle',
    'FormToggle',
    'Stepper',
    'FormStepper',
    'Upload',
    'SubmitButton',
    // TODO -  we probably shouldn't export this
    'makeField'], 'client');
});
