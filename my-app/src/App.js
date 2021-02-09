import "./App.css";
import React from "react";
import axios from "axios";
import Card from "./components/Card";
///end of imports///



  fetchUser = () => {
    axios
      .get("https://api.github.com/users/danielwright1207")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchFollowers = () => {
    axios
      .get("https://api.github.com/users/CPower1248/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ///Fixing infinite console log////
  //it worked!!!///

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  ////
  handleChange = (e) => {
    this.setState({ userName: e.target.value });
  };
  fetchNewUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchNewUser(`${this.state.userName}`);
    this.setState({ userName: "" });
  };
  fetchNewFollowers = (username) => {
    axios
      .get(`https://api.github.com/users/${username}/followers`)
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>-React Github User Card-</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Username:
            <input
              type="text"
              name="username"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </label>
        </form>
        <Card user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
