Package.describe({
  name: 'mdg:tooltips',
  version: '0.0.1',
  summary: 'Basic tooltip wrapper for elements',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'less',
    'underscore',
    'mdg:borealis@0.0.1',
    'mdg:chromatic@0.0.1',
    'mdg:date-components@0.0.1'
  ], 'client');
  api.addFiles([
    'jquery.qtip.js',
    'jquery.qtip.import.less',
    'WithTooltip.jsx',
    'WithTooltip.less',
    'TooltipStyleguide.jsx'], 'client');
  api.export('WithTooltip', 'client');
});
