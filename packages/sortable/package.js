Package.describe({
  name: 'sortable',
  version: '0.0.1',
  summary: 'Components to create sortable things'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'react',
    'borealis',
    'chromatic',
    'classnames',
    'dfischer:faker@1.0.8'
  ], 'client');
  api.addFiles(['Sortable.jsx', 'SortableTableExample.jsx'], 'client');
  api.export('Sortable', 'client');
});
