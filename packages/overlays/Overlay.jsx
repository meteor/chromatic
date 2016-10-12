/* global Overlay:true */
/* global OverlayController OverlayLayout ReactMeteorData */

import React from 'react';
import {VelocityTransitionGroup} from 'velocity-react';

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
      return <OverlayLayout key="overlay"><Component className={Component.displayName}/></OverlayLayout>;
    }
    return <div key="no-overlay"/>;
  }
});
