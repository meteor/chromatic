/* global StyleguideNotFound:true */
/* global ChromaticLayout */

import React from 'react';

StyleguideNotFound = React.createClass({
  render() {
    return (
      <ChromaticLayout>
        <div className="styleguide-content">
          <h1 style={{color: 'white'}} className="title-section">COMPONENT NOT FOUND</h1>
        </div>
      </ChromaticLayout>
    );
  }
});
