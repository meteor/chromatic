Package.describe({
  name: 'mdg:loading-spinner',
  version: '0.2.7',
  summary: 'Basic in-place spinner',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('1.12')
  api.use(['ecmascript', 'less', 'mdg:borealis@0.2.20'])
  api.addFiles(['LoadingSpinner.jsx', 'LoadingSpinner.less'], 'client')
  api.export('LoadingSpinner', 'client')
})
