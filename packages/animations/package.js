Package.describe({
  name: 'mdg:animations',
  version: '0.2.4',
  summary: 'A set of defined, reusable animations for velocity',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['tmeasday:check-npm-versions@0.3.1', 'ecmascript', 'jquery@1.11.10', 'underscore', 'modules'])

  api.mainModule('main.js', 'client')
})
