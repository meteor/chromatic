Package.describe({
  name: 'mdg:color-grid',
  version: '0.2.5',
  summary: 'Generate a pretty grid of colored boxes',
  documentation: 'README.md',
  git: 'https://github.com/meteor/chromatic',
})

Package.onUse(function (api) {
  api.versionsFrom('2.3.1')
  api.use(['ecmascript', 'less', 'mdg:borealis@0.2.20', 'mdg:chromatic-api@0.2.4'], 'client')
  api.addFiles(['for.import.less', 'color-grid.import.less', 'color-grid.less', 'ColorGrid.jsx'], 'client')
  api.export('ColorGrid', 'client')
})
