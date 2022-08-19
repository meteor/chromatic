Package.describe({
  name: 'mdg:buttons',
  version: '0.2.8',
  summary: 'button components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'mdg:borealis@0.2.20', 'tmeasday:check-npm-versions@0.3.1'], 'client')

  api.mainModule('main.js', 'client')
})
