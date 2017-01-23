/* global Callout:true */

import classnames from 'classnames';
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

export const Callout = React.createClass({

  propTypes: {
    className: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
  },

  render() {
    const {className, children} = this.props,
      calloutClassName = classnames('callout', className);

    return (
      <div className={calloutClassName}>
        {children}
      </div>
    );
  }
});

if (Chromatic) {
  Chromatic.add(Callout, {
    specs: [
      new Chromatic.Spec('primary', {props: {
        className: 'primary',
        children: 'Generic primay callout'
      }}),
      new Chromatic.Spec('primary-with-link', {props: {
        className: 'primary',
        children: <span>Linky <a className="link" href="https://www.meteor.com/">primary</a> callout</span>
      }}),
      new Chromatic.Spec('secondary', {props: {
        className: 'secondary',
        children: 'Generic secondary callout'
      }}),
      new Chromatic.Spec('secondary-with-link', {props: {
        className: 'secondary',
        children: <span>Linky <a className="link" href="https://www.meteor.com/">secondary</a> callout</span>
      }}),
      new Chromatic.Spec('alert', {props: {
        className: 'alert',
        children: 'Generic alert callout'
      }}),
      new Chromatic.Spec('alert-with-link', {props: {
        className: 'alert',
        children: <span>Linky <a className="link" href="https://www.meteor.com/">alert</a> callout</span>
      }})
    ]
  });
}
