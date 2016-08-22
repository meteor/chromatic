/* global ComponentsPage:true */
/* global FlowRouter ChromaticLayout StyleguideReadme ComponentsPageSidebar SingleComponentPage */

import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

ComponentsPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      entryName: FlowRouter.getParam('entryName'),
      filterParam: FlowRouter.getQueryParam('filter')
    };
  },
  getInitialState() {
    return {
      recents: [],
      filterState: '',
      showRecents: true
    };
  },
  componentWillMount() {
    $('body').addClass('styleguide-dark');
  },
  updateRecents(entryName) {
    this.setState(((prevState) => {
      const recents = prevState.recents;
      recents.unshift(entryName);
      recents.splice(5);
      return {recents: recents};
    }), () => {
      FlowRouter.go('chromatic-components-styleguide', {entryName: entryName}, {filter: undefined});
    });
  },
  onFilterInput(evt) {
    const inputValue = evt.target.value;
    FlowRouter.setQueryParams({filter: inputValue});
    this.setState({
      showRecents: !inputValue,
      filterState: inputValue
    });
  },
  onFilterSubmit(values) {
    this.updateRecents(values.entryName);
    this.setState({showRecents: true});
  },
  onEntryClick(evt) {
    evt.preventDefault();
    this.updateRecents(evt.target.title);
  },
  render() {
    const {entryName, filterParam} = this.data;
    const {recents, showRecents, filterState} = this.state;
    const filterString = filterParam || filterState;

    if (entryName) {
      return (<SingleComponentPage entryName={entryName}/>);
    }

    return (
      <ChromaticLayout showSidebar={true} sidebar={
          <ComponentsPageSidebar recents={recents} filter={filterString} showRecents={showRecents}
            onFilterInput={this.onFilterInput} onFilterSubmit={this.onFilterSubmit}
            onEntryClick={this.onEntryClick}/>} >
        <div className="styleguide-content">
          <StyleguideReadme/>
        </div>
      </ChromaticLayout>
    );
  }
});

Chromatic.add(ComponentsPage, {name: 'components', isPage: true});
