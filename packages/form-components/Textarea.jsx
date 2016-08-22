/* global Textarea:true FormTextarea:true */
/* global makeField Utils */

import React from 'react';
import ReactDOM from 'react-dom';
import autosize from 'autosize';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

const Textarea = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    sublabel: React.PropTypes.string,
    limit: React.PropTypes.number,
    icon: React.PropTypes.string
  },
  componentDidMount() {
    autosize(ReactDOM.findDOMNode(this.refs.textarea));
  },
  onChange(event) {
    this.props.onChange(event.target.value);
  },
  render() {
    const {value, error, onChange, label, sublabel, limit, icon, ...other} = this.props;

    let className = 'textarea';

    let errorElement;
    if (error) {
      errorElement = <span className="alert">{error}</span>;
    }

    let subtext = '';
    let subtextClassName = 'subtext-form';
    if (errorElement && !label) {
      subtext = errorElement;
    } else if (limit) {
      const remaining = (limit - value.length);
      subtext = `${remaining} ${Utils.pluralize('character', remaining)} remaining`;
    }

    let labelElement = '';
    if (label) {
      subtextClassName += ' nochrome';
      className += '-label';
      let sublabelElement;
      if (errorElement) {
        sublabelElement = errorElement;
      } else {
        sublabelElement = <span className="alert">{error}</span>;
      }
      labelElement = <label>{label} {sublabelElement}</label>;
    }

    return (
      <div className={className}>
        {labelElement}
        <textarea ref="textarea" {...other} value={value} rows="7" onChange={this.onChange}/>
        <span className={subtextClassName}>{subtext}</span>
      </div>
    );
  }
});

FormTextarea = makeField(Textarea, 'FormTextarea');

if (Chromatic) {
  const noop = function() {};
  Chromatic.add(Textarea, {
    specs: [
      new Chromatic.Spec('basic', {props: {
        placeholder: 'Final frontiers', icon: 'user-alt',
        onChange: noop, value: '', error: null
      }}),
      new Chromatic.Spec('labelled', {props: {
        placeholder: 'Final frontiers', icon: 'user-alt',
        onChange: noop, value: '', error: null, limit: 140,
        label: 'Field', sublabel: 'This is a sublabel'
      }}),
      new Chromatic.Spec('basic-near-limit', {props: {
        placeholder: 'Final frontiers', icon: 'user-alt',
        onChange: noop, value: '12345', error: null, limit: 6
      }}),
      new Chromatic.Spec('basic-at-limit', {props: {
        placeholder: 'Final frontiers', icon: 'user-alt',
        onChange: noop, value: '123456', error: null, limit: 6
      }}),
      new Chromatic.Spec('basic-over-limit', {props: {
        placeholder: 'Final frontiers', icon: 'user-alt',
        onChange: noop, value: '1234567890', error: null, limit: 6
      }}),
      new Chromatic.Spec('basic-error', {props: {
        placeholder: 'Final frontiers', icon: 'user-alt',
        onChange: noop, error: 'Something is wrong', value: '', limit: 140
      }}),
      new Chromatic.Spec('labelled-error', {props: {
        placeholder: 'Final frontiers', icon: 'user-alt',
        onChange: noop, error: 'Something is wrong', value: '', limit: 140,
        label: 'Field', sublabel: 'This is a sublabel'
      }})
    ]
  });
}
