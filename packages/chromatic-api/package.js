Package.describe({
  name: 'mdg:chromatic-api',
  version: '0.3.3',
  summary: 'chromatic dev include',
  git: 'https://github.com/meteor/chromatic',
  debugOnly: true,
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'underscore', 'check', 'reactive-dict'], 'client')
  api.mainModule('chromatic-api.js', 'client')
})
