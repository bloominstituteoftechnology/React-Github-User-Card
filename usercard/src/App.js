import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: [],
    };
  }

  componentDidMount() {
    console.log("CDM running");
    axios
      .get("https://api.github.com/users/tonyso88")
      .then((response) => {
        console.log("response", response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log(error))
      .then(
        axios
          .get(`https://api.github.com/users/TonySo88/followers`)
          .then((response) => {
            this.setState({ followers: response.data });
            console.log("folower response", response);
          })
          .catch((error) => console.log(error))
      );
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.users !== this.state.users) {
      console.log("users have changed");
    }
    if (prevState.followers !== this.state.followers) {
      console.log("state updated, userType", this.state.userType);
    }
  }

  handleChange = (e) => {
    console.log("handleChnage called", this.state.userType);
    this.setState({
      // ... === take the whole previous state
      ...this.state,
      userType: e.target.value,
    });
  };
  render() {
    // console.log(users);
    console.log("Followers", this.state.followers);
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
          {this.state.followers.map((followers) => {
            return (
              <div>
                <h2>{followers.login}</h2>
                <img width="200" src={followers.avatar_url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
