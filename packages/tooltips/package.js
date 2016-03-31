Package.describe({
  name: 'tooltips',
  version: '0.0.1',
  summary: 'Basic tooltip wrapper for elements'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'react',
    'less',
    'underscore',
    'borealis',
    'chromatic',
    'date-components'
  ], 'client');
  api.addFiles([
    'jquery.qtip.js',
    'jquery.qtip.import.less',
    'WithTooltip.jsx',
    'WithTooltip.less',
    'TooltipStyleguide.jsx'], 'client');
  api.export('WithTooltip', 'client');
});
