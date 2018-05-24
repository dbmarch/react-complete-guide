import React, { Component } from 'react';
import classes from './App.css';
import Person from  '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { name: 'max', age: 28},
      { name: 'sally', age:29},
      { name: 'harry', age: 45}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();  // make a shallow copy
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons})
  }

   nameChangedHandler= (event, id) => {

     const personsIndex = id;

     const person =  {
       ...this.state.persons[personsIndex]
     };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    this.setState( { persons } );
  }

  togglePersonsHandler = () => {
     const show = this.state.showPersons;
     this.setState({showPersons: !show});
  }
  
  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
       persons = (
          <Persons 
                persons = {this.state.persons }
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler} />
       );
    }

    //let classes = ['red', 'bold'].join(' ');
    return (
      <div className={classes.App}>
      <Cockpit 
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          clicked = {this.togglePersonsHandler}/>
          {persons}      
      </div>
    );
  }
}

export default App;
