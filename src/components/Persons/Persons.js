import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor (props) {
        super(props);
        console.log ('[Persons.js] constructor');
    }

    componentWillMount() {
        console.log('[Persons.js] componentWillMount');
      }
    
      componentDidMount() {
        console.log ('[Persons.js] componentDidMount');
      }

    componentWillReceiveProps () {
        console.log ('[Persons.js] componentWillReceiveProps');
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log ('[Persons.js] shouldComponentUpdate');
        return false;
    }       

    render() {
        console.log ('[Persons.js] render');
        
        return this.props.persons.map((person,index) =>{
            return <Person 
            click={()=>this.props.clicked(index)}    
            name = {person.name}
            age  = {person.age} 
            key={index}
            changed = {(event)=>this.props.changed(event, index)}
            />
        }
    );
    } 
}
export default Persons;

