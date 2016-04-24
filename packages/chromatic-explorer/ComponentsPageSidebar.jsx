/* global ComponentsPageSidebar:true */
/* global React FlowRouter PageToggleButton Form */
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

ComponentsPageSidebar = React.createClass({
  propTypes: {
    onFilterInput: React.PropTypes.func.isRequired,
    onFilterSubmit: React.PropTypes.func.isRequired,
    onEntryClick: React.PropTypes.func.isRequired,
    recents: React.PropTypes.array.isRequired,
    showRecents: React.PropTypes.bool,
    filter: React.PropTypes.string
  },
  render() {
    const {onFilterInput, onFilterSubmit, recents, filter, showRecents} = this.props;

    //  TODO: use better regex
    const filterRE = new RegExp(filter, 'i');
    const entries = Chromatic.allEntries();
    const entryLinks = entries.filter(e => {
      return filterRE.test(e.name);
    }).map(e => {
      const n = e.name;
      return (
        <a href={FlowRouter.path('chromatic-components-styleguide', {entryName: n})}
          className="entry-link" title={n} ref={n} key={n}>
          {/* FixMe: re-enable onClick={onEntryClick} for recent list,
          getting console errors with flattenChildren */}
          {n} <span className="icon-proceed"></span>
        </a>
      );
    });

    const firstEntry = entryLinks[0] && entryLinks[0].ref;
    const filterBox = (
      <div className="filter-box">
        <Form className="input-symbol nochrome inverse" values={{entryName: firstEntry}} onSubmit={onFilterSubmit}>
          <input className="nochrome inverse" onChange={onFilterInput} value={filter} type="search" name="filter" placeholder="Search"/>
          <span className="icon-search inverse"></span>
        </Form>
      </div>
    );

    const recentEntries = recents.map( e => {
      return (
        <a href={FlowRouter.path('chromatic-components-styleguide', {entryName: e})}
        className="entry-link" title={e} key={e}>
          {e} <span className="icon-proceed"></span>
        </a>
      );
    });

    const baseComponents = (
      <div className="base-components">
        {showRecents && recentEntries.length ? <div className="font-s2 subheading-caps">Recent</div> : ''}
        {showRecents && recentEntries.length ? recentEntries : ''}
        {showRecents && recentEntries.length ? <br/> : ''}
        <div className="font-s2 subheading-caps">{filter ? 'Results' : 'All' }</div>
        {entryLinks}
      </div>
    );

    return (
      <div className="styleguide-sidebar">
        <div className="sidebar-content">
          <PageToggleButton/>
          {filterBox}
          {baseComponents}
        </div>
      </div>
    );
  }
});
