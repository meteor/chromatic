Package.describe({
  name: 'loading-spinner',
  version: '0.0.1',
  summary: 'Basic in-place spinner'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use([
    'ecmascript',
    'less',
    'react',
    'borealis',
    'chromatic',
    'classnames'
  ]);
  api.addFiles([
    'LoadingSpinner.jsx',
    'LoadingSpinner.less',
  ], 'client');
  api.export('LoadingSpinner', 'client');
});
