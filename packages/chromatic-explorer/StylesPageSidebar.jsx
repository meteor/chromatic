/* global StylesPageSidebar:true */
/* global React PageToggleButton classnames */
import React from 'react';

StylesPageSidebar = React.createClass({
  getInitialState() {
    return {selected: 'Color'};
  },
  onSectionClick(evt) {
    this.setState({selected: evt.target.innerHTML});
  },
  render() {
    const {selected} = this.state;
    const sections = ['Color', 'Icons', 'Typography', 'Code', 'Buttons', 'Links', 'Forms', 'Table'];
    const sectionLinks = sections.map(tag => {
      return (<a href={`#${tag}`} key={tag} className={classnames({active: tag === selected})}
        onClick={this.onSectionClick}>{tag}</a>);
    });

    return (
      <div className="styleguide-sidebar">
        <div className="sidebar-content">
          <PageToggleButton/>
          <div className="base-components styles-page">
            {sectionLinks}
          </div>
        </div>
      </div>
    );
  }
});
