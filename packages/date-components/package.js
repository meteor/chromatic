Package.describe({
  name: 'mdg:date-components',
  version: '0.0.1',
  summary: 'Simple rendering of dates',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'mdg:classnames@0.0.1',
    'mdg:borealis@0.0.1',
    'mdg:chromatic@0.0.1',
    'momentjs:moment@2.10.6',
    'tracker'], 'client');
  api.addFiles([
    'DateVar.js',
    'RelativeDate.jsx',
    'FullDate.jsx'], 'client');
  api.export(['RelativeDate', 'FullDate'], 'client');
});
