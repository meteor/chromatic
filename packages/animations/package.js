Package.describe({
  name: 'mdg:animations',
  version: '0.0.1',
  summary: 'A set of defined, reusable animations for velocity',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'mdg:velocity-react',
    'jquery',
    'underscore']);
  api.addFiles('animations.js', 'client');
  api.export('Animations', 'client');
});
