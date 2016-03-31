Package.describe({
  name: 'outlines',
  version: '0.0.1',
  readme: 'README.md',
  summary: 'Press ctrl+~ to show outlines around all dom elements'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.15');
  api.use(['ecmascript', 'jquery'], 'client');
  api.addFiles(['outlines.js', 'outlines.css'], 'client');
});
