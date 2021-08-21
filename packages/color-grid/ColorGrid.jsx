/* global ColorGrid:true React */

import React from 'react';
const {Chromatic} = Package['mdg:chromatic-api'] || {};

// propTypes: {
//   size: React.PropTypes.number.isRequired
// }

ColorGrid = ({ size = 8 }) => (
  <div className="clr-grid">
    <table>
      <tbody>
        {Array.from({length: size}, (_,r) => <tr key={`cg-row-${r}`}>{
          Array.from({length: 10}, (_,c) => <td key={`cg-col-${c}`}/>)
        }</tr>)}
      </tbody>
    </table>
  </div>);

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
