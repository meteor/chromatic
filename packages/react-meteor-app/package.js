Package.describe({
  name: 'mdg:react-meteor-app',
  version: '0.2.8',
  summary: 'Baseline for React component rendering and Meteor + FlowRouter integration',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'react-meteor-data@0.2.9',
    'kadira:flow-router@2.4.0',
    'mdg:flow-router-extensions@0.2.9'
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
