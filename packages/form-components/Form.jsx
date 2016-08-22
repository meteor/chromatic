/* global Form:true */
/* global ValidationError */

import React from 'react';

const recontextChildren = function(children) {
  // NOTE: This is a bit of a hack to make this element the owner (as well as the parent) of
  //   the child element. See https://github.com/facebook/react/issues/3392#issuecomment-78772905
  // In React 0.14 we won't need to do this any more, but this works for now.
  return React.Children.map(children, (child) => {
    if (_.isString(child)) {
      return child;
    }
    if (child.props && child.props.children) {
      return React.cloneElement(child, {}, recontextChildren(child.props.children));
    }
    return React.cloneElement(child);
  });
};

Form = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onSubmitError: React.PropTypes.func,
    children: React.PropTypes.node,
    // Set initial if you don't want to override the form state later
    defaults: React.PropTypes.object,
    values: React.PropTypes.object,
    errors: React.PropTypes.object
  },
  childContextTypes: {
    // TODO wrap these up into a "form" object?
    getValue: React.PropTypes.func.isRequired,
    setValue: React.PropTypes.func.isRequired,
    getError: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      defaults: {}
    };
  },
  getInitialState() {
    return {
      values: this.props.values || {},
      errors: this.props.errors || {},
      submitting: false
    };
  },
  getChildContext() {
    return {
      getValue: this.getValue,
      setValue: this.setValue,
      getError: this.getError,
      submitting: this.state.submitting
    };
  },
  componentWillReceiveProps(newProps) {
    if (newProps.values) {
      this.setState({values: newProps.values});
    }
    if (newProps.errors) {
      this.setState({errors: newProps.errors});
    }
  },
  onError(error) {
    if ((error instanceof ValidationError || error.error === 'validation-error') && error.details) {
      let errorMap = {};
      // Transform ValidationError with details array to {fieldName: errorMessage} map.
      // Note: this is somewhat of a kludge but for now we just support 1 error per name entry
      // in the form.
      if (_.isArray(error.details)) {
        errorMap = _.reduce(error.details, (m, e) => {
          m[e.name] = e[name];
          return m;
        });
      } else if (_.isObject(error.details)) {
        errorMap = error.details;
      }
      this.setState({errors: errorMap});
    } else {
      console.warn(error); // eslint-disable-line
    }
  },
  onSubmitComplete(error) {
    this.setState({submitting: false});
    if (error) {
      this.onError(error);
      if (this.props.onSubmitError) {
        this.props.onSubmitError(error);
      }
    }
  },
  onSubmit(event) {
    event.preventDefault();
    if (this.props.onSubmit) {
      try {
        this.setState({errors: {}, submitting: true});
        const values = _.extend({}, this.props.defaults, this.state.values);
        this.props.onSubmit(values, this.onSubmitComplete);
      } catch (error) {
        this.onSubmitComplete(error);
      }
    }
  },
  getValue(name) {
    return _.has(this.state.values, name) ? this.state.values[name] : this.props.defaults[name];
  },
  getError(name) {
    return this.state.errors[name];
  },
  setValue(name, value) {
    const newValues = _.extend({}, this.state.values, {[name]: value});
    this.setState({values: newValues});
    const newErrors = _.extend({}, this.state.errors);
    if (_.has(newErrors, name)) {
      delete newErrors[name];
      this.setState({errors: newErrors});
    }
    if (this.props.onChange) {
      this.props.onChange(name, value, newValues, this.onError);
    }
  },
  render() {
    const {onSubmit, onChange, defaults, onSubmitError, children, ...other} = this.props;

    const contextedChildren = recontextChildren(children);

    return (
      <form {...other} onSubmit={this.onSubmit}>
        {contextedChildren}
      </form>
    );
  }
});
