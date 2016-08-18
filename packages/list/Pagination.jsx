/* global Pagination:true */
/* global */

import React from 'react';

Pagination = React.createClass({
  propTypes: {
    pageSize: React.PropTypes.number.isRequired,
    currentPage: React.PropTypes.number,
    totalCount: React.PropTypes.number.isRequired,
    currentPageCount: React.PropTypes.number.isRequired,
    onPageNext: React.PropTypes.func.isRequired,
    onPagePrevious: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      currentPage: this.props.currentPage || 0
    };
  },
  componentWillReceiveProps(newProps) {
    if (_.has(newProps, 'currentPage') && newProps.currentPage !== this.props.currentPage) {
      this.setState({currentPage: newProps.currentPage});
    }
  },
  hasNextPage(page) {
    const {pageSize, totalCount} = this.props;
    return (page + 1) * pageSize < totalCount;
  },
  hasPrevPage(page) {
    const {pageSize} = this.props;
    return (page - 1) * pageSize >= 0;
  },
  onNextClick() {
    const {pageSize} = this.props;
    let {currentPage} = this.state;

    if (this.hasNextPage(currentPage)) {
      currentPage++;
      this.setState({
        currentPage: currentPage
      });
      this.props.onPageNext(currentPage * pageSize, pageSize);
    }
  },
  onPrevClick() {
    const {pageSize} = this.props;
    let {currentPage} = this.state;

    if (this.hasPrevPage(currentPage)) {
      currentPage--;
      this.setState({
        currentPage: currentPage
      });
      this.props.onPagePrevious(currentPage * pageSize, pageSize);
    }
  },
  render() {
    const {pageSize, totalCount, currentPageCount} = this.props;
    const {currentPage} = this.state;
    const pageStart = currentPageCount ? currentPage * pageSize + 1 : 0;
    const pageEnd = currentPage * pageSize + Math.min(pageSize, currentPageCount);

    return (
      <div className="pagination">
        <a className="btn paginated" onClick={this.onPrevClick}
          disabled={!this.hasPrevPage(currentPage)} >
          <span className="icon-arrow-left"></span>
        </a>
        <a className="btn paginated" onClick={this.onNextClick}
          disabled={!this.hasNextPage(currentPage)}>
          <span className="icon-arrow-right"></span>
        </a>
        <span className="count">
          <span>{pageStart}-{pageEnd} </span>
          <span className="preposition">of</span>
          <span> {totalCount}</span>
        </span>
      </div>
    );
  }
});
