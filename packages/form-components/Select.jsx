/* global Select:true FormSelect:true */
/* global makeField */

import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

Select = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    children: React.PropTypes.node,
    label: React.PropTypes.string
  },
  onChange(event) {
    this.props.onChange(event.target.value);
  },
  render() {
    const {className, icon, value, error, onChange, label, ...other} = this.props;
    const classNames = `select ${className || ''} ${icon ? 'select-symbol' : ''}`;
    const select = (
      <span className={classNames} data-error={error}>
        <select {...other} value={value} onChange={this.onChange}>
          {this.props.children}
        </select>
        <span className={`icon-${icon}`}></span>
      </span>
    );

    if (!label) {
      return select;
    }
    return (
      <div className="select-label">
        <label>{label}</label>
        {select}
      </div>
    );
  }
});

FormSelect = makeField(Select, 'FormSelect');

if (Chromatic) {
  const noop = function() {};
  const children = ([
    <option value="1" key="yuri">Yuri Gagarin</option>,
    <option value="2" key="buzz">Buzz Aldrin</option>
  ]);
  Chromatic.add(Select, {
    specs: [
      new Chromatic.Spec('basic', {props: {
        onChange: noop, value: '', error: null,
        children
      }}),
      new Chromatic.Spec('basic-symbol', {props: {
        icon: 'user-alt', onChange: noop, value: '', error: null,
        children
      }}),
      new Chromatic.Spec('basic-label', {props: {
        icon: 'user-alt', onChange: noop, value: '', error: null, label: 'This has a label:',
        children
      }}),
      new Chromatic.Spec('inverse', {props: {
        className: 'inverse', onChange: noop, value: '', error: null,
        children
      }}),
      new Chromatic.Spec('nochrome', {props: {
        className: 'nochrome', onChange: noop, value: '', error: null,
        children
      }}),
      new Chromatic.Spec('error', {props: {
        icon: 'user-alt', onChange: noop, value: '2', error: 'Select one astronaut',
        children
      }})
    ]
  });
}
