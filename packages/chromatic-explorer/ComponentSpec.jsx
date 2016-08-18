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
    $('body').addClass('styleguide-white');
  },
  render() {
    const {entryName, specName} = this.data;
    const entry = Chromatic.entry(entryName);

    if (specName === 'all') {
      let instances = [];
      instances = entry.specs.map(s => {
        return (
          <div key={s.name}>
            <StyleguideSpec entry={entry} specName={s.name}/>
          </div>
        );
      });
      return (
        <div className="styleguide spec-container">{instances}</div>
      );
    }
    return (
      <div className="styleguide spec-container">
        <StyleguideSpec entry={entry} specName={specName}/>
      </div>
    );
  }
});
