/* global Overlay:true */
/* global React OverlayController OverlayLayout ReactMeteorData VelocityTransitionGroup Animations*/

import React from 'react';

Overlay = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      Component: OverlayController.getComponent()
    };
  },
  render() {
    return (
      <VelocityTransitionGroup component="div"
        enter={{animation: 'transition.fadeIn', duration: 350}}
        leave={{animation: 'transition.fadeOut', duration: 300}}>
        {this.renderContent()}
      </VelocityTransitionGroup>
    );
  },
  renderContent() {
    const {Component} = this.data;
    if (Component) {
      return <OverlayLayout key="overlay"><Component/></OverlayLayout>;
    }
    return <div key="no-overlay"/>;
  }
});
