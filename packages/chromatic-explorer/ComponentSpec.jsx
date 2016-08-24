/* global ComponentSpec:true */
/* global StyleguideSpec FlowRouter */

import classnames from 'classnames';
import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

ComponentSpec = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      entryName: FlowRouter.getParam('entryName'),
      specName: FlowRouter.getParam('specName')
    };
  },
  componentWillMount() {
    $('body').addClass('styleguide-white fill-iframe');
  },
  render() {
    const {entryName, specName} = this.data;
    const entry = Chromatic.entry(entryName);
    let specNames = [];

    const makeSpec = (name) => {
      return (
        <div key={`spec-${name}`} className="spec">
          <StyleguideSpec entry={entry} specName={name}/>
        </div>
      );
    }

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
