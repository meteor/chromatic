Package.describe({
  name: 'color-grid',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Generate a pretty grid of colored boxes',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
    'ecmascript',
    'react',
    'less',
    'borealis',
    'chromatic-api'
  ], 'client');
  api.addFiles([
    'for.import.less',
    'color-grid.import.less',
    'color-grid.less',
    'ColorGrid.jsx'
  ], 'client');
  api.export('ColorGrid', 'client');
});
