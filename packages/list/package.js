Package.describe({
  name: 'mdg:list',
  version: '0.0.1',
  summary: 'A infinite-scroll list component',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'react@0.14.3',
    'mdg:borealis@0.0.1',
    'mdg:chromatic@0.0.1',
    'underscore',
    'mdg:velocity-react@0.0.1',
    'mdg:form-components@0.0.1',
    'mdg:animations@0.0.1'
  ], 'client');
  api.addFiles(['List.jsx', 'AnimatedListTester.jsx'], 'client');
  api.export('List', 'client');
});
