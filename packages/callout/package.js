Package.describe({
  name: 'mdg:callout',
  version: '0.0.1',
  summary: 'an important thing at the top of the screen',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'dfischer:faker',
    'ecmascript',
    'less',
    'react',
    'mdg:borealis',
    'mdg:chromatic-api',
    'mdg:classnames'
  ], 'client');

  api.addFiles([
    'Callout.jsx',
    'Callout.less'
  ], 'client');

  api.export('Callout', 'client');
});
