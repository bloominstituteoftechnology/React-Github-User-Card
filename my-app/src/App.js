import React, { Component } from "react";
import axios from "axios";
import User from "../src/User.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      userFollowers: []
    };
  }

  componentDidMount() {
    this.getUsers();
    this.getFollowers();
  }

  getUsers = () => {
    axios
      .get("https://api.github.com/user/strimnal32246")
      .then(res => this.setState({ userData: res.data }))
      .catch(err => {
        console.log("error", err);
      });
  };

  getFollowers = () => {
    axios
      .get("https://api.github.com/users/strimnal32246/followers")
      .then(res => this.setState({ userFollowers: res.data }))
      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {console.log(this.state.userFollowers)}
        </header>
        <User
          userData={this.state.userData}
          userFollowers={this.state.userFollowers}
        />
      </div>
    );
  }
}
