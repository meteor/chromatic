Package.describe({
  name: 'mdg:loading-spinner',
  version: '0.0.1',
  summary: 'Basic in-place spinner',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'less',
    'react@0.14.3',
    'mdg:borealis@0.0.1',
    'mdg:chromatic@0.0.1',
    'mdg:classnames@0.0.1'
  ]);
  api.addFiles([
    'LoadingSpinner.jsx',
    'LoadingSpinner.less',
  ], 'client');
  api.export('LoadingSpinner', 'client');
});
