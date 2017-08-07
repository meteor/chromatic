import assert from 'assert';

/*
 * This is essentially equivalent to the Router.
 *
 * Opening + Closing the overlay should be done through changing the URL params.
 * This is out of the hands of the Overlay router itself, it just listens.
 */
class OverlayRouter {
  constructor() {
    this._routeGetters = Object.create(null);
  }

  route(name, getter) {
    if (typeof name === 'string') {
      assert.strictEqual(typeof getter, 'function');
    } else {
      const component = name;
      name = component.displayName; // eslint-disable-line
      assert.strictEqual(typeof name, 'string');
      assert.strictEqual(typeof component, 'function');
      getter = () => component; // eslint-disable-line
    }

    this._routeGetters[name] = getter;
  }

  getComponent(name) {
    const getter = this._routeGetters[name];
    if (getter) {
      const component = getter();
      assert.strictEqual(component.displayName, name);
      return component;
    }

    return null;
  }
}

const OverlayController = new OverlayRouter();
export { OverlayController };
