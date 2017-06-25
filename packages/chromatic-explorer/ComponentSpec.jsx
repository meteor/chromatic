/* global ComponentSpec:true */
/* global StyleguideSpec FlowRouter */

import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

ComponentSpec = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const entryName = FlowRouter.getParam('entryName');
    const specName = FlowRouter.getParam('specName');
    const entry = Chromatic.entry(entryName);
    return {
      entry,
      specName
    };
  },
  componentWillMount() {
    $('body').addClass('styleguide-white fill-iframe');
  },
  render() {
    const {entry, specName} = this.data;
    let specNames = [];

    if (!entry) {
      return null;
    }

    const makeSpec = (name) => {
      return (
        <div key={`spec-${name}`} className="spec">
          <StyleguideSpec entry={entry} specName={name}/>
        </div>
      );
    };

    if (specName === 'all') {
      specNames = entry.specs.map(s => s.name);
    } else {
      specNames = [specName];
    }

    return (
      <div className="styleguide spec-container">
        {specNames.map(makeSpec)}
      </div>
    );
  }
});
