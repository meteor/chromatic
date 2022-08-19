Package.describe({
  name: 'mdg:overlays',
  version: '0.2.12',
  summary: 'Overlay layout and mechanism to drive overlays',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(
    ['ecmascript', 'less@4.0.0', 'mdg:borealis@0.2.20', 'mdg:animations@0.2.3', 'react-meteor-data@0.2.9'],
    'client',
  )
  api.mainModule('index.js', 'client')
})
