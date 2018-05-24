import React, { Component } from 'react';
import classes from './App.css';
import Person from  '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

class App extends Component {

  state = {
    persons: [
      { name: 'max', age: 28},
      { name: 'sally', age:29},
      { name: 'harry', age: 45}
    ],
    otherState: 'some other value'
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
        <div>
          <Persons 
                persons = {this.state.persons }
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler} />
        </div>
       );
       btnClass = classes.Red;
    }

    //let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
      <h1>Hi I am a react App! </h1>
      <p className = {assignedClasses.join(' ')} > This is working! </p>
      <button className={btnClass}
              onClick= {this.togglePersonsHandler}>Switch Name</button> 
      {persons}      
      </div>
    );
  }
}

export default App;
