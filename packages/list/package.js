Package.describe({
  name: 'mdg:list',
  version: '0.1.0',
  summary: 'A infinite-scroll list component',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:borealis@0.1.0',
    'mdg:chromatic@0.1.0',
    'underscore',
    'mdg:form-components@0.1.0',
    'mdg:animations@0.1.0'
  ], 'client');
  api.addFiles(['List.jsx', 'AnimatedListTester.jsx'], 'client');
  api.export('List', 'client');
});
