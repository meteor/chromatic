/* global StyleguideSpec:true */
/* global React */

const {Chromatic} = Package['chromatic-api'] || {};
const {StubCollections} = Package['stub-collections'] || {};

StyleguideSpec = React.createClass({
  propTypes: {
    entry: React.PropTypes.instanceOf(Chromatic.Entry),
    component: React.PropTypes.instanceOf(React.Component.constructor),
    specName: React.PropTypes.string.isRequired
  },
  componentWillReceiveProps() {
    this.teardownSpec();
  },
  componentWillUnmount() {
    this.teardownSpec();
  },
  teardownSpec() {
    const spec = this.spec();
    if (spec && spec.teardown) {
      spec.teardown();
    }
    if (StubCollections) StubCollections.restore();
  },
  entry() {
    const {entry, component, specName} = this.props;
    return entry || Chromatic.entry(component && component.displayName || specName);
  },
  spec() {
    const {specName} = this.props;
    const entry = this.entry();
    let spec = entry && _.find(entry.specs, s => s.name === specName);
    if (!spec && entry && entry.specs.length > 0) {
      spec = entry().specs[0];
    }
    return spec;
  },
  render() {
    const entry = this.entry();
    const spec = this.spec();
    let props = {};
    if (StubCollections) StubCollections.stub();

    if (spec) {
      if (spec.setup) {
        spec.setup();
      }
      props = _.isFunction(spec.props) ? spec.props() : spec.props;
    }

    if (entry) {
      return (
        <entry.component {...props} />
      );
    }
    return null;
  }
});
