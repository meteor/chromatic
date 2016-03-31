Package.describe({
  name: 'mdg:react-meteor-app',
  version: '0.0.1',
  summary: 'Baseline for React component rendering and Meteor + FlowRouter integration',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'react@0.14.3',
    'mdg:flow-router-extensions@0.0.1'
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
