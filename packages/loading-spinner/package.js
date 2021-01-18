Package.describe({
  name: 'mdg:loading-spinner',
  version: '0.2.9',
  summary: 'Basic in-place spinner',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Npm.depends({
  'lodash.times': '4.3.2',
});


Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'less',
    'mdg:borealis@0.2.5',
  ]);
  api.addFiles([
    'LoadingSpinner.jsx',
    'LoadingSpinner.less',
  ], 'client');
  api.export('LoadingSpinner', 'client');
});
