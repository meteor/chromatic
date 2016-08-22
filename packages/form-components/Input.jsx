/* global Input:true FormInput:true */
/* global makeField */

import React from 'react';
import ReactDOM from 'react-dom';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

const Input = React.createClass({
  propTypes: {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    sublabel: React.PropTypes.string,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    autofocus: React.PropTypes.bool
  },
  onChange(event) {
    this.props.onChange(event.target.value);
  },
  componentDidMount() {
    if (this.props.autofocus) {
      ReactDOM.findDOMNode(this.refs.input).focus();
    }
  },
  render() {
    let {className} = this.props;
    const {value, error, onChange, label, sublabel, icon, autofocus, ...other} = this.props;

    const input = <input ref="input" {...other} value={value} onChange={this.onChange}/>;

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
      </div>
    );
  }
});

FormInput = makeField(Input, 'FormInput');

if (Chromatic) {
  const noop = function() {};
  Chromatic.add(Input, {
    specs: [
      new Chromatic.Spec('basic', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'user-alt',
        onChange: noop, value: '', error: null
      }}),
      new Chromatic.Spec('basic-error', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'user-alt',
        onChange: noop, error: 'Something is wrong', value: ''
      }}),
      new Chromatic.Spec('labelled', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'user-alt',
        onChange: noop, value: '', error: null,
        label: 'Field', sublabel: 'This is sublabel'
      }}),
      new Chromatic.Spec('labelled-error', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'user-alt',
        onChange: noop, error: 'Something is wrong', value: '',
        label: 'Field', sublabel: 'This is sublabel'
      }}),
      new Chromatic.Spec('right', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'proceed',
        onChange: noop, className: 'right', value: '', error: null
      }}),
      new Chromatic.Spec('right-error', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'proceed',
        onChange: noop, className: 'right', error: 'Something is wrong', value: ''
      }}),
      new Chromatic.Spec('secondary', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'user-alt', className: 'secondary',
        onChange: noop, value: '', error: null
      }}),
      new Chromatic.Spec('secondary-error', {props: {
        type: 'text', placeholder: 'input-symbol', icon: 'user-alt', className: 'secondary',
        onChange: noop, error: 'Something is wrong', value: ''
      }})
    ]
  });
}
