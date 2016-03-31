Package.describe({
  name: 'mdg:chromatic-explorer',
  version: '0.0.1',
  summary: 'chromatic component explorer',
  git: 'https://github.com/meteor/chromatic',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'underscore',
    'ecmascript',
    'mdg:classnames',
    'react',
    'less',
    'check',
    'kadira:flow-router@2.4.0',
    'mdg:flow-router-extensions',
    'mdg:chromatic-api',
    'mdg:form-components',
    'mdg:color-grid',
    'mdg:outlines'
  ], 'client');

  api.use('stub-collections', ['client', 'server'], { weak: true });

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
