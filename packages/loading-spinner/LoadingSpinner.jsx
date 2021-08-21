/* global LoadingSpinner:true */
/* global */

import classnames from 'classnames';
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

const TICK_COUNTS = {small: 16, medium: 24, large: 32};

// propTypes: {
//   size: React.PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
//     className: React.PropTypes.string
// },

LoadingSpinner = ({size, className}) => (
  <div className={classnames('loading-spinner', size, className)}>
    <div className="spinner-wheel" />
    <div className="spinner-ticks">
      {Array.from({length: TICK_COUNTS[size]}, (_, i) => <div key={i} className="spinner-tick"/>)}
    </div>
  </div>
);

if (Chromatic) {
  Chromatic.add(LoadingSpinner, {
    specs: [
      new Chromatic.Spec('small', {props: {size: 'small'}}),
      new Chromatic.Spec('medium', {props: {size: 'medium'}}),
      new Chromatic.Spec('large', {props: {size: 'large'}}),
    ]
  });
}
