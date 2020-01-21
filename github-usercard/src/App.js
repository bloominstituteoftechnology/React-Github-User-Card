import React from 'react';
import UserCard from "./components/UserCard"
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h1>My Followers</h1>
        <UserCard />
      </div>
    );
  }
}

