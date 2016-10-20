Package.describe({
  name: 'mdg:sortable',
  version: '0.2.5',
  summary: 'Components to create sortable things',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:borealis@0.2.5',
    'mdg:chromatic@0.2.4',
    'dfischer:faker@1.0.8'
  ], 'client');
  api.addFiles(['Sortable.jsx', 'SortableTableExample.jsx'], 'client');
  api.export('Sortable', 'client');
});
