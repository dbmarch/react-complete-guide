import React, { Component } from 'react';

const Person2 = (props ) => {
    return (
        <div>
            <p> My name is {props.name} and I am { props.age } years old! </p>
            <p> {props.children} </p>
        </div>
    )
}

class Person extends Component {
    state = { name: "me" };
    
    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export {Person2};
export default  Person;
