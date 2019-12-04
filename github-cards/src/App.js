import React from "react";
import axios from "axios";
import GitSearch from "./components/GitSearch";
import GitCard from "./components/GitCard";

import "./App.css";

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    userSearch: "Lfritze"
  };

  componentDidMount() {
    this.getApiData(this.state.userSearch);
  }

  componentDidUpdate(prevState) {
    if (prevState.userSearch !== this.state.userSearch) {
      this.getApiData(this.state.userSearch);
    }
  }

  getApiData = username => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        this.setState({ user: response.data });

        axios
          .get(response.data.followers_url)
          .then(followerData => {
            this.setState({ followers: followerData.data });
          })
          .catch(followerError => {
            console.log(followerError);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateUserSearch = newUsername => {
    this.setState({ userSearch: newUsername });
  };

  render() {
    return (
      <div className="app">
        <GitSearch updateUserSearch={this.updateUserSearch} />
        <GitCard
          avatarUrl={this.state.user.avatar_url}
          name={this.state.user.name}
          username={this.state.user.login}
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

// res.data.followers_url
// https://api.github.com/users/Lfritze/followers
