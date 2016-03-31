Package.describe({
  name: 'mdg:loading-spinner',
  version: '0.0.1',
  summary: 'Basic in-place spinner',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'less',
    'react',
    'mdg:borealis',
    'mdg:chromatic',
    'mdg:classnames'
  ]);
  api.addFiles([
    'LoadingSpinner.jsx',
    'LoadingSpinner.less',
  ], 'client');
  api.export('LoadingSpinner', 'client');
});
