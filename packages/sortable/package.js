Package.describe({
  name: 'mdg:sortable',
  version: '0.0.1',
  summary: 'Components to create sortable things',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'react',
    'mdg:borealis',
    'mdg:chromatic',
    'mdg:classnames',
    'dfischer:faker@1.0.8'
  ], 'client');
  api.addFiles(['Sortable.jsx', 'SortableTableExample.jsx'], 'client');
  api.export('Sortable', 'client');
});
