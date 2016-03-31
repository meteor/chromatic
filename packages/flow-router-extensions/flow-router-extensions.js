/* global FlowRouter */

// TODO -- should I just extend flow router here?

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

  var current = FlowRouter.current();
  return current.route.options.component;
};

const oldRoute = FlowRouter.route.bind(FlowRouter);
FlowRouter.route = (path, options) => {
  // a react component
  if (options && options.displayName) {
    return oldRoute(path, {name: options.displayName, component: options});
  }

  return oldRoute(path, options);
};
