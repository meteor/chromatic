/* global OverlayLayout:true */
/* global React OverlayController */

const {Chromatic} = Package['chromatic-api'] || {};

const ESCAPE_KEY_CODE = 27;

OverlayLayout = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },
  getDefaultProps() {
    return {
      className: ''
    };
  },
  onCloseClick() {
    OverlayController.close();
  },
  handleKeyDown(e) {
    if (e.keyCode === ESCAPE_KEY_CODE) {
      // close on the escape key
      OverlayController.close();
    }
  },
  componentDidMount: function() {
    $(document.body).on('keydown', this.handleKeyDown);
  },
  componentWillUnmount: function() {
    $(document.body).off('keydown', this.handleKeyDown);
  },
  render() {
    const {children, className, ...other} = this.props;
    return (
      <div className={`overlay${className}`}>
        <a className="overlay-close" onClick={this.onCloseClick}>
          <span className="icon-cross"/>
        </a>
        <div className="overlay-content">
          {children}
        </div>
      </div>
    );
  }
});

if (Chromatic) {
  Chromatic.add(OverlayLayout, {
    specs: [
      new Chromatic.Spec('default', {props: {
        children: (
          <div className="overlay-panel">
            Content within .overlay-panel
          </div>
        )
      }})
    ]
  });
}
