import React, { Component } from 'react';

import FoodList from './components/FoodList';
import FoodInput from './components/FoodInput';

import uuid from 'uuid';

class App extends Component {

  state = {
    items: [{ id: 1, name: "กะเพราไก่" }, { id: 2, name: "กะเพราเนื้อ" }],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit data");
  }

  render() {
    return (
      <div className="container">
        <h2 align="center">Food Queue Application</h2>
        <div className="row">
          <FoodInput handleSubmit={ this.handleSubmit}/>
        </div>
        <FoodList />
      </div>
    );
  }
}

export default App;
