Package.describe({
  name: 'mdg:color-grid',
  version: '0.0.1',
  summary: 'Generate a pretty grid of colored boxes',
  documentation: 'README.md',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'react@0.14.3',
    'less',
    'mdg:borealis@0.0.1',
    'mdg:chromatic-api@0.0.1'
  ], 'client');
  api.addFiles([
    'for.import.less',
    'color-grid.import.less',
    'color-grid.less',
    'ColorGrid.jsx'
  ], 'client');
  api.export('ColorGrid', 'client');
});
