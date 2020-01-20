import React from "react";
import "./App.css";
import axios from "axios";
import User from "./User";
import Followers from "./Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      User:{},
      Followers: []
    };
  }

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  getUser = () => {
    axios
      .get("https://api.github.com/users/ZIng178")
      .then(res =>
        this.setState({
          UserName: res.data
        })
      )
      .catch(err => console.log(err));
  };

  getFollowers = () => {
    axios
      .get("https://api.github.com/users/ZIng178/followers")
      .then(res =>
        this.setState({
          Followers: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1> MY GitHubUserCard</h1>
        
          <User 
          name={this.state.User.name}
            image={this.state.User.avatar_url}
            html_url={this.state.User.html_url}

          />
      
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
