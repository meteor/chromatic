Package.describe({
  name: 'mdg:buttons',
  version: '0.0.1',
  summary: 'button components',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'react',
    'mdg:borealis',
    'mdg:chromatic-api'
  ], 'client');
  api.addFiles([
    'ProgressButton.jsx',
    'LoadingButton.jsx'], 'client');
  api.export([
    'ProgressButton',
    'LoadingButton',
    'ContactUsButton'], 'client');
});
