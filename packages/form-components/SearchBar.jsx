/* global SearchBar:true */

import classnames from 'classnames';
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

SearchBar = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    clickToToggle: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      clickToToggle: false,
      value: ''
    };
  },
  getInitialState() {
    return {
      value: this.props.value,
      active: !!this.props.value || !this.props.clickToToggle
    };
  },
  componentDidMount() {
    this._onInputChange = _.debounce(this.props.onChange, 300);
  },
  onKeyUp(event) {
    if (event.which === 27) { // ESCAPE key
      this.refs.searchInput.blur();
    }
  },
  onInputChange(event) {
    this._onInputChange(event.target.value);
  },
  toggleActive() {
    if (!this.state.active) {
      this.setState({active: true});
      this.refs.searchInput.focus();
    } else if (!this.refs.searchInput.value) {
      this.setState({active: false});
    }
  },
  render() {
    const {className, value, clickToToggle} = this.props;
    const {active} = this.state;

    let toggleActive = () => {};
    if (clickToToggle) {
      toggleActive = this.toggleActive;
    }

    return (
      <div className="search-box btn-group">
        <span className={classnames('btn-spacing', 'reveal-search', 'input-symbol', {active})}>
        <span className={classnames('icon-search', className)} onClick={toggleActive}></span>
        <input ref="searchInput" type="text" placeholder="Search"
               defaultValue={value} onChange={this.onInputChange}
               onBlur={toggleActive} onKeyUp={this.onKeyUp}/>
        </span>
      </div>
    );
  }
});

if (Chromatic) {
  const noop = function() {};
  Chromatic.add(SearchBar, {
    specs: [
      new Chromatic.Spec('inactive normal', {props: {
        onChange: noop, value: ''
      }}),
      new Chromatic.Spec('active normal', {props: {
        onChange: noop, value: 'hello world'
      }}),
      new Chromatic.Spec('inactive click-to-toggle', {props: {
        onChange: noop, value: '', clickToToggle: true
      }}),
      new Chromatic.Spec('active click-to-toggle', {props: {
        onChange: noop, value: 'hello world', clickToToggle: true
      }})
    ]
  });
}
