/* globals ReactMeteorApp ReactDOM */
import ReactDOM from 'react-dom';
import React from 'react';

Meteor.startup(function() {
  ReactDOM.render(<ReactMeteorApp />, document.getElementById('render-target'));
});
