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

  nameChangedHandler= (event) => {
    this.setState( {
      persons: [
        { name: 'max', age: 48},
        { name: event.target.value, age:19},
        { name: 'Harold', age: 25}
      ],
      otherState: 'some value',
      showPersons: false
      })
  }

  togglePersonsHandler = () => {
     const show = this.state.showPersons;
     this.setState({showPersons: !show});
  }
  
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '10px'
    };

    return (
      <div className="App">
      <h1>Hi I am a react App! </h1>
      <button style = {style} 
              onClick= {this.togglePersonsHandler}>Switch Name</button>
      { this.state.showPersons ? 
        <div>
          <Person
            name ={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name ={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click = {this.switchNameHandler.bind(this,'Misty')} 
            changed = {this.nameChangedHandler} >My Hobbies: Scuba</Person>
          <Person 
            name ={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div> : <div> Empty </div>}
      </div>
    );
  }
}

export default App;
