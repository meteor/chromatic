/* global Toggle:true, FormToggle:true */
/* global React makeField */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

const Toggle = React.createClass({
  propTypes: {
    value: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
    label: React.PropTypes.string
  },
  onChange(event) {
    this.props.onChange(event.target.checked);
  },
  render() {
    const {value, error, onChange, className, label, ...other} = this.props;
    const classNames = `checkbox toggle ${className || ''}`;
    return (
      // TODO: offer non-checkbox custom implementation?
      <label className={classNames}>
        <input {...other} type="checkbox" value="toggle" checked={value}
          onChange={this.onChange} />
        <span className="text">{label}</span>
      </label>
    );
  }
});

FormToggle = makeField(Toggle, 'FormToggle', false);

if (Chromatic) {
  const noop = function() {};
  // Uggh the div here is gross but doesn't seem to matter
  Chromatic.add(Toggle, {
    specs: [
      new Chromatic.Spec('off', {props: {
        onChange: noop, value: false, error: null, label: 'Toggle'
      }}),
      new Chromatic.Spec('on', {props: {
        onChange: noop, value: true, error: null, label: 'Toggle'
      }})
    ]
  });
}
