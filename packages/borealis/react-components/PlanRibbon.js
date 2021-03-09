import React from 'react';

PlanRibbon = function({ children }) {
  let className = 'tertiary';
  if (children.toLowerCase() === 'professional') {
    className = 'primary';
  } else if (children.toLowerCase() === 'essentials') {
    className = 'secondary';
  }
  return <div className={`ribbon ${className}`}>{children}</div>;
};
