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
    'mdg:borealis@0.0.1',
    'mdg:chromatic-api@0.0.1',
    'tmeasday:check-npm-versions'
  ], 'client');

  api.mainModule('main.js', 'client');
});
