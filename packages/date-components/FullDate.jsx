/* global FullDate:true */
/* global React moment */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

FullDate = React.createClass({
  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
    machine: React.PropTypes.bool
  },
  render() {
    let formattedDate;
    const momentDate = moment(this.props.date);
    if (this.props.machine) {
      formattedDate = momentDate.format('YYYY-MM-DD HH:mm:ssZ');
    } else {
      formattedDate = momentDate.format('dddd, MMMM D, YYYY [at] h:mma');
    }

    return <span>{formattedDate}</span>;
  }
});

if (Chromatic) {
  Chromatic.add(FullDate, {
    specs: [
      new Chromatic.Spec('human', {
        props: {
          date: moment().subtract(3, 'hours').subtract(10, 'minutes').toDate(),
          machine: false
        }
      }),
      new Chromatic.Spec('machine', {
        props: {
          date: moment().subtract(3, 'hours').subtract(10, 'minutes').toDate(),
          machine: true
        }
      })
    ]
  });
}
