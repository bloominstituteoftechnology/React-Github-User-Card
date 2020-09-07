import React, { Component } from "react";

//import axios from "axios";

import UserCard from "./components/UserCard";
import "./App.css";

class App extends Component {
  //initailize state
  state = {
    userInfo: {},
    followers: [],
  };

  componentDidMount() {
    // after initial render
    //api call here https://api.github.com/users/jamakura
    // setting state here
    console.log(" SV: app.js: App, CDM: CDM running");

    fetch("https://api.github.com/users/jamakura")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ userInfo: json });
        console.log("SV: App.js: CMD: success!", this.state.userInfo);
      })
      .catch((err) => console.log(err));

    fetch("https://api.github.com/users/jamakura/followers")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ followers: json });
        console.log("SV: App.js: CMD: success!", this.state.followers);
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("sv: App.js: App, render");
    return (
      <div>
        <h1>Github User Profiles!</h1>
        <UserCard userInfo={this.state.userInfo} />
        {this.state.followers.map((follower) => {
          return <UserCard key={follower.id} userInfo={follower} />;
        })}
      </div>
    );
  }
}

export default App;
