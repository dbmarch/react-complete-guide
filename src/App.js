import React, { Component } from 'react';
import './App.css';
import Person, { Person2 } from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'max', age: 28},
      {name: 'sally', age:29},
      { name: 'harry', age: 45}
    ],
    otherState: 'some other value'
  }
  switchNameHandler=() => {
    console.log ( "button pressed")
    this.setState(...this.state, {name: "harry"})
  }
  
  render() {
    return (
      <div className="App">
      <h1>Hi I am a react App! </h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name ="Max"/>
      <Person2 name = "harry" age = '33'/>
      <Person  name = "Sally" />
      <Person2 name  = "sam" age = '44'> My dog is small </Person2>
      </div>
    );
  }
}

export default App;
