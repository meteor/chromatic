/* global SingleComponentPageHeader:true */
/* global React classnames FlowRouter
Form FormSelect */
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

SingleComponentPageHeader = React.createClass({
  propTypes: {
    entryName: React.PropTypes.string.isRequired,
    specName: React.PropTypes.string.isRequired,
    viewport: React.PropTypes.string,
    background: React.PropTypes.string,
    onViewportClick: React.PropTypes.func,
    onBackgroundChange: React.PropTypes.func,
    onSpecChange: React.PropTypes.func
  },
  render() {
    const {entryName, specName, viewport, background,
      onViewportClick, onBackgroundChange, onSpecChange} = this.props;
    const isBrowser = viewport === 'browser';
    const entry = Chromatic.entry(entryName);

    //  render viewport toggle buttons
    const sizes = ['mobile', 'tablet', 'browser'];
    const viewportButtons = sizes.map(s => {
      const iconName = `icon-${s}`;
      return (<a href="" key={s} className={classnames('link inverse', iconName, {active: viewport === s})} onClick={onViewportClick.bind(null, s)}></a>);
    });
    const viewportToggle = (
      <div className="subheader-item viewport-toggle">
        {viewportButtons}
      </div>
    );
    //  render background color toggle buttons
    const colors = ['lightest', 'medium', 'mediumdark', 'dark', 'darkest'];
    const backgroundColors = colors.map(c => {
      const b = `color-${c}`;
      return (<div className={classnames(b, {active: background === c})}
        onClick={onBackgroundChange.bind(null, c)} key={c}></div>);
    });
    const backgroundToggle = (
      <div className="subheader-item background-toggle">
        {backgroundColors}
      </div>
    );
    //  render subheader dropdown select
    let options = [];
    if (entry.specs.length > 1) {
      options = entry.specs.map(s => {
        return <option key={s.name} value={s.name}>{s.name}</option>;
      });
    }
    const selectForm = (
      <Form onChange={onSpecChange} values={{entryName, specName}}>
          <FormSelect className="nochrome inverse" name="specName">
            <option key="all" value="all">all</option>
            {options}
          </FormSelect>
      </Form>
    );
    return (
      <div className="styleguide-header subheader">
        <div className="subheader-group">
          {!isBrowser ?
            <div className={classnames('subheader-item')}>
              <a className="link inverse" href={FlowRouter.path('chromatic-components-styleguide')}>
                <span className="icon-arrow-left"></span>
                <span>Components</span>
              </a>
            </div>
          :
          <div>
          <div className={classnames('subheader-item font-m2 type-light')}>
            {entryName}
          </div>
          <div className={classnames('subheader-item')}>
            {selectForm}
          </div>
          </div>
        }
        </div>
        <div className="subheader-group right">
          {viewportToggle}
          {backgroundToggle}
        </div>
      </div>
    );
  }
});
