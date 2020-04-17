import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import FollowerCard from "./components/followerCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: [],
      avatar: [],
      repos: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/brianaabreu")
      .then((res) => res.json())
      .then((userData) => {
        console.log("User Data", userData);
        this.setState({ name: userData.name });
        this.setState({ avatar: userData.avatar_url });
        this.setState({ repos: userData.public_repos });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="profile">
        <img className="profile-pic" src={this.state.avatar} />
        <div className="profile-bottom">
          <p>Name: {this.state.name}</p>
          <p> Repo: {this.state.repos}</p>
        </div>
        <FollowerCard />
      </div>
    );
  }
}

export default App;
