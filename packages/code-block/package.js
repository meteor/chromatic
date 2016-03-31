Package.describe({
  name: 'code-block',
  version: '0.0.1',
  summary: 'Format a code block using simple:highlight.js'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use([
    'ecmascript',
    'less',
    'react',
    'borealis',
    'chromatic',
    'classnames',
    'simple:highlight.js@1.0.9'
  ], 'client');

  api.addFiles([
    'CodeBlock.jsx',
    'CodeBlock.less',
  ], 'client');

  api.export('CodeBlock', 'client');
});
