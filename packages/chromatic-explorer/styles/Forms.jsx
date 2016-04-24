/* global Forms:true */
/* global React StyleguideSpec */
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Forms = React.createClass({
  render() {
    return (
      <div className="section-content">
        <div className="column fieldset">
          <legend>Labelled form</legend>
          <StyleguideSpec entry={Chromatic.entry('Input')}
            specName="labelled"/>
          <StyleguideSpec entry={Chromatic.entry('Input')}
            specName="labelled-error"/>
          <StyleguideSpec entry={Chromatic.entry('Textarea')}
            specName="labelled"/>
          <StyleguideSpec entry={Chromatic.entry('Textarea')}
            specName="labelled-error"/>

          <div className="select-label">
            <label>Select label</label>
            <StyleguideSpec entry={Chromatic.entry('Select')}
              specName="basic"/>
          </div>
        </div>

        <div className="column fieldset">
          <legend>Minimal form</legend>
          <div className="btn-group toggle-form">
            <input type="radio" name="support-priority" value="High" id="high" className="toggle-form"/>
            <label htmlFor="high" className="btn toggle-form">High</label>

            <input type="radio" name="support-priority" value="Medium" id="medium"
              className="toggle-form" defaultChecked={true}/>
            <label htmlFor="medium" className="btn toggle-form">Medium</label>

            <input type="radio" name="support-priority" value="Low" id="low" className="toggle-form"/>
            <label htmlFor="low" className="btn toggle-form" >Low</label>
          </div>
          <StyleguideSpec entry={Chromatic.entry('Input')}
            specName="basic"/>
          <StyleguideSpec entry={Chromatic.entry('Input')}
            specName="basic-error"/>
          <StyleguideSpec entry={Chromatic.entry('Input')}
            specName="right"/>
          <StyleguideSpec entry={Chromatic.entry('Input')}
            specName="right-error"/>
          <StyleguideSpec entry={Chromatic.entry('Textarea')}
            specName="basic"/>
          <StyleguideSpec entry={Chromatic.entry('Textarea')}
            specName="basic-error"/>
          <StyleguideSpec entry={Chromatic.entry('Select')}
            specName="basic"/>
          <div className="note-form"><i>A critical request will result in an engineer being paged.</i></div>
          <StyleguideSpec entry={Chromatic.entry('Select')}
            specName="basic-symbol"/>
          <a className="btn primary">Send Request</a>
        </div>

        <hr/>

        <div className="column fieldset">
          <legend>Misc</legend>
          <a className="link primary upload"><input type="file"/>Upload</a>
          <StyleguideSpec entry={Chromatic.entry('Select')}
            specName="nochrome"/>
          <StyleguideSpec entry={Chromatic.entry('Select')}
            specName="inverse"/>
          <StyleguideSpec entry={Chromatic.entry('Checkbox')}
            specName="basic"/>
          <StyleguideSpec entry={Chromatic.entry('Radio')}
            specName="basic"/>
          <StyleguideSpec entry={Chromatic.entry('Radio')}
            specName="selected"/>
        </div>
      </div>
    );
  }
});
