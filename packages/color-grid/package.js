Package.describe({
  name: 'mdg:color-grid',
  version: '0.1.0',
  summary: 'Generate a pretty grid of colored boxes',
  documentation: 'README.md',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'less',
    'mdg:borealis@0.1.0',
    'mdg:chromatic-api@0.1.0'
  ], 'client');
  api.addFiles([
    'for.import.less',
    'color-grid.import.less',
    'color-grid.less',
    'ColorGrid.jsx'
  ], 'client');
  api.export('ColorGrid', 'client');
});
