Package.describe({
  name: 'mdg:flow-router-extensions',
  version: '0.2.0',
  summary: 'Update flow router to use a pattern that is more contained',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['ecmascript', 'kadira:flow-router@2.4.0']);
  api.addFiles('flow-router-extensions.js');
});
