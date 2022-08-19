Package.describe({
  name: 'mdg:callout',
  version: '0.2.7',
  summary: 'an important thing at the top of the screen',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('1.6.0.1')
  api.use(['ecmascript', 'less', 'mdg:borealis@0.2.20', 'mdg:chromatic-api@0.2.3'], 'client')

  api.mainModule('main.js', 'client')

  api.addFiles(['Callout.less'], 'client')
})
