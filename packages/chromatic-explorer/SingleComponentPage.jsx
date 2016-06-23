/* global SingleComponentPage:true */
/* global React ReactDOM classnames ReactMeteorData FlowRouter SingleComponentPageSidebar
SingleComponentPageHeader StyleguideNotFound ColorGrid ChromaticLayout */
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

SingleComponentPage = React.createClass({
  propTypes: {
    entryName: React.PropTypes.string
  },
  getInitialState() {
    return ({
      specName: 'all',
      viewport: 'tablet',
      color: 'lightest',
      iframeLoaded: false
    });
  },
  componentWillMount() {
    $('body').addClass('styleguide-dark');
  },
  onSpecChange(name, value, values) {
    this.setState({specName: values.specName});
    this._iframe.Package['kadira:flow-router'].FlowRouter.setParams(values);
  },
  onViewportClick(size) {
    this.setState({viewport: size});
  },
  onBackgroundChange(color) {
    const $iframeSpecContainer = this._iframe.$('.spec-container');
    const lastColor = this.state.color;
    $iframeSpecContainer.removeClass(lastColor);
    $iframeSpecContainer.addClass(color);
    this.setState({color});
  },
  onIframeLoad() {
    this.setState({iframeLoaded: true});
    const $iframeSpecContainer = this._iframe.$('.spec-container');
    $iframeSpecContainer.addClass(this.state.color);
  },
  getIframeRef(iframe) {
    const iframeContent = iframe && (iframe.contentWindow || iframe.contentDocument);
    this._iframe = iframeContent;
  },
  render() {
    const {entryName} = this.props;
    const {specName, viewport, color, iframeLoaded} = this.state;
    const isBrowser = viewport === 'browser';
    const entry = Chromatic.entry(entryName);

    if (!entry) {
      return <StyleguideNotFound/>;
    }

    const url = `${Meteor.absoluteUrl()}styleguide/_component/${entryName}/all`;
    const iframeContainer = (
      <div className={classnames('iframe-container', viewport)}>
        <iframe onLoad={this.onIframeLoad} ref={this.getIframeRef} src={url}/>
      </div>
    );
    const header = (
      <SingleComponentPageHeader entryName={entryName} specName={specName}
      viewport={viewport} background={color} onSpecChange={this.onSpecChange}
      onViewportClick={this.onViewportClick} onBackgroundChange={this.onBackgroundChange}/>
    );
    const sidebar = (
      <SingleComponentPageSidebar entryName={entryName} specName={specName}
        onSpecChange={this.onSpecChange}/>
    );
    const className = classnames('styleguide-content', {'full-width': isBrowser, 'iframe-loaded': iframeLoaded});

    return (
      <ChromaticLayout header={header} sidebar={sidebar} showSidebar={!isBrowser}>
        <div className={className}>
          {iframeContainer}
          <div className="loading-grid">
            <ColorGrid/>
          </div>
        </div>
      </ChromaticLayout>
    );
  }
});
