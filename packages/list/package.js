Package.describe({
  name: 'mdg:list',
  version: '0.2.14',
  summary: 'A infinite-scroll list component',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:borealis@0.2.5',
    'underscore',
    'mdg:form-components@0.2.7',
    'mdg:animations@0.2.3'
  ], 'client');
  api.addFiles([
    'List.jsx',
    'AnimatedListTester.jsx',
    'Pagination.jsx'
  ], 'client');
  api.export([
    'List',
    'Pagination'
  ], 'client');
});
