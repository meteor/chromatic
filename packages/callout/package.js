Package.describe({
  name: 'mdg:callout',
  version: '0.2.4',
  summary: 'an important thing at the top of the screen',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'dfischer:faker@1.0.8',
    'ecmascript',
    'less',
    'mdg:borealis@0.2.5',
    'mdg:chromatic-api@0.2.3',
  ], 'client');

  api.mainModule('main.js', 'client');

  api.addFiles([
    'Callout.less'
  ], 'client');
});
