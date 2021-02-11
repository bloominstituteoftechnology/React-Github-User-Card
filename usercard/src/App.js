/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      following: [],
    };
  }

  componentDidMount() {
    console.log("CDM running");
    axios
      .get("https://api.github.com/users/carsonsmyers")
      .then((response) => {
        console.log("response", response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log(error))
      .then(
        axios
          .get(`https://api.github.com/users/carsonsmyers/following`)
          .then((response) => {
            this.setState({ following: response.data });
            console.log("following response", response);
          })
          .catch((error) => console.log(error))
      );
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.users !== this.state.users) {
      console.log("users have changed");
    }
    if (prevState.following !== this.state.following) {
      console.log("state updated, userType", this.state.userType);
    }
  }

  handleChange = (e) => {
    console.log("handleChnage called", this.state.userType);
    this.setState({
      ...this.state,
      userType: e.target.value,
    });
  };
  render() {

    console.log("following", this.state.following);
    return (
      <div className="App">
        <h1>GitHub Usercard</h1>
        <input
          type="text"
          value={this.state.userType}
          onChange={this.handleChange}
        />
        <button onClick={this.fetchUsers}>Fetch Users</button>
        <div className="users">
          <h1>{this.state.users.login}</h1>
          <img width="200" className="user" src={this.state.users.avatar_url} />
          {this.state.following.map((following) => {
            return (
              <div>
                <h2>{following.login}</h2>
                <img width="200" src={following.avatar_url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;