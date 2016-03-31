Package.describe({
  name: 'flow-router-extensions',
  version: '0.0.1',
  summary: 'Update flow router to use a pattern that is more contained'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use(['ecmascript', 'kadira:flow-router@2.4.0']);
  api.addFiles('flow-router-extensions.js');
});
