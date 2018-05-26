import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);


class App extends PureComponent {

  constructor (props){
      super(props);
      console.log('[App.js] Constructor', props );
      this.state = {
        persons: [
          { name: 'max', age: 28},
          { name: 'sally', age:29},
          { name: 'harry', age: 45}
        ],
        otherState: 'some other value',
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
      };
  }

  componentWillMount() {
    console.log('[App.js] ComponentWillMount');
  }

  componentDidMount() {
    console.log ('[App.js] ComponentDidMount');
  }
  
// shouldComponentUpdate(nextProps, nextState){
//     console.log ('[App.js] shouldComponentUpdate', nextProps);
//     return nextState.persons!==this.state.persons || nextState.showPersons!=this.state.showPersons;
// }       

componentWillUpdate (nextProps, nextState) {
    console.log ('[App.js] componentWillUpdate', nextProps);
}

componentDidUpdate() {
    console.log ('[App.js] componentDidUpdate');
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
    
    // 2 ways to set state without mutating it 
    //  const count = this.state.toggleClicked + 1;
    //  this.setState({showPersons: !show, toggleClicked: count});

     this.setState((prevState, props) => {
        return {showPersons: !show,
                toggleClicked: prevState.toggleClicked+1}
        });
     }
  
  loginHandler = () =>{

    console.log ('loginHandler', this.state.authenticated);

    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] Render');
    let persons = null;
    
    if (this.state.showPersons) {
       persons = (
          <Persons 
                persons = {this.state.persons }
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}
//                isAuthenticated = {this.state.authenticated} 
      /> );
    }

    //let classes = ['red', 'bold'].join(' ');
    return (
      <WithClass classes={classes.App}>
      <button onClick={
          ()=>this.setState({showPersons: true})} >
          ShowPersons</button>
      <Cockpit 
          appTitle={this.props.title}
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          login = {this.loginHandler}
          clicked = {this.togglePersonsHandler}/>
          <AuthContext.Provider value = {this.state.authenticated}>  
          {persons}    
          </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
