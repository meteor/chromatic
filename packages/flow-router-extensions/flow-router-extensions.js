/* global FlowRouter */
import React from 'react';
// TODO -- should I just extend flow router here?

const ReactClassPrototypePrototype =
  (Object.getPrototypeOf(Object.getPrototypeOf(new (React.createClass({ render() {} }))())));

const ReactClassPrototype =
  Object.getPrototypeOf(React.createClass({ render() {} })); // eslint-disable-line

export function isReactClassOrComponent(obj) {
  return React.Component.isPrototypeOf(obj)
    || ReactClassPrototype.isPrototypeOf(obj)
    || ReactClassPrototypePrototype.isPrototypeOf(obj);
}

FlowRouter.getRouteHandler = function() {
  // Semantically it seems like I should use .watchPathChange() here, but
  //   FlowRouter invalidates param watchers before path watchers:
  //   https://github.com/kadirahq/flow-router/blob/master/client/route.js#L85-L86
  //
  // Not sure why (investigate), but we need to make sure the route handler changes
  //   before any components are re-rendered.
  //
  // See https://github.com/meteor/galaxy-server/issues/367 for instance.
  FlowRouter.getParam('foobar');

  const current = FlowRouter.current();
  const options = current.route.options;

  if (typeof options.getComponent === "function") {
    // Allow the component to be loaded lazily.
    options.component = options.getComponent();
  }

  return options.component;
};

const oldRoute = FlowRouter.route.bind(FlowRouter);
FlowRouter.route = (path, options) => {
  // a react component
  const componentName = isReactClassOrComponent(options) && (options.name || options.displayName);
  if (componentName) {
    return oldRoute(path, {name: componentName, component: options});
  }

  return oldRoute(path, options);
};
