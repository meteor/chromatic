Package.describe({
  name: 'mdg:tooltips',
  version: '0.2.12',
  summary: 'Basic tooltip wrapper for elements',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.3.1')
  api.use(['ecmascript', 'less', 'underscore', 'mdg:borealis@0.2.20', 'mdg:chromatic-api@0.2.4'], 'client')

  api.addFiles(['WithTooltip.jsx', 'TooltipStyleguide.jsx'], 'client')

  api.export('WithTooltip', 'client')
})
