/* global FormattedInput:true FormFormattedInput:true */
/* global makeField */

import React from 'react';
import ReactMaskedInput from 'react-input-mask';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

FormattedInput = React.createClass({
  propTypes: {
    mask: React.PropTypes.string,
    size: React.PropTypes.number,
    placeholderChar: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    sublabel: React.PropTypes.string,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    sibling: React.PropTypes.element,
  },
  getDefaultProps() {
    return {
      placeholderChar: ' ',
      size: 16
    };
  },
  onChange(event) {
    this.props.onChange(event.target.value);
  },
  render() {
    let {className} = this.props;
    const {value, error, onChange, label, sublabel, icon, sibling, placeholderChar, ...other}
      = this.props;

    const input = <ReactMaskedInput {...other} value={value} onChange={this.onChange}/>;

    // Non-inline input
    if (label) {
      let sublabelElement;
      if (error) {
        sublabelElement = <span className="alert">{error}</span>;
      } else {
        sublabelElement = <span className="sublabel">{sublabel}</span>;
      }
      return (
        <div className="input-label">
          <label>{label} {sublabelElement}</label>
          {input}
        </div>
      );
    }
    // Else inline input
    if (icon) {
      className = 'input-symbol ' + (className || '');
    }
    return (
      <div className={className} data-error={error}>
        {input}
        {icon && <span className={`icon-${icon}`}></span>}
        {sibling}
      </div>
    );
  }
});

FormFormattedInput = makeField(FormattedInput, 'FormMaskedInput');

if (Chromatic) {
  const noop = function() {};
  Chromatic.add(FormattedInput, {
    specs: [
      new Chromatic.Spec('credit card', {props: {
        type: 'text', placeholder: 'xxxx-xxxx-xxxx-xxxx', icon: 'credit',
        mask: '9999 9999 9999 9999', size: 20, maskChar: '',
        onChange: noop, value: '', error: null
      }}),
      new Chromatic.Spec('expiration', {props: {
        type: 'text', placeholder: 'MM/YY', icon: 'calendar',
        mask: '99/99', size: 5, maskChar: '',
        onChange: noop, value: ''
      }})
    ]
  });
}
