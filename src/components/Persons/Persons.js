import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor (props) {
        super(props);
        console.log ('[Persons.js] constructor');
        this.lastPersonRef = React.createRef();
    }

    // use is discouraged
    componentWillMount() {
        console.log('[Persons.js] componentWillMount');
      }
    
      componentDidMount() {
        console.log ('[Persons.js] componentDidMount');
//        this.lastPersonRef.current.focus();
      }

    // use is discouraged
    componentWillReceiveProps () {
        console.log ('[Persons.js] componentWillReceiveProps');
    }
    
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log ('[Persons.js] shouldComponentUpdate', nextProps);
    //     return nextProps.persons !== this.props.persons;
    // }       
    // use is discouraged    
    componentWillUpdate (nextProps, nextState) {
        console.log ('[Persons.js] componentWillUpdate', nextProps);
    }

    componentDidUpdate() {
        console.log ('[Persons.log] componentDidUpdate');
    }

    
    render() {
        console.log ('[Persons.js] render');
        
        return this.props.persons.map((person,index) =>{

            return <Person 
            click={()=>this.props.clicked(index)}    
            name = {person.name}
            age  = {person.age} 
            position = {index}
            ref = {this.lastPersonRef}
            authenticated = {this.props.isAuthenticated}
            key={index}
            changed = {(event)=>this.props.changed(event, index)}
            />
        }
    );
    } 
}
export default Persons;

