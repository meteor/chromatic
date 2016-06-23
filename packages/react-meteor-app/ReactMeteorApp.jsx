/* global ReactMeteorApp:true */
/* global React ReactMeteorData FlowRouter NotFound ReactLayoutRenderer */
import React from 'react';

ReactMeteorApp = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    // We need to make sure we invalidate if the current route changes too
    FlowRouter.watchPathChange();
    return {
      Component: FlowRouter.getRouteHandler(),
      currentRoute: FlowRouter.current(),
      status: Meteor.status()
    };
  },
  render() {
    const {Component, currentRoute, status} = this.data;

    if (!Component) {
      return <NotFound/>;
    }

    return <ReactLayoutRenderer Component={Component} currentRoute={currentRoute} status={status}/>;
  }
});
