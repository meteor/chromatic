Package.describe({
  name: 'mdg:callout',
  version: '0.2.7',
  summary: 'an important thing at the top of the screen',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'less@4.0.0', 'mdg:borealis@0.2.20', 'mdg:chromatic-api@0.2.3'], 'client')

  api.mainModule('main.js', 'client')

  api.addFiles(['Callout.less'], 'client')
})
