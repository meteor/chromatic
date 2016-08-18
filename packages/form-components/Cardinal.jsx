/* global Cardinal:true */
/* global WithTooltip  numeral */

import classnames from 'classnames';
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

Cardinal = React.createClass({
  propTypes: {
    // TODO: rename to "value" to allow destructuring assignment when using the numeral global
    numeral: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    // TODO: rename this to "symbol" or something more intuitive
    half: React.PropTypes.string,
    name: React.PropTypes.string,
    tooltip: React.PropTypes.node,
    scrollSelector: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    format: React.PropTypes.string
  },
  onClick() {
    const {scrollSelector} = this.props;
    if (scrollSelector) {
      // TODO -- make this smooth
      $(scrollSelector).get(0).scrollIntoView();
    }
  },
  render() {
    const {half, name, tooltip, scrollSelector, children, className, format}
      = this.props;
    const value = this.props.numeral;
    let formattedValue = '--';
    if (!_.isUndefined(value)) {
      if (_.isString(value)) {
        formattedValue = value;
      } else if (!isNaN(value) && isFinite(value)) {
        formattedValue = format ? numeral(value).format(format) : value;
      }
    }

    const isStatic = !(tooltip || scrollSelector);
    const cardinal = (
      <div className={classnames('cardinal', className, {static: isStatic})}
        onClick={this.onClick}>
        <div className="cardinal-number">
          <span className="cardinal-numeral">{formattedValue}</span>
          {half && <span className="cardinal-half">{half}</span>}
        </div>
        <div className="cardinal-name">{name}</div>
        {children}
      </div>
    );

    if (tooltip) {
      return (
        <WithTooltip tooltip={tooltip}>
          {cardinal}
        </WithTooltip>
      );
    }

    return cardinal;
  }
});

if (Chromatic) {
  Chromatic.add(Cardinal, {
    specs: [
      new Chromatic.Spec('simple', {props: {
        numeral: 276,
        name: 'Containers'
      }}),
      new Chromatic.Spec('with-half', {props: {
        numeral: 27,
        half: '%',
        name: 'CPU'
      }}),
      new Chromatic.Spec('with-children-small', {props: {
        numeral: 27,
        half: '%',
        name: 'CPU',
        className: 'small',
        children: <div className="graph-spark"></div>
      }}),
      new Chromatic.Spec('with-tooltip', {props: {
        numeral: 27,
        half: '%',
        name: 'CPU',
        tooltip: <div>My tooltip!</div>
      }}),
      new Chromatic.Spec('with-scroll', {props: {
        numeral: 27,
        half: '%',
        name: 'CPU',
        scrollSelector: 'body'
      }})
    ]
  });
}
