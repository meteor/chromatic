Package.describe({
  name: 'mdg:chromatic',
  version: '0.0.1',
  summary: 'a visualizer for react components',
  git: 'https://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'mdg:chromatic-api',
    'mdg:chromatic-explorer'
  ], 'client');

  api.imply([
    'mdg:chromatic-api',
    'mdg:chromatic-explorer',
    'mdg:borealis'
  ], 'client');

  api.export([
    'Chromatic',
    'ChromaticExplorer'
  ], 'client');
});
