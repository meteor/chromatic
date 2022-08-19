Package.describe({
  name: 'mdg:chromatic',
  version: '0.3.0',
  summary: 'a visualizer for react components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('1.12')

  api.use(['ecmascript', 'mdg:chromatic-api@0.3.0', 'mdg:chromatic-explorer@0.3.1'], 'client')

  api.mainModule('main.js', 'client')
})
