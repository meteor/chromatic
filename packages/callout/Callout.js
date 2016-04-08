/* global Callout:true */
/* global React classnames */

import { Chromatic } from 'meteor/mdg:chromatic';

export const Callout = React.createClass({

  propTypes: {
    className: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
  },

  render() {
    const {className, children} = this.props,
      calloutClassName = classnames('callout', className);

    return (
      <div className={calloutClassName}>
        {children}
      </div>
    );
  }
});

if (Chromatic) {
  Chromatic.add(Callout, {
    specs: [
      new Chromatic.Spec('primary', {props: {
        className: 'primary',
        children: 'Generic primay callout'
      }}),
      new Chromatic.Spec('secondary', {props: {
        className: 'secondary',
        children: 'Generic secondary callout'
      }}),
      new Chromatic.Spec('alert', {props: {
        className: 'alert',
        children: 'Generic alert callout'
      }})
    ]
  });
}
