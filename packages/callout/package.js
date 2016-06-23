Package.describe({
  name: 'mdg:callout',
  version: '0.1.0',
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
    'mdg:borealis@0.1.0',
    'mdg:chromatic-api@0.1.0',
    'mdg:classnames@0.1.0'
  ], 'client');

  api.mainModule('main.js', 'client');

  api.addFiles([
    'Callout.less'
  ], 'client');

  // api.addFiles([
  //   'Callout.jsx',
  //   'Callout.less'
  // ], 'client');

  // api.export('Callout', 'client');
});
