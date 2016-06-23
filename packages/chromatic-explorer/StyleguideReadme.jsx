/* global StyleguideReadme:true */
/* global React */
import React from 'react';

StyleguideReadme = React.createClass({
  render() {
    return (
      <div className="styleguide-readme">
        <div className="section">
          <div className="section-heading">
            <div className="action-group">
              <div className="title-section">Getting Started</div>
            </div>
          </div>
          <div className="section-content">
            <p className="font-s2">Declare Chromatic at the top of your component code</p>
            <pre>{`
      // Meteor.1.3
      import { Chromatic } from 'meteor/mdg:chromatic';
      // Meteor 1.2
      const { Chromatic } = Package['mdg:chromatic-api'] || {};
                  `}</pre>
            <p className="font-s2">Build your component</p>
            <pre>{`
      ComponentName = React.createClass({
        // code
      });`}
            </pre>
            <div className="font-s2">Register your component and add specs</div>
            <pre>{`
      if (Chromatic) {
        Chromatic.add(ComponentName, {
          specs: [
            new Chromatic.Spec('specName1', {props:
              {
                // props used by your component
              }
            }),
            new Chromatic.Spec('specName2', {props:
              {
                // props used by your component
              }
            })
          ]
        });
      }`}
            </pre>
            <div className="font-s2">Example Code</div>
            <pre>{`
      import { Chromatic } from 'meteor/mdg:chromatic';

      ColorGrid = React.createClass({
        propTypes: {
          size: React.PropTypes.number.isRequired
        },
        render() {
          // code
        }
      });

      if (Chromatic) {
        Chromatic.add(ColorGrid, {
          specs: [
            new Chromatic.Spec('default', {props:
              {
                size: 8
              }
            })
          ]
        });
      }`}
            </pre>
            <div className="font-s2">If all goes well, your component will appear in the sidebar and you'll be able to see it in action!</div>
          </div>
        </div>
      </div>
    );
  }
});
