Package.describe({
  name: 'mdg:color-grid',
  version: '0.2.6',
  summary: 'Generate a pretty grid of colored boxes',
  documentation: 'README.md',
  git: 'https://github.com/meteor/chromatic',
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'less@2.8.0', 'mdg:borealis@0.2.24', 'mdg:chromatic-api@0.3.3'], 'client')
  api.addFiles(['for.import.less', 'color-grid.import.less', 'color-grid.less', 'ColorGrid.jsx'], 'client')
  api.export('ColorGrid', 'client')
})
