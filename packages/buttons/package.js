Package.describe({
  name: 'mdg:buttons',
  version: '0.2.0',
  summary: 'button components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:borealis@0.2.0',
    'mdg:chromatic-api@0.2.0',
    'tmeasday:check-npm-versions'
  ], 'client');

  api.mainModule('main.js', 'client');
});
