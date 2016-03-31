
const {ChromaticExplorer} = Package['mdg:chromatic-explorer'] || {};

if (ChromaticExplorer) {
  ChromaticExplorer.configure({basePath: '/styleguide'});
}

FlowRouter.notFound = NotFound;
FlowRouter.route('/', {
  action: function() {
    FlowRouter.go('/styleguide');
  }
});
