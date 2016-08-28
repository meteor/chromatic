/* global RelativeDate:true */
/* global moment DateVar WithTooltip ReactMeteorData */

import classnames from 'classnames';
import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

// global dependencies that tick over every..
const dateVars = {
  second: new DateVar(1000),
  minute: new DateVar(1000 * 60),
  hour: new DateVar(1000 * 60 * 60)
};

RelativeDate = React.createClass({
  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
    className: React.PropTypes.string,
    showAsDuration: React.PropTypes.bool
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    // Use the reactive date consts to force a re-render every...
    const momentDate = moment(this.props.date);
    if (momentDate.isAfter(moment().subtract(1, 'minute'))) {
      return {currentDate: dateVars.second.get(), noTooltip: true};
    }
    if (momentDate.isAfter(moment().subtract(1, 'hour'))) {
      return {currentDate: dateVars.minute.get()};
    }
    if (momentDate.isAfter(moment().subtract(1, 'day'))) {
      return {currentDate: dateVars.hour.get()};
    }
    // we aren't going to re-render
    return {currentDate: new Date()};
  },
  render() {
    const {className, date, showAsDuration, ...other} = this.props;

    let formattedDate;
    const momentDate = moment(date);
    const currentMoment = moment(this.data.currentDate);
    const tooltipDate = momentDate.toString();

    if (showAsDuration) {
      const duration = moment.duration(currentMoment.diff(momentDate));
      formattedDate = duration.days() + 'd ' + moment(duration._data).format('H[h] m[m]');
    } else {
      formattedDate = momentDate.calendar(currentMoment, {
        sameDay: () => {
          // This function needs to return a format string, so use []-escaping.
          return `[${ momentDate.from(currentMoment) }]`;
        },
        lastDay: '[Yesterday at] h:mma',
        lastWeek: 'dddd [at] h:mma',
        sameElse: () => {
          if (momentDate.isBefore(currentMoment.subtract(1, 'year'))) {
            return 'MMMM D, YYYY';
          }
          return 'MMMM Do [at] h:mma';
        }
      });
    }

    const span = (
      <span {...other} className={classnames('timestamp', className)}>
            {formattedDate}
      </span>
    );

    // Every time we re-render, the tooltip goes away. Most of the time the text
    // changes too, but for the "a few seconds ago" one, the text doesn't
    // change. It feels really flaky for the tooltip to flicker in and out, so
    // it's better to just not display it for timestamps within a minute.
    if (this.data.noTooltip) {
      return span;
    }

    return <WithTooltip tooltip={<div>{tooltipDate}</div>}>{span}</WithTooltip>;
  }
});

if (Chromatic) {
  Chromatic.add(RelativeDate, {
    specs: [
      new Chromatic.Spec('within a minute', {
        props: {date: moment().subtract(3, 'seconds').toDate()}
      }),
      new Chromatic.Spec('within an hour', {
        props: {date: moment().subtract(32, 'minutes').toDate()}
      }),
      new Chromatic.Spec('within the last day, probably', {
        props: {date: moment().subtract(3, 'hours').subtract(10, 'minutes').toDate()}
      }),
      new Chromatic.Spec('last night', {
        props: {date: moment().startOf('day').subtract(2, 'hours').toDate()}
      }),
      new Chromatic.Spec('night before last', {
        props: {date: moment().startOf('day').subtract(26, 'hours').toDate()}
      }),
      new Chromatic.Spec('within the last 4 days', {
        props: {date: moment().subtract(4, 'days').toDate()}
      }),
      new Chromatic.Spec('within the last year', {
        props: {date: moment().subtract(32, 'days').toDate()}
      }),
      new Chromatic.Spec('longer', {
        props: {date: moment().subtract(2, 'years').subtract(3, 'days').toDate()}
      }),
      new Chromatic.Spec('uptime', {
        props: {
          date: moment().toDate(),
          showAsDuration: true
        }
      })
    ]
  });
}
