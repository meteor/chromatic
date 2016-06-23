/* global SortableTableExample:true */
/* global React Sortable faker */

import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

SortableTableExample = React.createClass({
  componentWillMount() {
    this.sortableData = new Mongo.Collection(null);
    _.times(5, () => {
      this.sortableData.insert({
        name: faker.name.findName(),
        email: faker.internet.email()
      });
    });
  },
  getInitialState() {
    return {
      specifier: {name: 1}
    };
  },
  onSort(specifier) {
    this.setState({specifier});
  },
  render() {
    const {specifier} = this.state;
    const items = this.sortableData.find({}, {sort: specifier}).fetch();

    return (
      <table className="table-view">
        <thead>
          <tr>
            <Sortable field="name" specifier={specifier} onSort={this.onSort}>Name</Sortable>
            <Sortable field="email" specifier={specifier} onSort={this.onSort}>Email</Sortable>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return <tr key={item._id}><td>{item.name}</td><td>{item.email}</td></tr>;
          })}
        </tbody>
      </table>
    );
  }
});

if (Chromatic) {
  Chromatic.add(SortableTableExample);
}
