Package.describe({
  name: 'animations',
  version: '0.0.1',
  summary: 'A set of defined, reusable animations for velocity'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use(['ecmascript', 'velocity-react', 'jquery', 'underscore']);
  api.addFiles('animations.js', 'client');
  api.export('Animations', 'client');
});
