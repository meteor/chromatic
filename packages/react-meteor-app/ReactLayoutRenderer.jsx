/* global ReactLayoutRenderer:true */
/* global React */

// Render a given Component Class inside a layout as defined by its static layout property,
//   recursively. Any props that are passed in (in this case the current route), are passed to all
//   components in the layout heirarchy (via the box mechanism below)
ReactLayoutRenderer = React.createClass({
  propTypes: {
    Component: React.PropTypes.any.isRequired,
    status: React.PropTypes.object.isRequired
  },
  componentDidUpdate() {
    // NOTE: Not sure this is really the right place to put this.
    // Whenever we get a new page+set of layouts, re-scroll the screen to the top.
    window.scrollTo(0, 0);
  },
  // "wrap" a component in a function that renders it with a the given child,
  //   with the other props that we are passed (which in our case are route params)
  box(Comp, boxedChild) {
    const {Component, ...other} = this.props;
    return {
      render(props) {
        return (
          <Comp {...other} key={Comp.displayName} boxedChild={boxedChild} {...props}/>
        );
      }
    };
  },
  render() {
    const {Component, ...other} = this.props;

    const walk = (Comp, boxedChild) => {
      if (Comp.layout) {
        return walk(Comp.layout, this.box(Comp, boxedChild));
      }
      return <Comp key={Comp.displayName} {...other} boxedChild={boxedChild}/>;
    };

    return walk(Component);
  }
});
