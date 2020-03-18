import React from 'react';
import User from "./components/User"
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>My Followers</h1>
        <User />
        
      </div>
    );
  }
}

