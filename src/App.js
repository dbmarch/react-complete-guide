import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'max', age: 28},
      { name: 'sally', age:29},
      { name: 'harry', age: 45}
    ],
    otherState: 'some other value'
  }

  switchNameHandler=(newName) => {
    this.setState( {
    persons: [
      { name: newName, age: 48},
      { name: 'Sal', age:19},
      { name: 'Harold', age: 25}
    ]
    })
  }
  
  render() {
    return (
      <div className="App">
      <h1>Hi I am a react App! </h1>
      <button onClick={this.switchNameHandler.bind(this,'Toby')}>Switch Name</button>
      <Person
         name ={this.state.persons[0].name} 
         age={this.state.persons[0].age} />
      <Person 
        name ={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click = {this.switchNameHandler.bind(this,'Misty')} >My Hobbies: Scuba</Person>
      <Person 
        name ={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
