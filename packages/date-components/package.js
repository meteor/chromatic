Package.describe({
  name: 'mdg:date-components',
  version: '0.0.1',
  summary: 'Simple rendering of dates',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'react',
    'mdg:classnames',
    'mdg:borealis',
    'mdg:chromatic',
    'momentjs:moment@2.10.6',
    'tracker'], 'client');
  api.addFiles([
    'DateVar.js',
    'RelativeDate.jsx',
    'FullDate.jsx'], 'client');
  api.export(['RelativeDate', 'FullDate'], 'client');
});
