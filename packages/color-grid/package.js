Package.describe({
  name: 'mdg:color-grid',
  version: '0.2.4',
  summary: 'Generate a pretty grid of colored boxes',
  documentation: 'README.md',
  git: 'https://github.com/meteor/chromatic',
})

Package.onUse(function (api) {
  api.versionsFrom('1.3')
  api.use(['ecmascript', 'less@3.0.1', 'mdg:borealis@0.2.5', 'mdg:chromatic-api@0.2.4'], 'client')
  api.addFiles(['for.import.less', 'color-grid.import.less', 'color-grid.less', 'ColorGrid.jsx'], 'client')
  api.export('ColorGrid', 'client')
})
