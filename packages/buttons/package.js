Package.describe({
  name: 'mdg:buttons',
  version: '0.0.1',
  summary: 'button components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'react@0.14.3',
    'mdg:borealis@0.0.1',
    'mdg:chromatic-api@0.0.1'
  ], 'client');
  api.addFiles([
    'ProgressButton.jsx',
    'LoadingButton.jsx'], 'client');
  api.export([
    'ProgressButton',
    'LoadingButton',
    'ContactUsButton'], 'client');
});
