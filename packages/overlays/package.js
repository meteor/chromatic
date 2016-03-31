Package.describe({
  name: 'overlays',
  version: '0.0.1',
  summary: 'Overlay layout and mechanism to drive overlays'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'less',
    'react',
    'borealis',
    'chromatic',
    'velocity-react',
    'animations'
  ], 'client');
  api.addFiles([
    'OverlayLayout.jsx',
    'OverlayLayout.less',
    'OverlayController.js',
    'Overlay.jsx'
  ], 'client');
  api.export(['OverlayController', 'Overlay'], 'client');
});
