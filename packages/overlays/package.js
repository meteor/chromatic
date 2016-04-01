Package.describe({
  name: 'mdg:overlays',
  version: '0.0.1',
  summary: 'Overlay layout and mechanism to drive overlays',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Npm.depends({
  'react': '0.14.8',
  'velocity-react': '1.1.1',
  'velocity-animate': '1.2.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'less',
    'mdg:borealis@0.0.1',
    'mdg:chromatic@0.0.1',
    'mdg:animations@0.0.1'
  ], 'client');
  api.addFiles([
    'OverlayLayout.jsx',
    'OverlayLayout.less',
    'OverlayController.js',
    'Overlay.jsx'
  ], 'client');
  api.export(['OverlayController', 'Overlay'], 'client');
});
