import ReactDOM from 'react-dom';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { ReactMeteorApp } from 'meteor/mdg:react-meteor-app';

Meteor.startup(function() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<ReactMeteorApp />, root);
});
