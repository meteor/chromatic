Package.describe({
  name: 'chromatic',
  version: '0.0.1',
  summary: 'A visualizer for styleguide components',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'chromatic-api',
    'chromatic-explorer'
  ], 'client');

  api.imply([
    'chromatic-api',
    'chromatic-explorer',
    'borealis'
  ], 'client');

  api.export([
    'Chromatic',
    'ChromaticExplorer'
  ], 'client');
});
