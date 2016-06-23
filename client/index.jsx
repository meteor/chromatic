/* globals ReactMeteorApp ReactDOM */
import ReactDOM from 'react-dom';
import React from 'react';

Meteor.startup(function() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<ReactMeteorApp />, root);
});
