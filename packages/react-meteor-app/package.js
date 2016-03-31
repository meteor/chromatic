Package.describe({
  name: 'react-meteor-app',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Baseline for React component rendering and Meteor + FlowRouter integration',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'react',
    'flow-router-extensions'
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
