import React, { Component } from 'react';

const person = ( props ) => {
    return (
        <div>
            <p> I'm {props.name} and I am { props.age} years old ! </p>
            <p> {props.children}</p>
        </div>
    )
}
class Person extends Component {
    state = { name: "me", age:29 };
    
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age} years old.
            </div>
        );
    }
}

export default  person;
