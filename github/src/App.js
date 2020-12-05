import React, { Component } from 'react';
import axios from "axios";
import UserSearch from './components/UserSearch';
import UserCard from './components/UserCard';
import "./App.css";

const user =
  {
    login: "amotor-AM",
    profile: "https://api.github.com/users/amotor-AM",
    avatar: "https://avatars0.githubusercontent.com/u/66324211?v=4",
    name: "Alex Motor",
    followers: 0,
    following: 0,
    bio: "I am a full stack web development student who is passionate about coding.",
    location: "Las Vegas",
  };

class App extends Component {
constructor() {
  super();
  this.state = user;
}

searchForUser = (e, User) => {
  e.preventDefault();
  console.log(User);
  axios.get(`https://api.github.com/users/${User}`)
  .then((response) => {
    const newUser = {
      login: response.login,
      profile: response.url,
      avatar: response.avatar_url,
      name: response.name,
      followers: response.followers,
      following: response.following,
      bio: response.bio,
      location: response.location,
    }
    this.setState({
      ...this.state,
      user: [newUser]
    })
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

