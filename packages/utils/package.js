Package.describe({
  name: 'utils',
  version: '0.0.1',
  summary: 'common util functions'
});

Package.onUse(function(api) {
  api.use(['ecmascript', 'underscore']);
  api.addFiles(['utils.js']);
  api.export(['Utils']);
});
