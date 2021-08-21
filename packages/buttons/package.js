Package.describe({
  name: 'mdg:buttons',
  version: '0.3.0',
  summary: 'button components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:borealis@0.2.5',
    'tmeasday:check-npm-versions@1.0.2'
  ], 'client');

  api.mainModule('main.js', 'client');
});
