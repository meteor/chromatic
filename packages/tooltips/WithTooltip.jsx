/* global WithTooltip:true */

import React from 'react';
import ReactDOM from 'react-dom';

// TODO: we should probably use modernizr / capabilities
const IS_TOUCH = !!('ontouchstart' in window);

const DEFAULTS = {
  position: {
    my: 'top center',
    at: 'bottom center',
    adjust: {method: 'shift flip'},
    viewport: true
  },
  style: {
    classes: 'tooltip',
    tip: {
      corner: true,
      width: 12,
      height: 7
    }
  }
};

const IN_EFFECT = function() {
  $(this).velocity('transition.slideDownIn', { duration: 150 });
};
const OUT_EFFECT = function() {
  $(this).velocity('transition.slideUpOut', { duration: 150 });
};

const MODES = {
  // XXX: refactor this to not repeat the effect definition for each MODE
  hover: _.extend({}, DEFAULTS, {
    show: {
      solo: true,
      effect: IN_EFFECT
    },
    hide: {
      delay: 300,
      fixed: true,
      effect: OUT_EFFECT
    }
  }),
  click: _.extend({}, DEFAULTS, {
    show: {
      event: 'click',
      solo: true,
      effect: IN_EFFECT
    },
    hide: {
      event: 'click unfocus',
      delay: 0,
      fixed: true,
      effect: OUT_EFFECT
    }
  }),
  manual: _.extend({}, DEFAULTS, {
    show: {
      solo: true,
      effect: IN_EFFECT
    },
    hide: {
      delay: 0,
      fixed: true,
      effect: OUT_EFFECT
    }
  }),
};

WithTooltip = React.createClass({
  propTypes: {
    tag: React.PropTypes.func,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    tooltip: React.PropTypes.node.isRequired,
    mode: React.PropTypes.oneOf(['hover', 'click', 'manual']),
    show: React.PropTypes.bool,
    options: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      tag: React.DOM.span,
      mode: IS_TOUCH ? 'click' : 'hover',
      options: {}
    };
  },
  attach() {
    const options = _.extend(MODES[this.props.mode], this.props.options, {
      content: { text: this.drawTooltip()}
    });

    const container = ReactDOM.findDOMNode(this.refs.tooltipContainer);
    this.qtip = $(container).qtip(options).qtip('api');
  },
  handleShowToggle() {
    this.qtip.toggle(this.props.show);
    this.qtip.disable(!this.props.show);
  },
  detach() {
    ReactDOM.unmountComponentAtNode(this.lastTooltipDiv);
    this.qtip.destroy();
  },
  componentDidMount() {
    this.attach();
    if (this.props.mode === 'manual') {
      this.handleShowToggle();
    }
  },
  shouldComponentUpdate(nextProps) {
    if (this.props.mode === 'manual' && this.props.show && nextProps.show) {
      // this is a (hacky?) work around for flickering issues caused by
      // detach / attach below
      return false;
    }
    return true;
  },
  componentDidUpdate() {
    this.detach();
    this.attach();
    if (this.props.mode === 'manual') {
      this.handleShowToggle();
    }
  },
  componentWillUnmount() {
    this.detach();
  },
  drawTooltip() {
    this.lastTooltipDiv = $('<div class="tooltip-inner-content">').get(0);
    ReactDOM.render(this.props.tooltip, this.lastTooltipDiv);
    return this.lastTooltipDiv;
  },
  render() {
    let {className} = this.props;
    className = `tooltip-trigger ${(className || '')}`;

    const tag = this.props.tag || React.DOM.span;
    return tag({ref: 'tooltipContainer', className: className}, this.props.children);
  }
});
