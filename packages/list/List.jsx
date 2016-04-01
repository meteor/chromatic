/* global List:true */
/* global React */

import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

List = React.createClass({
  propTypes: {
    ListComponent: React.PropTypes.any,
    items: React.PropTypes.array.isRequired,
    ItemComponent: React.PropTypes.any.isRequired,
    count: React.PropTypes.number,
    countReady: React.PropTypes.bool.isRequired,
    requested: React.PropTypes.number.isRequired,
    PlaceholderComponent: React.PropTypes.any.isRequired,
    onLoadMore: React.PropTypes.func.isRequired,
    loadMoreLink: React.PropTypes.node.isRequired,
    separateBy: React.PropTypes.func,
    Separator: React.PropTypes.any
  },
  getDefaultProps() {
    return {
      ListComponent: 'div'
    };
  },
  render() {
    const {ListComponent, items, ItemComponent, count, countReady, requested, PlaceholderComponent,
      onLoadMore, loadMoreLink, separateBy, Separator, ...other} = this.props;

    let lastValue;
    const renderedItems = items.map(item => {
      const renderedItem = <ItemComponent key={item.key} {...item}/>;

      if (!separateBy) {
        return renderedItem;
      }

      const value = separateBy(item);
      if (value === lastValue) {
        return renderedItem;
      }

      lastValue = value;
      return [<Separator key={`separator-${value}`} value={value}/>, renderedItem];
    });

    // We need to figure out how many placeholders to place. If we know the count,
    //   we can get this exactly. Otherwise, we just make a best guess
    const needed = countReady ? Math.min(count, requested) : requested;
    const placeholders = _.times(needed - items.length, (i) => {
      return <PlaceholderComponent key={i}/>;
    });

    return (
      <ListComponent {...other}>
        {renderedItems}
        {placeholders}
        <div className="load-more" onClick={onLoadMore}>
          {(needed === items.length && count > requested) && loadMoreLink}
        </div>
      </ListComponent>
    );
  }
});

if (Chromatic) {
  const ItemComponent = React.createClass({ // eslint-disable-line react/no-multi-comp
    render() {
      return <div>Item</div>;
    }
  });
  const PlaceholderComponent = React.createClass({ // eslint-disable-line react/no-multi-comp
    render() {
      return <div>Placeholder</div>;
    }
  });
  const SeparatorComponent = React.createClass({ // eslint-disable-line react/no-multi-comp
    propTypes: {
      value: React.PropTypes.number
    },
    render() {
      return <div>Separator {this.props.value}</div>;
    }
  });
  const onLoadMore = () => { console.log('Load more clicked'); }; // eslint-disable-line no-console
  const loadMoreLink = <a>Load More</a>;

  const defaults = {ItemComponent, PlaceholderComponent, onLoadMore, loadMoreLink};

  Chromatic.add(List, {specs: [
    new Chromatic.Spec('full', {props: _.extend({}, defaults, {
      items: _.times(12, (i) => { return {key: i}; }),
      count: 12,
      countReady: true,
      requested: 12
    })}),
    new Chromatic.Spec('loading-count', {props: _.extend({}, defaults, {
      items: [],
      countReady: false,
      requested: 12
    })}),
    new Chromatic.Spec('loading', {props: _.extend({}, defaults, {
      items: [],
      count: 24,
      countReady: true,
      requested: 12
    })}),
    new Chromatic.Spec('loading-low-count', {props: _.extend({}, defaults, {
      items: [],
      count: 5,
      countReady: true,
      requested: 12
    })}),
    new Chromatic.Spec('has-more', {props: _.extend({}, defaults, {
      items: _.times(12, (i) => { return {key: i}; }),
      count: 24,
      countReady: true,
      requested: 12
    })}),
    new Chromatic.Spec('has-more-loading', {props: _.extend({}, defaults, {
      items: _.times(12, (i) => { return {key: i}; }),
      count: 24,
      countReady: true,
      requested: 24
    })}),
    new Chromatic.Spec('separated', {props: _.extend({}, defaults, {
      items: _.times(12, (i) => { return {key: i}; }),
      count: 12,
      countReady: true,
      requested: 12,
      separateBy: (i) => Math.floor(i.key / 4),
      Separator: SeparatorComponent
    })})
  ]});
}
