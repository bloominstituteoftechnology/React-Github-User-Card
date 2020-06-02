import React, { Component } from 'react';
import axios from 'axios';
import Users from './components/Users';

import './App.css';

class App extends Component {
  //start lifecycle method
  //call to api using axios

  componentDidMount() {
    axios.get('https://api.github.com/users/charisearter');
  }
    render () {
      
      return (
      <div className="App">
      <h1> Github User built with React</h1>
      
     <div className='container'>
     <h2> Possibly Search bar here ...?</h2>
       <Users />
     </div>
      
      </div>
    );
  }
};

export default App;
