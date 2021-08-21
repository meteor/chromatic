Package.describe({
  name: 'mdg:animations',
  version: '0.3.0',
  summary: 'A set of defined, reusable animations for velocity',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'tmeasday:check-npm-versions@1.0.2',
    'ecmascript',
    'jquery',
    'underscore',
    'modules']);

  api.mainModule('main.js', 'client');
});
