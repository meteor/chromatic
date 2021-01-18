/* global LoadingSpinner:true */
/* global */

import classnames from 'classnames';
import React from 'react';
import times from 'lodash.times';

const TICK_COUNTS = {small: 16, medium: 24, large: 32};

const Component = ({size, className}) => {
  return  (
    <div className={classnames('loading-spinner', size, className)}>
      <div className="spinner-wheel"></div>
      <div className="spinner-ticks">
        {times(TICK_COUNTS[size], (i) => <div key={i} className="spinner-tick"/>)}
      </div>
    </div>
  )
}

LoadingSpinner = React.createClass
  // React 15 and below
  ? React.createClass({
    render() {
      const {size, className} = this.props;

      return (
        <Component size={size} className={className}/>
      );
    }
  })
  // React 16 and above
  : ({size, className}) => <Component  size={size} className={className}/>;

