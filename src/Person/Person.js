import React, { Component } from 'react';

const Person2 = () => {
    return <p> I am a person!!! </p>
}

class Person extends Component {
    // constructor (props) {
    //     super (props);
    // }

    render() {
        return (
            <div>
                Person !!!
            </div>

        );
    }
}

export {Person2};
export default  Person;
