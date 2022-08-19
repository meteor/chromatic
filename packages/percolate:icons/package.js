var Version = 'v3.4'

Package.describe({
  version: '0.0.14',
  name: 'percolate:icons',
  summary: 'Icons for Percolate, version ' + Version,
  git: 'https://github.com/percolatestudio/percolate-icons',
  documentation: 'README.md',
})

Package.onUse(function (api) {
  api.versionsFrom('1.12')

  var path = Npm.require('path')
  var assetPath = path.join(Version)

  api.addAssets(path.join(assetPath, 'fonts', 'percolate.eot'), 'client')
  api.addAssets(path.join(assetPath, 'fonts', 'percolate.svg'), 'client')
  api.addAssets(path.join(assetPath, 'fonts', 'percolate.ttf'), 'client')
  api.addAssets(path.join(assetPath, 'fonts', 'percolate.woff'), 'client')

  api.use(['less'])
  api.addFiles(path.join('edited-style.less'), 'client')
})
