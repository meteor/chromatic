/* global Color:true */
/* global React */
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Color = React.createClass({
  render() {
    return (
      <div className="section-content">
        <div className="column">
          <h6>Primary</h6>
          <div className="subcolumn">
            <div className="color-primary"></div>
            <div className="color-secondary"></div>
            <div className="color-tertiary"></div>
            <div className="color-complementary"></div>
            <div className="color-ancillary"></div>
          </div>
        </div>

        <div className="column">
          <h6>Accent</h6>
          <div className="subcolumn">
            <div className="color-accent-coolest"></div>
            <div className="color-accent-cooler"></div>
            <div className="color-accent-cool"></div>
            <div className="color-accent-warm"></div>
            <div className="color-accent-warmer"></div>
            <div className="color-accent-warmest"></div>
          </div>
        </div>

        <hr/>

        <div className="column">
          <h6>Monochrome</h6>
          <div className="subcolumn">
            <div className="color-lightest"></div>
            <div className="color-lighter"></div>
            <div className="color-light"></div>
            <div className="color-mediumlight"></div>
            <div className="color-medium"></div>
            <div className="color-mediumdark"></div>
            <div className="color-dark"></div>
            <div className="color-darker"></div>
            <div className="color-darkest"></div>
          </div>
        </div>

        <div className="column">
          <h6>Validation</h6>
          <div className="subcolumn">
            <div className="color-positive"></div>
            <div className="color-negative"></div>
            <div className="color-neutral"></div>
          </div>

          <br/>

          <h6>Lifecycle</h6>
          <div className="subcolumn">
            <div className="color-running"></div>
            <div className="color-crashed"></div>
            <div className="color-degraded"></div>
            <div className="color-stopped"></div>
          </div>

          <br/>

          <h6>Third-party</h6>
          <div className="subcolumn">
            <div className="color-facebook"></div>
            <div className="color-google"></div>
            <div className="color-twitter"></div>
          </div>
        </div>
      </div>
    );
  }
});

Chromatic.addClass('color', ['color-primary', 'color-secondary', 'color-tertiary', 'color-complementary', 'color-ancillary', 'color-accent-coolest', 'color-accent-cooler','color-accent-cool', 'color-accent-warm', 'color-accent-warmer', 'color-accent-warmest', 'color-lightest', 'color-lighter', 'color-light', 'color-mediumlight', 'color-medium', 'color-mediumdark', 'color-dark', 'color-darker', 'color-darkest', 'color-positive', 'color-negative', 'color-neutral', 'color-running', 'color-crashed', 'color-degraded', 'color-stopped', 'color-facebook', 'color-google', 'color-twitter'])
