/* global Sortable:true */
/* global React classnames */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Sortable = React.createClass({
  propTypes: {
    // TODO: figure out how to spec this
    field: React.PropTypes.string.isRequired,
    specifier: React.PropTypes.object.isRequired,
    onSort: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    Component: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      Component: 'th'
    };
  },
  onClick() {
    const {field, specifier, onSort} = this.props;
    if (specifier[field] === -1) {
      onSort({[field]: 1});
    } else {
      onSort({[field]: -1});
    }
  },
  render() {
    const {field, specifier, onSort, className, children, Component, ...other} = this.props;
    const classNames = [className];
    let icon;
    if (specifier[field]) {
      classNames.push('sortable');
      if (specifier[field] === 1) {
        icon = 'icon-arrow-up';
        classNames.push('ascending');
      } else {
        icon = 'icon-arrow-up';
        classNames.push('descending');
      }
    }

    return (
      <Component className={classnames(classNames)} onClick={this.onClick}>
        <span>{children}<span className={icon}></span></span>
      </Component>
    );
  }
});

// The reason we pass Component in here and we have a Component prop is because the browser
//   doesn't like it if you render a <th> without a containing <table>.
if (Chromatic) {
  const onSort = (spec) => { console.log('on sort', spec); };
  Chromatic.add(Sortable, {
    specs: [
      new Chromatic.Spec('default', {props: {
        field: 'name',
        specifier: {},
        onSort,
        children: 'Name',
        Component: 'div'
      }}),
      new Chromatic.Spec('ascending', {props: {
        field: 'name',
        specifier: {name: 1},
        onSort,
        children: 'Name',
        Component: 'div'
      }}),
      new Chromatic.Spec('descending', {props: {
        field: 'name',
        specifier: {name: -1},
        onSort,
        children: 'Name',
        Component: 'div'
      }}),
    ]
  });
}
