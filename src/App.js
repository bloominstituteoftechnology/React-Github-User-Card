import React from "react";
import axios from "axios";
import "./App.css";
import { Button } from "reactstrap";
import UserList from "./components/UserList.js";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    userSearch: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate() {
    axios
      .get(`https://api.github.com/users/bkoehler2016`)
      .then(res => {
        console.log(res.data);
        this.setState({ user: res.data });
        console.log(this.state);
      })
      .catch(error => console.log("Server Error"));
  }

  findUser = event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(res => {
        console.log(res);
        this.setState({ followers: res.data });
        console.log(this.state);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            value={this.state.userSearch}
            onChange={this.handleChange}
            name="userSearch"
          />
          <Button color="primary" onClick={this.findUser}>
            Find User
          </Button>
        </div>
        <div className="user-card">
          <img src={this.state.user.avatar_url} />
          <h2>{this.state.user.login}</h2>
          <a href={this.state.user.html_url}> Profile </a>
        </div>
        <UserList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
