Package.describe({
  name: 'mdg:code-block',
  version: '0.1.0',
  summary: 'Format a code block using simple:highlight.js',
  git: 'http://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'less',
    'mdg:borealis@0.1.0',
    'mdg:chromatic@0.1.0',
    'mdg:classnames@0.1.0',
    'simple:highlight.js@1.0.9'
  ], 'client');

  api.addFiles([
    'CodeBlock.jsx',
    'CodeBlock.less',
  ], 'client');

  api.export('CodeBlock', 'client');
});
