/* global LoadingButton:true */
import React from 'react';

const { Chromatic } = Package['mdg:chromatic-api'] || {};

export const LoadingButton = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string,
    restText: React.PropTypes.node,
    activeText: React.PropTypes.node
  },
  render() {
    const {active, disabled, restText, className, activeText, ...other} = this.props;
    let classNames = `btn loading ${className || ''}`;
    if (active) {
      classNames += ' loading-active';
    }
    return (
      <button className={classNames} {...other} disabled={disabled || active}>
        <span className="rest">{restText}</span>
        <span className="active">{activeText || 'Loading'}</span>
        <span className="loading-bar"></span>
      </button>
    );
  }
});

if (Chromatic) {
  Chromatic.add(LoadingButton, {
    specs: [
      new Chromatic.Spec('rest', {props: {
        active: false,
        className: 'primary',
        restText: 'Loading'
      }}),
      new Chromatic.Spec('active', {props: {
        active: true,
        className: 'primary',
        restText: 'Loading',
        activeText: 'One Moment'
      }}),
    ]
  });
}
