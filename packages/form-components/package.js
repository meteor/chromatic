Package.describe({
  name: 'mdg:form-components',
  version: '0.2.0',
  summary: 'Simple React form components that use method validation',
  documentation: 'README.md',
  git: 'https://github.com/meteor/chromatic'
});

// Npm.depends({
//   'externalify': '0.1.0'
// });

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'less',
    'mdg:utils@0.0.1',
    'mdg:classnames@0.0.1',
    'mdg:validation-error@0.5.1',
    'mdg:borealis@0.0.1',
    'mdg:chromatic-api@0.0.1',
    'mdg:buttons@0.0.1'
  ], 'client');

  api.addFiles([
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
