Package.describe({
  name: 'mdg:code-block',
  version: '0.2.7',
  summary: 'Format a code block using simple:highlight.js',
  git: 'http://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(
    ['ecmascript', 'less@2.8.0', 'mdg:borealis@0.2.24', 'mdg:chromatic@0.3.1', 'simple:highlight.js@1.0.9'],
    'client',
  )

  api.mainModule('main.js', 'client')

  api.addFiles(['CodeBlock.less'], 'client')
})
