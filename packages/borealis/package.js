Package.describe({
  name: 'mdg:borealis',
  version: '0.0.1',
  summary: 'a style system',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'less',
    'percolate:icons@0.0.8'
  ]);

  api.addFiles([
    'util/clearfix.import.less',
    'util/color.import.less',
    'util/easing.import.less',
    'util/helper.import.less',
    'util/lesshat.import.less',
    'util/link.import.less',
    'util/normalize.import.less',
    'util/text.import.less',
    'util/typography.import.less',
    'util/ui.import.less',
    'util/index.import.less',
    'global/base.less', // this is first
    'global/animation.less',
    'global/button.less',
    'global/drawer.less',
    'global/formatting.less',
    'global/header.less',
    'global/nav.less',
    'global/link.less',
    'global/list.less',
    'global/mobile.less',
    'global/section.less',
    'global/table.less',
    'global/transition.less'
  ], 'client');
});
