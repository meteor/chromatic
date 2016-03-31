Package.describe({
  name: 'mdg:chromatic',
  version: '0.0.1',
  summary: 'a visualizer for react components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'mdg:chromatic-api@0.0.1',
    'mdg:chromatic-explorer@0.0.1'
  ], 'client');

  api.imply([
    'mdg:chromatic-api',
    'mdg:chromatic-explorer',
    'mdg:borealis@0.0.1'
  ], 'client');

  api.export([
    'Chromatic',
    'ChromaticExplorer'
  ], 'client');
});
