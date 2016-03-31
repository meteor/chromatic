
const {ChromaticExplorer} = Package['chromatic-explorer'] || {};

if (ChromaticExplorer) {
  ChromaticExplorer.configure({basePath: '/styleguide'});
}

FlowRouter.notFound = NotFound;
FlowRouter.route('/', {
  triggersEnter: [(context, redirect) => {
    FlowRouter.go('/styleguide');
  }]
});
