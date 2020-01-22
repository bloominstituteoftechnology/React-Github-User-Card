import React from "react";
import "./App.css";
import axios from "axios";
import User from "./User";
import Followers from "./Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      User: {},
      Followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ZIng178")
      .then(res => {
        console.log("userdata", res.data);
        this.setState({
          ...this.state,
          User: res.data
        });
      })
      .catch(err => console.log("ErrorUSers", err));

    axios
      .get("https://api.github.com/users/ZIng178/followers")
      .then(response => {
        console.log(response);
        this.setState({
          Followers: response.data
        });
      })
      .catch(err => console.log("errorfollowers", err));
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <h1> MY GitHubUserCard</h1>
        <User user={this.state.User} />

        {this.state.Followers.map(follower => (
          <Followers
            name={follower.login}
            image={follower.avatar_url}
            html_url={follower.html_url}
          />
        ))}
      </div>
    );
  }
}

export default App;
