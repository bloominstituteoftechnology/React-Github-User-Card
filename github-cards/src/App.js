import React from "react";
import axios from "axios";
import GitCard from "./components/GitCard";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    this.fetchApiData();
  }

  fetchApiData = username => {
    axios
      .get(`https://api.github.com/users/Lfritze`)
      .then(res => {
        this.setState({ user: res.data });

        axios
          .get(res.data.followers_url)
          .then(followerInfo => {
            this.setState({ followers: followerInfo.data });
          })
          .catch(followError => {
            console.log("error in follower fetch in App.js", followError);
          });
      })
      .catch(err => {
        console.log("error in request in App.js", err);
      });
  };

  render() {
    return (
      <div className="App">
        <GitCard
          avatarUrl={this.state.user.avatar_url}
          name={this.state.user.name}
          username={this.state.user.login}
          profileUrl={this.state.user.html_url}
          location={this.state.user.location}
          profileUrl={this.state.user.html_url}
          repos={this.state.user.public_repos}
          followers={this.state.user.followers}
          following={this.state.user.following}
          bio={this.state.user.bio}
          followerList={this.state.followers}
        />
      </div>
    );
  }
}

export default App;

// NOTES **********

// https://api.github.com/users/Lfritze - this in browser displays the data
