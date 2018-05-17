import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //   <p>Hi I am a react App! </p>
    //   </div>
    // );
    return React.createElement('div', {className: 'App'}, React.createElement ('h1', null, 'Do you see my Text?'));
  }
}

export default App;
