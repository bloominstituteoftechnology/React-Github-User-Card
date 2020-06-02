import React, { Component } from 'react';
import UserItem from './components/UserItem'
import './App.css';

class App extends Component {
    render () {
      
      return (
      <div className="App">
      <h1> Github User built with React</h1>
      <UserItem />
      </div>
    );
  }
};

export default App;
