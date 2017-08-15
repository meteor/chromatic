import React, { Component as ReactComponent } from 'react';
import { parse } from 'query-string';
import { withRouter } from 'react-router-dom';
import { VelocityTransitionGroup } from 'velocity-react';

import { OverlayController } from './OverlayController';
import { OverlayLayout } from './OverlayLayout';

import './OverlayLayout.less';

class Overlay extends ReactComponent {
  constructor(props, context) {
    super(props, context);

    this.listen = this.listen.bind(this);
    this.state = {
      Component: null,
    };
  }

  listen(location) {
    const { overlay } = parse(location.search);
    if (overlay) {
      const Component = OverlayController.getComponent(overlay);
      this.setState({ Component });
    } else {
      this.setState({ Component: null });
    }
  }

  componentDidMount() {
    const { history, location } = this.props;
    this.unlisten = history.listen(this.listen);
    this.listen(location);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  renderContent() {
    const { Component } = this.state;
    if (Component) {
      return (
        <OverlayLayout key="overlay" className={Component.displayName}>
          <Component />
        </OverlayLayout>
      );
    }
    return null;
  }

  render() {
    return (
      <VelocityTransitionGroup
        className="overlay-container"
        component="div"
        enter={{ animation: 'transition.fadeIn', duration: 350 }}
        leave={{ animation: 'transition.fadeOut', duration: 300 }}
      >
        {this.renderContent()}
      </VelocityTransitionGroup>
    );
  }
}

const OverlayWithRouter = withRouter(Overlay);
export { OverlayWithRouter as Overlay };
