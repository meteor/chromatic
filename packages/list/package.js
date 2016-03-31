Package.describe({
  name: 'list',
  version: '0.0.1',
  summary: 'A infinite-scroll list component that',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'react',
    'borealis',
    'chromatic',
    'underscore',
    'velocity-react',
    'form-components',
    'animations'
  ], 'client');
  api.addFiles(['List.jsx', 'AnimatedListTester.jsx'], 'client');
  api.export('List', 'client');
});
