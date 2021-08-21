/* global ProgressButton:true */

import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

// propTypes: {
//   active: React.PropTypes.bool.isRequired,
//     progress: React.PropTypes.number,
//     className: React.PropTypes.string,
//     restText: React.PropTypes.node,
//     activeText: React.PropTypes.node
// },

export const ProgressButton = ({active, progress = 0, className = '', restText, activeText, ...other}) => {
  let classNames = `btn progress ${className}`;
  if (active) {
    classNames += ' progress-active';
  }

  const transform = 'translateX(-' + ((1 - progress) * 100) + '%)';

  return (
    <a className={classNames} {...other} disabled={active}>
      <span className="rest">{restText}</span>
      <span className="active">{activeText || 'In progress'}</span>
      <span className="progress-bar" style={{transform}}/>
    </a>
  );
};

if (Chromatic) {
  Chromatic.add(ProgressButton, {
    specs: [
      new Chromatic.Spec('rest', {props: {
        active: false,
        className: 'secondary',
        restText: 'Progress'
      }}),
      new Chromatic.Spec('active', {props: {
        active: true,
        progress: 0.3,
        className: 'secondary',
        restText: 'Progress',
        activeText: 'One Moment'
      }})
    ]
  });
}
