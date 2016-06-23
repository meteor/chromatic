/* global StylesPage:true */
/* global React Cardinal WithTooltip FullDate RelativeDate Status ContainerItemPlaceholder
   StylesPageSidebar CodeBlock Icons Color Buttons Forms Icons Table Typography
   ChromaticLayout */
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

StylesPage = React.createClass({
  render() {
    const sidebar = (<StylesPageSidebar/>);

    return (
      <ChromaticLayout sidebar={sidebar} showSidebar={true}>
        <div className="styleguide-content">
          <div className="styleguide-styles">

            <a name="Color"></a>
            <div className="section" id="color">
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Color</h2>
                </div>
              </div>
              <Color/>
            </div>

            <a name="Icons"></a>
            <div className="section" id="icons">
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Icons</h2>
                </div>
              </div>
              <Icons/>
            </div>

            <a name="Typography"></a>
            <div className="section" id="typography">
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Typography</h2>
                </div>
              </div>
              <Typography/>
            </div>

            <a name="Code"></a>
            <div className="section">
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Code</h2>
                </div>
              </div>
              <div className="section-content">
                <code>$ meteor add chromatic:styleguide</code>
                <pre>{`\
        {
          "hotCodePush": false;
          "iaas": {
            "ec2Endpoint": "http://ec2.mockaws.int:8080",
            "s3Endpoint": "http://s3.mockaws.int:3001"
          }
        }`
                }</pre>
              </div>
            </div>

            <a name="Buttons"></a>
            <div className="section" id="button">
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Buttons</h2>
                </div>
              </div>
              <Buttons/>
            </div>

            <a name="Links"></a>
            <div className="section">
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Links</h2>
                </div>
              </div>
              <div className="section-content">
                <a className="link primary">Primary link</a>
                <a className="link secondary">Secondary link</a>
                <a className="link tertiary">Tertiary link</a>
                <a className="link complementary">Complementary link</a>
                <div style={{
                  background: '#333',
                  padding: '1.5em'
                }}>
                  <a className="link inverse">Inverse link</a>
                  <a className="link inverse-alt">Inverse-alt link</a>
                </div>
              </div>
            </div>

            <a name="Forms"></a>
            <div className="section" style={{background: '#eee' }}>
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Forms</h2>
                </div>
              </div>
              <Forms/>
            </div>

            <a name="Table"></a>
            <div className="section">
              <div className="section-heading">
                <div className="action-group">
                  <h2 className="title-section">Table</h2>
                </div>
              </div>
              <Table/>
            </div>

            { /*
              <div className="app-list">
                <div className="app-item staging">
                  <a className="click-intercept" href="http://google.com"></a>
                  <Status status="unavailable" className="medium" />
                  <div className="meta">
                    <div className="name">
                      <span className="truncate">meteorapp.com cats cats cats cats</span><a className="offsite" href="http://facebook.com" target="_blank"><span className="icon-proceed"></span></a></div>
                    <div className="detail">Deployed 22 hours ago by Dominic</div>
                  </div>
                </div>
              </div>

              <div className="section alert">
                <div className="section-heading">
                  <div className="action-group">
                    <h2 className="title-section">Alert</h2>
                  </div>
                </div>
                <div className="section-content section-row">
                  <div className="section-message">
                    <h3 className="title-section">Update Failed</h3>
                    <div className="description-section">Version 2 of atmospherejs.com was unable to start. The update deployed by Dominic <RelativeDate date={new Date()}/> has failed. <a className="link primary">View logs<span className="icon-arrow-right"></span></a></div>
                  </div>
                  <div className="cta-section">
                    <a className="btn tertiary">Dismiss</a>
                  </div>
                </div>
              </div>

              <div className="subheader">
                <div className="subheader-group">
                  <div className="subheader-item show-desktop">
                    <a className="link inverse" href="google.com"><span className="icon-arrow-left"></span> Percolate Studio</a>
                  </div>
                </div>

                <a className="title-subheader" href="/">
                  <Status status="running" className="small"/>
                  <span className="truncate">atmospherejs.com</span>
                </a>

                <div className="subheader-group right">
                  <div className="subheader-item show-desktop">
                    <a className="btn inverse small round"><span className="icon-check"></span>&nbsp;Watching</a>
                  </div>

                  <div className="subheader-item">
                    <a className="btn inverse small round circle"><span className="icon-bell"></span></a>
                  </div>
                </div>
              </div>
            */ }
          </div>
        </div>
      </ChromaticLayout>
    );
  }
});

Chromatic.add(StylesPage, {name: 'styles', isPage: true});
