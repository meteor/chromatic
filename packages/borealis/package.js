Package.describe({
  name: 'mdg:borealis',
  version: '0.2.6',
  summary: 'a style system',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'less',
    'percolate:icons@0.0.12'
  ]);

  api.imply(['percolate:icons'], 'client');

  api.addFiles([
    'util/clearfix.import.less',
    'util/color.import.less',
    'util/easing.import.less',
    'util/helper.import.less',
    'util/lesshat.import.less',
    'util/link.import.less',
    'util/text.import.less',
    'util/typography.import.less',
    'util/ui.import.less',
    'util/index.import.less',
    'global/normalize.import.less',
    'global/base.import.less',
    'global/animation.import.less',
    'global/button.import.less',
    'global/drawer.import.less',
    'global/formatting.import.less',
    'global/header.import.less',
    'global/nav.import.less',
    'global/link.import.less',
    'global/list.import.less',
    'global/mobile.import.less',
    'global/section.import.less',
    'global/table.import.less',
    'global/transition.import.less',
    'global/global.import.less',
    'overlays/overlays.import.less',
    'index.import.less',
  ], 'client');
});
