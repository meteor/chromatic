Package.describe({
  name: 'classnames',
  version: '0.0.1',
  summary: 'Simple wrapper for classnames npm package',
  git: 'https://github.com/JedWatson/classnames'
});

Npm.depends({classnames: '2.1.3'});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use('cosmos:browserify@0.2.0', 'client');
  api.addFiles('classnames.browserify.js', 'client');
  api.export('classnames', 'client');
});
