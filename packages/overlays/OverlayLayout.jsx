import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { parse, stringify } from 'query-string';
import { _ } from 'lodash';

const ESCAPE_KEY_CODE = 27;

class OverlayLayout extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    className: '',
    children: null,
  };

  constructor(props, context) {
    super(props, context);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.keyCode === ESCAPE_KEY_CODE) {
      this.close();
    }
  }

  close() {
    const { location, history } = this.props;
    const params = parse(location.search);
    const stringified = stringify(_.omit(params, 'overlay'));
    history.push({ search: stringified });
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={`overlay ${className}`}>
        <div className="overlay-close" onClick={this.close}>
          <span className="icon-cross" />
        </div>
        <div className="overlay-content">
          {children}
        </div>
      </div>
    );
  }
}

const OverLayoutWithRouter = withRouter(OverlayLayout);
export { OverLayoutWithRouter as OverlayLayout };

const { Chromatic } = Package['mdg:chromatic-api'] || {};
if (Chromatic) {
  Chromatic.add(OverlayLayout, {
    specs: [
      new Chromatic.Spec('default', {
        props: {
          children: <div className="overlay-panel">Content within .overlay-panel</div>,
        },
      }),
    ],
  });
}
