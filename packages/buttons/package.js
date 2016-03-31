Package.describe({
  name: 'buttons',
  version: '0.0.1',
  summary: 'Button Components',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'react',
    'borealis',
    'chromatic-api'
  ], 'client');
  api.addFiles([
    'ProgressButton.jsx',
    'LoadingButton.jsx'], 'client');
  api.export([
    'ProgressButton',
    'LoadingButton',
    'ContactUsButton'], 'client');
});
