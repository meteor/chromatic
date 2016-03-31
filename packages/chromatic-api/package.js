Package.describe({
  name: 'mdg:chromatic-api',
  version: '0.0.1',
  summary: 'chromatic dev include',
  git: 'https://github.com/meteor/chromatic',
  debugOnly: true,
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'underscore',
    'check',
    'react@0.14.3'
  ], 'client');
  api.addFiles('chromatic-api.js', 'client');
  api.export('Chromatic', 'client');
});