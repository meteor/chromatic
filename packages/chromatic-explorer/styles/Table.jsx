/* global Table:true */
/* global React StyleguideSpec */
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Table = React.createClass({
  render() {
    return (
      <table className="table-view">
        <thead>
          <tr>
            <th className="title"><span>Table Heading</span></th>
            <th className=""><span>Default</span></th>
            <th className="sortable ascending"><span>Ascending<span className="icon-arrow-down"></span></span></th>
            <th className="sortable descending"><span>Descending<span className="icon-arrow-down"></span></span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a className="title js-expand-trigger">Wild blue yonder</a>
              <a href="#" className="icon-proceed"></a>
            </td>
            <td>3.1</td>
            <td>4.7</td>
            <td>2.9</td>
          </tr>
          <tr className="js-expand-content">
            <td colSpan="4" className="nochrome">
              <form className="drawer">
                <div className="drawer-content">
                  <div className="column fieldset">
                    <legend>Column 1</legend>
                    <StyleguideSpec entry={Chromatic.entry('Input')}
                      specName="labelled"/>
                    <StyleguideSpec entry={Chromatic.entry('Input')}
                      specName="labelled"/>
                  </div>

                  <div className="column fieldset">
                    <legend>Column 2</legend>
                    <StyleguideSpec entry={Chromatic.entry('Input')}
                      specName="labelled"/>
                    <StyleguideSpec entry={Chromatic.entry('Input')}
                      specName="labelled"/>
                  </div>

                  <div className="section-actions">
                    <div className="action-group right">
                      <a className="btn tertiary">Cancel</a>
                      <a className="btn primary">Save</a>
                    </div>
                    <div className="action-group">
                      <a className="link tertiary btn-spacing"><span className="icon-delete"></span> Remove</a>
                      <a className="link tertiary btn-spacing"><span className="icon-lock"></span> Lock</a>
                    </div>
                  </div>
                </div>
              </form>
            </td>

          </tr>
          <tr>
            <td><a className="title">Wild blue yonder</a><a href="#" className="icon-proceed"></a></td>
            <td>3.1</td>
            <td>4.7</td>
            <td>2.9</td>
          </tr>
          <tr>
            <td><a className="title">Wild blue yonder</a><a href="#" className="icon-proceed"></a></td>
            <td>3.1</td>
            <td>4.7</td>
            <td>2.9</td>
          </tr>
        </tbody>
      </table>
    );
  }
});
