/* global SingleComponentPageSidebar:true */
/* global React classnames ReactMeteorData FlowRouter Form FormRadio StyleguideNotFound
   FormSelect ColorGrid */
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

SingleComponentPageSidebar = React.createClass({
  propTypes: {
    entryName: React.PropTypes.string.isRequired,
    specName: React.PropTypes.string.isRequired,
    onSpecChange: React.PropTypes.func.isRequired
  },
  render() {
    const {entryName, specName, onSpecChange} = this.props;
    const entry = Chromatic.entry(entryName);

    let radios = [];
    if (entry.specs.length > 1) {
      radios = entry.specs.map(s => {
        return <FormRadio ourValue={s.name} name="specName" key={s.name} label={s.name}/>;
      });
    }
    const radioForm = (
      <Form onChange={onSpecChange} values={{entryName, specName}} >
        <FormRadio ourValue="all" name="specName" key="all" label="all"/>
        {radios}
      </Form>
    );

    return (
      <div className="styleguide-sidebar">
        <div className="sidebar-content">
          <h1 className="font-m2 type-light">{entryName}</h1>
          {radioForm}
        </div>
      </div>
    );
  }
});
