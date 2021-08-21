/* global Sortable:true */
/* global */

import classnames from 'classnames';
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

// propTypes: {
//   field: React.PropTypes.string.isRequired,
//     specifier: React.PropTypes.object.isRequired,
//     onSort: React.PropTypes.func.isRequired,
//     inverted: React.PropTypes.bool,
//     className: React.PropTypes.string,
//     children: React.PropTypes.node,
//     Component: React.PropTypes.string
// },

Sortable = ({field, specifier, onSort, inverted = false, className, children, Component = 'th', ...other}) => {
  const onClick = () => {
    const {field, specifier, onSort} = this.props;
    if (specifier[field] === -1) {
      onSort({[field]: 1});
    } else {
      onSort({[field]: -1});
    }
  };
  const classNames = [className];
  let icon;
  if (specifier[field]) {
    icon = 'icon-arrow-down';
    classNames.push('sortable');
    const direction = inverted ? -1 : 1;
    if (specifier[field] === direction) {
      classNames.push('ascending');
    } else {
      classNames.push('descending');
    }
  }

  return (
    <Component className={classnames(classNames)} onClick={onClick} {...other}>
      <span>{children}<span className={icon} /></span>
    </Component>
  );
};

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
