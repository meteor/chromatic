/* global Sortable:true */
/* global */

import classnames from 'classnames';
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Sortable = React.createClass({
  propTypes: {
    // TODO: figure out how to spec this
    field: React.PropTypes.string.isRequired,
    specifier: React.PropTypes.object.isRequired,
    onSort: React.PropTypes.func.isRequired,
    inverted: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    Component: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      inverted: false,
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
    const {field, specifier, onSort, inverted, className, children, Component, ...other} = this.props;
    const classNames = [className];
    if (specifier[field]) {
      classNames.push('sortable');
      const direction = inverted ? -1 : 1;
      if (specifier[field] === direction) {
        classNames.push('ascending');
      } else {
        classNames.push('descending');
      }
    }

    return (
      <Component className={classnames(classNames)} onClick={this.onClick} {...other}>
        <span>{children}<span className="icon-arrow-down"></span></span>
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
