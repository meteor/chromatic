/* global Radio:true FormRadio:true */
/* global React makeField classnames */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

const Radio = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    ourValue: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    label: React.PropTypes.string
  },
  onChange(event) {
    this.props.onChange(event.target.value);
  },
  render() {
    const {value, error, onChange, ourValue, className, label, ...other} = this.props;

    const input = (
      <input {...other} className={className} type="radio"
        value={ourValue} checked={value === ourValue} onChange={this.onChange} />
    );

    if (!label) {
      return input;
    }
    return (
      <label className={classnames('radio', className)}>
        {input}
        <span className="text">{label}</span>
      </label>
    );
  }
});

FormRadio = makeField(Radio, 'FormRadio');

if (Chromatic) {
  const noop = function() {};
  // Uggh the div here is gross but doesn't seem to matter
  Chromatic.add(Radio, {
    specs: [
      new Chromatic.Spec('basic', {props: {
        onChange: noop, value: 'value', ourValue: 'other', error: null, label: 'Radio'
      }}),
      new Chromatic.Spec('selected', {props: {
        onChange: noop, value: 'value', ourValue: 'value', error: null, label: 'Radio'
      }})
    ]
  });
}
