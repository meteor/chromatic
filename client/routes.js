
import { ChromaticExplorer } from 'meteor/mdg:chromatic';

if (ChromaticExplorer) {
  ChromaticExplorer.configure({basePath: '/styleguide'});
}

FlowRouter.notFound = NotFound;
FlowRouter.route('/', {
  action: function() {
    FlowRouter.go('/styleguide');
  }
});
