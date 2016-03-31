Package.describe({
  name: 'chromatic-api',
  version: '0.0.1',
  summary: '',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'underscore',
    'check',
    'react'
  ], 'client');
  api.addFiles('chromatic-api.js', 'client');
  api.export('Chromatic', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('chromatic-api');
  api.addFiles('chromatic-api-tests.js');
});
