Package.describe({
  name: 'mdg:loading-spinner',
  version: '0.2.13',
  summary: 'Basic in-place spinner',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('2.7.3')
  api.use(['ecmascript', 'less@2.8.0', 'mdg:borealis@0.2.24'])
  api.addFiles(['LoadingSpinner.jsx', 'LoadingSpinner.less'], 'client')
  api.export('LoadingSpinner', 'client')
})
