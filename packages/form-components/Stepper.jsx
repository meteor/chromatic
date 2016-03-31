/* global Stepper:true, FormStepper:true */
/* global React classnames AutosizeInput makeField */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Stepper = React.createClass({
  propTypes: {
    ready: React.PropTypes.bool.isRequired,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
    onLimitReached: React.PropTypes.func,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  getInitialState() {
    const {ready, value} = this.props;
    return {
      inputValue: ready ? value.toString() : '--'
    };
  },
  componentWillReceiveProps(nextProps) {
    const {ready, value} = this.props;
    if (!_.isUndefined(nextProps.value)
      && (!ready || nextProps.value !== value)) {
      this.setState({
        inputValue: nextProps.value.toString()
      });
    }
  },
  onIncrement() {
    if (this.props.value < this.props.max) {
      this.props.onChange(this.props.value + 1);
    } else if (this.props.onLimitReached) {
      this.props.onLimitReached('max');
    }
  },
  onDecrement() {
    if (this.props.value > this.props.min) {
      this.props.onChange(this.props.value - 1);
    } else if (this.props.onLimitReached) {
      this.props.onLimitReached('min');
    }
  },
  onInputChange(event) {
    this.setState({inputValue: event.target.value});
  },
  onInputKeyDown(event) {
    if (event.keyCode === 13) {
      this.onInputConfirm();
    }
  },
  onInputConfirm() {
    const inputValue = parseInt(this.state.inputValue, 10);
    if (_.isNaN(inputValue)) {
      // If the user enters junk, reset on focus-out
      this.setState({inputValue: this.props.value.toString()});
      return;
    }
    const newValue = Math.min(Math.max(inputValue, this.props.min), this.props.max);
    this.props.onChange(newValue);
  },
  render() {
    const {ready, value, onChange, max, min, name, className, ...other} = this.props;
    const atMax = value >= max;
    const atMin = value <= min;

    let input;
    if (ready) {
      input = (
        <AutosizeInput className="cardinal-input" type="number" value={this.state.inputValue}
          onChange={this.onInputChange} onBlur={this.onInputConfirm}
          onKeyDown={this.onInputKeyDown}/>
      );
    } else {
      input = <span className="cardinal-input">--</span>;
    }

    return (
      <div className="cardinal static">
        <div className={classnames('cardinal-number', 'editable', className)}>
          <button onClick={this.onIncrement}
              className={classnames('cardinal-action', 'increment')}>
            <span className={classnames('btn scale round', {disabled: !ready || atMax})}>
              <span className="icon-arrow-up"></span>
            </span>
          </button>

          {input}

          <button onClick={this.onDecrement}
              className={classnames('cardinal-action', 'decrement')}>
            <span className={classnames('btn scale round', {disabled: !ready || atMin})}>
              <span className="icon-arrow-down"></span>
            </span>
          </button>
        </div>
        <div className="cardinal-name">{name}</div>
      </div>
    );
  }
});

FormStepper = makeField(Stepper, 'FormStepper', 0);

if (Chromatic) {
  const onChange = (v) => { console.log('Stepper changed to ', v); }; // eslint-disable-line
  Chromatic.add(Stepper, {
    specs: [
      new Chromatic.Spec('loading', {props: {
        ready: false,
        min: 1,
        max: 10,
        name: 'Containers',
        onChange
      }}),
      new Chromatic.Spec('default', {props: {
        ready: true,
        value: 3,
        min: 1,
        max: 10,
        name: 'Containers',
        onChange
      }}),
      new Chromatic.Spec('at-min', {props: {
        ready: true,
        value: 1,
        min: 1,
        max: 10,
        name: 'Containers',
        onChange
      }}),
      new Chromatic.Spec('at-max', {props: {
        ready: true,
        value: 10,
        min: 1,
        max: 10,
        name: 'Containers',
        onChange
      }}),
    ]
  });
}
