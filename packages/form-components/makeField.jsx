/* global makeField:true */
/* global React */

makeField = function(Component, displayName, defaultValue = '') {
  return React.createClass({
    displayName: displayName,
    propTypes: {
      name: React.PropTypes.string.isRequired
    },
    contextTypes: {
      getValue: React.PropTypes.func.isRequired,
      setValue: React.PropTypes.func.isRequired,
      getError: React.PropTypes.func.isRequired
    },
    onChange(value) {
      this.context.setValue(this.props.name, value);
    },
    render() {
      const {name, ...other} = this.props;
      const {getValue, getError} = this.context;

      const value = getValue(name) || defaultValue;

      return (
        <Component {...other} name={name} value={value} error={getError(name)}
          onChange={this.onChange} />
      );
    }
  });
};
