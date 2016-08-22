Package.describe({
  name: 'mdg:react-meteor-app',
  version: '0.2.0',
  summary: 'Baseline for React component rendering and Meteor + FlowRouter integration',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'react-meteor-data',
    'mdg:flow-router-extensions@0.2.0'
  ], 'client');
  api.addFiles([
    'ReactMeteorApp.jsx',
    'ReactLayoutRenderer.jsx',
    'NotFound.jsx'
  ], 'client');
  api.export([
    'ReactMeteorApp',
    'ReactLayoutRenderer',
    'NotFound'
  ], 'client');
});
