Package.describe({
  name: 'mdg:utils',
  version: '0.0.1',
  summary: 'common utility functions',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.use(['ecmascript', 'underscore']);
  api.addFiles(['utils.js']);
  api.export(['Utils']);
});
