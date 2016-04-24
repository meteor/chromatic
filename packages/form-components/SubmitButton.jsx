/* global SubmitButton:true */
/* global React LoadingButton */
import React from 'react';

SubmitButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    submittingTitle: React.PropTypes.string,
    className: React.PropTypes.string
  },
  contextTypes: {
    submitting: React.PropTypes.bool
  },
  render() {
    const {title, submittingTitle, className} = this.props;
    const submitting = !!this.context.submitting;
    return (
      <LoadingButton type="submit" className={className} active={submitting} disabled={submitting}
       restText={title} activeText={submittingTitle || 'One Moment...'}/>
    );
  }
});
