/* global LoadingSpinner:true */
/* global */

import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types'
const {Chromatic} = Package['mdg:chromatic-api'] || {};

const TICK_COUNTS = {small: 16, medium: 24, large: 32};

LoadingSpinner = React.createClass({
  propTypes: {
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    className: PropTypes.string
  },
  render() {
    const {size, className} = this.props;

    return (
      <div className={classnames('loading-spinner', size, className)}>
        <div className="spinner-wheel"></div>
        <div className="spinner-ticks">
          {_.times(TICK_COUNTS[size], (i) => <div key={i} className="spinner-tick"/>)}
        </div>
      </div>
    );
  }
});

if (Chromatic) {
  Chromatic.add(LoadingSpinner, {
    specs: [
      new Chromatic.Spec('small', {props: {size: 'small'}}),
      new Chromatic.Spec('medium', {props: {size: 'medium'}}),
      new Chromatic.Spec('large', {props: {size: 'large'}}),
    ]
  });
}
