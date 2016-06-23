/* global NotFound:true */
/* global React Layout */

import React from 'react';

NotFound = React.createClass({
  render() {
    return (
      <div className="layout-intermediate transition-layout">
        <div className="center">
          <div className="title-page">The content you were looking for could not be found</div>
          <a href="/" className="btn primary round">Go Home</a>
        </div>
      </div>
    );
  }
});
