Package.describe({
  name: 'mdg:form-components',
  version: '0.2.0',
  summary: 'Simple React form components that use method validation',
  documentation: 'README.md',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'less',
    'mdg:utils@0.0.1',
    'mdg:validation-error@0.5.1',
    'mdg:borealis@0.2.0',
    'mdg:chromatic-api@0.2.0',
    'mdg:buttons@0.2.0',
    'mdg:tooltips@0.2.0',
    'numeral:numeral'
  ], 'client');

  api.addFiles([
    'Cardinal.jsx',
    'Cardinal.less',
    'Form.jsx',
    'Form.less',
    'makeField.jsx',
    'Input.jsx',
    'Input.less',
    'FormattedInput.jsx',
    'Textarea.jsx',
    'Textarea.less',
    'SearchBar.jsx',
    'SearchBar.less',
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
    'Cardinal',
    'Form',
    'Input',
    'FormInput',
    'FormattedInput',
    'FormFormattedInput',
    'Textarea',
    'FormTextarea',
    'SearchBar',
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
