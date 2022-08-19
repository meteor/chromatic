Package.describe({
  name: 'mdg:sortable',
  version: '0.2.13',
  summary: 'Components to create sortable things',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'mdg:borealis@0.2.20'], 'client')
  api.addFiles(['Sortable.jsx', 'SortableTableExample.jsx'], 'client')
  api.export('Sortable', 'client')
})
