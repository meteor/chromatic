Package.describe({
  name: 'mdg:overlays',
  version: '0.2.11',
  summary: 'Overlay layout and mechanism to drive overlays',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');
  api.use(['ecmascript', 'less', 'mdg:borealis@0.2.5', 'mdg:animations@0.2.3', 'react-meteor-data@0.2.9'], 'client');
  api.mainModule('index.js', 'client');
});
