/* global SubmitButton:true */

import React from 'react';
import {LoadingButton} from 'meteor/mdg:buttons';

SubmitButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    submittingTitle: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string
  },
  contextTypes: {
    submitting: React.PropTypes.bool
  },
  render() {
    const {title, submittingTitle, disabled, className} = this.props;
    const submitting = !!this.context.submitting;
    return (
      <LoadingButton type="submit" className={className} active={submitting}
       disabled={disabled || submitting}
       restText={title} activeText={submittingTitle || 'One Moment...'}/>
    );
  }
});
