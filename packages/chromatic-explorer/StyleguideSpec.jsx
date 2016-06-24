/* global StyleguideSpec:true */
/* global React */
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};
const {StubCollections} = Package['stub-collections'] || {};

StyleguideSpec = React.createClass({
  propTypes: {
    entry: React.PropTypes.instanceOf(Chromatic.Entry),
    component: React.PropTypes.instanceOf(React.Component.constructor),
    specName: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    this.showControls();
  },
  componentWillReceiveProps() {
    this.teardownSpec();
    this.showControls();
  },
  componentWillUnmount() {
    this.teardownSpec();
    this.teardownControls();
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
  showControls() {
    if(!this.props.showControls)
      return
    const entry = this.entry();
    this.newProps = {}
    if(window.parent && window.parent.ChromaticControls)
      this.controls = window.parent.ChromaticControls.show(this.refComponent, (obj) => {
        this.newProps = obj
        this.forceUpdate()
      })
  },
  teardownControls() {
    if(this.controls)
      this.controls.remove()
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

    if(this.newProps)
      for(i in this.newProps)
        props[i] = this.newProps[i]

    if (entry) {
      return (
        <entry.component {...props} ref={(ref) => this.refComponent = ref} />
      );
    }
    return null;
  }
});
