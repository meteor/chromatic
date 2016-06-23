Package.describe({
  name: 'mdg:animations',
  version: '0.1.0',
  summary: 'A set of defined, reusable animations for velocity',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Npm.depends({
  'velocity-react': '1.1.1',
  'velocity-animate': '1.2.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'tmeasday:check-npm-versions',
    'ecmascript',
    'jquery',
    'underscore',
    'modules']);

  api.mainModule('main.js', 'client');
});
