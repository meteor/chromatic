/* global Upload:true */
/* global React File */

Upload = React.createClass({
  propTypes: {
    value: React.PropTypes.instanceOf(File),
    onChange: React.PropTypes.func.isRequired
  },
  onChange(event) {
    this.props.onChange(event.target.files[0]);
  },
  onClear() {
    this.props.onChange(null);
  },
  render() {
    const {value} = this.props;

    const input = <input type="file" onChange={this.onChange}/>;

    if (value) {
      return (
        <span>
          <a className="link complementary upload">
            {input}{value.name}
          </a>{' '}
          <a className="upload-clear js-upload-clear" onClick={this.onClear}>
            <span className="icon-close"/>
          </a>
        </span>
      );
    }

    return (
      <a className="link primary upload">{input}Choose File</a>
    );
  }
});
