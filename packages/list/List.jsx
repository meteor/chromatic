/* global List:true */

import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

const INFINITE_SCROLL_BOTTOM_THRESHOLD = 10;

const Empty = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      message: ''
    };
  },
  render() {
    const { message } = this.props;
    return (<div className="empty">{ message }</div>);
  }
})

List = React.createClass({
  propTypes: {
    ListComponent: React.PropTypes.any,
    infiniteScroll: React.PropTypes.bool,
    infiniteScrollBottomThreshold: React.PropTypes.number,
    items: React.PropTypes.array.isRequired,
    ItemComponent: React.PropTypes.any.isRequired,
    count: React.PropTypes.number,
    countReady: React.PropTypes.bool.isRequired,
    requested: React.PropTypes.number.isRequired,
    PlaceholderComponent: React.PropTypes.any.isRequired,
    onLoadMore: React.PropTypes.func.isRequired,
    loadMoreLink: React.PropTypes.node,
    showingAllMessage: React.PropTypes.node,
    separateBy: React.PropTypes.func,
    Separator: React.PropTypes.any,
    EmptyComponent: React.PropTypes.any,
    emptyProps: React.PropTypes.object,
  },
  getDefaultProps() {
    return {
      ListComponent: 'div',
      loadMoreLink: (<div></div>),
      EmptyComponent: Empty,
    };
  },
  getInitialState() {
    return {
      loadingMore: false
    };
  },
  onLoadMore() {
    const {count, onLoadMore, items} = this.props;
    if (items.length >= count || this.state.loadingMore) {
      return;
    }
    this.setState({loadingMore: true}, () => {
      if (onLoadMore) {
        onLoadMore();
      }
    });
  },
  componentDidMount() {
    const threshold = this.props.infiniteScrollBottomThreshold || INFINITE_SCROLL_BOTTOM_THRESHOLD;
    if (this.props.infiniteScroll) {
      const $window = $(window);
      this.handleScroll = _.debounce(() => {
        const bottomDist = Math.abs($window.scrollTop() + $window.height() - $(document).height());
        if (!this.state.loadingMore && bottomDist <= threshold) {
          this.onLoadMore();
        }
      }, 50);

      $window.on('scroll', this.handleScroll);
    }
  },
  componentWillReceiveProps(nextProps) {
    const {requested, items, count, countReady} = nextProps;
    const {loadingMore} = this.state;
    if (loadingMore && (items.length >= requested || (countReady && items.length >= count))) {
      this.setState({loadingMore: false});
    }
  },
  componentWillUnmount() {
    const $window = $(window);
    if (this.handleScroll) {
      $window.off('scroll', this.handleScroll);
    }
  },
  render() {
    const {ListComponent, infiniteScroll, items, ItemComponent, count,
      countReady, requested, PlaceholderComponent, loadMoreLink, separateBy, showingAllMessage,
      Separator, onLoadMore, EmptyComponent, emptyProps, ...other} = this.props;
    const {loadingMore} = this.state;

    let lastValue;
    const renderedItems = items.map(item => {
      const renderedItem = <ItemComponent key={item.key} {...item} {...other}/>;

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
    let numPlaceholders = requested;
    if (countReady) {
      numPlaceholders = Math.min(count || 0, requested);
      if (items.length > 0) {
        numPlaceholders = Math.max(0, numPlaceholders - items.length);
      }
      if (loadingMore && !numPlaceholders) {
        numPlaceholders = 1;
      }
    }

    const placeholders = _.times(numPlaceholders || 0, (i) => {
      return <PlaceholderComponent key={i}/>;
    });

    const canLoadMore = numPlaceholders === 0 && count > requested;
    const showingAll = countReady && !canLoadMore && !loadingMore;

    const isEmpty = showingAll && (!count);
    const component = isEmpty ? (<EmptyComponent {...emptyProps} />) :
      (<ListComponent {...other}>
          {renderedItems}
          <div className="load-more" onClick={this.onLoadMore}>
            {canLoadMore && loadMoreLink}
          </div>
        </ListComponent>);

    return (
      <div>
        {component}
        {placeholders}
        {showingAll && showingAllMessage}
      </div>
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
    new Chromatic.Spec('empty', { props: _.extend({}, defaults, {
      items: [],
      count: 0,
      countReady: true,
      requested: 0
    })}),
    new Chromatic.Spec('empty-custom', { props: _.extend({}, defaults, {
      items: [],
      count: 0,
      countReady: true,
      requested: 0,
      emptyProps: {
        message: 'there is no data to show, this is a custom message'
      }
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
