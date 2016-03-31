/* global Checkbox:true FormCheckbox:true */
/* global React makeField */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

const Checkbox = React.createClass({
  propTypes: {
    value: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    ourValue: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    label: React.PropTypes.string
  },
  onChange(event) {
    if (event.target.checked) {
      this.props.onChange(_.union(this.props.value || [], [event.target.value]));
    } else {
      this.props.onChange(_.without(this.props.value || [], event.target.value));
    }
  },
  render() {
    const {value, error, onChange, ourValue, className, label, ...other} = this.props;
    const classNames = `checkbox ${className || ''}`;
    return (
      <label className={classNames}>
        <input {...other} type="checkbox" value={ourValue} checked={_.include(value, ourValue)}
          onChange={this.onChange} />
        <span className="text">{label}</span>
      </label>
    );
  }
});

FormCheckbox = makeField(Checkbox, 'FormCheckbox', []);

if (Chromatic) {
  const noop = function() {};
  // Uggh the div here is gross but doesn't seem to matter
  Chromatic.add(Checkbox, {
    specs: [
      new Chromatic.Spec('basic', {props: {
        onChange: noop, value: ['value'], ourValue: 'other', error: null, label: 'Checkbox'
      }}),
      new Chromatic.Spec('selected', {props: {
        onChange: noop, value: ['value'], ourValue: 'value', error: null, label: 'Checkbox'
      }})
    ]
  });
}
