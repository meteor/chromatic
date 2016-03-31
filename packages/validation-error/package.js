Package.describe({
  name: 'validation-error',
  version: '0.0.1',
  summary: 'Special error type for schema validations'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('aldeed:simple-schema', ['client', 'server'], {weak:true});
  api.addFiles('validation-error.js');
  api.export(['ValidationError', 'SchemaValidationError']);
});
