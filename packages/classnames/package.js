Package.describe({
  name: 'mdg:classnames',
  version: '0.0.1',
  summary: 'wrapper for classnames npm package',
  readme: 'README.md',
  git: 'https://github.com/meteor/chromatic'
});

Npm.depends({classnames: '2.1.3'});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('cosmos:browserify@0.2.0', 'client');
  api.addFiles('classnames.browserify.js', 'client');
  api.export('classnames', 'client');
});
