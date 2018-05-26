import React, { Component } from 'react';
import classes from './Person.css';
import {withClass} from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor (props) {
        super(props);
        console.log ('[Person.js] constructor');
    }

    componentWillMount() {
        console.log('[Person.js] ComponentWillMount');
      }
    
      componentDidMount() {
        console.log ('[Person.js] ComponentDidMount');
      }
  
    render(){
        console.log ('[Person.js] render');
       
        return (
  //          <Aux className={classes.Person}>
              <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and I am { this.props.age} years old ! </p>
                <p> {this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name:  PropTypes.string, 
    age:   PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
//export default Person;
