Package.describe({
  name: 'mdg:tooltips',
  version: '0.2.13',
  summary: 'Basic tooltip wrapper for elements',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'less@2.8.0', 'underscore', 'mdg:borealis@0.2.24', 'mdg:chromatic-api@0.2.4'], 'client')

  api.addFiles(['WithTooltip.jsx', 'TooltipStyleguide.jsx'], 'client')

  api.export('WithTooltip', 'client')
})
