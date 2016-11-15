/* global OverlayController:true */
/* global FlowRouter */

import assert from "assert";

// This is essentially equivalent to the Router.
class OverlayRouter {
  constructor() {
    this._routeGetters = Object.create(null);
  }

  route(name, getter) {
    if (typeof name === "string") {
      assert.strictEqual(typeof getter, "function");
    } else {
      const component = name;
      name = component.displayName;
      assert.strictEqual(typeof name, "string");
      assert.strictEqual(typeof component, "function");
      getter = () => component;
    }

    this._routeGetters[name] = getter;
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
    const getter = this._routeGetters[name];
    const component = getter();
    assert.strictEqual(component.displayName, name);
    return component;
  }
}

OverlayController = new OverlayRouter();
