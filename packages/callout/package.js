Package.describe({
  name: 'callout',
  version: '0.0.1',
  summary: 'Let mdg members know that they\'re looking at another client\'s app'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'dfischer:faker',
    'ecmascript',
    'less',
    'react',
    'borealis',
    'chromatic',
    'classnames'
  ], 'client');

  api.addFiles([
    'Callout.jsx',
    'Callout.less'
  ], 'client');

  api.export('Callout', 'client');
});
