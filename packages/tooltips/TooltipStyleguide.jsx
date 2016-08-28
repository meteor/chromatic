/* global WithTooltip */

import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

const TooltipStyleguide = React.createClass({
  render() {
    return (
      <div>
        <WithTooltip tooltip={
            <div className="message">Here is my tooltip content</div>
          }>
          <a className="btn tertiary">Message</a>
        </WithTooltip>

        <WithTooltip tooltip={
            <div className="message">Here is my tooltip content</div>
          } mode={'manual'} show={true}>
          <a className="btn tertiary">Manually shown message</a>
        </WithTooltip>

        <WithTooltip tooltip={
            <div className="message">An SSL endpoint allows you to secure your site. If you are interested in testing lorem ipsum dolor. <a className="link secondary">Learn More</a>
            </div>
          }>
          <a className="btn tertiary">Message with link</a>
        </WithTooltip>

        <WithTooltip tooltip={
          <div className="activity-item">
            <span className="icon-sync"></span>
            <div className="meta">
              <span className="description">Trying to reconnect, one moment please.</span>
            </div>
          </div>
          }>
          <a className="btn tertiary">Activity</a>
        </WithTooltip>

        <WithTooltip tooltip={
          <div className="activity-item">
            <span className="icon-download"></span>
            <div className="meta">
              <div className="description"><em>Zoltan</em> stopped <em>new-york.hostname.com</em> in aws-us-east.</div>
            </div>
          </div>
          }>
          <a className="btn tertiary">Activity expanded</a>
        </WithTooltip>

        <WithTooltip tooltip={
          <div className="list small">
            <div><a className="monospace">ckpd</a><span className="icon-proceed"></span></div>
            <div><a className="monospace">ckpd</a><span className="icon-proceed"></span></div>
            <div><a className="monospace">ckpd</a><span className="icon-proceed"></span></div>
          </div>
          }>
          <a className="btn tertiary">List small monospace</a>
        </WithTooltip>

        <WithTooltip tag={React.DOM.div} mode="click" tooltip={
          <div className="list small">
            <div><a className="truncate">Meteor Development Group</a> <span className="icon-proceed"></span></div>
            <div><a className="truncate">Percolate Studio</a> <span className="icon-proceed"></span></div>
            <div><a className="truncate">Organization</a> <span className="icon-proceed"></span></div>
          </div>
          }>
          <a className="btn tertiary">List small</a>
        </WithTooltip>
      </div>
    );
  }
});

if (Chromatic) {
  Chromatic.add(TooltipStyleguide);
}
