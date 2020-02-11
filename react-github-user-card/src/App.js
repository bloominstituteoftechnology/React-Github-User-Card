import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import Followers from "./components/FollowersCard";

import UserCard from "./UserCard";
// import UserCard from "./components/UserCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      login: "",
      avatar: "",
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/jasonrhemann").then(response => {
      this.setState({
        name: response.data.name,
        location: response.data.location,
        login: response.data.login,
        avatar: response.data.avatar_url
      });
       console.log(response.data);
    });

    axios
      .get("https://api.github.com/users/jasonrhemann/followers")
      .then(response => {
        this.setState({
          followers: response.data
        });
         console.log("followers", response.data);
      });
  }

  render() {
    return (
      <div>
        <h1>GitHub Card</h1>
        {/* <p>{this.state.name}</p>
        <p>{this.state.login}</p>
        <img src={this.state.avatar} alt="" /> */}
        <UserCard  
          name = {this.state.name}
          login = {this.state.login}
          location = {this.state.location}
          avatar = {this.state.avatar}
        />
        <h1>Followers</h1>
        {this.state.followers.map(follower => {
          return (
            <UserCard
              name = {follower.name}
              login = {follower.login}
              location = {follower.location}
              avatar = {follower.avatar_url}
            />

          );
        })}
      </div>
    );
  }
}
export default App;
