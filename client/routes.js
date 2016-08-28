import { ChromaticExplorer } from 'meteor/mdg:chromatic';
import { FlowRouter } from 'meteor/kadira:flow-router';

if (ChromaticExplorer) {
  ChromaticExplorer.configure({basePath: '/styleguide'});
}

FlowRouter.notFound = NotFound;
FlowRouter.route('/', {
  action: function() {
    FlowRouter.go('/styleguide');
  }
});
