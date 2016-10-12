Package.describe({
  name: 'mdg:overlays',
  version: '0.2.6',
  summary: 'Overlay layout and mechanism to drive overlays',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'less',
    'mdg:borealis@0.2.3',
    'mdg:chromatic@0.2.3',
    'mdg:animations@0.2.3',
    'react-meteor-data@0.2.9',
    'kadira:flow-router@2.4.0'
  ], 'client');
  api.addFiles([
    'OverlayLayout.jsx',
    'OverlayLayout.less',
    'OverlayController.js',
    'Overlay.jsx'
  ], 'client');
  api.export(['OverlayController', 'Overlay'], 'client');
});
