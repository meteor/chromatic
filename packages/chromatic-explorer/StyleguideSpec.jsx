/* global StyleguideSpec:true */
/* global React */
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};
const {StubCollections} = Package['stub-collections'] || {};

StyleguideSpec = React.createClass({
  propTypes: {
    entry: React.PropTypes.instanceOf(Chromatic.Entry),
    component: React.PropTypes.instanceOf(React.Component.constructor),
    specName: React.PropTypes.string.isRequired,
    meta: React.PropTypes.object
  },
  componentDidMount() {
    this.loadPlugins();
  },
  componentWillReceiveProps() {
    this.teardownSpec();
    this.loadPlugins();
  },
  componentWillUnmount() {
    this.teardownSpec();
    this.teardownPlugins();
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
  loadPlugins() {
    const entry = this.entry();
    const spec = this.spec();
    _.each(Chromatic.allPlugins(), (p) => {
      p.load(this, this.refComponent, entry, spec, this.props.meta)
    });
  },
  teardownPlugins() {
    _.each(Chromatic.allPlugins(), (p) => {
      p.remove();
    });
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

    _.each(Chromatic.allPlugins(), (p) => {
      if(p.props)
        _.each(p.props, (prop, i) => {
          props[i] = p.props[i];
        });
    });

    if (entry) {
      return (
        <entry.component {...props} ref={(ref) => this.refComponent = ref} />
      );
    }
    return null;
  }
});
