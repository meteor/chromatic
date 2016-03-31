Package.describe({
  name: 'date-components',
  version: '0.0.1',
  summary: 'Simple rendering of dates'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'react',
    'classnames',
    'borealis',
    'chromatic',
    'momentjs:moment@2.10.6',
    'tracker'], 'client');
  api.addFiles([
    'DateVar.js',
    'RelativeDate.jsx',
    'FullDate.jsx'], 'client');
  api.export(['RelativeDate', 'FullDate'], 'client');
});
