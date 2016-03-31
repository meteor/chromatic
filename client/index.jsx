/* globals ReactMeteorApp React ReactDOM */

Meteor.startup(function() {
  ReactDOM.render(<ReactMeteorApp />, document.getElementById('render-target'));
});
