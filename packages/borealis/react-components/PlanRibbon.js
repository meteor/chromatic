import React from 'react';

PlanRibbon = function({ children }) {
  let className = 'tertiary';
  if (children === 'professional') {
    className = 'primary';
    // eslint-disable-next-line no-param-reassign
    children = 'PRO';
  } else if (children === 'essentials') {
    className = 'secondary';
  }
  return <div className={`ribbon ${className}`}>{children}</div>;
};
