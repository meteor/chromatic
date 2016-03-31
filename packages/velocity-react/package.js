Package.describe({
  name: 'mdg:velocity-react',
  version: '0.0.1',
  summary: 'Wrapper package for the velocity-react animation library',
  git: 'https://github.com/meteor/chromatic'
});

Npm.depends({
  'velocity-react': '1.1.1',
  'velocity-animate': '1.2.3',
  'externalify': '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['ecmascript', 'cosmos:browserify@0.2.0'], 'client');
  api.addFiles([
    'velocity-react.browserify.js',
    'velocity-react.browserify.options.json',
  ], 'client');
  api.export(['VelocityComponent', 'VelocityTransitionGroup', 'VelocityHelpers'], 'client');
});
