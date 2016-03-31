/* global ColorGrid:true React */

const {Chromatic} = Package['mdg:chromatic-api'] || {};

ColorGrid = React.createClass({
  propTypes: {
    size: React.PropTypes.number.isRequired
  },
  getDefaultProps() {
    return { size: 8 };
  },
  render() {
    const {size} = this.props;
    return (
      <div className="clr-grid">
        <table>
          <tbody>
            {_.times(size, (r) => <tr key={`cg-row-${r}`}>{
              _.times(size, (c) => <td key={`cg-col-${c}`}/>)
            }</tr>)}
          </tbody>
        </table>
      </div>);
  }
});

if (Chromatic) {
  Chromatic.add(ColorGrid, {
    specs: [
      new Chromatic.Spec('default', {
        props() {
          return {
            size: 8
          };
        }
      })
    ]
  });
}
