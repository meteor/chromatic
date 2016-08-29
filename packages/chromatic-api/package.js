Package.describe({
  name: 'mdg:chromatic-api',
  version: '0.2.4',
  summary: 'chromatic dev include',
  git: 'https://github.com/meteor/chromatic',
  debugOnly: true,
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'underscore',
    'check'
  ], 'client');
  api.mainModule('chromatic-api.js', 'client');
});
