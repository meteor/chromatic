Package.describe({
  name: 'mdg:list',
  version: '0.0.1',
  summary: 'A infinite-scroll list component',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'react',
    'mdg:borealis',
    'mdg:chromatic',
    'underscore',
    'mdg:velocity-react',
    'mdg:form-components',
    'mdg:animations'
  ], 'client');
  api.addFiles(['List.jsx', 'AnimatedListTester.jsx'], 'client');
  api.export('List', 'client');
});
