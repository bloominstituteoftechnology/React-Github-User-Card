import React, { Component } from 'react';
import axios from "axios";
import UserSearch from './components/UserSearch';
import UserCard from './components/UserCard';
import "./App.css";

const user =
  {
    login: "",
    html_url: "",
    avatar_url: "",
    name: "",
    followers: 0,
    following: 0,
    bio: "",
    location: "",
  };

class App extends Component {
constructor() {
  super();
  this.state = user;
}

searchForUser = (e, User) => {
  e.preventDefault();
  axios.get(`https://api.github.com/users/${User}`)
  .then((res) => {
    this.setState(res.data)
    console.log("New State", this.state)
  })
  .catch((err) => {
    console.log(err);
    return (
      "No User Found"
    )
  })
}


  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1>Github User Card</h1>
          <UserSearch searchForUser={this.searchForUser}/>
        </div>
        <div className="app__userCard">
        <UserCard user={this.state}/>
        </div>
      </div>
    )
  }
}

export default App

