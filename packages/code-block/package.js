Package.describe({
  name: 'mdg:code-block',
  version: '0.0.1',
  summary: 'Format a code block using simple:highlight.js',
  git: 'http://github.com/meteor/chromatic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'less',
    'react',
    'mdg:borealis',
    'mdg:chromatic',
    'mdg:classnames',
    'simple:highlight.js@1.0.9'
  ], 'client');

  api.addFiles([
    'CodeBlock.jsx',
    'CodeBlock.less',
  ], 'client');

  api.export('CodeBlock', 'client');
});
