/* global OverlayController:true */
/* global FlowRouter */

// This is essentially equivalent to the Router.
class OverlayRouter {
  constructor() {
    this._routes = {};
  }
  route(component) {
    this._routes[component.displayName] = component;
  }
  open(name, params) {
    // NOTE: workaround for https://github.com/meteor/react-packages/issues/136
    //
    // Routing in an event handler caused an issue where opening the overlay triggered
    //   GalaxyLayout's getMeteorData function to run strangely and re-subscribe to the
    //   to the user subscription and unnecessarily hit a loading screen.
    Meteor.setTimeout(() => {
      const queryParams = {overlay: name, overlayParams: params};
      FlowRouter.setQueryParams(queryParams);
    });
  }
  close() {
    Meteor.setTimeout(() => {
      const unsetQueryParams = {
        overlay: null,
        overlayParams: null
      };
      FlowRouter.setQueryParams(unsetQueryParams);
    });
  }
  getComponent() {
    const name = FlowRouter.getQueryParam('overlay');
    return this._routes[name];
  }
}

OverlayController = new OverlayRouter();
