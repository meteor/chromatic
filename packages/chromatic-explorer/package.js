Package.describe({
  name: 'mdg:chromatic-explorer',
  version: '0.2.0',
  summary: 'chromatic component explorer',
  git: 'https://github.com/meteor/chromatic',
  debugOnly: true,
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'underscore',
    'ecmascript',
    'less',
    'check',
    'kadira:flow-router@2.4.0',
    'mdg:flow-router-extensions@0.0.1',
    'mdg:chromatic-api@0.2.0',
    'mdg:form-components@0.2.0',
    'mdg:color-grid@0.2.0',
    'mdg:outlines@0.2.0'
  ], 'client');

  api.addFiles([
    'ChromaticExplorer.js',
    'ChromaticLayout.jsx',
    'ChromaticLayout.less',
    'ComponentsPage.jsx',
    'ComponentsPageSidebar.jsx',
    'ComponentSpec.jsx',
    'ComponentSpec.less',
    'PageToggleButton.jsx',
    'SingleComponentPage.jsx',
    'SingleComponentPageHeader.jsx',
    'SingleComponentPageSidebar.jsx',
    'StyleguideNotFound.jsx',
    'StyleguideReadme.jsx',
    'StyleguideSpec.jsx',
    'StylesPage.jsx',
    'StylesPage.less',
    'StylesPageSidebar.jsx'
  ], 'client');

  api.addFiles([
    'styles/Buttons.jsx',
    'styles/Color.jsx',
    'styles/Forms.jsx',
    'styles/Icons.jsx',
    'styles/Table.jsx',
    'styles/Typography.jsx'
  ], 'client');

  api.addAssets([
    'logotype-chromatic.svg'
  ], 'client');

  api.export([
    'ChromaticExplorer',
    'ChromaticLayout',
    'StyleguideSpec'
  ], 'client');
});
