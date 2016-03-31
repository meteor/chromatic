/* global ChromaticLayout:true */
/* global React FlowRouter classnames*/

ChromaticLayout = React.createClass({
  propTypes: {
    sidebar: React.PropTypes.node,
    header: React.PropTypes.node,
    children: React.PropTypes.node,
    showSidebar: React.PropTypes.bool.isRequired
  },
  getDefaultProps() {
    return {
      sidebar: null,
      header: null,
      showSidebar: false
    };
  },
  componentWillMount() {
    $('body').addClass('styleguide-dark');
  },
  render() {
    const {sidebar, showSidebar} = this.props;
    const header = this.props.header || (
      <div className="styleguide-header">
        <a href="" className="logo">
          <img src="/packages/mdg_chromatic-explorer/logotype-chromatic.svg" alt="Chromatic"/>
        </a>
      </div>
    );
    return (
      <div className={classnames('styleguide-layout', {'show-sidebar': showSidebar})}>
        {header}
        {sidebar}
        {this.props.children}
      </div>
    );
  }
});
