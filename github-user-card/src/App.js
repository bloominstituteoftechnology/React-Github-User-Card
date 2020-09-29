import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    name: "Christopher-Barrett",
  };

  componentDidMount() {
    this.fetchUsers(this.state.name);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.fetchUsers(this.state.name);
  };

  fetchUsers = (name) => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      })
      .catch((err) => console.log("error:", err));
  };

  render() {
    return (
      <div>
        <h1>GitHub User Info!</h1>
        <form onSubmit={this.handleSearch}>
          <input
            onChange={this.handleNameChange}
            type="text"
            value={this.state.name}
          />
          <button>Search Users</button>
        </form>
        <div className="userContainer">
          <h3>{this.state.users.name}</h3>
          <p>{this.state.users.followers}</p>
        </div>
      </div>
    );
  }
}

export default App;
