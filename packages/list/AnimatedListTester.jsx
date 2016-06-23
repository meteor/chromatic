/* globals AnimatedListTester:true */
/* globals React List VelocityTransitionGroup Form FormSelect Animations */

import React from 'react';

import VelocityTransitionGroup from 'velocity-animate';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

const {Animations} = Package['mdg:animations'] || {};


const ItemComponent = React.createClass({ // eslint-disable-line react/no-multi-comp
  propTypes: {
    value: React.PropTypes.any
  },
  render() {
    return <div>Item {this.props.value}</div>;
  }
});
const PlaceholderComponent = React.createClass({ // eslint-disable-line react/no-multi-comp
  render() {
    return <div>Placeholder</div>;
  }
});

AnimatedListTester = React.createClass({ // eslint-disable-line react/no-multi-comp
  getInitialState() {
    return {
      enter: _.values(Animations)[0],
      leave: _.values(Animations)[0],
      items: _.times(5, i => { return {key: i, value: i}; }),
      nextIndex: 5
    };
  },
  onChange(name, value) {
    // console.log('onChange', name, value)
    this.setState({[name]: value});
  },
  addItemToHead() {
    const {items, nextIndex} = this.state;
    items.splice(0, 0, {key: nextIndex, value: nextIndex});
    this.setState({items, nextIndex: nextIndex + 1});
  },
  moveRandomItemToHead() {
    const {items} = this.state;
    const index = Math.floor(Math.random() * items.length);
    const item = items.splice(index, 1)[0];
    items.splice(0, 0, item);
    this.setState({items});
  },
  removeRandomItem() {
    const {items} = this.state;
    const index = Math.floor(Math.random() * items.length);
    items.splice(index, 1);
    this.setState({items});
  },
  render() {
    const {enter, leave, items} = this.state;

    const animationOptions = _.map(Animations, (internalName, name) => {
      // XXX: make this work for custom animations
      return <option value={internalName} key={name}>{name}</option>;
    });

    return (
      <div>
        <Form onChange={this.onChange} defaults={this.state}>
          <FormSelect name="enter">{animationOptions}</FormSelect>
          <FormSelect name="leave">{animationOptions}</FormSelect>
          <button onClick={this.addItemToHead}>Add Item to Head</button>
          <button onClick={this.moveRandomItemToHead}>Move Item to Head</button>
          <button onClick={this.removeRandomItem}>Remove Random Item</button>
        </Form>

        <List
          ListComponent={VelocityTransitionGroup}
          enter={{animation: enter}}
          leave={{animation: leave}}
          items={items}
          ItemComponent={ItemComponent}
          PlaceholderComponent={PlaceholderComponent}
          count={items.length}
          countReady={true}
          requested={items.length}
          onLoadMore={() => {}}
          loadMoreLink={<div/>}/>
      </div>
    );
  }
});

if (Chromatic) {
  Chromatic.add(AnimatedListTester);
}
