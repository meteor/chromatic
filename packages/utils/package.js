Package.describe({
  name: 'mdg:utils',
  version: '0.2.4',
  summary: 'common utility functions',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'underscore'])
  api.addFiles(['utils.js'])
  api.export(['Utils'])
})
