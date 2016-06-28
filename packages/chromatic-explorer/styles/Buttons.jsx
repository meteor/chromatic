/* global Buttons:true */
/* global React StyleguideSpec */
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Buttons = React.createClass({
  render() {
    return (
      <div className="section-content">
        <div className="column">
          <a className="btn primary">Primary</a>
          <a className="btn secondary">Secondary</a>
          <a className="btn tertiary">Tertiary</a>
          <a className="btn primary round">Primary round</a>
          <a className="btn primary" disabled={true}>Disabled</a>
          <StyleguideSpec entry={Chromatic.entry('ProgressButton')}
            specName="rest"/>
          <StyleguideSpec entry={Chromatic.entry('LoadingButton')}
            specName="rest"/>
          <div className="pagination">
            <a className="btn paginated"><span className="icon-arrow-left"></span></a>
            <a className="btn paginated"><span className="icon-arrow-right"></span></a>
            <span className="count">1-20 <span className="preposition">of</span> 40</span>
          </div>
        </div>

        <div className="column">
          <a className="btn primary small">Primary small</a>
          <a className="btn secondary small">Secondary small</a>
          <a className="btn tertiary small">Tertiary small</a>
          <a className="btn primary small round">Primary small round</a>
          <a className="btn ancillary small round">Manage</a>
          <div className="btn-group toggle">
            <a className="btn ancillary small active">1h</a>
            <a className="btn ancillary small">24h</a>
            <a className="btn ancillary small">7d</a>
            <a className="btn ancillary small">30d</a>
          </div>

          <div style={{ background: '#333', padding: '1.5em' }}>
            <a className="btn inverse small round circle"><span className="icon-bell"></span></a>
            <a className="btn inverse small round"><span className="icon-comment"></span>&nbsp;Get Support</a>
          </div>
        </div>
      </div>
    );
  }
});

Chromatic.addStyle('button', ['btn', 'primary', 'secondary', 'tertiary', 'round', 'paginated', 'small', 'ancillary', 'active', 'inverse', 'circle'])

