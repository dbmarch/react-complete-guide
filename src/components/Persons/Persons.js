import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor (props) {
        super(props);
        console.log ('[Persons.js] constructor');
    }

    componentWillMount() {
        console.log('[Persons.js] ComponentWillMount');
      }
    
      componentDidMount() {
        console.log ('[Persons.js] ComponentDidMount');
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

