Package.describe({
  name: 'mdg:validation-error',
  version: '0.0.1',
  summary: 'Special error type for schema validations',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ecmascript');
  api.use('aldeed:simple-schema', ['client', 'server'], {weak:true});
  api.addFiles('validation-error.js');
  api.export(['ValidationError', 'SchemaValidationError']);
});
