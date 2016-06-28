/* global ComponentSpec:true */
/* global React StyleguideSpec ReactMeteorData FlowRouter classnames */
import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
const { Chromatic } = Package['mdg:chromatic-api'] || {};

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
    let meta = {type: 'component'}

    if (specName === 'all') {
      let instances = [];
      meta.spec = 'all';
      instances = entry.specs.map(s => {
        return (
          <div key={s.name}>
            <StyleguideSpec entry={entry} specName={s.name} meta={meta}/>
          </div>
        );
      });
      return (
        <div className="styleguide spec-container">{instances}</div>
      );
    }
    return (
      <div className="styleguide spec-container">
        <StyleguideSpec entry={entry} specName={specName} meta={meta}/>
      </div>
    );
  }
});
