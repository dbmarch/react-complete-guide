import React, { Component } from 'react';
import './App.css';
import Person, { Person2} from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi I am a react App! </h1>
      <Person />
      <Person2 />
      </div>
    );
  }
}

export default App;
