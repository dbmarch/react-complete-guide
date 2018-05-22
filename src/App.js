import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium from 'radium';

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '10px',
      ':hover':   {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPersons) {
       persons = (
        <div>
          {this.state.persons.map((person,index) =>{
              return <Person 
              click={()=>this.deletePersonHandler(index)}    
              name = {person.name}
              age  = {person.age} 
              key  = {index}
              changed = {(event)=>this.nameChangedHandler(event, index)}/>
          })}
        </div>
       );
       style.backgroundColor="red";
       style[':hover'] = { 
         backgroundColor: 'salmon',
         color: 'black'
       };
    }

    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (
      <div className="App">
      <h1>Hi I am a react App! </h1>
      <p className = {classes.join(' ')} > This is working! </p>
      <button style = {style} 
              onClick= {this.togglePersonsHandler}>Switch Name</button>
      {persons}      
      </div>
    );
  }
}

export default Radium(App);
