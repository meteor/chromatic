/* global RelativeDate:true */
/* global React moment DateVar classnames ReactMeteorData */

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
      return {currentDate: dateVars.second.get()};
    }
    if (momentDate.isAfter(moment().subtract(1, 'hour'))) {
      return {currentDate: dateVars.minute.get()};
    }
    if (momentDate.isAfter(moment().subtract(1, 'day'))) {
      return {currentDate: dateVars.hour.get()};
    }
    // we aren't going to re-render
    return new Date();
  },
  render() {
    const {className, date, showAsDuration, ...other} = this.props;

    let formattedDate;
    const momentDate = moment(date);
    const currentDate = this.data.currentDate;

    if (showAsDuration) {
      const duration = moment.duration(moment(currentDate).diff(momentDate));
      formattedDate = duration.days() + 'd ' + moment(duration._data).format('H[h] m[m]');
    } else if (momentDate.isBefore(moment(currentDate).subtract(1, 'day'))) {
      if (momentDate.isBefore(moment(currentDate).subtract(2, 'days'))) {
        if (momentDate.isBefore(moment(currentDate).subtract(1, 'year'))) {
          formattedDate = momentDate.format('MMMM D, YYYY');
        } else {
          formattedDate = momentDate.format('MMMM Do [at] h:mma');
        }
      } else {
        formattedDate = momentDate.format('[Yesterday at] h:mma');
      }
    } else {
      formattedDate = momentDate.from(currentDate);
    }

    return <span {...other} className={classnames('timestamp', className)}>{formattedDate}</span>;
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
      new Chromatic.Spec('within the last day', {
        props: {date: moment().subtract(3, 'hours').subtract(10, 'minutes').toDate()}
      }),
      new Chromatic.Spec('within the last 2 days', {
        props: {date: moment().subtract(32, 'hours').toDate()}
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
