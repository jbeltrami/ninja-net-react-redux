import React, { Component } from 'react';
import Ninjas from './Ninjas.js'
import AddNinja from './AddNinja.js'

class App extends Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'Black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'Green', id: 2},
      {name: 'Crystal', age: 25, belt: 'Pink', id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja />
      </div>
    );
  }
}

export default App;
